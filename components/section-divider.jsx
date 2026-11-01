"use client";

export const SectionDivider = function ({ className: e = "" }) {
  return (
    <div
      className={`relative w-full overflow-hidden pointer-events-none z-10 ${e}`}
      aria-hidden="true"
    >
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.35) 30%, rgba(212,175,55,0.45) 50%, rgba(212,175,55,0.35) 70%, transparent 100%)",
        }}
      />
    </div>
  );
};
