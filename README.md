# Harvest Wholefoods — Static Website

A hand-crafted static website for Harvest Wholefoods, Lydham, Shropshire.

## File Structure

```
harvest-wholefoods/
├── index.html          ← Main (and only) HTML page
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Scroll animations, mobile nav, year
├── images/             ← ⚠️  ADD YOUR PHOTOS HERE (see below)
│   ├── shop-painting.jpg      ← Image 5: the painted illustration of the shop
│   ├── exterior-sunny.jpg     ← Image 1: sunny exterior photo
│   ├── interior.jpg           ← Image 3: interior aisle shot
│   ├── exterior-overcast.jpg  ← Image 4: overcast exterior
│   └── produce.jpg            ← Image 2: the fruit & veg shelves
└── README.md
```

## Adding Your Photos

The website references 5 images. Copy your uploaded photos into the `images/`
folder with these exact filenames:

| Filename               | Which photo                        |
|------------------------|------------------------------------|
| `shop-painting.jpg`    | The painted/illustrated shop front |
| `exterior-sunny.jpg`   | Sunny day exterior (blue awning)   |
| `interior.jpg`         | Interior aisle shot                |
| `exterior-overcast.jpg`| Overcast day exterior              |
| `produce.jpg`          | Colourful fruit & veg shelves      |

Recommended: optimise images to ≤ 400 KB each before uploading.
You can use [Squoosh](https://squoosh.app) (free, browser-based) to compress them.

## Deploying via GitHub Pages

1. Create a new GitHub repository (e.g. `harvest-wholefoods`)
2. Upload all files keeping the folder structure intact
3. Go to **Settings → Pages**
4. Set source to **Deploy from branch**, branch `main`, folder `/ (root)`
5. Save — GitHub will give you a `*.github.io` URL within a minute or two
6. Point your purchased domain to GitHub Pages by adding a `CNAME` file:
   - Create a file called `CNAME` (no extension) in the root
   - Inside it, put just your domain name, e.g.: `harvestwholefoods.co.uk`
   - In your domain registrar, add these DNS records:
     - A records pointing to GitHub's IPs:
       185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
     - CNAME record: `www` → `yourusername.github.io`

## Updating Content

All content lives in `index.html` — search for the relevant section
(About, What We Stock, Find Us, Opening Hours) and edit the text directly.
No build step, no framework — plain HTML and CSS.

## Notes

- The map uses OpenStreetMap (free, no API key needed).
  Adjust the coordinates in `index.html` if needed.
- The sunflower logo is pure SVG — no image file needed, always crisp.
- Fonts load from Google Fonts. If you need fully offline operation,
  download and self-host Playfair Display, Lora, and Nunito.
