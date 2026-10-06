"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 900);

    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#070a10] transition-opacity duration-500"
    >
      <div className="text-center">
        <div className="mx-auto mb-5 size-10 animate-spin rounded-full border-2 border-white/10 border-t-blue-400" />

        <p className="font-mono text-sm text-slate-400">
          amg-tech
        </p>

        <p className="mt-1 text-xs text-slate-600">
          initializing...
        </p>
      </div>
    </div>
  );
}