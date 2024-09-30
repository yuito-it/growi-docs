(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{503:function(a,t,_){"use strict";_.r(t);var s=_(48),r=Object(s.a)({},function(){var a=this,t=a.$createElement,_=a._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"custom-rate-limitの設定"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#custom-rate-limitの設定","aria-hidden":"true"}},[a._v("#")]),a._v(" Custom rate limitの設定")]),a._v(" "),_("p",[a._v("GROWIでのAPIのrate limitについて紹介します。")]),a._v(" "),_("h2",{attrs:{id:"概要"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概要","aria-hidden":"true"}},[a._v("#")]),a._v(" 概要")]),a._v(" "),_("p",[a._v("エンドポイント毎、ユーザー(ゲストユーザーの場合はIP)毎にレート制限ウィンドウ(秒)あたりの、最大リクエスト数を設定できます。\nレート制限ウィンドウは60秒で固定の値になっています。\nレート制限ウィンドウ内に同一ユーザーにより最大リクエスト数を超える回数のリクエストがあった場合は "),_("code",[a._v("419 too many requests")]),a._v(" のエラーを返します。")]),a._v(" "),_("h3",{attrs:{id:"ログイン済みユーザーの場合"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ログイン済みユーザーの場合","aria-hidden":"true"}},[a._v("#")]),a._v(" ログイン済みユーザーの場合")]),a._v(" "),_("p",[a._v("ログイン済みユーザーの場合、制限をかけるためのkeyは"),_("strong",[a._v("エンドポイント")]),a._v("と"),_("strong",[a._v("リクエストメソッド")]),a._v("と"),_("strong",[a._v("ユーザーID")]),a._v("を含めた文字列のハッシュ値になります。同じIPアドレスからのリクエストもユーザーごとに区別できます。")]),a._v(" "),_("h3",{attrs:{id:"未ログインユーザーの場合"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#未ログインユーザーの場合","aria-hidden":"true"}},[a._v("#")]),a._v(" 未ログインユーザーの場合")]),a._v(" "),_("p",[a._v("未ログインユーザーの場合、制限をかけるためのkeyは"),_("strong",[a._v("エンドポイント")]),a._v("と"),_("strong",[a._v("リクエストメソッド")]),a._v("と"),_("strong",[a._v("IPアドレス")]),a._v("を含めた文字列のハッシュ値になります。この時、最大リクエスト数には、1IPアドレス当たりの想定人数をかけた値が利用されます。1IPアドレス当たりの想定人数は、デフォルトでは5人/ipとなっています。1IPアドレス当たりの想定人数は、環境変数を用いてエンドポイントとメソッドごとにカスタマイズできます。")]),a._v(" "),_("h2",{attrs:{id:"デフォルトの設定"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#デフォルトの設定","aria-hidden":"true"}},[a._v("#")]),a._v(" デフォルトの設定")]),a._v(" "),_("p",[a._v("エンドポイントにはデフォルトで下の表の制限がかけられています。")]),a._v(" "),_("table",[_("thead",[_("tr",[_("th",[a._v("時間(秒)")]),a._v(" "),_("th",[a._v("最大リクエスト数(回)")]),a._v(" "),_("th",[a._v("IPアドレス当たりの想定人数")])])]),a._v(" "),_("tbody",[_("tr",[_("td",[a._v("60")]),a._v(" "),_("td",[a._v("500")]),a._v(" "),_("td",[a._v("5")])])])]),a._v(" "),_("h3",{attrs:{id:"初期値がカスタマイズされているエンドポイント"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#初期値がカスタマイズされているエンドポイント","aria-hidden":"true"}},[a._v("#")]),a._v(" 初期値がカスタマイズされているエンドポイント")]),a._v(" "),_("p",[a._v("その他、制限が必要なエンドポイントには以下の設定ファイルによって、デフォルトでカスタマイズされた初期値が制限として設定されています。")]),a._v(" "),_("p",[_("a",{attrs:{href:"https://github.com/weseek/growi/blob/master/packages/app/config/rate-limiter.ts",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/weseek/growi/blob/master/packages/app/config/rate-limiter.ts"),_("OutboundLink")],1)]),a._v(" "),_("h2",{attrs:{id:"制限のカスタマイズ"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#制限のカスタマイズ","aria-hidden":"true"}},[a._v("#")]),a._v(" 制限のカスタマイズ")]),a._v(" "),_("p",[a._v("デフォルトの制限を上書きして、カスタイマイズするためには環境変数を用いて設定します。")]),a._v(" "),_("h3",{attrs:{id:"設定例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#設定例","aria-hidden":"true"}},[a._v("#")]),a._v(" 設定例")]),a._v(" "),_("p",[a._v("環境変数で設定する項目は以下の4つです。")]),a._v(" "),_("ul",[_("li",[a._v("エンドポイント(必須)")]),a._v(" "),_("li",[a._v("リクエストメソッド")]),a._v(" "),_("li",[a._v("レート制限ウィンドウ当たりの最大リクエスト数(必須)")]),a._v(" "),_("li",[a._v("1IPアドレス当たりの想定人数")])]),a._v(" "),_("p",[a._v("下のように環境変数を設定できます。")]),a._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[a._v("API_RATE_LIMIT_"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("KEY"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("_ENDPOINT"),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/_api/v3/foo // エンドポイント\nAPI_RATE_LIMIT_"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("KEY"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("_METHODS"),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("GET,POST // リクエストメソッド\nAPI_RATE_LIMIT_"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("KEY"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("_MAX_REQUESTS"),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("10 // レート制限ウィンドウ内の最大リクエスト数\nAPI_RATE_LIMIT_"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("KEY"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("_USERS_PER_IP"),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("2 // 1IPアドレス当たりの想定人数\n")])])]),_("p",[a._v("リクエストメソッドの以外の設定は任意です。設定されていない場合、そのエンドポイントに対するすべてのメソッドに対して制限がかけられます。1IPアドレス当たりの想定人数は、設定されていない場合はデフォルト値の5が設定されます。")]),a._v(" "),_("p",[_("code",[a._v("[key]")]),a._v("の部分は任意の文字列です。ただし、同じエンドポイントに対して制限が設定されていた場合、"),_("code",[a._v("[key]")]),a._v("の部分をin-placeアルゴリズム(JavaScriptのsort()メソッド)でソートしたときに、後に来るkeyの設定を優先します。")]),a._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[a._v("API_RATE_LIMIT_010_FOO_ENDPOINT"),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/_api/v3/foo\nAPI_RATE_LIMIT_010_FOO_METHODS"),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("GET,POST\nAPI_RATE_LIMIT_010_FOO_MAX_REQUESTS"),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("10\nAPI_RATE_LIMIT_010_FOO_USERS_PER_IP"),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("2\n")])])]),_("p",[a._v("このように環境変数を設定すると、以下のように制限が適用されます。")]),a._v(" "),_("ul",[_("li",[a._v("ログイン済みユーザーの場合")])]),a._v(" "),_("p",[_("code",[a._v("/_api/v3/foo")]),a._v("というエンドポイントに対して、"),_("code",[a._v("GET")]),a._v(" "),_("code",[a._v("POST")]),a._v("のリクエストを60秒間に11回以上送ると11回目以降はエラーが発生しリクエストを送ることができなくなります。60秒が経過すると、再びリクエストを送ることができるようになります。")]),a._v(" "),_("ul",[_("li",[a._v("未ログインユーザーの場合")])]),a._v(" "),_("p",[_("code",[a._v("/_api/v3/foo")]),a._v("というエンドポイントに対して、"),_("code",[a._v("GET")]),a._v(" "),_("code",[a._v("POST")]),a._v("のリクエストを同一IPアドレスから21回以上送ると、21回目以降はエラーが発生しリクエストを送ることができなくなります。60秒が経過すると、再びリクエストを送ることができるようになります。")]),a._v(" "),_("h3",{attrs:{id:"正規表現を用いた環境変数のカスタマイズ"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#正規表現を用いた環境変数のカスタマイズ","aria-hidden":"true"}},[a._v("#")]),a._v(" 正規表現を用いた環境変数のカスタマイズ")]),a._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[a._v("GET "),_("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/62df87c8539c3090b8cc7621'")]),a._v(" // ページの閲覧\nGET "),_("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/share/62e2256f19e932f82eebe830'")]),a._v(" // 共有ページの閲覧\n")])])]),_("p",[a._v("上のような、可変的なエンドポイントの制限は正規表現と環境変数を用いて制限をカスタマイズできます。")]),a._v(" "),_("h3",{attrs:{id:"設定例-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#設定例-2","aria-hidden":"true"}},[a._v("#")]),a._v(" 設定例")]),a._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[a._v("API_RATE_LIMIT_010_SHARE_ENDPOINT_WITH_REGEXP"),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/share/"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("0-9a-z"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("24"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\nAPI_RATE_LIMIT_010_SHARE_METHODS"),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("GET\nAPI_RATE_LIMIT_010_SHARE_MAX_REQUESTS"),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("20\nAPI_RATE_LIMIT_010_SHARE_USERS_PER_IP"),_("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("2\n")])])])])},[],!1,null,null,null);t.default=r.exports}}]);