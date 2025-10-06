import React from "react";

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default Loader;
