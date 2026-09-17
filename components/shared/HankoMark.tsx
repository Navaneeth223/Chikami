'use client';

/**
 * Hanko Mark — Chikami's personal seal
 * This is a simplified version. Replace with actual artwork when available.
 * The real version will be used for the signature load sequence.
 */
export default function HankoMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Chikami signature mark"
    >
      {/* Outer square border - traditional hanko style */}
      <rect
        x="5"
        y="5"
        width="90"
        height="90"
        stroke="var(--color-shu)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Inner decorative pattern - stylized brush strokes */}
      <path
        d="M 30 25 L 70 25 L 70 35 L 30 35 Z"
        fill="var(--color-shu)"
      />
      
      {/* Center character representation - stylized */}
      <path
        d="M 50 45 L 50 75 M 35 55 L 65 55 M 40 65 L 60 65"
        stroke="var(--color-shu)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Bottom accent marks */}
      <circle cx="35" cy="82" r="3" fill="var(--color-shu)" />
      <circle cx="65" cy="82" r="3" fill="var(--color-shu)" />
    </svg>
  );
}
