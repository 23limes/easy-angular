/* global malarkey:false, toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('firstApp')
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment);

})();
