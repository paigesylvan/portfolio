"use client";

export default function SectionHeader({
  kicker,
  title,
  align = "left",
}: {
  kicker: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex flex-col ${
        align === "center" ? "items-center text-center" : ""
      }`}
    >
      <p className="accent-text text-[11px] tracking-[0.22em] uppercase">
        {kicker}
      </p>
      <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white leading-tight">
        {title}
      </h2>
    </div>
  );
}
