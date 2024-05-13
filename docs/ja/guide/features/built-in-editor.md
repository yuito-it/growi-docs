# ビルトインエディターによる同時多人数編集 (v7.x 以降)

::: tip
v6.x をお使いのユーザーは [HackMD で同時に多人数で編集する](/ja/guide/features/hackmd.html) を参照してください。
:::
<!-- textlint-disable weseek/max-kanji-continuous-len -->
v7.x からは HackMD が廃止されページモードが View / Edit の2種類になりました。標準で同時多人数編集機能が備わっており、Edit ボタンを押すことですぐに同時多人数編集を開始できます。

<img :src="$withBase('/assets/images/ja/built-in-editor-1.png')" alt="built-in-editor-1">

## ページを更新する

エディター右下の「更新」ボタンを押すか、ショートカットキー (Windows: `Ctrl + S`、Mac: `Command + S`)を押すことでページの保存ができます。
更新されたページの変更履歴の確認方法は [ページの更新履歴を確認する](/ja/guide/features/history.html) を参照してください。

## ドラフトを作成する

エディターでの編集内容はドラフト(下書き)データとして自動でサーバーに保存されます。ページを更新せずに離脱してもそのページのドラフトは残り続けます。

## ページ更新時の注意点

<!-- textlint-disable weseek/no-doubled-joshi -->
以下のアラートが出ている場合、ページの更新手段によってはページの更新ができない場合があります。アラート内の「最新版を読み込む」ボタンをクリックするかページをリロードすることでページの最新化ができます。

<img :src="$withBase('/assets/images/ja/built-in-editor-2.png')" alt="built-in-editor-2">

ページ本文の更新中に、他ユーザーによるページの更新が発生した際にはコンフリクトが発生します。コンフリクトの解消方法は [コンフリクトを解消する](/ja/guide/features/built-in-editor.html#コンフリクトを解消する) を参考にしてください。


## コンフリクトを解消する

以下のケースの際にコンフリクトが発生します。

- 古いページデータのまま View からページを更新しようとした場合
- エディターで執筆中に View 又は API から更新があった場合
- サーバー上にあるページデータの最終更新手段が API の時にエディターで更新しようとした場合

### コンフリクトの解消法1

コンフリクトが発生するとエディター下部にアラートが表示されます。アラート内の「衝突を解消」ボタンを押すことでコンフリクト解消モーダルが表示されます。

<img :src="$withBase('/assets/images/ja/built-in-editor-3.png')" alt="built-in-editor-3">

モーダルの左上のエディターには執筆中のマークダウン、右上のエディターにはサーバー上に存在するページデータが表示されます。いずれかを選択することでモーダル中央のエディターに選択したマークダウンが表示されます。この中央のエディターは編集可能なので文字を書き加えたり削除が可能です。編集が完了したら右下の「解消し保存する」ボタンを押すとこでコンフリクトを解消できます。

<img :src="$withBase('/assets/images/ja/built-in-editor-4.png')" alt="built-in-editor-4">


### コンフリクト解消方法２

ページをリロードすることでコンフリクトを解消できます。ただし View で執筆中のデータがある時にリロードすると執筆中のデータが失われてしまうため、できるだけコンフリクト解消法1を利用することをお勧めします。