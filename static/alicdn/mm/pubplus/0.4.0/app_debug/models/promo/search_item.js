define('app/models/promo/search_item', [
    'underscore',
    'app/models/base',
    'magix'
], function (_, Base, Magix) {

    function getValue(obj) {
        return obj && obj.value || null
    }

    function getDesc(obj) {
        return obj && obj.desc || null
    }

    function injectDesc(target, key, obj, _desc) {
        //两种情况,如果指定了desc，就判断值
        if (_desc && obj[key]) {
            target.descs.push(_desc)
            target.keys.push(key)
            return
        }

        var desc = getDesc(obj[key])
        if (desc) {
            target.descs.push(desc)
            target.keys.push(key)
        }
    }


    return Base.extend({
        _wrapSort: function (data) {
            var condition = data.condition
            var queryType = condition.queryType
            var sortType = condition.sortType
            //如果一个都没选，默认选中默认排序
            //1. sortType没值, queryType == 0
            //2. sortType没值, queryType也没值
            if (!sortType && !queryType) {
                queryType = 0
            }
            //如果同时存在，以后面的sortType为主，把queryType清空
            if ((queryType || queryType == 0) && sortType) {
                queryType = ''
            }

            return {
                sortType: sortType,
                queryType: queryType,
                b2c: data._shopTag.b2c,
                freeShipment: getValue(condition.freeShipment),
                loc: getValue(condition.loc),
                startTkRate: getValue(condition.startTkRate),
                endTkRate: getValue(condition.endTkRate),
                startPrice: getValue(condition.startPrice),
                endPrice: getValue(condition.endPrice),
                hPayRate30: getValue(condition.hPayRate30),
                startBiz30day: getValue(condition.startBiz30day),
                paginator: data.paginator,
                dxjh: data._shopTag.dxjh,
                yxjh: data._shopTag.yxjh,
                dpyhq: data._shopTag.dpyhq,
                _isTmall: data['_isTmall']
            }
        },
        _listInject: function (array, value) {
            _.each(array, function (item) {
                if (item.value == value) {
                    item.selected = true
                }
            })
        },
        _wrapSpecial: function (data, params) {
            var itemRequire, shopRequire, imgRequire

            var condition = data.condition

            itemRequire = {
                startQuantity: getValue(condition.startQuantity), //库存
                startPayUv30: getValue(condition.startPayUv30), //月付款
                startRlRate: getValue(condition.startRlRate), //让利
                hGoodRate: getValue(condition.hGoodRate),  //好评率高于行业均值
                jhs: getValue(condition.jhs), //聚划算商品
                typeTag: params.typeTag //行业类目
            }

            //所有卖家等级，顺序注意，因为是横过来排的
            var _rates = [{name: '不限', value: ''},
                {name: '五金冠', value: 20}, {name: '五皇冠', value: 15}, {name: '五钻', value: 10}, {name: '五心', value: 5},
                {name: '四金冠', value: 19}, {name: '四皇冠', value: 14}, {name: '四钻', value: 9}, {name: '四心', value: 4},
                {name: '三金冠', value: 18}, {name: '三皇冠', value: 13}, {name: '三钻', value: 8}, {name: '三心', value: 3},
                {name: '二金冠', value: 17}, {name: '二皇冠', value: 12}, {name: '二钻', value: 7}, {name: '二心', value: 2},
                {name: '一金冠', value: 16}, {name: '一皇冠', value: 11}, {name: '一钻', value: 6}, {name: '一心', value: 1}]

            var startRatesum = getValue(condition.startRatesum) || ''

            this._listInject(_rates, startRatesum)


            var startDsr = getValue(condition.startDsr)
            //所有dsr评分
            var _dsrs = [{name: '不限', value: ''}, {name: '4.5', value: '4.5'}, {
                name: '4.6',
                value: '4.6'
            }, {name: '4.7', value: '4.7'}, {name: '4.8', value: '4.8'}, {name: '4.9', value: '4.9'}, {
                name: '5.0',
                value: '5.0'
            }]

            this._listInject(_dsrs, startDsr)


            shopRequire = {
                startRatesum: getValue(condition.startRatesum),
                _rates: _rates,
                startDsr: getValue(condition.startDsr),
                _dsrs: _dsrs,
                startSpay30: getValue(condition.startSpay30),
                xfzbz: data._shopTag.xfzbz,
                qtth: data._auctionTag.qtth,
                lRfdRate: getValue(condition.lRfdRate),
                hSellerGoodrat: getValue(condition.hSellerGoodrat),
                hSpayRate30: getValue(condition.hSpayRate30),
                jpmj: data._shopTag.jpmj,
                dpyhq: data._shopTag.dpyhq
            }

            var npxType = getValue(condition.npxType)
            var npxs = [{name: '不限', value: ''}, {name: '无', value: '1'}, {name: '轻微', value: '2'}]
            this._listInject(npxs, npxType)


            var picQuality = getValue(condition.picQuality)
            var pics = [{name: '不限', value: ''}, {name: '中', value: '1'}, {name: '高', value: '2'}]
            this._listInject(pics, picQuality)


            imgRequire = {
                npxType: npxType,
                picQuality: picQuality,
                _pics: pics,
                _npxs: npxs
            }

            return {
                itemRequire: itemRequire,
                shopRequire: shopRequire,
                imgRequire: imgRequire,
                _isTmall: data['_isTmall']
            }

        },
        _generateCategorySpRequire: function (specialRequire, data) {

            var condition = data.condition

            //先看商品选择
            var itemDesc = {
                keys: [],
                descs: []
            }

            injectDesc(itemDesc, 'startQuantity', condition)
            injectDesc(itemDesc, 'startPayUv30', condition)
            injectDesc(itemDesc, 'startRlRate', condition)
            injectDesc(itemDesc, 'hGoodRate', condition)
            injectDesc(itemDesc, 'jhs', condition)

            if (itemDesc.keys.length > 0) {
                specialRequire.push({
                    key: itemDesc.keys.join(','),
                    text: '商品要求：' + itemDesc.descs.join('、')
                })
            }

            //再看店铺要求
            var shopDesc = {
                keys: [],
                descs: []
            }
            injectDesc(shopDesc, 'startRatesum', condition)
            injectDesc(shopDesc, 'startDsr', condition)
            injectDesc(shopDesc, 'startSpay30', condition)
            injectDesc(shopDesc, 'xfzbz', data._shopTag, '消费者保障')
            injectDesc(shopDesc, 'qtth', data._auctionTag, '7天无理由退换货')
            injectDesc(shopDesc, 'lRfdRate', condition)
            injectDesc(shopDesc, 'hSellerGoodrat', condition)
            injectDesc(shopDesc, 'hSpayRate30', condition)
            injectDesc(shopDesc, 'jpmj', data._shopTag, '金牌卖家')
            injectDesc(shopDesc, 'dpyhq', data._shopTag, '有店铺优惠券')

            if (shopDesc.keys.length > 0) {
                specialRequire.push({
                    key: shopDesc.keys.join(','),
                    text: '店铺要求：' + shopDesc.descs.join('、')
                })
            }

            //再看图片要求
            var imgDesc = {
                keys: [],
                descs: []
            }

            injectDesc(imgDesc, 'npxType', condition)
            injectDesc(imgDesc, 'picQuality', condition)

            if (imgDesc.keys.length > 0) {
                specialRequire.push({
                    key: imgDesc.keys.join(','),
                    text: '图片要求：' + imgDesc.descs.join('、')
                })
            }

        },
        _wrapCategory: function (data) {
            var selectedNavigator = data.condition.selectedNavigator
            var pidvid = {}
            var catIds = []
            var selected = [] //普通筛选项的文案结果
            var specialRequire = [] //特殊的高级设置的文案结果

            var generateSelected = function (type, item) {

                if (item.subIds) {
                    selected.push({
                        type: type,
                        key: item.id,
                        text: item.name + '：' + _.map(item.subIds, function (sub) {
                            return sub.name
                        }).join(',')
                    })
                } else {
                    selected.push({
                        type: type,
                        key: item.id,
                        text: item.name
                    })
                }
            }


            _.each(selectedNavigator, function (nav) {
                if (nav.type == 'property') {
                    pidvid[nav.id] = _.map(nav.subIds, function (sub) {
                            return sub.id
                        }) || []

                    generateSelected('property', nav)
                }

                if (nav.type == 'category') {
                    catIds.push(nav.id)
                    generateSelected('category', nav)
                }
            })

            //注入特殊的高级选项
            this._generateCategorySpRequire(specialRequire, data)


            var navigators = data.navigator && _.isArray(data.navigator) ? data.navigator : []

            var _firstNavigator = navigators[0] || null
            var _otherNavigators = navigators.slice(1) || []

            return {
                _firstNavigator: _firstNavigator,
                _otherNavigators: _otherNavigators,
                selected: selected,
                specialRequire: specialRequire,
                catIds: catIds,
                pidvid: pidvid,
                totalCount: data.paginator._totalCount,
                _isTmall: data['_isTmall']
            }
        },
        _normalize: function (tags) {
            var result = {}
            tags && _.each(tags, function (tag) {
                result[tag.value] = true
            })

            return result
        },
        _generateOpts: function (oriParams) {
            //需要clone,不然会修改hash
            var params = _.clone(oriParams)

            if (params.q) {
                params.q = params.q.substr(0, 150)
            }

            //对于一些属性需要特殊处理
            if (params.qtth) {
                params['auctionTag'] = 'qtth'
            } else {
                params['auctionTag'] = ''
            }

            //如果没有设置pagesize,默认给40个
            if (!params.perPageSize) {
                params['perPageSize'] = 40
            }
            //如果页码超过100，强制设置为100以内
            if (params.toPage && parseInt(params.toPage) > 100) {
                params.toPage = 100
            }

            var shopTag = []
            if (params.b2c == '1') shopTag.push('b2c')
            if (params.xfzbz == '1') shopTag.push('xfzbz')
            if (params.jpmj == '1') shopTag.push('jpmj')
            if (params.dxjh == '1') shopTag.push('dxjh')
            if (params.yxjh != -1) shopTag.push('yxjh')
            if (params.dpyhq == '1') shopTag.push('dpyhq')


            // 后端要求不传无用此参数
            delete params.yxjh

            params['shopTag'] = shopTag.join(',')

            return params
        },
        getList: function (params, cb) {

            //字段解释看这里
            // http://tbdocs.alibaba-inc.com/pages/viewpage.action?pageId=273057681
            var me = this
            var opts = me._generateOpts(params)

            me.fetchAll([{
                name: 'search_item_lists',
                urlParams: opts,
                skipTip: true
            }], function (err, MesModel) {

                var info = MesModel.get('info')
                //接口错误提前处理
                if (!info.ok) {
                    cb(info, [])
                    return
                }

                var data = MesModel.get('data')

                //一些数据订正

                //没有总数的时候，设置为0
                if (!data.paginator) {
                    data.paginator = {
                        items: 0
                    }
                }

                //商品的总数,不能用items，因为那个需要给分页用，可能做截断
                data.paginator._totalCount = data.paginator.items

                //如果总页数超过100，需要改成100
                if (data.paginator && data.paginator.items / data.paginator.itemsPerPage > 100) {
                    data.paginator.items = data.paginator.itemsPerPage * 100
                }

                //数据订正结束

                var userType = getValue(data.condition.userType)

                if (userType == 1) {
                    data['_isTmall'] = true
                } else {
                    data['_isTmall'] = false
                }

                // 行业类目中文名
                data['typeTagName'] = data.condition.typeTagName

                //店铺的shoptag是个奇葩的字段，我们需要先拆分出来
                data['_shopTag'] = me._normalize(data.condition.shopTag)

                //商品的auctionTag也是个奇葩的字段，我们需要先拆分出来
                data['_auctionTag'] = me._normalize(data.condition.auctionTag)

                //先处理最顶部的category的数据
                data['_category'] = me._wrapCategory(data)

                //处理中间部分的高级筛选
                data['_special'] = me._wrapSpecial(data, opts)

                //处理表头的排序筛选
                data['_sort'] = me._wrapSort(data)

                //处理pagelist，注入一些基础数据
                data.pageList && _.each(data.pageList, function (item) {
                    item._title = item.title.replace(/<[^>]+>/g, '')
                    item.isSellNumHide = /^32001(?!\d)|\s+32001(?!\d) | ^14219(?!\d)|\s+14219(?!\d)/.exec(item.auctionTag)
                })

                //各种数据处理
                cb && cb(null, data)
            })
        }
    })
})