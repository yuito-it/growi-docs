(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{513:function(e,a,t){"use strict";t.r(a);var s=t(48),r=Object(s.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"centos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos","aria-hidden":"true"}},[e._v("#")]),e._v(" CentOS")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("この記事は公開されてから時間が経っています。")])]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#概要"}},[e._v("概要")])]),t("li",[t("a",{attrs:{href:"#node-js-8-x-npm-のインストール"}},[e._v("node.js 8.x & npm のインストール")])]),t("li",[t("a",{attrs:{href:"#elasticsearch"}},[e._v("Elasticsearch")])]),t("li",[t("a",{attrs:{href:"#mongodb"}},[e._v("MongoDB")])]),t("li",[t("a",{attrs:{href:"#growi"}},[e._v("GROWI")])]),t("li",[t("a",{attrs:{href:"#リバースプロキシの設定"}},[e._v("リバースプロキシの設定")])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"概要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概要","aria-hidden":"true"}},[e._v("#")]),e._v(" 概要")]),e._v(" "),t("p",[e._v("この章ではCentOS 7にGROWIをインストールする方法を紹介します。CentOS 6は現在未検証です。")]),e._v(" "),t("p",[e._v("セットアップに必要となるソフトウェアは以下の通りです。")]),e._v(" "),t("ul",[t("li",[e._v("node.js 8.x (DO NOT USE 9.x)")]),e._v(" "),t("li",[e._v("npm 6.x")]),e._v(" "),t("li",[e._v("yarn")]),e._v(" "),t("li",[e._v("MongoDB 3.x")]),e._v(" "),t("li",[e._v("(Optional) Elasticsearch 5.x")]),e._v(" "),t("li",[e._v("(Optional) systemd")]),e._v(" "),t("li",[e._v("(Optional) Apache or nginx")])]),e._v(" "),t("p",[e._v("Optional となっているものは必須ではありません。ただし、本項ではこれら全てを利用し、全文検索できる GROWI を Apache or nginx でリバースプロキシする環境を構築し、systemd でホストと同時に起動させる方法を説明します。\n")]),e._v(" "),t("h2",{attrs:{id:"node-js-8-x-npm-のインストール"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js-8-x-npm-のインストール","aria-hidden":"true"}},[e._v("#")]),e._v(" node.js 8.x & npm のインストール")]),e._v(" "),t("h3",{attrs:{id:"nodesource-repository-を利用する"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodesource-repository-を利用する","aria-hidden":"true"}},[e._v("#")]),e._v(" NodeSource repository を利用する")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://rpm.nodesource.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://rpm.nodesource.com/"),t("OutboundLink")],1),e._v("からNode.js のインストールスクリプトを取得します。作業ディレクトリはホームディレクトリです。\n")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cd ~\n$ curl -sL https://rpm.nodesource.com/setup_8.x -o nodesource_setup.sh\n")])])]),t("p",[e._v("取得したスクリプトを実行します。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo bash nodesource_setup.sh\n")])])]),t("p",[e._v("これにより "),t("code",[e._v("yum")]),e._v(" 経由で node.js が取得できるようになったので、 "),t("code",[e._v("yum")]),e._v(" コマンドでインストールを行います。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo yum install -y nodejs\n")])])]),t("p",[e._v("GROWI では yarn を用いたパッケージインストールを利用するため、ここで "),t("code",[e._v("yarn")]),e._v(" コマンドをインストールしておきます。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo\n$ sudo yum install -y yarn\n")])])]),t("p",[e._v("Node.js, npm, yarn のインストールが完了したら、インストールしたバージョンを確認しましょう。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ node -v\nv8.15.1\n$ npm -v\n6.4.1\n$ yarn -v\n1.15.2\n")])])]),t("h2",{attrs:{id:"elasticsearch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch","aria-hidden":"true"}},[e._v("#")]),e._v(" Elasticsearch")]),e._v(" "),t("h3",{attrs:{id:"インストール"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#インストール","aria-hidden":"true"}},[e._v("#")]),e._v(" インストール")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/rpm.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("公式ページ"),t("OutboundLink")],1),e._v(" に従い、インストールを進めます。 ここでは Elasticsearch 5.x をインストールするために若干の修正をしています。")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("このドキュメントは古くなっています。現在の GROWI がサポートする Elasticsearch の最新版は 6.x 系です (2019年05月時点)")])]),e._v(" "),t("p",[e._v("まず、 Elasticsearch を実行できるように JDK8 をインストールします。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo yum install java-1.8.0-openjdk\n")])])]),t("p",[e._v("パッケージをインストールするために、Elasticsearch レポジトリの GPG キーを追加します。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch\n")])])]),t("p",[e._v("Elasticsearch のレポジトリを追加します。以下の内容を"),t("code",[e._v("/etc/yum.repos.d/elasticsearch.repo")]),e._v(" に書き込みます。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[elasticsearch-5.x]\nname=Elasticsearch repository for 5.x packages\nbaseurl=https://artifacts.elastic.co/packages/5.x/yum\ngpgcheck=1\ngpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch\nenabled=1\nautorefresh=1\ntype=rpm-md\n")])])]),t("p",[e._v("これで、yum 経由で Elasticsearch がインストールできるようになったため、インストールを行います。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo yum install -y elasticsearch\n")])])]),t("p",[e._v("インストールが完了したら、Elasticsearch に割り当てるメモリを調整します。メモリの割り当ては個人ユースであれば 256MB で十分です。チーム規模、ページの量に応じて変更してください。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo vim /etc/elasticsearch/jvm.options\n# 編集前\n-Xms2g\n-Xmx2g\n\n# 編集後\n-Xms256m\n-Xmx256m\n")])])]),t("p",[e._v("インストールが完了したら、 パッケージのバージョンを確認します。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ yum list installed | grep elasticsearch\nelasticsearch.noarch                 5.6.16-1                        @elasticsearch-5.x\n")])])]),t("p",[t("code",[e._v("systemctl")]),e._v(" コマンドを使って、Elasticsearch を起動します。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo systemctl start elasticsearch\n")])])]),t("p",[e._v("elsticsearch の自動起動設定を有効化します。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo systemctl enable elasticsearch\n")])])]),t("p",[e._v("正常に起動しているか確認します。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo systemctl status elasticsearch\n")])])]),t("h3",{attrs:{id:"growi-に必要な-elasticsearch-プラグインのインストール"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#growi-に必要な-elasticsearch-プラグインのインストール","aria-hidden":"true"}},[e._v("#")]),e._v(" GROWI に必要な Elasticsearch プラグインのインストール")]),e._v(" "),t("p",[e._v("以下の Elasticsearch plugin をインストールします。")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-kuromoji.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Japanese (kuromoji) Analysis plugin"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ICU Analysis Plugin"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("まずは、Elasticsearch plugin をインストールするために利用するコマンドを検索します。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ rpm -ql elasticsearch | grep bin | grep plugin\n/usr/share/elasticsearch/bin/elasticsearch-plugin\n")])])]),t("p",[e._v("上記で出力されたコマンドを利用して、 analysis-kuromoji plugin と analysis-icu plugin をインストールします。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# analysis-kuromoji のインストール\n$ sudo /usr/share/elasticsearch/bin/elasticsearch-plugin install analysis-kuromoji\n\n# analysis-icu plugin のインストール\n$ sudo /usr/share/elasticsearch/bin/elasticsearch-plugin install analysis-icu\n")])])]),t("h2",{attrs:{id:"mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongodb","aria-hidden":"true"}},[e._v("#")]),e._v(" MongoDB")]),e._v(" "),t("h3",{attrs:{id:"インストール-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#インストール-2","aria-hidden":"true"}},[e._v("#")]),e._v(" インストール")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.mongodb.com/v3.6/tutorial/install-mongodb-on-red-hat/",target:"_blank",rel:"noopener noreferrer"}},[e._v("公式ページ"),t("OutboundLink")],1),e._v(" に従ってインストールを実施します。 バージョンは、MongoDB 3.6 です。")]),e._v(" "),t("p",[e._v("レポジトリを追加します。 "),t("code",[e._v("/etc/yum.repos.d/mongodb-org-3.6.repo")]),e._v(" を作成し、以下の内容を書き込みます。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[mongodb-org-3.6]\nname=MongoDB Repository\nbaseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.6/x86_64/\ngpgcheck=1\nenabled=1\ngpgkey=https://www.mongodb.org/static/pgp/server-3.6.asc\n")])])]),t("p",[e._v("これで、yum 経由で MongoDB がインストールできるようになったため、インストールを行います。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo yum install -y mongodb-org\n")])])]),t("p",[e._v("インストールが完了したら、 パッケージのバージョンを確認します。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ yum list installed | grep mongodb\nmongodb-org.x86_64                   3.6.11-1.el7               @mongodb-org-3.6\nmongodb-org-mongos.x86_64            3.6.11-1.el7               @mongodb-org-3.6\nmongodb-org-server.x86_64            3.6.11-1.el7               @mongodb-org-3.6\nmongodb-org-shell.x86_64             3.6.11-1.el7               @mongodb-org-3.6\nmongodb-org-tools.x86_64             3.6.11-1.el7               @mongodb-org-3.6\n")])])]),t("p",[t("code",[e._v("systemctl")]),e._v(" コマンドを使って、MongoDB を起動します。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo systemctl start mongod\n")])])]),t("p",[e._v("MongoDB の自動起動設定を有効化します。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo systemctl enable mongod\n")])])]),t("p",[e._v("正常に起動しているか確認します。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo systemctl status mongod\n")])])]),t("h2",{attrs:{id:"growi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#growi","aria-hidden":"true"}},[e._v("#")]),e._v(" GROWI")]),e._v(" "),t("h3",{attrs:{id:"インストール-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#インストール-3","aria-hidden":"true"}},[e._v("#")]),e._v(" インストール")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/weseek/growi",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/weseek/growi"),t("OutboundLink")],1),e._v(" からソースコードを取得し、"),t("a",{attrs:{href:"https://github.com/weseek/growi/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/weseek/growi/releases"),t("OutboundLink")],1),e._v(" にて、最新の安定版のバージョンを確認します。")]),e._v(" "),t("p",[e._v("ここでは "),t("code",[e._v("/opt/growi")]),e._v(" 配下にインストールする手順を記載しています。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo mkdir -p /opt/\n$ cd /opt/\n$ sudo git clone https://github.com/weseek/growi /opt/growi\n$ cd /opt/growi\n\n# タグの確認\n$ sudo git tag -l\n...\nv3.3.7\nv3.3.8\nv3.3.9\nv3.4.0\nv3.4.1\nv3.4.2\n...\n\n# RC がついていない最新版を利用\n$ sudo git checkout -b v3.4.2 refs/tags/v3.4.2\n")])])]),t("p",[e._v("ソースコードを clone した後に、"),t("code",[e._v("yarn")]),e._v(" コマンドを利用して、 GROWI に必要なパッケージをインストールします。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cd /opt/growi\n$ sudo yarn\n")])])]),t("h3",{attrs:{id:"起動確認"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#起動確認","aria-hidden":"true"}},[e._v("#")]),e._v(" 起動確認")]),e._v(" "),t("p",[e._v("パッケージのインストールが完了したら、起動確認を行います。")]),e._v(" "),t("p",[e._v("ここでは MongoDB と Elasticsearch が同一ホストで稼働していることを前提としています。")]),e._v(" "),t("p",[t("code",[e._v("MONGO_URI")]),e._v(" と "),t("code",[e._v("ELASTICSEARCH_URI")]),e._v(" は環境に合わせて適宜書き換えてください。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo \\\nMONGO_URI=mongodb://localhost:27017/growi \\\nELASTICSEARCH_URI=http://localhost:9200/growi \\\nnpm start\n\n...\n# 以下のメッセージが表示されるまでしばらく待つ\n> growi@3.1.9 server:prod /opt/growi\n> env-cmd config/env.prod.js node app.js\n")])])]),t("p",[t("code",[e._v("http://<hostname or ip address>:3000/")]),e._v(" にアクセスし、初回セットアップ画面が表示されることを確認します。")]),e._v(" "),t("h3",{attrs:{id:"systemd-による自動起動の設定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#systemd-による自動起動の設定","aria-hidden":"true"}},[e._v("#")]),e._v(" systemd による自動起動の設定")]),e._v(" "),t("p",[e._v("「"),t("RouterLink",{attrs:{to:"/ja/admin-guide/admin-cookbook/launch-with-systemd.html"}},[e._v("systemd による自動起動")]),e._v("」を参照してください。")],1),e._v(" "),t("h2",{attrs:{id:"リバースプロキシの設定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#リバースプロキシの設定","aria-hidden":"true"}},[e._v("#")]),e._v(" リバースプロキシの設定")]),e._v(" "),t("p",[e._v("ここでは、起動した GROWI に対してリバースプロキシを行うための設定例を記載します。")]),e._v(" "),t("h3",{attrs:{id:"apache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apache","aria-hidden":"true"}},[e._v("#")]),e._v(" Apache")]),e._v(" "),t("h4",{attrs:{id:"インストール-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#インストール-4","aria-hidden":"true"}},[e._v("#")]),e._v(" インストール")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo yum install httpd\n")])])]),t("h4",{attrs:{id:"リバースプロキシの設定例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#リバースプロキシの設定例","aria-hidden":"true"}},[e._v("#")]),e._v(" リバースプロキシの設定例")]),e._v(" "),t("p",[e._v("ここではリバースプロキシに関する箇所を抜粋して記載しています。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<IfModule mod_ssl.c>\n  <VirtualHost _default_:443>\n    ...\n    ###\n    # reverse proxy to crowi\n    # Header に Host: example.com を追加するため\n    ProxyPreserveHost On\n    # HTTPS利用時: Header に x-forwarded-proto: https を追加するため\n    RequestHeader set x-forwarded-proto 'https'\n    # Apache では static assets で 304 が返らないことがあるので ETag を無効化する\n    <ifModule mod_headers.c>\n            Header unset ETag\n    </ifModule>\n    FileETag None\n\n    # socket.io の path を rewrite する\n    RewriteEngine On\n    RewriteCond %{REQUEST_URI}  ^/socket.io            [NC]\n    RewriteCond %{QUERY_STRING} transport=websocket    [NC]\n    RewriteRule /(.*) ws://localhost:3000/$1 [P,L]\n\n    ProxyPass / http://localhost:3000/\n    ProxyPassReverse / http://localhost:3000/\n    ...\n  </VirtualHost>\n</IfModule>\n")])])]),t("h4",{attrs:{id:"自動起動の設定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自動起動の設定","aria-hidden":"true"}},[e._v("#")]),e._v(" 自動起動の設定")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo systemctl enable httpd\n")])])]),t("h3",{attrs:{id:"nginx-のインストールと設定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-のインストールと設定","aria-hidden":"true"}},[e._v("#")]),e._v(" Nginx のインストールと設定")]),e._v(" "),t("h4",{attrs:{id:"インストール-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#インストール-5","aria-hidden":"true"}},[e._v("#")]),e._v(" インストール")]),e._v(" "),t("p",[e._v("nginx のレポジトリを追加します。"),t("code",[e._v("/etc/yum.repos.d/nginx.repo")]),e._v("を作成し、以下の内容を書き込みます。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[nginx]\nname=nginx repo\nbaseurl=http://nginx.org/packages/centos/$releasever/$basearch/\ngpgcheck=0\nenabled=1\n")])])]),t("p",[e._v("これで、yum 経由で nginx がインストールできるようになったため、インストールを行います。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo yum install -y nginx\n")])])]),t("h4",{attrs:{id:"リバースプロキシの設定例-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#リバースプロキシの設定例-2","aria-hidden":"true"}},[e._v("#")]),e._v(" リバースプロキシの設定例")]),e._v(" "),t("p",[t("code",[e._v("/etc/nginx/conf.d/growi.conf")]),e._v(" のようなファイルを作成し、設定を書き込みます。\nここでは HTTPS を利用する設定例を記載しています。 <server> など<>で囲まれている箇所は、適宜環境に合わせて設定してください。")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("upstream growi {\n    server localhost:3000;\n}\n\nmap $http_upgrade $connection_upgrade {\n    default Upgrade;\n    ''      close;\n}\n\nserver {\n    listen 443 ssl spdy;\n    server_name <server>;\n    ssl_certificate <cert_file>;\n    ssl_certificate_key <key_file>;\n\n    location / {\n        proxy_set_header Host $host;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header X-Forwarded-Port $server_port;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_pass http://growi;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection $connection_upgrade;\n        proxy_read_timeout 900s;\n    }\n}\n\nserver {\n    listen 80;\n    server_name <server>;\n    return 301 https://$server_name$request_uri;\n}\n")])])]),t("h4",{attrs:{id:"自動起動の設定-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自動起動の設定-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 自動起動の設定")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ sudo systemctl enable nginx\n")])])])])},[],!1,null,null,null);a.default=r.exports}}]);