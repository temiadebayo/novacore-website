export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-950 via-primary-900 to-brand-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Test Page</h1>
        <p className="text-primary-100 mb-6">
          If you can see this page, the deployment is working correctly!
        </p>
        <a 
          href="/" 
          className="inline-block px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
        >
          Go to Home
        </a>
      </div>
    </div>
  )
}
