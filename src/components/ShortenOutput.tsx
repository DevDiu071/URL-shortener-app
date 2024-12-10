import clsx from "clsx";
import { useState } from "react";

interface ShortenOutPutProps {
  urlOutPut: {
    url: string;
    shortenUrl: string;
  };
}

function ShortenOutput({ urlOutPut }: ShortenOutPutProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async function () {
    try {
      await navigator.clipboard.writeText(urlOutPut.shortenUrl);
      setIsCopied(true);

      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
  };

  return (
    <div className=" bg-slate-100 pb-4  ">
      <div className="bg-white px-4 flex flex-col gap-y-2 py-2.5 rounded-sm items-center justify-between tablet:flex-row ">
        <p className="text-xs tablet:text-sm">{urlOutPut?.url}</p>
        <div className="flex items-center gap-x-6 ">
          <p className="text-sm text-cyan font-semibold">
            {urlOutPut?.shortenUrl}
          </p>
          <button
            onClick={handleCopy}
            className={clsx(
              "bg-cyan text-white px-4 py-1.5 rounded-sm text-xs",
              { "bg-darkgrayblue": isCopied }
            )}
          >
            {!isCopied ? "Copy" : "Copied!"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShortenOutput;
