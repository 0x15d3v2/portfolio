const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md mx-auto px-6 text-center">
        <div className="font-mono">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <div className="bg-gray-50 p-4 rounded-lg text-left mb-8">
            <p className="text-gray-400">// error message</p>
            <p><span className="text-purple-600">throw new</span> Error<span className="text-gray-800">(</span></p>
            <p className="ml-4 text-gray-800">"page_not_found: directory or file does not exist"</p>
            <p className="text-gray-800">);</p>
          </div>
          <a
            href="/"
            className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors"
          >
            <span>return to home</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
