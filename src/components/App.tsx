"use client";

import { useState } from "react";
import Statistics from "./Statistics";
import Shorten from "./Shorten";
import Home from "./Home";
import Nav from "./Nav";
import Boost from "./Boost";
import Footer from "./Footer";

function Page() {
  const [urlInput, setUrlInput] = useState("");
  const [shortenUrl, setShortenUrl] = useState("");
  return (
    <div className="overflow-hidden">
      <Nav />
      <Home />
      <Shorten urlInput={urlInput} setUrlInput={setUrlInput} />

      <Statistics
        urlInput={urlInput}
        setUrlInput={setUrlInput}
        shortenUrl={shortenUrl}
      />
      <Boost />
      <Footer />
    </div>
  );
}

export default Page;
