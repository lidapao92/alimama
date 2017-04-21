define('app/util/channel/map', [
  'jquery',
  'underscore'
], function ($, _) {
  return {
    getChannelMap: function(level) {
      return [
        [
          {id: 'nzjh', label: '女装尖货', name: '女装'},
          {id: 'muying', label: '母婴热推', name: '母婴'}
        ],
        [
          // {id: 'dxjh', label: '定向计划', name: '定向'},
          {id: 'qqhd', label: '高佣活动', name: '高佣'}
        ],
        [
          {id: 'ifs', label: 'ifashion', name: 'ifashion'},
          {id: 'qbb', label: '亲宝贝', name: '亲宝贝'},
          {id: 'hch', label: '淘宝汇吃', name: '汇吃'},
          {id: 'cdj', label: '潮电街', name: '潮电街'},
          {id: 'jyj', label: '极有家', name: '极有家'},
          {id: 'kdc', label: '酷动城', name: '酷动城'},
          {id: 'diy', label: '淘宝DIY', name: 'DIY'}
        ],
        [
          {id: '9k9', label: '超值9块9', name: '9块9'},
          {id: '20k', label: '20元封顶', name: '20块'},
          {id: 'tehui', label: '特价好货', name: '特价'}
        ]
      ]
    }
  }
})