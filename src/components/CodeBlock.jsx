import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

SyntaxHighlighter.registerLanguage("javascript", js);

export function CodeBlock({ code }) {
  const { theme } = useContext(ThemeContext);
  return (
    <SyntaxHighlighter
      language="javascript"
      style={atomOneLight}
      customStyle={{
        padding: "20px",
        marginTop: "20px",
        marginBottom: "20px",
        backgroundColor: theme === "dark" ? "#474646" : "#f0f0fa",
        borderRadius: "10px",
      }}
      codeTagProps={{
        className: "text-sm text-[#00000] dark:text-white",
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
}
