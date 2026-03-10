export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pc-neutral-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-pc-neutral-200 border-t-pc-gold mb-4" />
        <p className="text-pc-neutral-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}
