# Gatsby THEME AFFILIATE — by kuworking

![npm](https://img.shields.io/npm/v/kuworking-theme-affiliate?style=flat-square)

This is the starter of Gatsby kuworking THEME AFFILIATE, which itself uses the kuworking theme [CORE](https://github.com/kuworking/gatsby-theme-kuworking-core)

You can find the demo of the theme [here](https://www.kuworking.com/themes/affiliate) and other themes by kuworking [here](https://www.kuworking.com/themes)

You can find me on [twitter](https://twitter.com/intent/follow?screen_name=kuworking)

## 🚀 In one sentence

- Grid page based on simple json files with a **MASONRY** effect based on css grid and JavaScript

## 🔥 How to Use

### As standalone

- `gatsby new one https://github.com/kuworking/kuworking-theme-affiliate`
- `cd new one`
- `gatsby develop`

And explore your site at `http://localhost:8000`

### As a gatsby theme

Install the theme package (not the starter)

- `yarn add gatsby-theme-kuworking-affiliate`

And add the theme in your website `gatsby-config.js`

```js
plugins: [
  {
    resolve: `gatsby-theme-kuworking-affiliate`,
    options: {
      standalone: false,
      basePath: '/tienda/',
      jsonPath: '/content/json',
    },
  },
]
```

## 🖖 The Site

These themes are hosted in [www.kuworking.com](https://www.kuworking.com), a site about GatsbyJS and WordPress (in Spanish 🌞)

Feel free to come anytime you want 🙋‍♂️

## 📻 Newsletter

If you want to suscribe to my newsletter (in Spanish), you are very welcomed, you can find the form [here](https://www.kuworking.com/list)
