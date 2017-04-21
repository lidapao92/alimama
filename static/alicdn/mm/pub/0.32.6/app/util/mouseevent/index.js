KISSY.add('app/util/mouseevent/index', function(S) {
  return {
    triggerMouseEvent: function (node, eventType) {
      if (document.createEvent) {
        var evObj = document.createEvent('MouseEvents')
        evObj.initEvent(eventType, true, true)
        node.dispatchEvent(evObj)
      } else if (document.createEventObject) {
        var evObj = document.createEventObject()
        node.fireEvent( 'on' + eventType, evObj )
      }
    }
  }
})