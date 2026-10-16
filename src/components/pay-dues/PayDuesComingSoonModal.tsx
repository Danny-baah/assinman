"use client";

import React, { useEffect, useCallback } from "react";
import { X } from "lucide-react";

interface PayDuesComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PayDuesComingSoonModal({
  isOpen,
  onClose,
}: PayDuesComingSoonModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm bg-[#fbf9f4] rounded-2xl border border-[#1b4d2e]/20 shadow-2xl p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-2 text-[#738290] hover:text-[#11161e] rounded-full hover:bg-black/5 transition-colors focus:outline-none"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Just Coming Soon */}
        <h3 className="font-editorial text-3xl sm:text-4xl text-[#11161e] font-normal tracking-tight my-4">
          Coming Soon
        </h3>

        <button
          type="button"
          onClick={onClose}
          className="mt-3 px-6 py-2.5 rounded-sm bg-[#1b4d2e] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#112d1c] transition-all shadow-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
}
