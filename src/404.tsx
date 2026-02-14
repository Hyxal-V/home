export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#111111]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-gray-400 text-lg mb-8">Page Not Found</p>
        <a href="/" className="inline-block px-6 py-3 bg-[#FFD600] text-black font-medium rounded-lg hover:bg-[#FFD600]/90 transition-colors">
          Go Back Home
        </a>
      </div>
    </div>
  );
}