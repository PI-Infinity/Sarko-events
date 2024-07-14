"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

/**
 * EStore App state context
 */

const EStoreAppContext = createContext<any>(null);

export const useEStoreAppContext = () => useContext(EStoreAppContext);

interface contextProps {
  children: ReactNode;
}

export const EStoreAppContextWrapper: React.FC<contextProps> = ({
  children,
}) => {
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

  // nav items
  const menuItems = [
    { path: "/", label: "Home" },
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

  /**
   * products context
   */
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const theme = localStorage.getItem('sarko-events:theme');
              if (theme) {
                document.body.style.background = JSON.parse(theme).gradient;
              }
            })();

          `,
        }}
      />

      <EStoreAppContext.Provider
        value={{
          theme,
          setTheme,
          loading,
          menuItems,
          mobileMenu,
          setMobileMenu,
          products,
          search,
          setSearch,
        }}
      >
        {children}
      </EStoreAppContext.Provider>
    </>
  );
};
