KISSY.add("app/util/pagination/index", function(S, Vframe, VOM) {
    var Pagination = {};

    S.mix(Pagination, {
        resetPage: function(pagination, params) {
            var pageparam = {};

            if(pagination){
                if(pagination.get('index') != params.pageNo) {
                    pageparam['index'] = params.pageNo;
                }
                if(pagination.get('size') != params.pageSize) {
                    pageparam['size'] = params.pageSize;
                }
                if(pagination.get('count') != params.pageCount) {
                    pageparam['count'] = params.pageCount;
                }
                if(!S.isEmptyObject(pageparam)) {
                    pagination.setConfig(pageparam);
                }
            }
        }
    });

    return Pagination;

}, {
    requires: [
        'magix/vframe',
        'magix/vom'
    ]
});