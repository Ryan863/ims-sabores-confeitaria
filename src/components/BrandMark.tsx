import Image from "next/image";

interface BrandMarkProps {
  variant?: "light" | "dark";
}

export function BrandMark({ variant = "light" }: BrandMarkProps) {
  const isDark = variant === "dark";

  return (
    <span
      className={`inline-flex items-center transition-all duration-300 ${
        isDark
          ? "rounded-xl bg-[#FAF6F0]/95 px-3 py-1.5 shadow-sm border border-[#FAF6F0]/20"
          : ""
      }`}
    >
      <Image
        src="/images/logo-ims-sabores.png"
        alt="Ims Sabores Confeitaria - Desde 2013"
        width={138}
        height={110}
        priority
        className="h-10 sm:h-11 w-auto object-contain mix-blend-multiply"
      />
    </span>
  );
}
