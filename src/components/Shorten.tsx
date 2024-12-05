"use client";

import { useEffect, useState } from "react";
import ShortenOutput from "./ShortenOutput";
import axios from "axios";

function Shorten({ urlInput, setUrlInput }) {
  function handleUrlInput(e) {
    e.preventDefault();
    console.log(urlInput);
  }

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://ulvis.net/api.php?url=${urlInput}&private=1`,
        {
          mode: "no-cors",
        }
      );
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
    }
  };

  useEffect(() => {
    if (urlInput.length > 0) {
      fetchData();
    }
  }, [urlInput]);

  return (
    <>
      <form onSubmit={(e) => handleUrlInput(e)}>
        <div className="flex tablet:mt-4 tablet:gap-x-4 tablet:flex-row tablet:items-center mx-5 tablet:mx-10  laptop:mx-[60px] desktop:mx-[90px] rounded-lg flex-col bg-[url('/images/bg-shorten-mobile.svg')] laptop:bg-[url('/images/bg-shorten-desktop.svg')] bg-cover bg-no-repeat bg-darkviolet px-8 py-6 -mb-[80px] tablet:-mb-[40px] z-50 relative">
          <input
            placeholder="Shorten a link here..."
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            className="py-3 tablet:text-sm tablet:py-2 px-4 mb-4 tablet:mb-0 rounded-lg tablet:w-full"
          />
          <button className="bg-cyan py-3 tablet:py-2 tablet:text-sm tablet:w-1/3 text-xl font-bold text-white rounded-lg">
            Shorten it!
          </button>
        </div>
      </form>
    </>
  );
}

export default Shorten;
