"use client";

type PrintPdfButtonProps = {
  label?: string;
};

export function PrintPdfButton({
  label = "Download PDF Case Study",
}: PrintPdfButtonProps) {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center rounded-lg bg-[#101828] text-white px-4 py-2 text-sm font-medium hover:opacity-90"
    >
      {label}
    </button>
  );
}
