import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ListProgram from "./ListProgram";

export default function NavLink({ handleNavLink, handleProg, handleOpenProg }) {
  return (
    <ul>
      <li className="nav-link">
        <a onClick={handleNavLink} href="/">
          About
        </a>
      </li>

      <li className="nav-link">
        <a onClick={handleProg} className="program" href="/">
          Programs
          {handleOpenProg ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </a>
        <ListProgram />
      </li>

      <li className="nav-link">
        <a className="program" href="/">
          Location
          <hr />
        </a>
      </li>

      <li className="nav-link">
        <a onClick={handleNavLink} className="contact-link" href="/">
          Contact
        </a>
      </li>
    </ul>
  );
}
