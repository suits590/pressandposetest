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

;(async () => {
  for (const url of routesToPrerender) {
    const appHtml = render(url)
    const html = template.replace('<!--app-html-->', appHtml)

    const filePath = `dist${url === '/' ? '/index' : url}.html`
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
