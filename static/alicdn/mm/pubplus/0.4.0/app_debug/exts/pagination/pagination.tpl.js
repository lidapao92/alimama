/* global define */
define('app/exts/pagination/pagination.tpl', function() {
    return '\
     <div class="pagination-new">\
     <div class="pagination">\
\
     <a href="javascript: void(0);" class="btn-first btn btn-xlarge<%= hasPrev ? \' btn-white\' : \' btn-unreach\' %>" bx-click="moveTo(<%=prev%>)"><span class="pubfont">&#xe605;</span>上一页</a><!-- Previous -->\
\
     <% if( barStart == 2 ) { %>\
     <a href="javascript: void(0);" class="btn btn-xlarge btn-white" bx-click="moveTo(1)">1</a>\
     <% } %>\
\
     <% if( barStart >= 3 ) { %>\
     <a href="javascript: void(0);" class="btn btn-xlarge btn-white" bx-click="moveTo(1)">1</a>\
     <a href="javascript: void(0);" class="btn btn-xlarge btn-white" bx-click="moveTo(2)">2</a><%=i%>\
     <% if( barStart > 3 ) { %>\
     <span class="m n">...</span>\
     <% } %>\
     <% } %>\
\
     <% for( var i = barStart; i <= barEnd; i++ ) { %>\
     <% if( i === cursor ) { %>\
     <a href="javascript: void(0);" class="btn btn-xlarge btn-current"><%= i %></a>\
     <% } else { %>\
     <a href="javascript: void(0);" bx-click="moveTo(<%=i%>)" class="btn btn-xlarge btn-white"><%= i %></a>\
     <% } %>\
     <% } %>\
\
     <% if( barEnd < pages - 1) { %>\
     <span class="m n">...</span>\
     <% } %>\
\
     <% if( barEnd < pages) { %>\
     <a href="javascript: void(0);" bx-click="moveTo(<%=pages%>)" class="btn btn-xlarge btn-white"><%= pages %></a>\
     <% } %>\
\
     <a href="javascript: void(0);" class="btn-last btn btn-xlarge<%= hasNext ? \' btn-white\' : \' btn-unreach\' %>" bx-click="moveTo(<%=next%>)">下一页<span class="pubfont">&#xe607;</span></a><!-- Next -->\
     </div>\
     <div class="go">\
     <span class="n">到第</span><input class="input" type="text" value="<%=next%>"/><span class="n">页</span><button class="btn btn-small btn-white" bx-click="goToPage()">确定</button>\
     </div\
\
     </div>\
    '
})
