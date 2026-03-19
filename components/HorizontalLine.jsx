import React from "react";

function HorizontalLine() {
  return (
    <div className="flex justify-center items-center gap-4 mt-2 mb-2 text-slate-400 dark:text-amber-500/60">
      <span
        className="h-px flex-1 max-w-[4rem] sm:max-w-[6rem]"
        style={{
          background: "linear-gradient(to right, transparent, currentColor 50%)",
          opacity: 0.5,
        }}
      />
      <span className="font-console text-xs tracking-[0.3em] text-amber-500/80 dark:text-amber-400/80">
        ∿
      </span>
      <span
        className="h-px flex-1 max-w-[4rem] sm:max-w-[6rem]"
        style={{
          background: "linear-gradient(to left, transparent, currentColor 50%)",
          opacity: 0.5,
        }}
      />
    </div>
  );
}

export default HorizontalLine;
