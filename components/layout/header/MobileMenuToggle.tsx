"use client";

import { X } from "lucide-react";

interface MobileMenuToggleProps {
  isOpen: boolean;
  onClose: (value: boolean) => void;
}

const MobileMenuToggle = ({ isOpen, onClose }: MobileMenuToggleProps) => {
  return (
    <button
      onClick={() => onClose(!isOpen)}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className={`
        relative flex items-center justify-center
        w-10 h-10 rounded-xl
        border transition-all duration-300 cursor-pointer
        ${
          isOpen
            ? "bg-[#d53336] border-[#d53336] shadow-[0_4px_14px_rgba(213,51,54,0.35)]"
            : "bg-white border-[#e8e8f0] shadow-sm hover:border-[#d53336]/40 hover:shadow-[0_4px_14px_rgba(213,51,54,0.12)]"
        }
      `}
    >
      {isOpen ? (
        /* ── Close ×  ── */
        <X className="text-white" />
      ) : (
        /* ── 2×3 dot grid ── */
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          className="text-[#d53336] transition-all duration-300"
        >
          {/* Top row */}
          <rect
            x="0"
            y="0"
            width="7"
            height="2.5"
            rx="1.25"
            fill="currentColor"
          />
          <rect
            x="11"
            y="0"
            width="7"
            height="2.5"
            rx="1.25"
            fill="currentColor"
            opacity="0.45"
          />
          {/* Middle row */}
          <rect
            x="0"
            y="5.75"
            width="10"
            height="2.5"
            rx="1.25"
            fill="currentColor"
          />
          <rect
            x="14"
            y="5.75"
            width="4"
            height="2.5"
            rx="1.25"
            fill="currentColor"
            opacity="0.45"
          />
          {/* Bottom row */}
          <rect
            x="0"
            y="11.5"
            width="5"
            height="2.5"
            rx="1.25"
            fill="currentColor"
            opacity="0.45"
          />
          <rect
            x="9"
            y="11.5"
            width="9"
            height="2.5"
            rx="1.25"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
};

export default MobileMenuToggle;
