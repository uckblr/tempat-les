import { useState } from "react";
import "../../styles/Navbar.css";
import Logo from "../../utils/Logo";
import MobileIcon from "./MobileIcon";
import NavLink from "./NavLink";

export default function Navbar() {
  const [openProgram, setOpenProgram] = useState(false);
  const [openNavLink, setOpenNavLink] = useState(false);

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };

  const handleProgram = (e) => {
    e.preventDefault();
    setOpenProgram(!openProgram);
    document.querySelector(".list-program").classList.toggle("open");
  };

  const handleNavLink = (e) => {
    e.preventDefault();
    if (e.target.innerText === "About") {
      window.scrollTo({
        top: document.querySelector(".header-banner>img").offsetTop,
        behavior: "smooth",
      });
      document.querySelector("nav>ul").classList.remove("open");
    } else if (e.target.innerText === "Contact") {
      window.scrollTo({
        top: document.querySelector(".contact-banner>h1").offsetTop,
        behavior: "smooth",
      });
      document.querySelector("nav>ul").classList.remove("open");
    }
  };

  const handleIcon = (e) => {
    e.preventDefault();
    setOpenNavLink(!openNavLink);
    document.querySelector("nav ul").classList.toggle("open");
  };

  return (
    <header>
      <nav id="navbar">
        <Logo />
        <MobileIcon icon={handleIcon} open={openNavLink} />
        <NavLink
          handleNavLink={handleNavLink}
          handleProg={handleProgram}
          handleOpenProg={openProgram}
        />
      </nav>
    </header>
  );
}
