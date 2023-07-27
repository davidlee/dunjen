# dunjen

Install:

clone the repo and set up your environment

```shell
git clone https://github.com/davidlee/dunjen.git
cd dunjen
npm ci && npm run test
npm run dev &
chmod +x ./dist/cli.js
./dist/cli.js
```

This TypeScript project uses [Ink](https://github.com/vadimdemedes/ink), React for the CLI.

It is based on [the starter kit](https://github.com/vadimdemedes/create-ink-app).

The [React Devtools](https://github.com/facebook/react/tree/master/packages/react-devtools) may be useful.

It Works For Me™ using:

- zsh
- direnv
- asdf (nodejs: 20.4.0) +asdf-direnv
- brew (git, curl)
