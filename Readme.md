# [Front in Sampa 16 - JS <3 Music](http://willianjusten.com.br/frontinsampa-16/)

This Presentation uses [Qualy Boilerplate](https://github.com/Qualy-org/qualy-presenter)

## Getting Started

### Installation

First of all, install the dependencies to run this boilerplate.

- [NodeJS](http://nodejs.org/)
- [GulpJS](http://gulpjs.com/)

```sh
# Clone this repository
$ git clone git@github.com:willianjusten/frontinsampa-16.git
$ cd frontinsampa-16

# install dependencies
$ npm install
# run tasks and serve
$ gulp
```

With the commands above, you have everything to start.

```sh
├── Readme.md
├── build
│   ├── css
│   │   └── main.css
│   ├── img
│   ├── index.html
│   └── js
│       ├── main.js
│       └── vendor
├── gulp
│   ├── index.js
│   ├── paths.js
│   └── tasks
├── gulpfile.js
├── package.json
└── src
    ├── img
    ├── js
    │   ├── main.js
    │   └── vendor
    ├── slides
    ├── styl
    │   ├── highlight-themes
    │   ├── main.styl
    │   ├── reveal-themes
    │   └── vendor
    └── templates
        ├── inc
        │   ├── head.jade
        │   └── scripts.jade
        └── index.jade
```

### How to Use

- Write your slides in `src/slides` folder in separated files using the [jade syntax](http://jade-lang.com/) and add them on `templates/index.jade`.

- If you want to add another scripts and css use the `templates/inc/` folder and call them in the  `templates/index.jade`.

- Look for different themes on [src/styl/reveal-themes](https://github.com/Qualy-org/qualy-presenter/tree/master/src/styl/reveal-themes) and call them on [src/styl/main.styl](https://github.com/Qualy-org/qualy-presenter/blob/master/src/styl/main.styl). 

- For highlight themes you can see on [src/styl/highlight-themes](https://github.com/Qualy-org/qualy-presenter/blob/master/src/styl/highlight-themes/).

### How to use with git and deploy to Github Pages

When you clone this repo, every git information will be downloaded to. So, you have to remove all my git stuff to create yours.

```sh
# Inside of your project runs to remove git folder.
rm -Rf .git
```

Next, initialize your git repository:

```sh
# init the repo
git init
```

Commit all files:

```sh
# add all files to commit
git add .
# create a commit
git commit -m "Initial commit"
```

The first deploy needs to be manual:

```sh
# creates a gh-pages branch
git checkout -b gh-pages

# push and track the gh-pages branch
git push --set-upstream origin gh-pages
```

To do next deploys, you just have to run with gulp:

```sh
# will create a .publish folder with build content
# and push to gh-pages branch.
gulp deploy-pages
```

### Tasks

- `gulp`: Initialize watch for changes and a server(localhost:3000)
- `gulp js`: execute js files
- `gulp notes`: copy speaker notes
- `gulp stylus`: compile stylus files
- `gulp imagemin`:compress image files
- `gulp watch`: call for watch files
- `gulp jade`: compile jade files
- `gulp deploy-pages`: deploy compiled files at `build` to `github` on branch `gh-pages`.

### License

This presentation is free and open source software, distributed under the The MIT License. So feel free to use this to create your site without linking back to me or using a disclaimer.

If you’d like to give me credit somewhere on your blog or tweet a shout out to [@willian_justen](https://twitter.com/willian_justen), that would be pretty sweet.