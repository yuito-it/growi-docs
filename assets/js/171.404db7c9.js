(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{534:function(t,a,o){"use strict";o.r(a);var r=o(48),s=Object(r.a)({},function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"slack-連携"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#slack-連携","aria-hidden":"true"}},[t._v("#")]),t._v(" Slack 連携")]),t._v(" "),o("h2",{attrs:{id:"概要"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#概要","aria-hidden":"true"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),o("p",[t._v("GROWI では、 Slack 連携の方法として、1. GROWI bot と 2. Incoming Webhook の 2 種類の方法があります。")]),t._v(" "),o("h3",{attrs:{id:"_1-growi-bot"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-growi-bot","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. GROWI bot")]),t._v(" "),o("p",[t._v("GROWI bot は GROWI 開発チーム が開発した Slack App の一つです。任意の Slack ワークスペースにインストールすることで、GROWI からの通知だけでなくチャットからの全文検索や会話まとめなど\n様々な機能を利用できるようになります。提供されている GROWI bot は以下の 3 種類があります。")]),t._v(" "),o("h4",{attrs:{id:"official-bot-推奨"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#official-bot-推奨","aria-hidden":"true"}},[t._v("#")]),t._v(" Official bot (推奨)")]),t._v(" "),o("p",[t._v("【概念図】\n"),o("img",{attrs:{src:t.$withBase("/assets/images/slack-bot-outline-official.png"),alt:"diagram-for-official-bot"}})]),t._v(" "),o("p",[t._v("Official GROWI bot は GROWI 開発チーム が無償で提供・運用している GROWI bot です。\n"),t._v(" "),o("a",{attrs:{href:"https://wsgrowi.slack.com/apps",target:"_blank",rel:"noopener noreferrer"}},[t._v("Slack app directory"),o("OutboundLink")],1),t._v(" で公開されており、どなたでも利用できます。\n")]),t._v(" "),o("h4",{attrs:{id:"custom-bot-without-proxy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#custom-bot-without-proxy","aria-hidden":"true"}},[t._v("#")]),t._v(" Custom bot without proxy")]),t._v(" "),o("p",[t._v("【概念図】\n"),o("img",{attrs:{src:t.$withBase("/assets/images/slack-bot-outline-custom-without-proxy.png"),alt:"diagram-for-custom-bot-without-bot"}})]),t._v(" "),o("p",[t._v("Custom bot without proxy は 自身で Slack bot を作成し、お使いの GROWI と紐付けを行うことで、\nSlack から GROWI の 機能の一部を使用できます。")]),t._v(" "),o("h4",{attrs:{id:"custom-bot-with-proxy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#custom-bot-with-proxy","aria-hidden":"true"}},[t._v("#")]),t._v(" Custom bot with proxy")]),t._v(" "),o("p",[t._v("【概念図】\n"),o("img",{attrs:{src:t.$withBase("/assets/images/slack-bot-outline-custom-with-proxy.png"),alt:"diagram-for-custom-bot-with-proxy"}})]),t._v(" "),o("p",[t._v("Custom bot with proxy は 自身で Slack bot を作成し、proxy サーバーを立ち上げ・設定することで、\nOfficial bot と同様の手順で GROWI の機能の一部を使用できます。\n")]),t._v(" "),o("h3",{attrs:{id:"_2-incoming-webhooks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-incoming-webhooks","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. Incoming Webhooks")]),t._v(" "),o("p",[t._v("Incoming Webhook も Slack 連携する手段の一つですが、GROWI bot とは異なり、Slack への通知に特化しています。\nチャットからの全文検索など GROWI bot にある機能の多くは使うことができませんが、その分簡単にセットアップできます。詳しくは"),o("RouterLink",{attrs:{to:"/ja/admin-guide/management-cookbook/external-notification.html#通知の種類-設定方法"}},[t._v("通知の種類/設定方法")]),t._v("をご覧ください。")],1),t._v(" "),o("h2",{attrs:{id:"各種-bot-の設定方法"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#各種-bot-の設定方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 各種 Bot の設定方法")]),t._v(" "),o("h3",{attrs:{id:"official-bot"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#official-bot","aria-hidden":"true"}},[t._v("#")]),t._v(" Official bot")]),t._v(" "),o("p",[t._v("設定方法は"),o("RouterLink",{attrs:{to:"/ja/admin-guide/management-cookbook/slack-integration/official-bot-settings.html"}},[t._v("こちら")]),t._v("をご覧ください。")],1),t._v(" "),o("h3",{attrs:{id:"custom-bot-without-proxy-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#custom-bot-without-proxy-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Custom bot without proxy")]),t._v(" "),o("p",[t._v("設定方法は"),o("RouterLink",{attrs:{to:"/ja/admin-guide/management-cookbook/slack-integration/custom-bot-without-proxy-settings.html"}},[t._v("こちら")]),t._v("をご覧ください。")],1),t._v(" "),o("h3",{attrs:{id:"custom-bot-with-proxy-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#custom-bot-with-proxy-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Custom bot with proxy")]),t._v(" "),o("p",[t._v("設定方法は"),o("RouterLink",{attrs:{to:"/ja/admin-guide/management-cookbook/slack-integration/custom-bot-with-proxy-settings.html"}},[t._v("こちら")]),t._v("をご覧ください。")],1),t._v(" "),o("h2",{attrs:{id:"接続テスト時のエラーログ"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#接続テスト時のエラーログ","aria-hidden":"true"}},[t._v("#")]),t._v(" 接続テスト時のエラーログ")]),t._v(" "),o("ol",[o("li",[o("p",[o("strong",[t._v("Channel_not_found")]),o("br"),t._v("\n指定したチャンネルに GROWI-Bot を招待していないか、間違ったチャンネルを入力した可能性があります。\nGROWI-Bot が Slack チャンネルに招待されていることを確認の上、適切にチャンネル名を入力してください。")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/assets/images/slack-bot-test-channel-not-found.png"),alt:"slack-bot-test-channel-not-found"}})]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Proxy URL is not registered")]),o("br"),t._v("\nProxy URL が設定されていない可能性があります。Proxy URL を入力してください。")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/assets/images/slack-bot-errors-proxy-url-is-not-registered.png"),alt:"slack-bot-errors-proxy-url-is-not-registered"}})]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Request failed with status code 400")]),o("br"),t._v("\nSlack ワークスペースで "),o("code",[t._v("/growi register")]),t._v(" で Proxy に情報を登録せずに Test ボタンをクリックした可能性があります。\nSlack ワークスペースで "),o("code",[t._v("/growi register")]),t._v(" を実行し、必要な情報を Proxy に登録してください。")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/assets/images/slack-bot-errors-400.png"),alt:"slack-bot-errors-400"}})]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Request failed with status code 500")]),o("br"),t._v("\nすでに Access Token を登録された後、Access Token を再発行してテストを実行した可能性があります。\n"),o("RouterLink",{attrs:{to:"/ja/admin-guide/management-cookbook/slack-integration/#接続中の-growi-を確認する"}},[t._v("接続中の GROWI を確認する")]),t._v("を参照して、現在どの GROWI App と連携しているのかを確認してください。\n確認後、"),o("RouterLink",{attrs:{to:"/ja/admin-guide/management-cookbook/slack-integration/#slack-ワークスペースと-growi-app-との連携を解除する"}},[t._v("Slack ワークスペースと GROWI App との連携を解除する")]),t._v("\nを参照し、GROWI App との連携を解除してください。連携の解除後、再度登録し直してください。")],1),t._v(" "),o("img",{attrs:{src:t.$withBase("/assets/images/slack-bot-errors-500.png"),alt:"slack-bot-errors-500"}})]),t._v(" "),o("li",[o("p",[o("strong",[t._v("The scopes is not appropriate")]),o("br"),t._v("\nSlack App を作成した際に設定する Scope が正しくない可能性があります。\n作成した Slack App の OAuth & Permissions から Scope の確認をしてください。\n必要な Scope は "),o("strong",[t._v("team:read")]),t._v(", "),o("strong",[t._v("chat:write")]),t._v(", "),o("strong",[t._v("command")]),t._v(" です。")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/assets/images/slack-bot-errors-scopes-not-appropriate.png"),alt:"slack-bot-errors-scopes-not-appropriate"}})]),t._v(" "),o("li",[o("p",[o("strong",[t._v("Cannot read property 'includes' of undefined")]),o("br"),t._v("\nSigning Secret や Bot User OAuth Token などの情報が登録されていない可能性があります。正しい値を入力してください。")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/assets/images/slack-bot-errors-includes-of-undefined.png"),alt:"slack-bot-errors-includes-of-undefined"}})]),t._v(" "),o("li",[o("p",[o("strong",[t._v("invalid_auth")]),o("br"),t._v("\nSigning Secret や Bot User OAuth Token の値が間違っている可能性があります。正しい値を入力してください。")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/assets/images/slack-bot-errors-invalid-auth.png"),alt:"slack-bot-errors-invalid-auth"}})])]),t._v(" "),o("h2",{attrs:{id:"growi-bot-でできること"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#growi-bot-でできること","aria-hidden":"true"}},[t._v("#")]),t._v(" GROWI bot でできること")]),t._v(" "),o("p",[t._v("GROWI bot の機能については"),o("a",{attrs:{href:"/ja/guide/features/slack_integration"}},[t._v("ユーザーガイド")]),t._v("をご参照ください。")]),t._v(" "),o("h2",{attrs:{id:"アイコン"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#アイコン","aria-hidden":"true"}},[t._v("#")]),t._v(" アイコン")]),t._v(" "),o("p",[t._v("よろしければ、以下のイラストを Custom bot 用のアイコンにお使いください。")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/assets/images/growikun-icon-2000_2000.png"),alt:"growikun-icon-2000_2000"}}),t._v(" "),o("h2",{attrs:{id:"incoming-webhook-設定"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#incoming-webhook-設定","aria-hidden":"true"}},[t._v("#")]),t._v(" Incoming webhook 設定")]),t._v(" "),o("p",[t._v("Incoming Webhook による連携は v4.2 系までの推奨機能でしたが、v4.3 系以降は前述の GROWI bot による連携を推奨しています。")]),t._v(" "),o("p",[t._v("通知する Slack ワークスペースを設定します。")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("管理画面のセキュリティ設定ページ(/admin/notification)にアクセスします。")])]),t._v(" "),o("li",[o("p",[t._v("Slack Incoming Webhooks 設定の必要事項を入力し、更新ボタンを押します。")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Webhook URL")]),o("br"),t._v(" "),o("a",{attrs:{href:"https://slack.com/services/new/incoming-webhook",target:"_blank",rel:"noopener noreferrer"}},[t._v("Incoming Webhooks"),o("OutboundLink")],1),t._v(" で取得できます。")])])])]),t._v(" "),o("h3",{attrs:{id:"設定が反映されているかの確認"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#設定が反映されているかの確認","aria-hidden":"true"}},[t._v("#")]),t._v(" 設定が反映されているかの確認")]),t._v(" "),o("p",[t._v("上記の設定後、ページの編集モード画面に Slack 通知フォームが追加されます。")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/assets/images/slack1.png"),alt:"slack1"}}),t._v(" "),o("p",[t._v("ページの保存・更新時に、入力したチャンネルへ Slack 通知が届きます。この方法で通知することを GROWI では "),o("strong",[t._v("User Trigger Notification")]),t._v(" といいます。")]),t._v(" "),o("p",[t._v("User Trigger Notification の設定方法は"),o("RouterLink",{attrs:{to:"/ja/admin-guide/management-cookbook/external-notification.html#user-trigger-notification-設定"}},[t._v("こちら")]),t._v("を参照してください。")],1)])},[],!1,null,null,null);a.default=s.exports}}]);