! function(e, t, n, r) {
  function s() {
    try {
      var e;
      if ((e = "string" == typeof this.response ? JSON.parse(this.response) : this.response).url) {
        var n = t.getElementsByTagName("script")[0],
          r = t.createElement("script");
        r.async = !0, r.src = e.url, n.parentNode.insertBefore(r, n)
      }
    } catch (e) {}
  }
  var o, p, a, i = [],
      c = [];
  e[n] = {
    init: function() {
      o = arguments;
      var e = {
        then: function(t) {
          return c.push({
            type: "t",
            next: t
          }), e
        },
        catch: function(t) {
          return c.push({
            type: "c",
            next: t
          }), e
        }
      };
      return e
    },
    on: function() {
      i.push(arguments)
    },
    render: function() {
      p = arguments
    },
    destroy: function() {
      a = arguments
    }
  }, e.__onWebMessengerHostReady__ = function(t) {
    if (delete e.__onWebMessengerHostReady__, e[n] = t, o)
      for (var r = t.init.apply(t, o), s = 0; s < c.length; s++) {
        var u = c[s];
        r = "t" === u.type ? r.then(u.next) : r.catch(u.next)
      }
    p && t.render.apply(t, p), a && t.destroy.apply(t, a);
    for (s = 0; s < i.length; s++) t.on.apply(t, i[s])
  };
  var u = new XMLHttpRequest;
  u.addEventListener("load", s), u.open("GET", r + "/loader.json", !0), u.responseType = "json", u.send()
}(window, document, "Bots", "https://oracle-japan.github.io/osvc-bots-client-demo/js/bots-client-sdk");

function loadChat(e) {
  e.preventDefault();
  console.log('Init Bots SDK');
  initBots().then(
    function () {
      console.log('init complete');
      Bots.open();
      document.getElementById('openChatButton').setAttribute('disabled', true);
    }
  ).catch(
    function (err) {
      console.error(err);
    }
  );
}

function clearChat(e) {
  e.preventDefault();
  var keys = Object.keys(window.sessionStorage);
  for(var i = 0; i < keys.length; i++) {
    window.sessionStorage.removeItem(keys[i]);
  }
  window.location.reload();
}

function initBots() {
  return Bots.init({
    appId: '5cac4aed89cd35000f0c6340',
    locale: 'ja',
    // soundNotificationEnabled: true,
    imageUploadEnabled: true,
    // displayStyle: 'button',
    buttonIconUrl: 'images/chat.png',
    // buttonWidth: '58px',
    // buttonHeight: '58px',
    businessName: '仲居さんボット',
    businessIconUrl: 'images/img_nakai_youkoso_rh-108.png',
    customColors: {
      brandColor: '403c38',
      conversationColor: '759c6c',
      actionColor: '759c6c',
    },
    customText: {
      // actionPostbackError: 'An error occurred while processing your action. Please try again.',
      clickToRetry: 'メッセージを送信できませんでした。再送するにはクリックしてください。',
      conversationTimestampHeaderFormat: 'YYYY/MM/DD HH:mm',
      // fetchHistory: 'Load more',
      // fetchingHistory: 'Retrieving history...',
      headerText: 'チャットボット・デモ',
      inputPlaceholder: 'メッセージを入力してください...',
      // invalidFileError: 'Only images are supported. Choose a file with a supported extension (jpg, jpeg, png, gif, or bmp).',
      introductionText: 'Oracle Digital Assistant',
      // locationNotSupported: 'Your browser does not support location services or it’s been disabled. Please type your location instead.',
      // locationSecurityRestriction: 'This website cannot access your location. Please type your location instead.',
      // locationSendingFailed: 'Could not send location',
      // locationServicesDenied: 'This website cannot access your location. Allow access in your settings or type your location instead.',
      messageError: 'エラーが発生しました。',
      // messageIndicatorTitlePlural: '({count}) New messages',
      // messageIndicatorTitleSingular: '({count}) New message',
      messageRelativeTimeDay: '{value}日前',
      messageRelativeTimeHour: '{value}時間前',
      messageRelativeTimeJustNow: 'たった今',
      messageRelativeTimeMinute: '{value}分前',
      messageTimestampFormat: 'HH:mm',
      messageSending: '送信中...',
      messageDelivered: '送信済み',
      sendButtonText: '送信',
      settingsHeaderText: '設定',
      tapToRetry: 'メッセージを送信できませんでした。再送するにはタップしてください。',
      // unsupportedMessageType: 'Unsupported message type.',
      // unsupportedActionType: 'Unsupported action type.'
    },
    browserStorage: 'sessionStorage'
  });
}
