# Gatsby THEME AFFILIATE — by kuworking

![npm](https://img.shields.io/npm/v/kuworking-theme-affiliate?style=flat-square)

This is the starter of Gatsby kuworking THEME AFFILIATE, which itself uses the kuworking theme [CORE](https://github.com/kuworking/gatsby-theme-kuworking-core)

You can find the demo of the theme [here](https://www.kuworking.com/themes/affiliate) and other themes by kuworking [here](https://www.kuworking.com/themes)

And my [twitter](https://twitter.com/intent/follow?screen_name=kuworking)

## 🚀 Characteristics

- Grid page based on simple json files
- Grid with a **MASONRY** effect based on css grid and JavaScript, used to adjust the height of the cards based on the content
- Usable standalone or in combination with other themes, where it will create a page with the grid
- This theme is thought as a way to show images, text and a link, with a direct application as an affiliate single web page
- Uses theme-UI
- It can optionally configure google tag manager, sitemap, robots, manifest and Progressive Web Application, with the option to disable it (in case another theme takes care of this)

## 🗄️ Relevant Dependencies

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

## 🎬 Items of the Grid

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

The image can be an external link, otherwise it looks for images in your gatsbyJS static folder

## 🎬 How to organize the items?

If you do not want to display `bags` and `tech`, you need to shadow the file `components/items.js`

1. Create it in `/src/gatsby-theme-kuworking-affiliate/components/items.js

The original file (you can find it [here](https://github.com/kuworking/gatsby-theme-kuworking-affiliate/blob/master/src/components/items.js) has this code:

```js
import React from 'react'
import styled from '@emotion/styled'

import { Card } from 'gatsby-theme-kuworking-affiliate'

export const Items = ({ pieces: { grid_gap, gridAutoRows, data, assignRef, adjustMasonry, shape } }) => (
  <>
    <Title>BAGS</Title>
    <Container row_unit={gridAutoRows} grid_gap={grid_gap}>
      {data.bags.map((item, i) => (
        <Card
          key={'bags' + i}
          item={item}
          category="bags"
          adjustMasonry={adjustMasonry}
          ref={assignRef}
          shape={shape}
        />
      ))}
    </Container>

    <Title>TECH</Title>
    <Container row_unit={gridAutoRows} grid_gap={grid_gap}>
      {data.tech.map((item, i) => (
        <Card
          key={'tech' + i}
          item={item}
          category="tech"
          adjustMasonry={adjustMasonry}
          ref={assignRef}
          shape={shape}
        />
      ))}
    </Container>
  </>
)

const Container = styled.div`
  width: 100%;
  transition: all 0.5s ease;

  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: ${props => props.grid_gap}px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: ${props => props.row_unit}px;
`

const Title = styled.h1``
```

The parts you will want to change are

```js
    <Title>YOUR_ITEMS</Title>
    {data.YOUR_ITEMS.map((item, i) => ())}
```

## 🏙 The Site

These themes are hosted in [www.kuworking.com](https://www.kuworking.com), a site about GatsbyJS and WordPress (in Spanish 🌞)

Feel free to come anytime you want 🙋‍♂️

## 📻 Newsletter

And if you want to suscribe to my newsletter (in Spanish), you are very welcomed, you can find the form [here](https://www.kuworking.com/list)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kuworking/kuworking-theme-affiliate)

