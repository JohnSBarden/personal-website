/*  From https://dev.to/fifo/creating-a-custom-react-hook-for-markdown-parsing-109
    This custom hook is also available as a package, but I chose not to add it the standard way, 
    so that I could modify it once I have a bunch of files. 
 */
import { useState, useEffect } from "react";
import sanitizeHTML from "sanitize-html";
import marked from "marked";

import defaultOptions from "./defaultOptionsMarkdown";

export const useMarked = (markdown, options = defaultOptions) => {
  const [html, setHtml] = useState(markdown);

  useEffect(() => {
    if (options.markedOptions) {
      marked.setOptions(options.markedOptions);
    }
    const tokens = marked.lexer(markdown);
    const html = marked.parser(tokens);
    setHtml(
      options.skipSanitize ? html : sanitizeHTML(html, options.sanitizeOptions)
    );
  }, [markdown]);

  return html;
};
