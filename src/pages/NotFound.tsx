import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 font-mono px-4">
      <div className="w-full max-w-2xl rounded-lg border border-gray-200 bg-white shadow-lg p-8">
        <div className="mb-4">
          <p className="text-red-600">➜ zsh: command not found: {location.pathname}</p>
        </div>
        <p className="mb-6 text-gray-700">Error 404 — The page does not exist.</p>
        <p className="text-gray-700">
          <span className="text-black">➜</span> Try going back home:
          <a
            href="/"
            className="ml-2 text-blue-600 hover:text-blue-800 underline"
          >
            cd /
          </a>
        </p>
        <div className="mt-6 text-gray-500 text-sm">
          <p>Tip: Use the navigation bar or type a valid route.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;