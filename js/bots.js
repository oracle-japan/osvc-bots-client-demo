function loadChat(e){e.preventDefault(),console.log("Init Bots SDK"),initBots().then(function(){console.log("init complete"),Bots.open(),document.getElementById("openChatButton").setAttribute("disabled",!0)}).catch(function(e){console.error(e)})}function clearChat(e){e.preventDefault();for(var t=Object.keys(window.sessionStorage),n=0;n<t.length;n++)window.sessionStorage.removeItem(t[n]);window.location.reload()}function initBots(){return Bots.init({appId:"5cac4aed89cd35000f0c6340",locale:"ja",imageUploadEnabled:!0,buttonIconUrl:"images/chat.png",businessName:"仲居さんボット",businessIconUrl:"images/img_nakai_youkoso_rh-108.png",customColors:{brandColor:"403c38",conversationColor:"759c6c",actionColor:"759c6c"},customText:{clickToRetry:"メッセージを送信できませんでした。再送するにはクリックしてください。",conversationTimestampHeaderFormat:"YYYY/MM/DD HH:mm",headerText:"チャットボット・デモ",inputPlaceholder:"メッセージを入力してください...",introductionText:"Oracle Digital Assistant",messageError:"エラーが発生しました。",messageRelativeTimeDay:"{value}日前",messageRelativeTimeHour:"{value}時間前",messageRelativeTimeJustNow:"たった今",messageRelativeTimeMinute:"{value}分前",messageTimestampFormat:"HH:mm",messageSending:"送信中...",messageDelivered:"送信済み",sendButtonText:"送信",settingsHeaderText:"設定",tapToRetry:"メッセージを送信できませんでした。再送するにはタップしてください。"},browserStorage:"sessionStorage"})}!function(e,t,n,o){var s,a,r,i=[],c=[];e[n]={init:function(){s=arguments;var e={then:function(t){return c.push({type:"t",next:t}),e},catch:function(t){return c.push({type:"c",next:t}),e}};return e},on:function(){i.push(arguments)},render:function(){a=arguments},destroy:function(){r=arguments}},e.__onWebMessengerHostReady__=function(t){if(delete e.__onWebMessengerHostReady__,e[n]=t,s)for(var o=t.init.apply(t,s),l=0;l<c.length;l++){var u=c[l];o="t"===u.type?o.then(u.next):o.catch(u.next)}for(a&&t.render.apply(t,a),r&&t.destroy.apply(t,r),l=0;l<i.length;l++)t.on.apply(t,i[l])};var l=new XMLHttpRequest;l.addEventListener("load",function(){try{var e;if((e="string"==typeof this.response?JSON.parse(this.response):this.response).url){var n=t.getElementsByTagName("script")[0],o=t.createElement("script");o.async=!0,o.src=e.url,n.parentNode.insertBefore(o,n)}}catch(e){}}),l.open("GET","https://oracle-japan.github.io/osvc-bots-client-demo/js/bots-client-sdk/loader.json",!0),l.responseType="json",l.send()}(window,document,"Bots");