type Val = string | string[];
const q = (s: string) => `"${s}"`;

export default function CodeObj({ name, data }: { name: string; data: Record<string, Val> }) {
  return (
    <pre className="whitespace-pre-wrap break-words">
      <code>
        <span className="text-zinc-100">const</span> <span className="text-tok-name">{name}</span>
        {" = {\n"}
        {Object.entries(data).map(([k, v]) => (
          <span key={k}>
            {"  "}
            <span className="text-tok-key">{k}</span>
            {": "}
            {Array.isArray(v) ? (
              <>
                {"[\n"}
                {v.map((s) => (
                  <span key={s}>{"    "}<span className="text-tok-ok">{q(s)}</span>{",\n"}</span>
                ))}
                {"  ],\n"}
              </>
            ) : (
              <>
                <span className={k === "status" ? "text-tok-purple" : "text-tok-str"}>{q(v)}</span>
                {",\n"}
              </>
            )}
          </span>
        ))}
        {"}"}
      </code>
    </pre>
  );
}
