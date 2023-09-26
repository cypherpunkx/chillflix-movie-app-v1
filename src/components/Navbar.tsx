import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiMoviePlay } from "react-icons/bi";

function Navbar() {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const header = document.querySelector("header");
      const fixedNav: any = header?.offsetTop;

      if (window.scrollY > fixedNav) {
        header?.classList.add("navbar-fixed");
      } else {
        header?.classList.remove("navbar-fixed");
      }
    });

    return window.removeEventListener("scroll", function () {
      const header = document.querySelector("header");
      const fixedNav: any = header?.offsetTop;

      if (window.scrollY > fixedNav) {
        header?.classList.add("navbar-fixed");
      } else {
        header?.classList.remove("navbar-fixed");
      }
    });
  }, []);

  return (
    <div className="flex justify-between items-center gap-8 py-5 px-8">
      <Link
        to={"/"}
        className="flex items-center gap-2 text-3xl font-extrabold text-purple-600"
      >
        <BiMoviePlay />
        <span className="uppercase">Chillflix</span>
      </Link>
      <nav>
        <ul className="inline-flex space-x-4">
          <li>
            <Link
              to={"/movies"}
              className="hover:text-purple-600 transition-colors"
            >
              Movies
            </Link>
          </li>
          <li>
            <Link to={"/"} className="hover:text-purple-600 transition-colors">
              Tv's
            </Link>
          </li>
          <li>
            <Link to={"/"} className="hover:text-purple-600 transition-colors">
              Persons
            </Link>
          </li>
          <li>
            <Link
              to={"/providers"}
              className="hover:text-purple-600 transition-colors"
            >
              Providers
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
