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
    gradient: "linear-gradient(black, #001429, #007aff)",
    fill: "#007aff",
    text: "#f7fbff",
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
    if (isMobile) {
      if (mobileMenu) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    }
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
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};
