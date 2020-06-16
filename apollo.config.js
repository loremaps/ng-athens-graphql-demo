module.exports = {
    client: {
      service: {
        name: 'github-graphql',
        url: "https://api.github.com/graphql",
        headers: {
            authorization: 'Bearer <YOUR-GH-TOKEN>'
        },
        skipSSLValidation: true
      },
      includes: ['./src/graphql/**/*.graphql']
    },
  };
  