import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <img
          className=""
          src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg"
          alt="404 not found"
        />
        <Link
          className="py-2 ml-24 p-2 bg-gradient-to-r
           from-sky-600 to-blue-500 text-white rounded-md"
          to={"/"}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
