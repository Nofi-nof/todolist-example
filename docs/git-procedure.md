#### git でリポジトリを作成する手順

<br>

##### github でリモートリポジトリを作成する場合

1. github でリポジトリを作成
2. ターミナルでローカルにリポジトリをクローン

```
git clone [追加するリポジトリ]
```

3. add,commit,push する
   <br>

##### ローカルでファイルを作成した後リモートリポジトリにつなげる場合

1. git 管理したいフォルダに移動して、ローカルでリポジトリを作成

```
git init
```

2. リモートリポジトリとつなげる

```
git remote add [追加するリモートリポジトリ名] [追加するリポジトリ]
```

<br>

##### 困った現象と解決方法

- ###### Git の初期設定時に master から main へ branch 名を変更できない[^1]

  → リポジトリが空だとブランチの作成やブランチ名の変更ができないため、README、または任意のファイルを作成し、add,commit,push すると良い。

- ###### 追加したディレクトリが git に認識されない[^2]

  → 対象のリポジトリ配下に.git ファイルがないか確認する。見つけたら.git ファイルを削除。

  ```
  rm -rf .git 　
  ```

  <br>

[^1]:
    Git の初期設定時に master から main へ branch 名を変更できない場合の対処法
    https://qiita.com/ststs/items/6e7773aa33107652e69e

[^2]:
    Git で変更、追加したファイルが認識されないときに確認すべきこと
    https://chico-shikaku.com/2020/08/git-ignore-add-or-change-file/#

##### git コマンドメモ

- ブランチの作成と移動[^3]

```
git switch -c [作成・移動したいbranch 名]　
```

[^3]:
    git checkout の代替としてリリースされた git switch と git restore
    https://kakakakakku.hatenablog.com/entry/2020/04/08/151627
