export default function SectionHead({
  file,
  title,
  sub,
}: {
  file: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-blue-400">
        // {file}
      </p>

      <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-4xl">
        {title}
      </h2>

      {sub && (
        <p className="mt-4 leading-7 text-slate-400">
          {sub}
        </p>
      )}
    </div>
  );
}