import React from "react";
import { Link } from "react-router-dom";
import { useUser, SignInButton, SignOutButton } from "@clerk/clerk-react";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <nav className="bg-gray-800 p-4 flex justify-between">
      <Link className="text-white text-lg font-bold" to="/">Home</Link>

      <div className="flex space-x-4">
        {/* Show "Preview" only if the user is logged in */}
        {isSignedIn && (
          <Link className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700 text-white" to="/preview">
            Preview
          </Link>
        )}

        {/* Show SignInButton if user is NOT logged in */}
        {!isSignedIn && (
          <SignInButton mode="modal">
            <button className="text-sm px-4 py-2 leading-none rounded-full bg-blue-600 hover:bg-blue-700 text-white">
              Login
            </button>
          </SignInButton>
        )}

        {/* Show SignOutButton if user is logged in */}
        {isSignedIn && (
          <SignOutButton>
            <button className="text-sm px-4 py-2 leading-none rounded-full bg-red-600 hover:bg-red-700 text-white">
              Logout
            </button>
          </SignOutButton>
        )}
      </div>
    </nav>
  );
};

export default Navbar;