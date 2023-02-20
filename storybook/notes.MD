## Setup Steps

```bash
# initialize project
npm init -y

# install react
npm i -D react react-dom

# install ts
sudo npm i typescript -g
npm i -D typescript @types/react

# init ts
tsc --init

# init storybook 
npx sb init
# automatically detects that react and typescript are used in this project
```


## CSS Modules

compile css modules
- prevent issue when importing .css files into .ts files
- create `typings.d.ts` and add it to tsconfig
```
 "include": [
    "./src/typings.d.ts"
  ]
```

### Code Completion
- VSCode Extension https://marketplace.visualstudio.com/items?itemName=clinyong.vscode-css-modules (works after css module is saved)
- and/or https://www.npmjs.com/package/typescript-plugin-css-modules
