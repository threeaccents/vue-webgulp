# Introduction

A seed project for Vuejs, Webpack, and Gulp.

It is something similar to the Vuejs Vue loader example but it uses Gulp.

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 3.x.x.

```bash
git clone https://github.com/rodzzlessa24/vue-webgulp.git
cd vue-webgulp
npm install   # or `npm run reinstall` if you get an error
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
│   │   |── Home.vue
│   │   └── App.vue
│   ├── index.html
│   └── services
│       ├── name_list.ts
│       └── name_list_spec.ts
├── dist
│   |── js
│   |   └── app.js
│   |── index.html
├── gulpfile.js
├── webpack.config.js
├── package.json
```

# License

MIT
