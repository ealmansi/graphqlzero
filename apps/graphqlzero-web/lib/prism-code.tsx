import Prism from "prismjs";
import React, { useEffect, useRef, useState } from "react";

export interface PrismCodeProps {
  language: string;
  code: string;
  plugins?: string[];
}

export function PrismCode ({ language, code, plugins }: any) {
  const [hasRendered, setHasRendered] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    setHasRendered(true);
  }, []);
  useEffect(() => {
    if (!hasRendered) {
      return;
    }
    if (!ref || !ref.current) {
      return;
    }
    Prism.highlightElement(ref.current);
  }, [hasRendered, language, code, plugins]);
  return hasRendered ? (
    <pre className={plugins ? plugins.join(" ") : undefined}>
      <code ref={ref} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  ) : null;
}
