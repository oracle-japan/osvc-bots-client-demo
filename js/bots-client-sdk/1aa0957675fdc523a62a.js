webpackJsonp([94],{872:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(208)),i=o(n(207)),a={narrow:["nd","pn","wt","śr","cz","pt","sb"],short:["niedz.","pon.","wt.","śr.","czw.","piąt.","sob."],long:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"]},l={short:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],long:["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"]},u={long:["w nocy","rano","po południu","wieczorem"]},d={ordinalNumber:function(e){var t=Number(e);return String(t)},weekday:(0,r.default)(a,"long"),weekdays:(0,i.default)(a,"long"),month:(0,r.default)(l,"long"),months:(0,i.default)(l,"long"),timeOfDay:(0,r.default)(u,"long",function(e){return e>=17?3:e>=12?2:e>=4?1:0}),timesOfDay:(0,i.default)(u,"long")};t.default=d,e.exports=t.default}});