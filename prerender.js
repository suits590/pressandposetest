import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

/**
 * ROUTES TO PRERENDER
 * 
 * These must match the routes defined in src/App.tsx
 * When adding new pages or blog posts, add them here too!
 * 
 * Examples:
 *   '/about'
 *   '/blog/my-new-post'
 *   '/services/consulting'
 */
const routesToPrerender = [
  '/',
  '/glam-photo-booth-tampa-fl',
  '/classic-photo-booth-tampa-fl',
  '/corporate-photo-booth-tampa-fl',
  '/request-a-quote',
  '/st-petersburg'
]

/**
 * PAGE TITLES
 * 
 * Per-route <title> tags. Format: "Page Title | Site Name"
 * Any route not listed here falls back to the <title> already in index.html.
 */
const pageTitles = {
  '/': 'Luxury Photo Booth Rentals Tampa FL | Glow Photo Booth',
  '/glam-photo-booth-tampa-fl': 'Glam Photo Booth Tampa FL | Glow Photo Booth',
  '/classic-photo-booth-tampa-fl': 'Classic Photo Booth Tampa FL | Glow Photo Booth',
  '/corporate-photo-booth-tampa-fl': 'Corporate Photo Booth Tampa FL | Glow Photo Booth',
  '/request-a-quote': 'Request a Quote | Glow Photo Booth',
  '/st-petersburg': 'Photo Booth Rentals in St. Petersburg, FL | Glow Photo Booths'
}

;(async () => {
  for (const url of routesToPrerender) {
    const appHtml = render(url)
    let html = template.replace('<!--app-html-->', appHtml)

    if (pageTitles[url]) {
      html = html.replace(/<title>.*?<\/title>/, `<title>${pageTitles[url]}</title>`)
    }

    const filePath = url === '/' ? 'dist/index.html' : `dist${url}/index.html`
    const absolutePath = toAbsolute(filePath)
    
    // Ensure the directory exists before writing the file
    const dir = path.dirname(absolutePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    
    fs.writeFileSync(absolutePath, html)
    console.log('pre-rendered:', filePath)
  }
})()
