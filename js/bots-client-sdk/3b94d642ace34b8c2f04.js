webpackJsonp([11,68,69,70,71,72],{895:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n,t){t=t||{onlyNumeric:!1};var u,l=a[e];return u="string"==typeof l?l:0===n||n>1?t.onlyNumeric?l.plural.replace("{{count}}",n):l.plural.replace("{{count}}",n<13?r[n]:n):l.singular,t.addSuffix?t.comparison>0?"om "+u:u+" sedan":u};var a={lessThanXSeconds:{singular:"mindre än en sekund",plural:"mindre än {{count}} sekunder"},xSeconds:{singular:"en sekund",plural:"{{count}} sekunder"},halfAMinute:"en halv minut",lessThanXMinutes:{singular:"mindre än en minut",plural:"mindre än {{count}} minuter"},xMinutes:{singular:"en minut",plural:"{{count}} minuter"},aboutXHours:{singular:"ungefär en timme",plural:"ungefär {{count}} timmar"},xHours:{singular:"en timme",plural:"{{count}} timmar"},xDays:{singular:"en dag",plural:"{{count}} dagar"},aboutXMonths:{singular:"ungefär en månad",plural:"ungefär {{count}} månader"},xMonths:{singular:"en månad",plural:"{{count}} månader"},aboutXYears:{singular:"ungefär ett år",plural:"ungefär {{count}} år"},xYears:{singular:"ett år",plural:"{{count}} år"},overXYears:{singular:"över ett år",plural:"över {{count}} år"},almostXYears:{singular:"nästan ett år",plural:"nästan {{count}} år"}},r=["noll","en","två","tre","fyra","fem","sex","sju","åtta","nio","tio","elva","tolv"];e.exports=n.default},896:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=(0,function(e){return e&&e.__esModule?e:{default:e}}(t(206)).default)({LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm"});n.default=a,e.exports=n.default},897:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n,t,r){return a[e]};var a={lastWeek:"[förra] dddd[en kl.] LT",yesterday:"[igår kl.] LT",today:"[idag kl.] LT",tomorrow:"[imorgon kl.] LT",nextWeek:"dddd [kl.] LT",other:"L"};e.exports=n.default},898:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=a(t(208)),u=a(t(207)),l={narrow:["sö","må","ti","on","to","fr","lö"],short:["sön","mån","tis","ons","tor","fre","lör"],long:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"]},o={short:["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],long:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"]},i={long:["f.m.","e.m."]},s={ordinalNumber:function(e){var n=Number(e),t=n%100;if(t>20||t<10)switch(t%10){case 1:case 2:return n+":a"}return n+":e"},weekday:(0,r.default)(l,"long"),weekdays:(0,u.default)(l,"long"),month:(0,r.default)(o,"long"),months:(0,u.default)(o,"long"),timeOfDay:(0,r.default)(i,"long",function(e){return e/12>=1?1:0}),timesOfDay:(0,u.default)(i,"long")};n.default=s,e.exports=n.default},899:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=a(t(209)),u=a(t(211)),l=a(t(210)),o=a(t(212)),i={ordinalNumbers:(0,l.default)(/^(\d+)(a|e)?/i),ordinalNumber:o.default,weekdays:(0,r.default)({narrow:/^(sö|må|ti|on|to|fr|lö)/i,short:/^(sön|mån|tis|ons|tor|fre|lör)/i,long:/^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i},"long"),weekday:(0,u.default)({any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},"any"),months:(0,r.default)({short:/^(jan|feb|mar|apr|maj|jun|jul|aug|sep|okt|nov|dec)/i,long:/^(januari|februari|mars|april|maj|juni|july|august|september|oktober|november|december)/i},"long"),month:(0,u.default)({any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},"any"),timesOfDay:(0,r.default)({short:/^(f.m.|e.m.)/i},"long"),timeOfDay:(0,u.default)({any:[/^f/i,/^e/i]},"any")};n.default=i,e.exports=n.default},960:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=a(t(895)),u=a(t(896)),l=a(t(897)),o=a(t(898)),i=a(t(899)),s={formatDistance:r.default,formatLong:u.default,formatRelative:l.default,localize:o.default,match:i.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};n.default=s,e.exports=n.default}});