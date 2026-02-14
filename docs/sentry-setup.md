# Sentry Error Monitoring Setup

## Overview

This project uses [Sentry](https://sentry.io) for error monitoring and performance tracking. Sentry captures runtime errors, exceptions, and provides stack traces to help diagnose issues in production.

## Configuration

### 1. Create a Sentry Account

1. Go to [sentry.io](https://sentry.io) and create a free account
2. Create a new project and select "Next.js" as the platform
3. Copy your DSN (Data Source Name) from the project settings

### 2. Configure Environment Variables

Create a `.env.local` file in the project root (use `.env.local.example` as a template):

```bash
# Required: Your Sentry DSN
NEXT_PUBLIC_SENTRY_DSN=https://your-dsn@sentry.io/your-project-id

# Optional: For source map upload (production builds)
SENTRY_ORG=your-organization-slug
SENTRY_PROJECT=your-project-name
SENTRY_AUTH_TOKEN=your-auth-token
```

**Note:** The `.env.local` file is gitignored and should never be committed.

### 3. Test the Setup

Visit `/test-error` in your browser to test error monitoring:

- **Send Manual Test Error**: Captures an error manually and shows a confirmation
- **Trigger Uncaught Error**: Throws an uncaught error that will be captured by the error boundary

After triggering an error, check your Sentry dashboard to verify it was received.

## How It Works

### Client-Side Error Tracking

- Configured in `sentry.client.config.ts`
- Automatically captures unhandled errors and rejections
- Includes Session Replay for debugging (configurable)
- Error boundary in `app/error.tsx` captures React errors

### Server-Side Error Tracking

- Configured in `sentry.server.config.ts`
- Captures server-side errors during SSR and API routes
- Note: Limited functionality in static export mode

### Build Configuration

The Next.js config (`next.config.ts`) wraps the configuration with `withSentryConfig` to:

- Upload source maps for better stack traces (when auth token is configured)
- Tree-shake Sentry code from production bundles
- Hide source maps from public access

## Production Deployment

### Without Source Maps

If you don't configure `SENTRY_AUTH_TOKEN`, errors will still be tracked but stack traces will show minified code.

### With Source Maps

For better stack traces in production:

1. Create a Sentry auth token in your Sentry account settings
2. Add `SENTRY_AUTH_TOKEN` to your deployment environment variables
3. Add `SENTRY_ORG` and `SENTRY_PROJECT` to match your Sentry project

Source maps will be automatically uploaded during the build process.

## Features Configured

- **Error Tracking**: Automatic capture of uncaught errors
- **Session Replay**: Records user sessions when errors occur (10% sample rate)
- **Performance Monitoring**: 100% transaction sample rate (adjust for production)
- **Privacy**: All text and media masked in replays by default

## Adjusting Sample Rates

Edit the config files to adjust sampling:

```typescript
// sentry.client.config.ts
tracesSampleRate: 1.0,           // 100% of transactions
replaysSessionSampleRate: 0.1,    // 10% of sessions
replaysOnErrorSampleRate: 1.0,    // 100% of error sessions
```

## Removing the Test Page

Before deploying to production, you may want to delete `app/test-error/page.tsx` to prevent users from accessing the error test page.

## Troubleshooting

### Errors not appearing in Sentry

1. Verify `NEXT_PUBLIC_SENTRY_DSN` is set correctly in `.env.local`
2. Check browser console for Sentry initialization messages
3. Ensure the DSN is from a Next.js or JavaScript project (not other platforms)

### Build warnings

If you see warnings about `output: 'export'` and tunneling, this is expected. The tunnel feature requires server-side functionality and doesn't work with static exports. Client-side error tracking still works normally.

## Documentation

- [Sentry Next.js Documentation](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
- [Sentry Configuration Options](https://docs.sentry.io/platforms/javascript/configuration/options/)
