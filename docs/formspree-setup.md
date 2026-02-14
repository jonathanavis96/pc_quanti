# Formspree Setup Guide

The contact form on `/contact` uses Formspree for static-compatible form submissions.

## Setup Steps

1. **Create a Formspree account** at [https://formspree.io/](https://formspree.io/)
   - Free tier allows 50 submissions/month

2. **Create a new form**
   - Log in to your Formspree dashboard
   - Click "New Form"
   - Note your form ID (format: `xxxxxxxxxx`)

3. **Configure environment variable**
   - Copy `.env.example` to `.env.local`:
     ```bash
     cp .env.example .env.local
     ```
   - Edit `.env.local` and add your Formspree form ID:
     ```
     NEXT_PUBLIC_FORMSPREE_FORM_ID=your_form_id_here
     ```

4. **Rebuild for production**
   ```bash
   npm run build
   ```

## Fallback Behavior

If `NEXT_PUBLIC_FORMSPREE_FORM_ID` is not set, the form will fall back to a `mailto:` link with pre-filled subject and body.

## Testing

- **With Formspree**: Fill out and submit the form. Check your Formspree dashboard for submissions.
- **Without Formspree**: The form will open your default email client with pre-filled content.

## Production Deployment

For GitHub Pages or other static hosting:
1. Set the environment variable in your build environment
2. Build the site: `npm run build`
3. Deploy the `out/` directory (or `.next/` for Next.js hosting)

## Email Notifications

Configure email notifications in your Formspree dashboard:
- Settings → Email Notifications
- Add recipient email (e.g., `info@pcquanti.com`)
