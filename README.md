# practive-svelte

Software Design 2023年7月号の SvelteでJamstack開発 の内容を参考に作成したプロジェクトです

# Requirement

- Python 2.x

# Installation

```
cd ./jamstack
npm install
npm install -g yarn

yarn add -D vitest
npm i -D @sveltejs/adapter-static
```

# Usage

動作確認

```
npm run dev
```

SSGの動作確認

```
yarn build
python -m SimpleHTTPServer 8000
```
