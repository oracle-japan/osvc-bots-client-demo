webpackJsonp([69],{898:function(e,a,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var t=r(n(208)),o=r(n(207)),u={narrow:["sö","må","ti","on","to","fr","lö"],short:["sön","mån","tis","ons","tor","fre","lör"],long:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"]},l={short:["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],long:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"]},s={long:["f.m.","e.m."]},d={ordinalNumber:function(e){var a=Number(e),n=a%100;if(n>20||n<10)switch(n%10){case 1:case 2:return a+":a"}return a+":e"},weekday:(0,t.default)(u,"long"),weekdays:(0,o.default)(u,"long"),month:(0,t.default)(l,"long"),months:(0,o.default)(l,"long"),timeOfDay:(0,t.default)(s,"long",function(e){return e/12>=1?1:0}),timesOfDay:(0,o.default)(s,"long")};a.default=d,e.exports=a.default}});