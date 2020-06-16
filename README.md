
# Getting stated

1. Clone this repo

2. Get a [personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)
with `public_repo` and `user` scopes enabled

3. Find and replace `<YOUR-GH-TOKEN>` with your token

4. `npm install`

5. `ng serve`

6. visit <http://localhost:4200>


### Useful commands

To run code generation again manually:
```sh
npm run generate
```

To run start codegen in watch mode:
```sh
npx graphql-codegen --watch "src/graphql/**/*.graphql"
```

# Info

* This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

* The [apollo-angular](https://www.apollographql.com/docs/angular/) was added using Schematics:
```sh
ng add apollo-angular
```

* [Apollo GraphQL](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo) VSCode extension is configured for intellisense

* [GraphQL code generator](https://graphql-code-generator.com/) is used for codegen

* [Apollo Client Developer Tools](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm) is highly recommended