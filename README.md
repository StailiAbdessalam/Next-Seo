![test](https://raw.githubusercontent.com/bradgarropy/next-seo/HEAD/images/github.png)
## ✅ 1_install next with typescript
```bash
npx create-next-app@latest --ts
# or
yarn create next-app --typescript
# or
pnpm create next-app --ts

```
## ✅ 2_install package nextseo
```bash
npm i next-seo
```
## ✅ 3_add this code a new file <next-seo.config>  
```bash
export default {
  title: "your title",
  description: "your description",
  canonical: "https://www.canonical.ie/",
  openGraph: {
    url: "https://www.url.ie/a",
    title: "Open Graph Title",
    description: "Open Graph Description",
    images: [
      {
        url: "https://www.example.ie/og-image-01.jpg",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
        type: "image/jpeg",
      },
      {
        url: "https://www.example.ie/og-image-02.jpg",
        width: 900,
        height: 800,
        alt: "Og Image Alt Second",
        type: "image/jpeg",
      },
      { url: "https://www.example.ie/og-image-03.jpg" },
      { url: "https://www.example.ie/og-image-04.jpg" },
    ],
    site_name: "SiteName",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

```
## ✅ 4_and run server 
```bash
yarn run dev 
```

