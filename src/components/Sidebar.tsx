"use client";

import { useState, useRef, useEffect } from "react";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [width, setWidth] = useState(250);
  const [isResizing, setIsResizing] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isResizing) {
        const newWidth = e.clientX;
        if (newWidth > 150 && newWidth < 500) {
          setWidth(newWidth);
        }
      }
    };

    const handleMouseUp = () => setIsResizing(false);

    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);

  return (
    <div
      ref={sidebarRef}
      style={{ width }}
      className="relative h-screen bg-bg text-text flex flex-col shadow-lg"
    >
      {/* Sidebar content (fixed) */}
      <div className="p-4 flex-1">{children}</div>

      {/* Resize handle */}
      <div
        onMouseDown={() => setIsResizing(true)}
        className="absolute top-0 right-0 w-1 cursor-col-resize h-full "
      />
    </div>
  );
}
