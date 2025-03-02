import React, { useState, useEffect } from "react";
import "./PostContainer.css";

export default function PostContainer(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div
      role="main"
      className={isLoading ? "Post-container-loading" : "Post-container"}
    >
      {isLoading ? "" : "Post Container Placeholder"}
    </div>
  );
}
