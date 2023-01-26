import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "../../sass/variables.sass";
import links from "../../sass/links.module.sass";

const Links = ({ inputValue, shortenLink }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);
  }, [shortenLink]);
  return (
    <div className={links.urls}>
      {shortenLink && (
        <div className={links.containerLinks}>
          <p>{inputValue} </p> <p className={links.shorten}>{shortenLink}</p>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button className={copied ? "copied" : "copy"}>
              {copied ? "copied" : "copy"}
            </button>
          </CopyToClipboard>
        </div>
      )}
    </div>
  );
};

export default Links;
88855