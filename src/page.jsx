"use client";

import { useState } from "react";
import Boost from "./ui/Boost";
import Footer from "./ui/Footer";
import Home from "./ui/Home";
import Nav from "./ui/Nav";
import Shorten from "./ui/Shorten";
import ShortenOutput from "./ui/ShortenOutput";
import Statistics from "./ui/Statistics";

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
