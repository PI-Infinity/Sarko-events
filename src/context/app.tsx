"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { en, ka } from "../languages/list";

/**
 * App state context
 */

const AppContext = createContext<any>(null);

export const useAppContext = () => useContext(AppContext);

interface contextProps {
  children: ReactNode;
}

export const AppContextWrapper: React.FC<contextProps> = ({ children }) => {
  // loading app
  const [loading, setLoading] = useState(true);

  //** theme */
  const [theme, setTheme] = useState({
    id: "blue",
    gradient: "linear-gradient(#001429, #007aff)",
    fill: "#007aff",
    text: "#f7fbff",
    secondaryText: "",
  });

  useLayoutEffect(() => {
    const localTheme = localStorage.getItem("tp-showcase:theme");
    if (localTheme) {
      let parseObject = JSON.parse(localTheme);
      document.body.style.background = parseObject.gradient;
      document.documentElement.style.background = parseObject.fill;
      setTheme(parseObject);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    } else {
      document.body.style.background = colors[0].gradient;
      document.documentElement.style.background = colors[0].fill;
      setTheme(colors[0]);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  }, []);

  // define device type
  const [isMobile, setIsMobile] = useState<any>(null);

  useEffect(() => {
    const handleResize = () => {
      // Assuming a width less than 768px is a mobile device
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call the function to set the initial state
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // skills list
  const skills = [
    {
      id: "HTML/CSS",
    },
    {
      id: "JavaScript",
    },
    {
      id: "TypeScript",
    },
    {
      id: "ReactJs",
    },
    {
      id: "NextJs",
    },
    {
      id: "React Native / Expo",
    },
    {
      id: "NodeJs",
    },
    {
      id: "ExpressJs",
    },
    {
      id: "MongoDB",
    },
    {
      id: "GraphQl",
    },
    {
      id: "Socket.io",
    },
    {
      id: "UI/UX Design",
    },
    {
      id: "TailwindCss",
    },
    {
      id: "Material UI",
    },
    {
      id: "Apple Developer",
    },
    {
      id: "Firebase",
    },
    {
      id: "Google API Services",
    },
    {
      id: "Cloudinary",
    },
    {
      id: "Rest API",
    },
    {
      id: "Vercel",
    },
    {
      id: "Heroku",
    },
    {
      id: "More...",
    },
  ];

  /**
   * languages
   */
  const [language, setLanguage] = useState("ka");
  const [activeLanguage, setActiveLanguage] = useState<any>("");

  useEffect(() => {
    let appLang = localStorage.getItem("tp-showcase:language") || "ka";
    setLanguage(appLang);
  }, []);

  useEffect(() => {
    if (language) {
      if (language === "en") {
        setActiveLanguage(en);
      } else {
        setActiveLanguage(ka);
      }
      localStorage.setItem("tp-showcase:language", language);
    }
  }, [language]);

  // nav items
  const menuItems = [
    { path: "/", label: "About" },
    { path: "/offers", label: "Offers" },
    { path: "/projects", label: "Projects" },
    { path: "/uiuxcomponents", label: "UI/UX Components" },
    { path: "/skills", label: "Skills" },
    { path: "/contact", label: "Contact" },
  ];
  // mobile menu state
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    // Ensure the body has the transition set
    document.body.style.transition = "right 200ms ease-in";

    if (mobileMenu) {
      document.body.style.position = "relative";
      document.body.style.right = "100px";
    } else {
      document.body.style.position = "relative";
      document.body.style.right = "0px";
    }

    // Cleanup function to reset styles when component unmounts
    return () => {
      document.body.style.position = "";
      document.body.style.right = "";
      document.body.style.transition = "";
    };
  }, [mobileMenu]);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const theme = localStorage.getItem('tp-showcase:theme');
              if (theme) {
                document.body.style.background = JSON.parse(theme).gradient;
              }
            })();

          `,
        }}
      />

      <AppContext.Provider
        value={{
          theme,
          setTheme,
          loading,
          skills,
          activeLanguage,
          language,
          setLanguage,
          menuItems,
          mobileMenu,
          setMobileMenu,
          isMobile,
          colors,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

const colors = [
  {
    id: "blue",
    gradient: "linear-gradient(#001429, #007aff)",
    fill: "#001429",
    active: "#007aff",
    btn: "#f7fbff",
    text: "#f7fbff",
    secondaryText: "#001429",
  },
  {
    id: "red",
    gradient: "linear-gradient(#001429, #e42f22)",
    fill: "#001429",
    active: "#e42f22",
    btn: "#f7fbff",
    text: "#f7fbff",
    secondaryText: "#001429",
  },
  {
    id: "black",
    gradient: "linear-gradient(#000, #333)",
    fill: "#111",
    active: "#333",
    btn: "#f7fbff",
    text: "#f7fbff",
    secondaryText: "#001429",
  },
  {
    id: "light",
    gradient: "linear-gradient(#e9e9e9, #f1f1f1)",
    fill: "#e9e9e9",
    active: "#f1f1f1",
    btn: "#111",
    text: "#111",
    secondaryText: "#f1f1f1",
  },
  {
    id: "green",
    gradient: "linear-gradient(#001429, #47c232)",
    fill: "#001429",
    active: "#47c232",
    btn: "#f7fbff",
    text: "#f7fbff",
    secondaryText: "#001429",
  },
  {
    id: "white&black",
    gradient: "linear-gradient(#001429, #f7fbff)",
    fill: "#001429",
    active: "#001429",
    btn: "#f7fbff",
    text: "#f7fbff",
    secondaryText: "#001429",
  },
  {
    id: "yellow",
    gradient: "linear-gradient(#001429, #ffda4a)",
    fill: "#001429",
    active: "#ffda4a",
    btn: "#f7fbff",
    text: "#f7fbff",
    secondaryText: "#001429",
  },
  {
    id: "blue-2",
    gradient: "linear-gradient(#6a11cb, #2575fc)",
    fill: "#6a11cb",
    active: "#2575fc",
    btn: "#f7fbff",
    text: "#f7fbff",
    secondaryText: "#6a11cb",
  },
  {
    id: "red-orange",
    gradient: "linear-gradient(#ee0979, #ff6a00)",
    fill: "#ee0979",
    active: "#ff6a00",
    btn: "#f7fbff",
    text: "#f7fbff",
    secondaryText: "#ee0979",
  },
  {
    id: "blue-light",
    gradient: "linear-gradient(#0072ff, #00c6ff)",
    fill: "#0072ff",
    active: "#00c6ff",
    btn: "#f7fbff",
    text: "#f7fbff",
    secondaryText: "#0072ff",
  },
  {
    id: "red-orange-dark",
    gradient: "linear-gradient(#f85032, #e73827)",
    fill: "#f85032",
    active: "#e73827",
    btn: "#f7fbff",
    text: "#f7fbff",
    secondaryText: "#f85032",
  },
  {
    id: "pink-light",
    gradient: "linear-gradient(#ff0844, #ffb199)",
    fill: "#ff0844",
    active: "#ffb199",
    btn: "#f7fbff",
    text: "#f7fbff",
    secondaryText: "#ff0844",
  },
  {
    id: "blue-dark",
    gradient: "linear-gradient(#2b5876, #4e4376)",
    fill: "#2b5876",
    active: "#2b5876",
    btn: "#f7fbff",
    text: "#f7fbff",
    secondaryText: "#4e4376",
  },
  {
    id: "purple-light",
    gradient: "linear-gradient(#834d9b, #d04ed6)",
    fill: "#834d9b",
    active: "#d04ed6",
    btn: "#f7fbff",
    text: "#f7fbff",
    secondaryText: "#834d9b",
  },
];
