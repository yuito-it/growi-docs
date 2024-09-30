(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{535:function(t,a,v){"use strict";v.r(a);var s=v(48),_=Object(s.a)({},function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"セキュリティ設定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#セキュリティ設定","aria-hidden":"true"}},[t._v("#")]),t._v(" セキュリティ設定")]),t._v(" "),v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#セキュリティ設定"}},[t._v("セキュリティ設定")])]),v("li",[v("a",{attrs:{href:"#認証機構設定"}},[t._v("認証機構設定")])])])]),v("p"),t._v(" "),v("h2",{attrs:{id:"セキュリティ設定-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#セキュリティ設定-2","aria-hidden":"true"}},[t._v("#")]),t._v(" セキュリティ設定")]),t._v(" "),v("h3",{attrs:{id:"ページリストと検索結果に表示するページを制御する"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ページリストと検索結果に表示するページを制御する","aria-hidden":"true"}},[t._v("#")]),t._v(" ページリストと検索結果に表示するページを制御する")]),t._v(" "),v("p",[t._v("ページの公開範囲が "),v("code",[t._v("自分のみ")]),t._v(" または、 "),v("code",[t._v("特定グループのみ")]),t._v(" に設定されているページは、ページリストやページの検索結果への表示/非表示を設定できます。")]),t._v(" "),v("p",[v("code",[t._v("表示")]),t._v(" 設定の場合、閲覧が制限されているページが自分以外のユーザーのページリストや検索結果に表示されるので注意してください。")]),t._v(" "),v("img",{attrs:{src:t.$withBase("/assets/images/ja/security.png"),alt:"security"}}),t._v(" "),v("h3",{attrs:{id:"ページの削除権限"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ページの削除権限","aria-hidden":"true"}},[t._v("#")]),t._v(" ページの削除権限")]),t._v(" "),v("p",[t._v("ページの削除権限を、４種類の削除の方法に応じて指定します。")]),t._v(" "),v("ul",[v("li",[t._v("ページをゴミ箱に入れる(単体のみの操作)")]),t._v(" "),v("li",[t._v("ページをゴミ箱に入れる(子孫を含む操作)")]),t._v(" "),v("li",[t._v("ページを完全削除する(単体のみの操作)")]),t._v(" "),v("li",[t._v("ページを完全削除する(子孫を含む操作)")])]),t._v(" "),v("p",[t._v("「単体のみの操作」と「子孫を含む操作」でそれぞれ以下のオプションから設定を選ぶことができます。")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("単体のみの操作")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("誰でも可能")]),t._v(", "),v("code",[t._v("管理者のみ可能")]),t._v(", "),v("code",[t._v("管理者とページ作者が可能")]),t._v(" から選択")])])]),t._v(" "),v("li",[v("p",[t._v("子孫を含む操作")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("単体のみと同じ")]),t._v(", "),v("code",[t._v("管理者のみ可能")]),t._v(", "),v("code",[t._v("管理者とページ作者が可能")]),t._v(" から選択")])])])]),t._v(" "),v("p",[t._v("子孫を含む操作における"),v("code",[t._v("単体のみと同じ")]),t._v("オプションを選択すると、同じ種類の削除操作の設定が適用されます。また、「子孫を含む操作」は必ず「単体のみの操作」よりも制限の強い設定になるように強制されます。")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[t._v("v4.5 以前で「ページの完全削除」として設定していたオプションは、v5.0 以降では「ページを完全削除する(単体のみの操作)」として引き継がれます")])]),t._v(" "),v("h3",{attrs:{id:"ユーザーホームページの削除"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ユーザーホームページの削除","aria-hidden":"true"}},[t._v("#")]),t._v(" ユーザーホームページの削除")]),t._v(" "),v("ul",[v("li",[t._v("デフォルトではこの設定は無効化されています。")]),t._v(" "),v("li",[t._v("無効化されている場合、ユーザーホームページ（"),v("code",[t._v("/user/{username}")]),t._v("）の手動削除ができません。ユーザー削除後もユーザーホームページが残り続けます。")]),t._v(" "),v("li",[t._v("あるユーザーの新規登録時にそのユーザーホームページが既に存在していた場合 (例えばユーザー "),v("code",[t._v("foo")]),t._v(" の新規登録時に既に "),v("code",[t._v("/user/foo")]),t._v(" ページが存在していた場合)、"),v("RouterLink",{attrs:{to:"/ja/admin-guide/management-cookbook/security.html#ユーザーホームページの削除"}},[t._v("ユーザーホームページの削除")]),t._v("設定の ON/OFF に関わらずユーザーホームページは自動で初期化されます\n"),v("ul",[v("li",[t._v("初期化されると、"),v("code",[t._v("/user/foo")]),t._v(" ページとその配下のページは完全に削除され、新規登録したユーザー用に作り替えられます")]),t._v(" "),v("li",[t._v("これは GROWI v6.2.0 以降で変更された仕様です。"),v("RouterLink",{attrs:{to:"/ja/admin-guide/upgrading/62x.html"}},[t._v("アップグレードガイド")]),t._v(" も併せてご覧ください")],1)])],1)]),t._v(" "),v("h4",{attrs:{id:"ユーザーホームページの削除を有効化-手動削除"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ユーザーホームページの削除を有効化-手動削除","aria-hidden":"true"}},[t._v("#")]),t._v(" ユーザーホームページの削除を有効化（手動削除）")]),t._v(" "),v("p",[t._v("削除済みユーザーのユーザーホームページを通常ページ同様に削除または完全削除できるようになります。")]),t._v(" "),v("div",{staticClass:"custom-block warning"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("p",[t._v("すでにごみ箱（"),v("code",[t._v("/trash")]),t._v("）に入れられたユーザーホームページはこの設定に関係なく完全削除が可能です。")])]),t._v(" "),v("h4",{attrs:{id:"ユーザーを削除したとき、ユーザーホームページとその配下のページを完全削除する-自動削除"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ユーザーを削除したとき、ユーザーホームページとその配下のページを完全削除する-自動削除","aria-hidden":"true"}},[t._v("#")]),t._v(" ユーザーを削除したとき、ユーザーホームページとその配下のページを完全削除する（自動削除）")]),t._v(" "),v("p",[t._v("ユーザーを削除する際に、ユーザーホームページとその配下のページも完全削除されます。")]),t._v(" "),v("h2",{attrs:{id:"認証機構設定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#認証機構設定","aria-hidden":"true"}},[t._v("#")]),t._v(" 認証機構設定")]),t._v(" "),v("h3",{attrs:{id:"id-password"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#id-password","aria-hidden":"true"}},[t._v("#")]),t._v(" ID/Password")]),t._v(" "),v("h4",{attrs:{id:"登録の制限"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#登録の制限","aria-hidden":"true"}},[t._v("#")]),t._v(" 登録の制限")]),t._v(" "),v("ul",[v("li",[v("p",[v("code",[t._v("公開 (だれでも登録可能)")])]),t._v(" "),v("ul",[v("li",[t._v("ユーザー登録画面から ID/Password で新規登録ができます。")])]),t._v(" "),v("img",{attrs:{src:t.$withBase("/assets/images/ja/register1.png"),alt:""}})]),t._v(" "),v("li",[v("p",[v("code",[t._v("制限 (登録完了には管理者の承認が必要)")])]),t._v(" "),v("ul",[v("li",[t._v("ユーザー登録画面から ID/Password で新規登録してもすぐにはログインできません。管理者による対象ユーザーへの承認が必要になります。")])]),t._v(" "),v("img",{attrs:{src:t.$withBase("/assets/images/ja/register2.png"),alt:""}}),t._v(" "),v("ul",[v("li",[t._v("新規登録すると管理者へアプリ内通知が送信されます。")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[v("RouterLink",{attrs:{to:"/ja/admin-guide/management-cookbook/app-settings.html#メールの設定"}},[t._v("メールの設定")]),t._v("がセットアップされている場合は管理者へメールを送信します。")],1)]),t._v(" "),v("ul",[v("li",[t._v("管理者はユーザー管理から対象のユーザーを承認してください。")])])]),t._v(" "),v("li",[v("p",[v("code",[t._v("非公開 (登録には管理者による招待が必要)")])]),t._v(" "),v("ul",[v("li",[t._v("ユーザー登録画面から ID/Password で新規登録できなくなります。")]),t._v(" "),v("li",[t._v("新規ユーザーを登録するには"),v("RouterLink",{attrs:{to:"/ja/admin-guide/management-cookbook/user-management.html#新規ユーザーの仮発行"}},[t._v("新規ユーザーの仮発行")]),t._v("から招待してください。")],1)])])])])},[],!1,null,null,null);a.default=_.exports}}]);