import { Link } from "react-router-dom";

export default function ProgramBannerItem({ img, title }) {
  return (
    <Link to="/prisma-hitung" className="program-banner-item">
      <img
        className="program-banner-item-img"
        src={img}
        alt="program banner item"
      />
      <p>{title}</p>
    </Link>
  );
}
