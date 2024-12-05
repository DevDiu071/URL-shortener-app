function ShortenOutput({ urlInput, shortenUrl }) {
  return (
    <div className=" bg-slate-100 pb-4  ">
      <div className="bg-white px-4 flex py-2.5 rounded-sm items-center justify-between">
        <p className="text-sm">{urlInput}</p>
        <div className="flex items-center gap-x-6">
          <p className="text-sm text-cyan font-semibold">{shortenUrl}</p>
          <button className="bg-cyan text-white px-4 py-1.5 rounded-sm text-xs">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShortenOutput;
