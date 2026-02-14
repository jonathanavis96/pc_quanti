'use client';

import * as Sentry from '@sentry/nextjs';

export default function TestErrorPage() {
  const triggerError = () => {
    throw new Error('Test error for Sentry monitoring');
  };

  const captureManualError = () => {
    Sentry.captureException(new Error('Manually captured test error'));
    alert('Error sent to Sentry! Check your Sentry dashboard.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Sentry Error Monitoring Test
        </h1>
        <p className="text-gray-600 mb-6">
          Use these buttons to test error monitoring. Errors will be captured by Sentry
          if configured with a valid DSN.
        </p>
        
        <div className="space-y-4">
          <button
            onClick={captureManualError}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Send Manual Test Error
          </button>
          
          <button
            onClick={triggerError}
            className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
          >
            Trigger Uncaught Error
          </button>
        </div>

        <div className="mt-6 p-4 bg-gray-100 rounded">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> Configure NEXT_PUBLIC_SENTRY_DSN in .env.local to enable error tracking.
            See .env.local.example for setup instructions.
          </p>
        </div>
      </div>
    </div>
  );
}
