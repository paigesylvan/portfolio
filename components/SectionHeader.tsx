"use client";

type Props = {
  kicker: string;
  title: string;
  align?: "left" | "center";
  kickerClassName?: string;
  titleClassName?: string;
  className?: string;
};

export default function SectionHeader({
  kicker,
  title,
  align = "left",
  kickerClassName = "",
  titleClassName = "",
  className = "",
}: Props) {
  return (
    <div className={`w-full ${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <p className={`tracking-[0.22em] text-white/60 ${kickerClassName}`}>{kicker}</p>
      <h2 className={`mt-2 font-semibold leading-tight ${titleClassName}`}>{title}</h2>
    </div>
  );
}
