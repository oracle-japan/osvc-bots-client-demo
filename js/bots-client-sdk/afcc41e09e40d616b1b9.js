webpackJsonp([199],{767:function(e,r,t){"use strict";function d(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var n=d(t(208)),a=d(t(207)),s={narrow:["dg","dl","dt","dc","dj","dv","ds"],short:["dge","dls","dts","dcs","djs","dvs","dss"],long:["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"]},u={short:["gen","feb","mar","abr","mai","jun","jul","ago","set","oct","nov","des"],long:["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octobre","novembre","desembre"]},o={uppercase:["AM","PM"],lowercase:["am","pm"],long:["a.m.","p.m."]},l={ordinalNumber:function(e){var r=Number(e);switch(r){case 1:return"1r";case 2:return"2n";case 3:return"3r";case 4:return"4t";default:return r+"è"}},weekday:(0,n.default)(s,"long"),weekdays:(0,a.default)(s,"long"),month:(0,n.default)(u,"long"),months:(0,a.default)(u,"long"),timeOfDay:(0,n.default)(o,"long",function(e){return e/12>=1?1:0}),timesOfDay:(0,a.default)(o,"long")};r.default=l,e.exports=r.default}});