import React from "react";

const SkeletonLoader = ({ count = 3, type = "card" }) => {
  if (type === "card") {
    return (
      <div className="space-y-4">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-48 bg-black-200 rounded-lg mb-4"></div>
            <div className="h-4 bg-black-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-black-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "text") {
    return (
      <div className="space-y-3 animate-pulse">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="h-4 bg-black-200 rounded w-full"></div>
        ))}
      </div>
    );
  }

  if (type === "hero") {
    return (
      <div className="animate-pulse space-y-6">
        <div className="h-12 bg-black-200 rounded w-3/4"></div>
        <div className="h-12 bg-black-200 rounded w-2/3"></div>
        <div className="h-12 bg-black-200 rounded w-1/2"></div>
        <div className="h-10 bg-black-200 rounded w-40"></div>
      </div>
    );
  }

  return (
    <div className="animate-pulse space-y-4">
      <div className="h-10 bg-black-200 rounded"></div>
      <div className="h-10 bg-black-200 rounded"></div>
    </div>
  );
};

export default SkeletonLoader;
