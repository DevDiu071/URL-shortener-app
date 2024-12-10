import { useState } from "react";
import Statistics from "./Statistics";
import Shorten from "./Shorten";
import Home from "./Home";
import Nav from "./Nav";
import Boost from "./Boost";
import Footer from "./Footer";

const apiKey = "GvvCNVWpVkcsk5Q3KZZrKPGQ3GyFVpRQMTkrrf4ORgGbMOG0sQksFkvAkMTM";
interface UrlProps {
  url: string;
  shortenUrl: string;
}

function Page() {
  const [urlInput, setUrlInput] = useState("");
  const [urlOutPut, setUrlOutPut] = useState<UrlProps[]>([]);

  const handleShorten = async () => {
    const apiUrl = "https://api.tinyurl.com/create";
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: urlInput, domain: "tiny.one" }),
      });

      const data = await response.json();
      setUrlOutPut((output) => [
        ...output,
        { url: data.data.url, shortenUrl: data.data.tiny_url },
      ]);
      setUrlInput("");
    } catch (err) {
      alert("Oops! something went wrong, please try again");
      console.error(err);
    }
  };

  return (
    <div className="overflow-hidden">
      <Nav />
      <Home />
      <Shorten
        urlInput={urlInput}
        setUrlInput={setUrlInput}
        handleShorten={handleShorten}
      />

      <Statistics urlOutPut={urlOutPut} />
      <Boost />
      <Footer />
    </div>
  );
}

export default Page;
