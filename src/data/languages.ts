type Language = {
  language: string;
  img?: string;
  categories: string[];
  fluency: number;
};
export const languages: Language[] = [
  {
    language: "JavaScript",
    img: "languageIcons/Javascript.svg",
    categories: ["Web Stack", "Application"],
    fluency: 90,
  },
  {
    language: "TypeScript",
    img: "languageIcons/TypeScript.svg",
    categories: ["Web Stack"],
    fluency: 90,
  },
  {
    language: "NodeJS",
    img: "languageIcons/NodeJS.svg",
    categories: ["Web Stack"],
    fluency: 75,
  },
  {
    language: "NextJS",
    img: "languageIcons/NextJS.svg",
    categories: ["Web Stack"],
    fluency: 70,
  },
  {
    language: "React",
    img: "languageIcons/React.svg",
    categories: ["Web Stack"],
    fluency: 70,
  },
  {
    language: "PostgreSQL",
    categories: ["Web Stack"],
    fluency: 80,
  },
  {
    language: "HTML",
    categories: ["Web Stack"],
    fluency: 100,
  },
  {
    language: "CSS",
    categories: ["Web Stack"],
    fluency: 90,
  },
  {
    language: "Bash Shell",
    categories: ["Scripting & Automation"],
    fluency: 80,
  },
  {
    language: "DOS Batch Script (BAT)",
    categories: ["Scripting & Automation"],
    fluency: 60,
  },
  {
    language: "AutoHotKey",
    categories: ["Scripting & Automation"],
    fluency: 50,
  },
  {
    language: "OpenCV",
    categories: ["Machine Learning", "Graphics"],
    fluency: 80,
  },
  {
    language: "PixiJS",
    categories: ["Graphics"],
    fluency: 80,
  },
  {
    language: "ThreeJS",
    categories: ["Graphics"],
    fluency: 45,
  },
  {
    language: "Embedded C / Arduino C",
    categories: ["Hardware"],
    fluency: 70,
  },
  {
    language: "P5JS",
    categories: ["Graphics", "Education"],
    fluency: 80,
  },

  {
    language: "Java",
    categories: ["Application"],
    fluency: 60,
  },

  {
    language: "C++",
    categories: ["Application"],
    fluency: 70,
  },

  {
    language: "Scratch",
    categories: ["Visual Languages", "Education"],
    fluency: 100,
  },
  {
    language: "Python",
    categories: ["Machine Learning", "Application"],
    fluency: 80,
  },
  {
    language: "Processing",
    categories: ["Application", "Graphics", "Education"],
    fluency: 80,
  },
  {
    language: "Quartz Composer",
    categories: ["Visual Languages", "Graphics", "Legacy"],
    fluency: 90,
  },

  {
    language: "Assembly (MIPS)",
    categories: ["Hardware"],
    fluency: 70,
  },
  {
    language: "PHP",
    categories: ["Legacy"],
    fluency: 69,
  },
];

let languageCategories = new Set<string>();
let allCategory: Language[] = [];
languageCategories.add("All");
for (const lang of languages) {
  allCategory.push(lang);
  for (const cat of lang.categories) {
    languageCategories.add(cat);
  }
}

export const categories = Array.from(languageCategories);

export function getLangsByCategory(category: string) {
  if (category === "All") return allCategory;
  return languages.filter((language) => language.categories.includes(category));
}
