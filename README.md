#Note

I've created a CLI tool for scaffolding new projects generating components, services, and mixins. [VueGoCli](https://github.com/rodzzlessa24/vue-go-cli)

# Introduction

A seed project for Vuejs, Webpack, and Gulp.

It is something similar to the Vuejs Vue loader example but it uses Gulp.

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 3.x.x.

```bash
git clone https://github.com/rodzzlessa24/vue-webgulp.git
cd vue-webgulp
npm i   # or `npm run reinstall` if you get an error
gulp     # start app
```
_Does not rely on any global dependencies._

# Directory Structure

```
.
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── src
│   ├── components
│   │   ├── About.Vue
│   │   |── App.vue
│   │   |── Home.vue
│   │   └── Quote.vue
│   |── services
│   |    └── quote
|   |       └── index.js
│   ├── app.scss
│   ├── index.html
│   ├── main.js
|   └── variables.scss
├── gulpfile.js
├── webpack.config.js
└── package.json
```

# License

MIT
