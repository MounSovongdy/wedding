# Luxury Wedding E-Invitation

A premium static wedding invitation website built with HTML5, Tailwind CSS, custom CSS, and vanilla JavaScript.

## Files

- `index.html` - single-page invitation content and structure
- `css/style.css` - luxury visual system, responsive layout, and animations
- `js/main.js` - loading screen, countdown, reveal effects, and gallery lightbox
- `assets/images` - place local replacement images here
- `assets/icons` - place custom icons here
- `assets/music` - place optional background music here

## Customize

Update these values in `index.html`:

- Couple names
- Wedding date and countdown value
- Event times and locations
- Venue address and Google Maps link
- RSVP links
- Bank account, QR image, and Telegram contact
- Sample wedding wishes

Replace the placeholder image URLs with local files such as:

- `assets/images/hero-couple.jpg`
- `assets/images/bride.jpg`
- `assets/images/groom.jpg`
- `assets/images/map.jpg`
- `assets/images/gallery-01.jpg`
- `assets/images/qr-payment.png`
- `assets/images/thank-you.jpg`

Add your wedding song as:

- `assets/music/wedding-song.mp3`

Browsers require a guest action before audio can play, so the website shows a
fixed music button instead of forcing autoplay.

## Run

Open `index.html` directly in a browser. No server, backend, database, package manager, or build step is required.

## Deploy Publicly

### Option 1: Netlify Drop

1. Go to `https://app.netlify.com/drop`.
2. Drag these files and folders into the upload area from inside the project folder:
   - `index.html`
   - `css`
   - `js`
   - `assets`
   - `_redirects`
   - `netlify.toml`
3. Netlify will publish the site and give you a public URL.

### Option 2: GitHub Pages

1. Create a new public GitHub repository.
2. Upload this project to the repository root.
3. In GitHub, open `Settings > Pages`.
4. Set source to `Deploy from a branch`.
5. Select the `main` branch and `/root`, then save.

### Option 3: Vercel

1. Create a new Vercel project.
2. Import the repository or upload the static files.
3. Leave the build command empty.
4. Set the output directory to `.`.
