export default function CodeWindow({
  file,
  children,
  className = "",
}: {
  file: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`glass overflow-hidden rounded-2xl shadow-2xl shadow-black/30 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.025] px-4 py-3">
        <span className="size-2.5 rounded-full bg-red-400/80" />
        <span className="size-2.5 rounded-full bg-yellow-400/80" />
        <span className="size-2.5 rounded-full bg-green-400/80" />

        <span className="ml-2 font-mono text-[11px] text-slate-500">
          {file}
        </span>
      </div>

      <div className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
        {children}
      </div>
    </div>
  );
}