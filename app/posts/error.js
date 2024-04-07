"use client"; // error compoennts MUST be client components.
// They typically have a useEffect and onClick.
import React from "react";

// Displays when error happend
function error() {
  return <div>error</div>;
}

export default error;
