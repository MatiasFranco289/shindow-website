import { useState } from "react";
import { FaCopy } from "react-icons/fa";

interface CodeBlockProps {
  code: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  const copiedDurationMs = 2000;
  const [showCopied, setShowCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    setShowCopied(true);
    navigator.clipboard.writeText(code);

    setTimeout(() => {
      setShowCopied(false);
    }, copiedDurationMs);
  };

  return (
    <div className="bg-custom-green-50 p-4 rounded-sm border border-white/60 hover:border-white/80 duration-200 relative">
      <div className="absolute top-2 right-2 flex items-center">
        {showCopied && (
          <p className="text-sm bg-slate-700 rounded-sm p-1 cursor-default mr-2">
            Copied!
          </p>
        )}
        <button
          className="p-2 cursor-pointer hover:bg-white/20 active:bg-white/40 rounded-md"
          onClick={copyToClipboard}
        >
          <FaCopy />
        </button>
      </div>

      <pre className="overflow-x-auto pt-6">
        <code>{code}</code>
      </pre>
    </div>
  );
}
