import { ChefHat } from "lucide-react";

interface BrandMarkProps {
  variant?: "light" | "dark";
}

export function BrandMark({ variant = "light" }: BrandMarkProps) {
  const isDark = variant === "dark";

  return (
    <span className="inline-flex items-center gap-3">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
          isDark
            ? "border-[#FAF6F0]/20 bg-[#FAF6F0]/10 text-[#FAF6F0]"
            : "border-[#4E3226]/15 bg-[#F3EBE1] text-[#4E3226]"
        }`}
        aria-hidden="true"
      >
        <ChefHat className="h-5 w-5 stroke-[1.75]" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl sm:text-2xl tracking-tight">
          <span className="italic font-semibold text-[#C06C4E]">ims </span>
          <span
            className={`font-semibold ${
              isDark ? "text-[#FAF6F0]" : "text-[#4E3226]"
            }`}
          >
            Sabores
          </span>
        </span>
        <span
          className={`mt-1 text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase tabular-nums ${
            isDark ? "text-[#FAF6F0]/75" : "text-[#755E53]"
          }`}
        >
          Confeitaria Artesanal • Desde 2013
        </span>
      </span>
    </span>
  );
}
