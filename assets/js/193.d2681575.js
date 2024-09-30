(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{557:function(t,s,a){"use strict";a.r(s);var e=a(48),i=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"growi-v6-0-x-へのアップグレード"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#growi-v6-0-x-へのアップグレード","aria-hidden":"true"}},[t._v("#")]),t._v(" GROWI v6.0.x へのアップグレード")]),t._v(" "),a("p",[t._v("v6.0 では、アプリケーションフレームワークおよび Markdown レンダリング部分に抜本的な変更が加えられました。\nまた、複数の仕様変更や廃止された機能があります。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("v5.x 以降から v6.x へのアップグレードでは基本的に安定動作するはずですが、利用者への影響は少なくありません。アップグレード前後では変更点について十分に周知をしてください。")])]),t._v(" "),a("h2",{attrs:{id:"目次"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目次","aria-hidden":"true"}},[t._v("#")]),t._v(" 目次")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#目次"}},[t._v("目次")])]),a("li",[a("a",{attrs:{href:"#管理者向け"}},[t._v("管理者向け")])]),a("li",[a("a",{attrs:{href:"#利用者向け"}},[t._v("利用者向け")])]),a("li",[a("a",{attrs:{href:"#アップグレード前にチェックすべきこと"}},[t._v("アップグレード前にチェックすべきこと")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"管理者向け"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#管理者向け","aria-hidden":"true"}},[t._v("#")]),t._v(" 管理者向け")]),t._v(" "),a("h3",{attrs:{id:"v5-x-系へのダウングレードについて"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v5-x-系へのダウングレードについて","aria-hidden":"true"}},[t._v("#")]),t._v(" v5.x 系へのダウングレードについて")]),t._v(" "),a("p",[t._v("v5.x 系へのダウングレードで注意すべきことは特にありません。")]),t._v(" "),a("h3",{attrs:{id:"ベータ版-プラグイン機能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ベータ版-プラグイン機能","aria-hidden":"true"}},[t._v("#")]),t._v(" [ベータ版] プラグイン機能")]),t._v(" "),a("p",[t._v("新しいプラグイン機能が追加されました。"),a("br"),t._v(" "),a("a",{attrs:{href:"https://growi.org/plugins",target:"_blank",rel:"noopener noreferrer"}},[t._v("公式サイト"),a("OutboundLink")],1),t._v("では対応しているプラグイン一覧を確認できます。")]),t._v(" "),a("p",[t._v("2023.01 現在、未実装の機能があります。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("冗長化対応")]),t._v(" "),a("ContextualBlock",{attrs:{context:"docs-growi-org"}},[a("ul",[a("li",[t._v("GROWI 本体は"),a("RouterLink",{attrs:{to:"/ja/admin-guide/admin-cookbook/loadbalance.html"}},[t._v("冗長化に対応しています")]),t._v("が、プラグインは未対応です")],1)])]),t._v(" "),a("ContextualBlock",{attrs:{context:"help-growi-cloud"}},[a("ul",[a("li",[t._v("GROWI 本体は冗長化に対応していますが、プラグインは未対応です")])])])],1),t._v(" "),a("li",[a("p",[t._v("main ブランチ以外の指定")])]),t._v(" "),a("li",[a("p",[t._v("GitHub 以外の URL の指定")])]),t._v(" "),a("li",[a("p",[t._v("ワンクリックアップグレードボタン")])])]),t._v(" "),a("h3",{attrs:{id:"仕様変更-cdn-利用について"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仕様変更-cdn-利用について","aria-hidden":"true"}},[t._v("#")]),t._v(" [仕様変更] CDN 利用について")]),t._v(" "),a("p",[t._v("v5.x までは、公式コンテナイメージとして CDN を多用する default 版と、極力 CDN に依存しない nocdn 版を並行リリースしていました。")]),t._v(" "),a("p",[t._v("v6.x 以降はこれを一本化し、極力 CDN の利用を控えた旧 nocdn 版相当の 1 バージョンのみのリリースとしました。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("v6.0.0 リリース時点では nocdn 化は完全でなく、一部リソースの取得に CDN を利用していますが、公式コンテナイメージの方向性としては今後極力 CDN への依存を排していく予定です。")])]),t._v(" "),a("h3",{attrs:{id:"仕様変更・未実装-管理画面でのテーマプレビュー"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仕様変更・未実装-管理画面でのテーマプレビュー","aria-hidden":"true"}},[t._v("#")]),t._v(" [仕様変更・未実装] 管理画面でのテーマプレビュー")]),t._v(" "),a("p",[t._v("v5.x までは管理画面のカスタム設定ページからテーマの変更をその場でプレビュー可能でしたが、v6 では未実装です。"),a("br"),t._v("\nまたテーマ反映にはページリロードが必要です。")]),t._v(" "),a("h3",{attrs:{id:"仕様変更・未実装-コードハイライトライブラリの変更とテーマの適用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仕様変更・未実装-コードハイライトライブラリの変更とテーマの適用","aria-hidden":"true"}},[t._v("#")]),t._v(" [仕様変更・未実装] コードハイライトライブラリの変更とテーマの適用")]),t._v(" "),a("p",[t._v("コードハイライトのためのライブラリが、"),a("a",{attrs:{href:"https://highlightjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("highlight.js"),a("OutboundLink")],1),t._v(" から "),a("a",{attrs:{href:"https://prismjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prism"),a("OutboundLink")],1),t._v(" に変更されました。")]),t._v(" "),a("p",[t._v("それに伴い、管理画面のカスタマイズ設定ページからコードハイライトのテーマを選択できる機能は一時的に利用不可になっています。今後 highlight.js のテーマは選択できなくなり、代わりに Prism のテーマを選択できる機能が実装される予定です。")]),t._v(" "),a("h3",{attrs:{id:"廃止を伴う仕様変更・未実装-xss-cross-site-scripting-対策設定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#廃止を伴う仕様変更・未実装-xss-cross-site-scripting-対策設定","aria-hidden":"true"}},[t._v("#")]),t._v(" [廃止を伴う仕様変更・未実装] XSS(Cross Site Scripting)対策設定")]),t._v(" "),a("p",[t._v("管理画面のマークダウン設定から設定可能だった「XSS(Cross Site Scripting)対策設定」の設定値が変更になりました。")]),t._v(" "),a("ul",[a("li",[t._v("過去の設定は引き継がれず、v6.x 以降を起動した際にデフォルトで ON 状態かつ「おすすめ設定」が選択された状態にセットされます")]),t._v(" "),a("li",[t._v("「全てのタグを削除」モードは廃止されました")]),t._v(" "),a("li",[t._v("許可されるタグ属性の記述が JSON 形式になりました")])]),t._v(" "),a("h3",{attrs:{id:"廃止を伴う仕様変更-カスタム-html-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#廃止を伴う仕様変更-カスタム-html-header","aria-hidden":"true"}},[t._v("#")]),t._v(" [廃止を伴う仕様変更] カスタム HTML Header")]),t._v(" "),a("ul",[a("li",[t._v("利用者の環境保護のため、head タグに自由に文字列・タグを挿入できる「カスタム HTML Header」は廃止されました")]),t._v(" "),a("li",[t._v("noscript に自由に文字列・タグを挿入できる「カスタム Noscript」が新規追加されました")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("link タグを入れたい場合は以下のようなカスタムスクリプトを記述してください。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" link "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mylink'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stylesheet'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://example.com/mystyles.css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("link"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("h3",{attrs:{id:"廃止-twitter-oauth-2-認証機構"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#廃止-twitter-oauth-2-認証機構","aria-hidden":"true"}},[t._v("#")]),t._v(" [廃止] Twitter OAuth 2 認証機構")]),t._v(" "),a("p",[t._v("Twitter を使った認証機構は廃止されました。")]),t._v(" "),a("h3",{attrs:{id:"廃止-管理画面表示時の全文検索窓"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#廃止-管理画面表示時の全文検索窓","aria-hidden":"true"}},[t._v("#")]),t._v(" [廃止] 管理画面表示時の全文検索窓")]),t._v(" "),a("p",[a("code",[t._v("/admin")]),t._v(" 配下ページでは Navbar の全文検索窓が非表示になりました。")]),t._v(" "),a("h2",{attrs:{id:"利用者向け"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用者向け","aria-hidden":"true"}},[t._v("#")]),t._v(" 利用者向け")]),t._v(" "),a("h3",{attrs:{id:"ベータ版-編集画面でのテンプレート適用機能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ベータ版-編集画面でのテンプレート適用機能","aria-hidden":"true"}},[t._v("#")]),t._v(" [ベータ版] 編集画面でのテンプレート適用機能")]),t._v(" "),a("p",[t._v("編集画面のテンプレートアイコン ("),a("img",{attrs:{src:t.$withBase("/assets/images/template-icon.png"),alt:"template icon"}}),t._v(") をクリックすることで、編集中のページに定型文を適用できるようになりました。\n")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("既存の"),a("RouterLink",{attrs:{to:"/ja/guide/features/template.html"}},[t._v("ページテンプレート機能")]),t._v("と名前が似ているため、将来的に名前が変更になる可能性があります。")],1)]),t._v(" "),a("h3",{attrs:{id:"仕様変更-draw-io-diagrams-net-記法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仕様変更-draw-io-diagrams-net-記法","aria-hidden":"true"}},[t._v("#")]),t._v(" [仕様変更] Draw.io (Diagrams.net) 記法")]),t._v(" "),a("p",[t._v("図表を描くための記法が変更されました。")]),t._v(" "),a("h4",{attrs:{id:"before"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before","aria-hidden":"true"}},[t._v("#")]),t._v(" 🚫 Before")]),t._v(" "),a("div",{staticClass:"language-drawio extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("::: drawio\n3Zhdb5swFIZ/TS4XYRswuUzSr0mtVqmtejkZOASvgJHtfO3Xz+YjgdJqiaa1SbnBvD7G9vv4IJsRmeeba8nK9E7EkI2wE29G5GKEMfa9wNyssq0VhFyvVhaSx422Fx74b2hEp1GXPAbVC9RCZJqXfTESRQGR7mlMSrHuhyUi6/dasgUMhIeIZUP1mcc6rdUA071+A3yRtj0jf1LX5KwNbmaiUhaLdUcilyMyl0LoupRv5pBZ91pf6nZX79TuBiah0G80eFIgf4S/rCfYyVhowFRBI+xFIi9FYZthr3WvVaqYGxZy2+xRsugFpCndPN7dmtu0LJtuMxZBaswE2Te4HR7ezXA3cqW3ravGi9IW883CrpsxWyt3nIuQ24BZwrNsLjIhq2CSJOBHkdGVluIFOjUxnYSOY2pWIDU30G7tPO+F4pqLwsSEQmuRmwCmynp1JHwDZoizerS2HWzeNRR1JnENIgcttyakafANuQ3aZnG7Ph37vk8d6pAgoBO3rl131k3TIO0smVZjjZGLXUd7mKbQ2Ng+dvD+M+6n7xatUqDVgXTJ8XQVGZLFlJqEeYtsUl2fRRb7Y+QEJCCIBhQ5ExL0OBPHOReyqsre6VKnRjM+Vu4dxtg9nnEkFgXXYgh6ThFBV6cHmgRj10XUo9jByA1c90vk8/TeJvQ107Bm2wNpe8fTZiX/uWg6GRD3psSZeadH/C+p7RNvTAhxzaedUuoFwbkgf34w4i3Lw5gdSNw/nnhWvf9nsiyimtWBH/TCjPSzgCP/FXH3SwC/YJqFTMGBsOnxsONtwXIRh0PK1q/Z5PRymzgni3qwfW86X7FsCS113KcSLeXKWnNhd7hQxFN7nNlnk1GuuO2yqo+ZSqtg9BYXPwogTHYuQzw49Lzy2AxELGUEnc28OXgxuQA93AF2SEjIzB5j1X/7EdYNfJqcuU/uB/nUnpfP1ijvo4xC52SUNzTK/yij8DkZ5Q+Nov/HKPO4/2lT1XX+fZHLPw==\n:::\n")])])]),a("h4",{attrs:{id:"after"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#after","aria-hidden":"true"}},[t._v("#")]),t._v(" ✅ After")]),t._v(" "),a("div",{staticClass:"language-drawio extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("``` drawio\n3Zhdb5swFIZ/TS4XYRswuUzSr0mtVqmtejkZOASvgJHtfO3Xz+YjgdJqiaa1SbnBvD7G9vv4IJsRmeeba8nK9E7EkI2wE29G5GKEMfa9wNyssq0VhFyvVhaSx422Fx74b2hEp1GXPAbVC9RCZJqXfTESRQGR7mlMSrHuhyUi6/dasgUMhIeIZUP1mcc6rdUA071+A3yRtj0jf1LX5KwNbmaiUhaLdUcilyMyl0LoupRv5pBZ91pf6nZX79TuBiah0G80eFIgf4S/rCfYyVhowFRBI+xFIi9FYZthr3WvVaqYGxZy2+xRsugFpCndPN7dmtu0LJtuMxZBaswE2Te4HR7ezXA3cqW3ravGi9IW883CrpsxWyt3nIuQ24BZwrNsLjIhq2CSJOBHkdGVluIFOjUxnYSOY2pWIDU30G7tPO+F4pqLwsSEQmuRmwCmynp1JHwDZoizerS2HWzeNRR1JnENIgcttyakafANuQ3aZnG7Ph37vk8d6pAgoBO3rl131k3TIO0smVZjjZGLXUd7mKbQ2Ng+dvD+M+6n7xatUqDVgXTJ8XQVGZLFlJqEeYtsUl2fRRb7Y+QEJCCIBhQ5ExL0OBPHOReyqsre6VKnRjM+Vu4dxtg9nnEkFgXXYgh6ThFBV6cHmgRj10XUo9jByA1c90vk8/TeJvQ107Bm2wNpe8fTZiX/uWg6GRD3psSZeadH/C+p7RNvTAhxzaedUuoFwbkgf34w4i3Lw5gdSNw/nnhWvf9nsiyimtWBH/TCjPSzgCP/FXH3SwC/YJqFTMGBsOnxsONtwXIRh0PK1q/Z5PRymzgni3qwfW86X7FsCS113KcSLeXKWnNhd7hQxFN7nNlnk1GuuO2yqo+ZSqtg9BYXPwogTHYuQzw49Lzy2AxELGUEnc28OXgxuQA93AF2SEjIzB5j1X/7EdYNfJqcuU/uB/nUnpfP1ijvo4xC52SUNzTK/yij8DkZ5Q+Nov/HKPO4/2lT1XX+fZHLPw==\n```\n")])])]),a("ContextualBlock",{attrs:{context:"docs-growi-org"}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("以前の記法を使って保存されたページの内容は、GROWI 本体をアップグレードしても自動では変更されません。"),a("br"),t._v("\nマークダウン文書を一括で新しい記法に書き換えるためのディスカッションを確認してください。"),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/weseek/growi/discussions/7180",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/weseek/growi/discussions/7180"),a("OutboundLink")],1)])])]),t._v(" "),a("h3",{attrs:{id:"仕様変更-plantuml-記法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仕様変更-plantuml-記法","aria-hidden":"true"}},[t._v("#")]),t._v(" [仕様変更] PlantUML 記法")]),t._v(" "),a("p",[t._v("図表を描くための記法が変更されました。")]),t._v(" "),a("h4",{attrs:{id:"before-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 🚫 Before")]),t._v(" "),a("div",{staticClass:"language-plantuml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("@startuml\nclass RemarkPlugin {\n    + transform(syntaxTree: AST): AST\n}\n@enduml\n")])])]),a("h4",{attrs:{id:"after-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#after-2","aria-hidden":"true"}},[t._v("#")]),t._v(" ✅ After")]),t._v(" "),a("div",{staticClass:"language-plantuml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("``` plantuml\nclass RemarkPlugin {\n    + transform(syntaxTree: AST): AST\n}\n```\n")])])]),a("p",[t._v("or")]),t._v(" "),a("div",{staticClass:"language-plantuml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("``` plantuml\n@startuml\nclass RemarkPlugin {\n    + transform(syntaxTree: AST): AST\n}\n@enduml\n```\n")])])]),a("ContextualBlock",{attrs:{context:"docs-growi-org"}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("以前の記法を使って保存されたページの内容は、GROWI 本体をアップグレードしても自動では変更されません。"),a("br"),t._v("\nマークダウン文書を一括で新しい記法に書き換えるためのディスカッションを確認してください。"),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/weseek/growi/discussions/7180",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/weseek/growi/discussions/7180"),a("OutboundLink")],1)])])]),t._v(" "),a("h3",{attrs:{id:"仕様変更-csv-tsv-によるテーブル描画記法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仕様変更-csv-tsv-によるテーブル描画記法","aria-hidden":"true"}},[t._v("#")]),t._v(" [仕様変更] CSV, TSV によるテーブル描画記法")]),t._v(" "),a("h4",{attrs:{id:"before-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 🚫 Before")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("::: tsv\nContent Cell  Content Cell\nContent Cell  Content Cell\n:::\n")])])]),a("h4",{attrs:{id:"after-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#after-3","aria-hidden":"true"}},[t._v("#")]),t._v(" ✅ After")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("``` tsv\nContent Cell  Content Cell\nContent Cell  Content Cell\n```\n")])])]),a("ContextualBlock",{attrs:{context:"docs-growi-org"}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("以前の記法を使って保存されたページの内容は、GROWI 本体をアップグレードしても自動では変更されません。"),a("br"),t._v("\nマークダウン文書を一括で新しい記法に書き換えるためのディスカッションを確認してください。"),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/weseek/growi/discussions/7180",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/weseek/growi/discussions/7180"),a("OutboundLink")],1)])])]),t._v(" "),a("h3",{attrs:{id:"仕様変更-数式描画ライブラリ"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仕様変更-数式描画ライブラリ","aria-hidden":"true"}},[t._v("#")]),t._v(" [仕様変更] 数式描画ライブラリ")]),t._v(" "),a("p",[t._v("数式描画のためのライブラリが、"),a("a",{attrs:{href:"https://www.mathjax.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MathJax"),a("OutboundLink")],1),t._v(" から "),a("a",{attrs:{href:"https://katex.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("KaTeX"),a("OutboundLink")],1),t._v(" に変更されました。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("例えば、"),a("code",[t._v("$～～$")]),t._v(" という記法は MathJax でもインライン数式として使えましたが、KaTex では "),a("code",[t._v("$")]),t._v(" と "),a("code",[t._v("$")]),t._v(" の間に空白があっても処理が渡るようになっています。"),a("code",[t._v("$")]),t._v(" を特殊文字ではなくそのまま使用したい場合は、"),a("code",[t._v("\\$")]),t._v(" のようにエスケープするなどしてください。")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("以前の記法を使って保存されたページの内容は、GROWI 本体をアップグレードしても自動では変更されません。"),a("br"),t._v("\nまた、一括で KaTeX 記法に書き換えるための手法を提供する予定はありませんのでご注意ください。")])]),t._v(" "),a("h3",{attrs:{id:"仕様変更-プレゼンテーション表示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仕様変更-プレゼンテーション表示","aria-hidden":"true"}},[t._v("#")]),t._v(" [仕様変更] プレゼンテーション表示")]),t._v(" "),a("p",[t._v("プレゼンテーション表示時のページ区切り文字列が「水平方向の罫線 "),a("code",[t._v("---")]),t._v("」のみに変更されました。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("以前の記法を使って保存されたページの内容は、GROWI 本体をアップグレードしても自動では変更されません。"),a("br"),t._v("\nまた、一括でページ区切り文字列を書き換えるための手法を提供する予定はありませんのでご注意ください。")])]),t._v(" "),a("h3",{attrs:{id:"廃止を伴う仕様変更-脚注のインライン記法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#廃止を伴う仕様変更-脚注のインライン記法","aria-hidden":"true"}},[t._v("#")]),t._v(" [廃止を伴う仕様変更] 脚注のインライン記法")]),t._v(" "),a("p",[t._v("v5.x 以前に存在していた以下の脚注記法は廃止されました。")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[t._v("文章内に [^インラインで注釈文章を追加] します\n")])])]),a("h3",{attrs:{id:"廃止を伴う仕様変更-growi-独自記法のページリンク"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#廃止を伴う仕様変更-growi-独自記法のページリンク","aria-hidden":"true"}},[t._v("#")]),t._v(" [廃止を伴う仕様変更] GROWI 独自記法のページリンク")]),t._v(" "),a("p",[t._v("v5.x 以前に存在していた以下の独自記法は廃止されました。")]),t._v(" "),a("p",[a("code",[t._v("[/Sandbox/Math]")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("代わりに、以下の記法のどれかを利用してください。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("[[/Sandbox/Math]]")])]),t._v(" "),a("li",[a("code",[t._v("[[Label>/Sandbox/Math]]")])]),t._v(" "),a("li",[a("code",[t._v("[Label](/Sandbox/Math)")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("以前の記法を使って保存されたページの内容は、GROWI 本体をアップグレードしても自動では変更されません。"),a("br"),t._v("\nマークダウン文書を一括で新しい記法に書き換えるためのディスカッションを確認してください。"),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/weseek/growi/discussions/7180",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/weseek/growi/discussions/7180"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"未実装-blockdiag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#未実装-blockdiag","aria-hidden":"true"}},[t._v("#")]),t._v(" [未実装] blockdiag")]),t._v(" "),a("p",[t._v("blockdiag 記法での図表を描く機能は 2023.06 時点で実装する予定はありません。")]),t._v(" "),a("h3",{attrs:{id:"未実装-ページドラフト一覧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#未実装-ページドラフト一覧","aria-hidden":"true"}},[t._v("#")]),t._v(" [未実装] ページドラフト一覧")]),t._v(" "),a("p",[a("code",[t._v("/me/drafts")]),t._v(" にアクセスすることで閲覧可能だったページドラフト機能は 2023.01 時点で未実装です。")]),t._v(" "),a("p",[t._v("こちらは localStorage に保存される機能でしたが、今後データベースに保存する機能として再実装を予定しています。")]),t._v(" "),a("h3",{attrs:{id:"未実装-廃止検討中-「bootstrap-4-グリッドを作成」モーダル"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#未実装-廃止検討中-「bootstrap-4-グリッドを作成」モーダル","aria-hidden":"true"}},[t._v("#")]),t._v(" [未実装(廃止検討中)] 「Bootstrap 4 グリッドを作成」モーダル")]),t._v(" "),a("p",[t._v("編集画面から Bootstrap 4 の Grid の HTML を挿入できる機能は 2023.01 時点で未実装であり、廃止を検討しています。")]),t._v(" "),a("h2",{attrs:{id:"アップグレード前にチェックすべきこと"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#アップグレード前にチェックすべきこと","aria-hidden":"true"}},[t._v("#")]),t._v(" アップグレード前にチェックすべきこと")]),t._v(" "),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 廃止される nocdn 版を常用していないか")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" XSS 対策設定で独自のタグ・属性をホワイトリストに登録していないか")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 廃止される カスタム HTML Header を利用していないか")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 廃止される Twitter OAuth 2 認証機構を利用していないか")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" Draw.io (Diagrams.net) 記法変更について\n"),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" ユーザーに周知をしたか")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 既存のページ内容について、今後の書き換えの戦略は決定したか")])])]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" PlantUML 記法変更について\n"),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" ユーザーに周知をしたか")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 既存のページ内容ついて、今後の書き換えの戦略は決定したか")])])]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" CSV, TSV によるテーブル描画の記法変更について\n"),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" ユーザーに周知をしたか")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 既存のページ内容ついて、今後の書き換えの戦略は決定したか")])])]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" プレゼンテーション表示のページ区切り文字列変更について\n"),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" ユーザーに周知をしたか")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 既存のページ内容ついて、今後の書き換えの戦略は決定したか")])])]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 廃止、または未実装の機能について\n"),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 以下の機能が利用不可能な状態で v6.0 にアップグレードしても問題ないか\n"),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 脚注のインライン記法")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" GROWI 独自記法のページリンク")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" blockdiag")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" ページドラフト一覧")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 「Bootstrap 4 グリッドを作成」モーダル")])])]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" ユーザーに周知をしたか")])])])])],1)},[],!1,null,null,null);s.default=i.exports}}]);