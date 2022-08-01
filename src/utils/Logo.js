import { Link } from "react-router-dom";
import "../styles/Logo.css";

export default function Logo({ logoClass, titleClass }) {
  return (
    <Link to="/" className={`logo ${logoClass}`}>
      <img
        className="logo-image"
        src="/assets/image/logo-rumbel.png"
        alt="logo"
      />
      <div>
        <h1 className={`logo-title ${titleClass}`}>Rumbel Al-Mumtaz</h1>
        <span className="span-title">Cabang Cidahu, Kuningan.</span>
      </div>
    </Link>
  );
}
