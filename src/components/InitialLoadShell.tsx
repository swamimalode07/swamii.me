"use client";

import React, { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Taskbar from "@/components/Taskbar/Taskbar";

type InitialLoadShellProps = {
  children: React.ReactNode;
};

let hasShownInitialLoader = false;

const InitialLoadShell = ({ children }: InitialLoadShellProps) => {
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

export default InitialLoadShell;
