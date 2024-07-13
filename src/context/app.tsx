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
    main: "#007aff",
    background: "#007aff",
    text: "#f7fbff",
    secondaryText: "",
  });

  useLayoutEffect(() => {
    const localTheme = localStorage.getItem("tp-showcase:theme");
    if (localTheme) {
      let parseObject = JSON.parse(localTheme);
      console.log(parseObject);
      document.body.style.background = parseObject.gradient;
      document.documentElement.style.background = parseObject.background;
      setTheme(parseObject);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    } else {
      document.body.style.background = colors[0].gradient;
      document.documentElement.style.background = colors[0].background;
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
    id: "black",
    gradient: "linear-gradient(#080808, #151515)",
    main: "#151515",
    background: "#080808",
    active: "#ffe400",
    btn: "#ffe400",
    text: "#f7fbff",
    secondaryText: "#001429",
  },
  {
    id: "blue-lightblue",
    gradient: "linear-gradient(#0b0c10, #1f2833)",
    main: "#1f2833",
    background: "#0b0c10",
    active: "#66fcf1",
    btn: "#66fcf1",
    text: "#f7fbff",
    secondaryText: "#0b0c10",
  },

  {
    id: "red",
    gradient: "linear-gradient(#001429, #e42f22)",
    main: "#e42f22",
    background: "#001429",
    active: "#f7fbff",
    btn: "#f7fbff",
    text: "#f7fbff",
    secondaryText: "#001429",
  },

  {
    id: "light",
    gradient: "linear-gradient(#f1f1f1, #fff)",
    main: "#f1f1f1",
    background: "#f1f1f1",
    active: "#111",
    btn: "#111",
    text: "#111",
    secondaryText: "#f1f1f1",
  },
  {
    id: "black-green",
    gradient: "linear-gradient(#272727, #151515)",
    main: "#151515",
    background: "#272727",
    active: "#14a76c",
    btn: "#14a76c",
    text: "#f7fbff",
    secondaryText: "#001429",
  },
  {
    id: "black-orange",
    gradient: "linear-gradient(#272727, #151515)",
    main: "#151515",
    background: "#272727",
    active: "#ff652f",
    btn: "#ff652f",
    text: "#f7fbff",
    secondaryText: "#f7fbff",
  },
  {
    id: "blue",
    gradient: "linear-gradient(#001429, #007aff)",
    main: "#007aff",
    background: "#001429",
    active: "#ffe400",
    btn: "#ffe400",
    text: "#f7fbff",
    secondaryText: "#001429",
  },
  {
    id: "green",
    gradient: "linear-gradient(#001429, #001429)",
    main: "#001429",
    background: "#001429",
    active: "#47c232",
    btn: "#47c232",
    text: "#f7fbff",
    secondaryText: "#f7fbff",
  },
  {
    id: "white&red",
    gradient: "linear-gradient(#fff, #f1f1f1)",
    main: "#f1f1f1",
    background: "#fff",
    active: "#D11D27",
    btn: "#D11D27",
    text: "#050505",
    secondaryText: "#fff",
  },
  // {
  //   id: "yellow",
  //   gradient: "linear-gradient(#111, #222)",
  //   main: "#001429",
  //   background: "#001429",
  //   active: "#ffe400",
  //   btn: "#ffe400",
  //   text: "#f7fbff",
  //   secondaryText: "#001429",
  // },
  {
    id: "blue-2",
    gradient: "linear-gradient(#6a11cb, #2575fc)",
    main: "#6a11cb",
    background: "#6a11cb",
    active: "#f7fbff",
    btn: "#f7fbff",
    text: "#f7fbff",
    secondaryText: "#6a11cb",
  },
  {
    id: "blue-light",
    gradient: "linear-gradient(#3b8beb, #0072ff)",
    main: "#0072ff",
    background: "#0072ff",
    active: "#f7fbff",
    btn: "#f7fbff",
    text: "#f7fbff",
    secondaryText: "#111",
  },
  {
    id: "gray-red",
    gradient: "linear-gradient(#e3e2df, #e3e2df)",
    main: "#e3e2df",
    background: "#e3e2df",
    active: "#9a1750",
    btn: "linear-gradient(45deg, #9a1750, #ee4c7c)",
    text: "#222",
    secondaryText: "#f7fbff",
  },

  {
    id: "blue-dark",
    gradient: "linear-gradient(#2b5876, #4e4376)",
    main: "#2b5876",
    background: "#2b5876",
    active: "#f7fbff",
    btn: "#f7fbff",
    text: "#f7fbff",
    secondaryText: "#4e4376",
  },
  {
    id: "purple-light",
    gradient: "linear-gradient(#834d9b, #d04ed6)",
    main: "#834d9b",
    background: "#834d9b",
    active: "#f7fbff",
    btn: "#f7fbff",
    text: "#f7fbff",
    secondaryText: "#834d9b",
  },
];
