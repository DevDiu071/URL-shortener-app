import clsx from "clsx";
import { useState } from "react";

interface ShortenProps {
  urlInput: string;
  setUrlInput: React.Dispatch<React.SetStateAction<string>>;
  handleShorten: () => void;
}

function Shorten({ urlInput, setUrlInput, handleShorten }: ShortenProps) {
  const [error, setError] = useState<boolean>(false);

  function handleUrlInput(e: React.FormEvent<HTMLFormElement>) {
    if (!urlInput) {
      setError(true);
    } else {
      setError(false);
      handleShorten();
    }
    e.preventDefault();
    console.log(urlInput);
    console.log(error);
  }

  return (
    <>
      <form onSubmit={(e) => handleUrlInput(e)}>
        <div className="flex tablet:mt-4 tablet:gap-x-4 tablet:flex-row tablet:items-start mx-5 tablet:mx-10 laptop:mx-[60px] desktop:mx-[90px] rounded-lg flex-col bg-[url('/images/bg-shorten-mobile.svg')] laptop:bg-[url('/images/bg-shorten-desktop.svg')] bg-cover bg-no-repeat bg-darkviolet px-8 py-6 -mb-[80px] tablet:-mb-[60px] z-50 relative">
          <div className="flex tablet:w-full flex-col">
            <input
              placeholder="Shorten a link here..."
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              className={clsx(
                "py-3 tablet:text-sm tablet:py-2.5 px-4 mb-4 tablet:mb-0 rounded-lg ",
                { "border-2 border-red placeholder-red": error }
              )}
            />
            {error && (
              <p className="text-xs text-red font-semibold -mt-4 mb-3 sm:mb-0 sm:mt-0">
                Please add a link
              </p>
            )}
          </div>
          <button className="bg-cyan py-3 tablet:py-2.6 tablet:text-sm tablet:w-1/3 text-xl font-bold text-white rounded-lg">
            Shorten it!
          </button>
        </div>
      </form>
    </>
  );
}

export default Shorten;
