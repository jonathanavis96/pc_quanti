# Analytics Setup Guide

This guide explains how to set up Google Analytics 4 (GA4) for the PC Quanti website.

## Overview

The website supports Google Analytics 4 tracking via an environment variable. When enabled, the Analytics component automatically loads the GA4 tracking script on all pages.

## Setup Steps

### 1. Create a Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click **Admin** (gear icon in bottom left)
4. In the **Account** column, select or create an account
5. In the **Property** column, click **Create Property**
6. Fill in the property details:
   - **Property name**: PC Quanti (or your preferred name)
   - **Reporting time zone**: Select your timezone
   - **Currency**: Select your currency
7. Click **Next**
8. Fill in business details and click **Create**
9. Accept the Terms of Service

### 2. Set Up a Data Stream

1. After creating the property, you'll be prompted to set up a data stream
2. Select **Web** as the platform
3. Enter your website details:
   - **Website URL**: Your production domain (e.g., `https://pcquanti.com`)
   - **Stream name**: PC Quanti Website (or your preferred name)
4. Click **Create stream**
5. **Copy the Measurement ID** (format: `G-XXXXXXXXXX`)

### 3. Configure Environment Variable

Add the Measurement ID to your environment configuration:

#### Local Development

1. Copy `.env.example` to `.env.local` if you haven't already:
   ```bash
   cp .env.example .env.local
   ```

2. Add your Measurement ID to `.env.local`:
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

3. Restart your development server:
   ```bash
   npm run dev
   ```

#### Production (Vercel)

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Key**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value**: `G-XXXXXXXXXX` (your Measurement ID)
   - **Environment**: Production (and Preview if desired)
4. Click **Save**
5. Redeploy your application for changes to take effect

#### Other Hosting Providers

Add the environment variable according to your provider's documentation:
- **Netlify**: Site settings → Build & deploy → Environment variables
- **AWS Amplify**: App settings → Environment variables
- **Cloudflare Pages**: Settings → Environment variables

## Verification

### Development Verification

1. Open your website in a browser
2. Open browser Developer Tools (F12)
3. Go to the **Network** tab
4. Filter by `gtag` or `google-analytics`
5. Reload the page
6. You should see requests to `googletagmanager.com` and `google-analytics.com`

### Production Verification

1. Deploy your application with the `NEXT_PUBLIC_GA_MEASUREMENT_ID` environment variable set
2. Visit your production website
3. Open Google Analytics dashboard
4. Go to **Reports** → **Realtime**
5. You should see your visit appear in the real-time report within 30 seconds

### Alternative: Google Tag Assistant

1. Install [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk) browser extension
2. Visit your website
3. Click the Tag Assistant icon
4. Click **Enable** and reload the page
5. You should see "Google Analytics" listed with a green checkmark

## What Gets Tracked

With the default implementation, GA4 automatically tracks:

- **Page views**: Every time a user navigates to a new page
- **Scroll depth**: How far users scroll on pages
- **Outbound clicks**: Clicks on external links
- **File downloads**: Downloads of PDF, DOC, etc.
- **Video engagement**: YouTube video interactions (if embedded)
- **Site search**: Search queries (if you implement search)

## Privacy Considerations

### GDPR Compliance

If your website targets EU users, you should:

1. Add a cookie consent banner (not included in MVP)
2. Only load analytics after user consent
3. Update your Privacy Policy to mention GA4
4. Consider IP anonymization (enabled by default in GA4)

### Privacy Policy

Ensure your Privacy Policy mentions:
- Use of Google Analytics
- What data is collected
- How it's used
- Link to [Google's Privacy Policy](https://policies.google.com/privacy)

## Custom Events (Future Enhancement)

To track custom events (e.g., form submissions, button clicks), add this code:

```typescript
// Declare gtag function
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Track an event
if (typeof window !== 'undefined' && window.gtag) {
  window.gtag('event', 'form_submission', {
    form_name: 'contact_form',
    form_destination: '/contact',
  });
}
```

## Troubleshooting

### Analytics Not Loading

**Symptom**: No requests to Google Analytics in Network tab

**Possible causes**:
1. Environment variable not set correctly
   - Check `.env.local` (development) or hosting dashboard (production)
   - Variable must start with `NEXT_PUBLIC_` to be exposed to browser
   - Restart dev server after adding variable

2. Ad blocker enabled
   - Disable ad blocker or test in incognito mode
   - This is expected behavior; end users with ad blockers won't be tracked

3. Invalid Measurement ID format
   - Must be in format `G-XXXXXXXXXX` (starts with `G-`)
   - Check for typos or extra spaces

### Data Not Appearing in GA4

**Symptom**: Requests are being sent, but no data in GA4 dashboard

**Possible causes**:
1. Recently set up (data can take 24-48 hours to appear in standard reports)
   - Check **Realtime** reports for immediate verification

2. Wrong Measurement ID
   - Verify you're using the correct ID from your GA4 property

3. Filters blocking traffic
   - Check if you've set up IP filters in GA4 that might be blocking your traffic

## Alternative Analytics Solutions

If you prefer not to use Google Analytics, consider:

- **Plausible**: Privacy-focused, GDPR-compliant, simpler interface
- **Fathom**: Similar to Plausible, paid service
- **Umami**: Open-source, self-hosted option
- **Vercel Analytics**: Built-in if using Vercel hosting (paid)

To switch providers, modify `src/components/Analytics.tsx` accordingly.

## Resources

- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/10089681)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [Next.js Analytics Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)
- [GA4 Best Practices](https://support.google.com/analytics/answer/9267735)
