import { languagesMap } from "@/data/languages";
import React from "react";

export function getLanguageIcons(languages: string[]) {
  return languages.map((lang) => {
    const langObj = languagesMap.get(lang);
    const extraStyles: Record<string, string> = {};
    if (langObj?.color === "#000000" || langObj?.color === "black") {
      extraStyles.backgroundColor = "#303030";
      extraStyles.color = "white";
      extraStyles["--tag-color"] = "white";
    }
    return (
      <span
        key={`${lang}tag`}
        className="tag"
        style={
          {
            "--tag-color": langObj?.color || "white",
            ...extraStyles,
          } as React.CSSProperties
        }
      >
        <img
          src={`/assets/${languagesMap.get(lang)?.img}`}
          alt=""
          className="language-icon"
        />
        {lang}
      </span>
    );
  });
}
