"use client";

import React, { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Taskbar from "@/components/Taskbar/Taskbar";

type LoadingSCreenProps = {
  children: React.ReactNode;
};

let hasShownInitialLoader = false;

const LoadingScreen = ({ children }: LoadingSCreenProps) => {
  const [loading, setLoading] = useState(!hasShownInitialLoader);

  const handleLoadingFinish = () => {
    hasShownInitialLoader = true;
    setLoading(false);
  };

  return (
    <div className="bg-black">
      {loading && <LoadingScreen onFinish={handleLoadingFinish} />}
      {children}
      {!loading && <Taskbar />}
    </div>
  );
};

export default LoadingScreen;
