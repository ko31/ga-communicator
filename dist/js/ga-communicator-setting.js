/*! For license information please see ga-communicator-setting.js.LICENSE.txt */
!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";var a=jQuery,o=wp.i18n.sprintf,r=wp.apiFetch,i=function(e){var t=a(e).attr("data-key");a(e).addClass("loading"),a(e).addClass("loading"),a(e).find('option[class!="ga-setting-choices-default"]').remove(),r({path:c(t)}).then((function(t){var n=a(e).find(".ga-setting-choices"),r=a(e).find('input[type="hidden"]').val();t.map((function(e){var t=a(o('<option value="%s">%s(%s)</option>',e.id,e.name,e.id));e.id===r&&t.attr("selected",!0),n.append(t)}))})).catch((function(e){!function(e,t){console.log(e,t);var n=a(o('<div class="notice notice-error">%s<span class="notice-dismiss"></span></div>',t));a('div[data-key="'.concat(e,'"]')).append(n),setTimeout((function(){n.remove()}),3e3)}(t,e.message)})).finally((function(){a(e).removeClass("loading")})),console.log(u(t)),console.log(t)},c=function(e){var t="ga/v1";switch(e){case"ga-account":t+="/accounts";break;case"ga-property":t+=o("/properties/%s",u("ga-account")||" ");break;case"ga-profile":u("ga-account"),u("ga-property");t+=o("/profiles/%s/%s",u("ga-account")||" ",u("ga-property")||" ")}return t},u=function(e){return function(e){var t=a('code[data-predefined="'.concat(e,'"]'));return t.length?t.text():""}(e)||a('input[name="'.concat(e,'"]')).val()};a((function(){a(".ga-setting-row").each((function(e,t){i(t),a(t).find("select").change((function(){!function(e){var t=a(e).attr("data-key");a(e).find('input[type="hidden"]').val(a(e).find("select").val());var n=0,o=["ga-profile","ga-property"];switch(t){case"ga-account":n=2;break;case"ga-property":n=1}for(var r=0;r<n;r++)i(a('div[data-key="'.concat(o[r],'"]')))}(t)}))}))}))}]);
//# sourceMappingURL=ga-communicator-setting.js.map