# 🚀 Deployment Guide

## Quick Deploy Options

### 1. Vercel (Recommended - Easiest)

**Steps:**
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel
```

**Or use Vercel Dashboard:**
1. Go to https://vercel.com
2. Click "New Project"
3. Import your Git repository
4. Vercel auto-detects Vite
5. Click "Deploy"
6. Done! ✅

**Custom Domain:**
- Add in Vercel dashboard
- Update DNS records
- SSL automatic

---

### 2. Netlify

**Via Netlify CLI:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

**Via Netlify Dashboard:**
1. Go to https://netlify.com
2. Drag & drop `dist` folder
3. Or connect Git repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy! ✅

**Configuration File** (optional):
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 3. GitHub Pages

**Steps:**
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

**Update `vite.config.js`:**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Add this line
})
```

**Enable GitHub Pages:**
1. Go to repository Settings
2. Pages section
3. Source: gh-pages branch
4. Save

---

### 4. Firebase Hosting

**Steps:**
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting

# Build
npm run build

# Deploy
firebase deploy
```

**Configuration:**
- Public directory: `dist`
- Single-page app: Yes
- Automatic builds: Optional

---

### 5. Cloudflare Pages

**Steps:**
1. Go to https://pages.cloudflare.com
2. Connect Git repository
3. Build command: `npm run build`
4. Build output: `dist`
5. Deploy ✅

**Benefits:**
- Free SSL
- Global CDN
- Fast performance
- DDoS protection

---

### 6. AWS S3 + CloudFront

**Steps:**
```bash
# Build
npm run build

# Upload to S3
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

**Setup:**
1. Create S3 bucket
2. Enable static website hosting
3. Create CloudFront distribution
4. Point to S3 bucket
5. Configure SSL certificate

---

### 7. Self-Hosted (VPS/Dedicated Server)

**Using Nginx:**

1. **Build the project:**
```bash
npm run build
```

2. **Copy to server:**
```bash
scp -r dist/* user@your-server:/var/www/physics-app/
```

3. **Nginx configuration:**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/physics-app;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

4. **Restart Nginx:**
```bash
sudo systemctl restart nginx
```

**Using Apache:**

Create `.htaccess` in dist folder:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🔧 Pre-Deployment Checklist

### Code Quality
- [ ] No console.log statements
- [ ] No TODO comments
- [ ] All features tested
- [ ] No broken links
- [ ] Responsive on all devices

### Performance
- [ ] Run `npm run build`
- [ ] Check bundle size
- [ ] Test load time
- [ ] Verify lazy loading
- [ ] Check Lighthouse score

### Content
- [ ] All questions accurate
- [ ] Explanations clear
- [ ] No typos
- [ ] Images optimized
- [ ] Presentation loads

### SEO (Optional)
- [ ] Meta tags added
- [ ] Open Graph tags
- [ ] Sitemap generated
- [ ] Robots.txt configured
- [ ] Analytics added

---

## 🌐 Custom Domain Setup

### DNS Configuration

**For Vercel/Netlify:**
```
Type: A
Name: @
Value: [Platform IP]

Type: CNAME
Name: www
Value: [Platform domain]
```

**For Cloudflare:**
- Add site to Cloudflare
- Update nameservers
- Enable proxy (orange cloud)
- SSL: Full (strict)

---

## 📊 Post-Deployment

### Testing
1. Open in multiple browsers
2. Test on mobile devices
3. Check all features work
4. Verify presentation loads
5. Test both modes
6. Check progress persistence

### Monitoring
- Set up uptime monitoring
- Check error logs
- Monitor performance
- Track user feedback
- Update content as needed

### Maintenance
- Regular dependency updates
- Security patches
- Content updates
- Bug fixes
- Feature additions

---

## 🔒 Security Best Practices

### Headers (Add to hosting config)
```
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

### HTTPS
- Always use HTTPS
- Enable HSTS
- Use strong SSL/TLS
- Auto-redirect HTTP to HTTPS

---

## 💰 Cost Comparison

| Platform | Free Tier | Bandwidth | Custom Domain | SSL |
|----------|-----------|-----------|---------------|-----|
| Vercel | ✅ Yes | 100GB/month | ✅ Free | ✅ Free |
| Netlify | ✅ Yes | 100GB/month | ✅ Free | ✅ Free |
| GitHub Pages | ✅ Yes | 100GB/month | ✅ Free | ✅ Free |
| Cloudflare | ✅ Yes | Unlimited | ✅ Free | ✅ Free |
| Firebase | ✅ Yes | 10GB/month | ✅ Free | ✅ Free |

**Recommendation:** Start with Vercel or Netlify for easiest setup.

---

## 🎓 School Network Deployment

### Intranet Hosting
1. Build the project
2. Copy to school server
3. Access via local IP
4. No internet required (except presentation)

### Offline Mode (Future)
- Download presentation slides
- Host locally
- Update iframe source
- Fully offline capable

---

## 📱 Progressive Web App (PWA) - Optional

Add PWA support for offline access:

1. **Install Vite PWA plugin:**
```bash
npm install vite-plugin-pwa -D
```

2. **Update vite.config.js:**
```javascript
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'NCERT Physics - Light',
        short_name: 'Physics Light',
        description: 'NCERT Class 10 Physics Chapter 10',
        theme_color: '#2563eb',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
```

---

## 🚀 CI/CD Setup (Advanced)

### GitHub Actions

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 📞 Support & Troubleshooting

### Common Issues

**Build fails:**
- Clear node_modules and reinstall
- Check Node.js version (16+)
- Verify all dependencies installed

**Presentation not loading:**
- Check internet connection
- Verify iframe URL
- Check CSP headers

**Routing issues:**
- Configure redirects for SPA
- Check base URL in vite.config.js
- Verify server configuration

---

## ✅ Deployment Complete!

Your NCERT Physics website is now live and ready for students and teachers to use.

**Next Steps:**
1. Share the URL with teachers
2. Test in actual classroom
3. Gather feedback
4. Iterate and improve

**Happy Teaching! 🎓**
