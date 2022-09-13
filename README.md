# website_template_vuepress_v2_theme_hope


[link](https://vuepress-theme-hope.github.io/v2/guide/get-started/install.html)

```
npm init vuepress-theme-hope@next src
```

`src/.vuepress/theme.ts`
```js
encrypt: {
    global: true,
    admin: 'baozi',
    config: {
        "/guide/encrypt.html": ["1234"],
    },
},
```


`src/.vuepress/config.ts`
```js
  base: "/website_template_vuepress_v2_theme_hope/",
  dest: './docs',
```