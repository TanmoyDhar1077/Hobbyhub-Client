import React from "react";

const Spinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-10 h-10 border-4 border-red-400 border-dashed rounded-full animate-spin"></div>
  </div>
);

export default Spinner;