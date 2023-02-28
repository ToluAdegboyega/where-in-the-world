import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Moon } from "../assets/icons/moon.svg";
import { ReactComponent as MoonSolid } from "../assets/icons/moon-solid.svg";

const Header = () => {
  const light = "theme__light";
  const dark = "theme__dark";

  let html = document.documentElement;

  const [theme, setTheme] = useState(localStorage.getItem('theme') || light);

  const switchTheme = () => {
    if (theme === dark) {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    html.className = theme;
  }, [html, theme]);

  return (
    <div className="header h-20 w-100 flex justify-between items-center py-0 md:px-20 px-6">
      <h1 className="md:text-2xl text-base font-semibold cursor-pointer">
        <Link to="/" className="px-0 py-2">
          Where In The World?
        </Link>
      </h1>

      <button
        data-testid="switch"
        onClick={switchTheme}
        className="flex justify-end items-center 
        h-12 py-0 px-4 -mr-4 text-xs font-semibold cursor-pointer border-none bg-transparent rounded-md"
      >
        {theme === light ? <MoonSolid className="h-5 m-2" /> : <Moon className="h-5 m-2" />}
        {theme === light ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default Header;
