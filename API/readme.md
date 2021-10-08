# BUY LIST

---

## Inicializar NPM (package.json)

npm init -y

## Dependencias
### dev

npm i -D typescript  <br>
npm i -D eslint <br>
npm i -D ts-node <br>
npm i -D @types/node <br>
npm i -D @typescript-eslint/parser <br>
npm i -D @typescript-eslint/eslint-plugin <br>
npm i -D @types/express <br>
npm i -D @types/body-parser <br>
npm i -D @types/bcrypt <br>
npm i -D @types/jsonwebtoken <br>
npm i -D nodemon <br>
npm i -D @types/multer <br>
npm i -D rimraf => excluir diretorios/arquivos <br>

### Produção

npm i -S express => biblioteca web <br>
npm i -S body-parser => receber dados atraves de json <br>
npm i -S bcrypt => Cryptografia <br>
npm i -S jsonwebtoken => JWT Token <br>
npm i -S sqlite => banco de dados <br>
npm i -S uuid => guid <br>
npm i -S morgan => log <br>
npm i -S multer => receber dados atraves de multipart/form-data (ex. upload de imagens) <br>
npm i -S typeorm => ORM, Banco de Dados, Migrations <br>

<br>

---

## Arquivos de configuração

### TypeScript

Criar um arquivo **tsconfig.json**

```json
{
  "compilerOptions": {
    "module": "CommonJS",
    "esModuleInterop": true,
    "target": "ES6",
    "moduleResolution": "Node",
    "sourceMap": true,
    "outDir": "dist"
  }
}
```

### ESLint

Criar um arquivo com nome **.eslintrc**

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "ignorePatterns": ["node_modules", "dist"],
  "parserOptions": {
    "ecmaVersion": 2020,
    "ecmaFeatures": {
      "arrowFunctions": true
    }
  },
  "rules": {
    // Ver regras no site oficial
    // https://eslint.org/docs/rules/
    "no-console": ["error", { "allow": ["warn", "error"] }],
    "semi": ["off"],
    "no-extra-semi": ["error"],
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "quote-props": ["error", "as-needed"],
    "eol-last": ["error", "always"],
    "linebreak-style": ["error", "windows"],
    "@typescript-eslint/no-explicit-any": ["off", { "ignoreRestArgs": true }],
    "@typescript-eslint/semi": ["off"],
    "@typescript-eslint/no-extra-semi": "error"
  }
}
```

### nodemon

Criar um arquivo com nome **nodemon.json**

```json
{
  "ignore": ["**/*.test.ts", "**/*.spec.ts", ".git", "node_modules"],
  "watch": ["src"],
  "exec": "npm run debug",
  "ext": "ts"
}
```

### package.json (scripts)

Adicionar/Alterar na seção **scripts**

```json
{
  "build": "npm run clean && tsc",
  "start": "npm run build && node ./dist/server.js",
  "debug": "node --inspect=5858 -r ts-node/register ./src/server.ts",
  "watch": "nodemon",
  "clean": "rimraf ./dist",
  "test": "",
  "lint": "eslint ./src --ext .ts",
  "lint:fix": "eslint ./src --ext .ts --fix"
}
```

### Comandos

```json
npm run build ==> Transforma o typescript em javascript na pasta dist
npm run start ==> Executa o 'build' e inicia o app
npm run debug ==> Inicia o app em modo debug
npm run watch ==> Inicia o app em modo debug e escutando alterações (reinicia automaticamente)
npm run test ==> Executa os testes
npm run lint ==> Executa o ESLint
npm run lint:fix ==> Executa a correção apontada pelo ESLint
```

### Estrutura de Pastas

```
root
├ src  #codigo fonte
│  └ controllers
│  │ └ endpoints para o usuario consumir
│  └services
│  │ └ regras de negócio
│  └ interfaces
│  │ └ interfaces padrões
│  └ models
│  │ └ entidades
│  └ middlewares
│  │ └ logger
│  │ └ autenticacao (token jwt)
│  └ data
│  │ └ implementação database (acesso ao banco de dados)
│  │ └ migrations
│  │ │ └ arquivos sql up/down de controle do banco
│  └ routes
│  │ └ definições das rotas
│  └ repositories
│  │ └ implementação de repositorios
│  └ app.ts => configurações da aplicação
│  └ server.ts => configurações servidor http
│  └ environments.ts => configurações de ambiente
│  └ constants.ts => Constantes
├ dist => diretório para distribuição do fonte (typescript -> javascript)
├ .eslintrc
├ tsconfig.json
├ nodemon.json
├ package.json
├ readme.md
├ node_modules
```

<br>

---

## Pendências

- Criar findByListId, que retorna a lista e items
- Criar deleteListItemsById, que ira excluir todos items da lista
- Criar clone da lista e items para uma nova lista
- Marcar/desmarcar todos items como checked
- Marcar/desmarcar lista como archived (sem ser via put do objeto inteiro e sim via patch)
