KISSY.add('components/dropdown_search/index', function (S, Dropdown, Node) {
    var $ = Node.all;
    function DropdownSearch() {
        Dropdown.superclass.constructor.apply(this, arguments);
    }
    S.extend(DropdownSearch, Dropdown, {
        bindUI: function () {
        }
    });
    DropdownSearch.EVENTS = {
        '.search-input': {
            keyup: function (e) {
                if (!S.inArray(e.keyCode, [
                        9,
                        27,
                        13,
                        38,
                        40
                    ])) {
                    var me = this;
                    var el = me.get('el');
                    var ul = el.one('ul');
                    var items = el.all('.dropdown-item');
                    var input = $(e.currentTarget);
                    var searchReg = RegExp((me.get('isStartFit') == false ? '' : '^') + input.val().toLowerCase());
                    var matchItmes = [];
                    items.each(function (node) {
                        var itemValue = node.one('span').text();
                        if (searchReg.test(itemValue.toLowerCase())) {
                            node.show();
                        } else {
                            node.hide();
                        }
                    });
                }
            }
        }
    };
    return DropdownSearch;
}, {
    requires: [
        'components/dropdown/index',
        'node',
        'brix/core/brick'
    ]
});