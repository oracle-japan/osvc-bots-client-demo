webpackJsonp([79],{888:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=o(n(208)),u=o(n(207)),a={narrow:["вс","пн","вт","ср","чт","пт","сб"],short:["вск","пнд","втр","срд","чтв","птн","суб"],long:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},r={short:["янв.","фев.","март","апр.","май","июнь","июль","авг.","сент.","окт.","нояб.","дек."],long:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]},f={long:["ночи","утра","дня","вечера"]},d={ordinalNumber:function(e,t){var n=String((t||{}).unit);return e+("dayOfMonth"===n?"-е":"isoWeek"===n||"week"===n?"-я":"-й")},weekday:(0,l.default)(a,"long"),weekdays:(0,u.default)(a,"long"),month:(0,l.default)(r,"long"),months:(0,u.default)(r,"long"),timeOfDay:(0,l.default)(f,"long",function(e){return e>=17?3:e>=12?2:e>=4?1:0}),timesOfDay:(0,u.default)(f,"long")};t.default=d,e.exports=t.default}});