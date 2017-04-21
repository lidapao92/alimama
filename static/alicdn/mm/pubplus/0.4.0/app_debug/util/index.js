define('app/util/index', [
  'jquery',
  'underscore',
  'app/util/level/level',
  'app/util/tool/tool',
  'app/util/globaltip/globaltip',
  'app/util/tooltip/tooltip',
  'app/util/mask/mask',
  'app/util/anim/anim',
  'app/util/popover/popover',
  'app/util/spmlog/spmlog',
  'app/util/channel/map'
], function($, _, Level, Tool, Globaltip, Tooltip, Mask, Anim, Popover, Spmlog, ChannelMap) {

  var exports = {}

  _.extend(exports, Level)
  _.extend(exports, Tool)
  _.extend(exports, Globaltip)
  _.extend(exports, Tooltip)
  _.extend(exports, Mask)
  _.extend(exports, Anim)
  _.extend(exports, Popover)
  _.extend(exports, Spmlog)
  _.extend(exports, ChannelMap)

  return exports
})