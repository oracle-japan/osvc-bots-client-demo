webpackJsonp([15,93,94,95,96,97],{869:function(e,t,o){"use strict";function n(e,t,o){o=o||"regular";var n=function(e,t){if(1===t)return e.one;var o=t%100;if(o<=20&&o>10)return e.other;var n=o%10;return n>=2&&n<=4?e.twoFour:e.other}(e,t);return(n[o]||n).replace("{{count}}",t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,o){o=o||{};var a=u[e];return o.addSuffix?o.comparison>0?"za "+n(a,t,"future"):n(a,t,"past")+" temu":n(a,t)};var u={lessThanXSeconds:{one:{regular:"mniej niż sekunda",past:"mniej niż sekundę",future:"mniej niż sekundę"},twoFour:"mniej niż {{count}} sekundy",other:"mniej niż {{count}} sekund"},xSeconds:{one:{regular:"sekunda",past:"sekundę",future:"sekundę"},twoFour:"{{count}} sekundy",other:"{{count}} sekund"},halfAMinute:{one:"pół minuty",twoFour:"pół minuty",other:"pół minuty"},lessThanXMinutes:{one:{regular:"mniej niż minuta",past:"mniej niż minutę",future:"mniej niż minutę"},twoFour:"mniej niż {{count}} minuty",other:"mniej niż {{count}} minut"},xMinutes:{one:{regular:"minuta",past:"minutę",future:"minutę"},twoFour:"{{count}} minuty",other:"{{count}} minut"},aboutXHours:{one:{regular:"około godzina",past:"około godziny",future:"około godzinę"},twoFour:"około {{count}} godziny",other:"około {{count}} godzin"},xHours:{one:{regular:"godzina",past:"godzinę",future:"godzinę"},twoFour:"{{count}} godziny",other:"{{count}} godzin"},xDays:{one:{regular:"dzień",past:"dzień",future:"1 dzień"},twoFour:"{{count}} dni",other:"{{count}} dni"},aboutXMonths:{one:"około miesiąc",twoFour:"około {{count}} miesiące",other:"około {{count}} miesięcy"},xMonths:{one:"miesiąc",twoFour:"{{count}} miesiące",other:"{{count}} miesięcy"},aboutXYears:{one:"około rok",twoFour:"około {{count}} lata",other:"około {{count}} lat"},xYears:{one:"rok",twoFour:"{{count}} lata",other:"{{count}} lat"},overXYears:{one:"ponad rok",twoFour:"ponad {{count}} lata",other:"ponad {{count}} lat"},almostXYears:{one:"prawie rok",twoFour:"prawie {{count}} lata",other:"prawie {{count}} lat"}};e.exports=t.default},870:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(0,function(e){return e&&e.__esModule?e:{default:e}}(o(206)).default)({LT:"h:mm aa",LTS:"h:mm:ss aa",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY h:mm aa",LLLL:"dddd, MMMM D YYYY h:mm aa"});t.default=n,e.exports=t.default},871:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,o,u){return n[e]};var n={lastWeek:"[last] dddd [at] LT",yesterday:"[yesterday at] LT",today:"[today at] LT",tomorrow:"[tomorrow at] LT",nextWeek:"dddd [at] LT",other:"L"};e.exports=t.default},872:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(o(208)),a=n(o(207)),r={narrow:["nd","pn","wt","śr","cz","pt","sb"],short:["niedz.","pon.","wt.","śr.","czw.","piąt.","sob."],long:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"]},i={short:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],long:["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"]},d={long:["w nocy","rano","po południu","wieczorem"]},s={ordinalNumber:function(e){var t=Number(e);return String(t)},weekday:(0,u.default)(r,"long"),weekdays:(0,a.default)(r,"long"),month:(0,u.default)(i,"long"),months:(0,a.default)(i,"long"),timeOfDay:(0,u.default)(d,"long",function(e){return e>=17?3:e>=12?2:e>=4?1:0}),timesOfDay:(0,a.default)(d,"long")};t.default=s,e.exports=t.default},873:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(o(209)),a=n(o(211)),r=n(o(210)),i=n(o(212)),d={ordinalNumbers:(0,r.default)(/^(\d+)(th|st|nd|rd)?/i),ordinalNumber:i.default,weekdays:(0,u.default)({narrow:/^(su|mo|tu|we|th|fr|sa)/i,short:/^(sun|mon|tue|wed|thu|fri|sat)/i,long:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},"long"),weekday:(0,a.default)({any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},"any"),months:(0,u.default)({short:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,long:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},"long"),month:(0,a.default)({any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},"any"),timesOfDay:(0,u.default)({short:/^(am|pm)/i,long:/^([ap]\.?\s?m\.?)/i},"long"),timeOfDay:(0,a.default)({any:[/^a/i,/^p/i]},"any")};t.default=d,e.exports=t.default},955:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(o(869)),a=n(o(870)),r=n(o(871)),i=n(o(872)),d=n(o(873)),s={formatDistance:u.default,formatLong:a.default,formatRelative:r.default,localize:i.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=s,e.exports=t.default}});