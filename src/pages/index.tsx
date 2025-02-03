"use client";
import React, { useState, useEffect } from "react";
import Loader from "../component/Loader";

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Loader size={80} color="secondary" loading={isLoading} />
      {!isLoading && <div>Your content goes here</div>}
    </div>
  );
};

export default Index;
