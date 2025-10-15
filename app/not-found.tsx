export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-950 via-primary-900 to-brand-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-primary-100 mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-block px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}
