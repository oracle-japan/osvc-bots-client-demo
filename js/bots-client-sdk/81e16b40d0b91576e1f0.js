webpackJsonp([62],{905:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a,n){var r;if(n=n||{},r="string"==typeof o[e]?o[e]:1===a?o[e].one:o[e].other.replace("{{count}}",a),n.addSuffix){var s="";return t.indexOf(e)>-1&&(s=" bir süre"),n.comparison>0?r+s+" içinde":r+s+" önce"}return r};var o={lessThanXSeconds:{one:"bir saniyeden az",other:"{{count}} saniyeden az"},xSeconds:{one:"1 saniye",other:"{{count}} saniye"},halfAMinute:"yarım dakika",lessThanXMinutes:{one:"bir dakikadan az",other:"{{count}} dakikadan az"},xMinutes:{one:"1 dakika",other:"{{count}} dakika"},aboutXHours:{one:"yaklaşık 1 saat",other:"yaklaşık {{count}} saat"},xHours:{one:"1 saat",other:"{{count}} saat"},xDays:{one:"1 gün",other:"{{count}} gün"},aboutXMonths:{one:"yaklaşık 1 ay",other:"yaklaşık {{count}} ay"},xMonths:{one:"1 ay",other:"{{count}} ay"},aboutXYears:{one:"yaklaşık 1 yıl",other:"yaklaşık {{count}} yıl"},xYears:{one:"1 yıl",other:"{{count}} yıl"},overXYears:{one:"1 yıldan fazla",other:"{{count}} yıldan fazla"},almostXYears:{one:"neredeyse 1 yıl",other:"neredeyse {{count}} yıl"}},t=["lessThanXSeconds","lessThanXMinutes","overXYears"];e.exports=a.default}});