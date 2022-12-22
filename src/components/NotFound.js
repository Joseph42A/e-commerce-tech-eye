import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="w-full max-w-xs">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-red-600">404</h1>
          <p className="text-xl font-semibold text-gray-700">Not Found</p>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          The page you are looking for could not be found.
        </p>
        <Link to="/" className="btn btn-blue underline">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
