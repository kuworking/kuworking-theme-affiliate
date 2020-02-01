# Gatsby THEME AFFILIATE — by kuworking

This is the starter of Gatsby kuworking THEME AFFILIATE, which itself uses the kuworking [THEME CORE](https://github.com/kuworking/gatsby-theme-kuworking-core)

You can find the demo of the theme [here](https://www.kuworking.com/themes/affiliate) and other themes by kuworking [here](https://www.kuworking.com/themes)

## Characteristics

- Grid page based on simple json files
- Grid with masonry effect based on css grid and JavaScript, used to adjust the height of the cards based on the content
- Usable standalone or in combination with other themes, where it will create a page with the grid
- This theme is thought as a way to show images, text and a link, with a direct application in affiliate single web pages
- Uses theme-UI
- It can optionally configure google tag manager, sitemap, robots, manifest and Progressive Web Application, ideally if used as a complement to your site this would not be enabled

## Relevant Dependencies

- @emotion
- gatsby-image
- gatsby-plugin-google-tagmanager
- gatsby-plugin-manifest
- gatsby-plugin-offline
- gatsby-plugin-robots-txt
- gatsby-plugin-sharp
- gatsby-plugin-sitemap
- react-helmet
- theme-ui

## Usage

### As standalone

- `gatsby new one https://github.com/kuworking/kuworking-theme-affiliate`
- `cd new one`
- `gatsby develop`

And explore your site at `http://localhost:8000`

### As a gatsby theme

Install the package

- `yarn add gatsby-theme-kuworking-affiliate`

And add the theme in your website `gatsby-config.js`

```js
plugins: [
  {
    resolve: `gatsby-theme-kuworking-affiliate`,
    options: {
      standalone: false,
      basePath: '/',
      path: `content/json`,
    },
  },
]
```

## Specifics of the theme

Store your json files in the `content/json` folder (unless you have changed this above)

The json structure should be like this

```
[
  { "category": "the category", "description": "the description" },
  {
    "name": "the product",
    "link": "the affiliate link",
    "image": "/yourimage.jpg",
    "price": "the price"
  },
  // ...
]
```

The image can be an external link, otherwise it looks for images in your static folder

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kuworking/kuworking-theme-affinity)
