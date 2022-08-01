import Header from "./Header";
import "../styles/CenterHeader.css";

export default function CenterHeader({
  title,
  scTitle,
  headTitle,
  headClass,
  titleClass,
}) {
  return (
    <span className="header-center">
      <Header title={headTitle} className={headClass} />
      <h1 className={`center-header ${titleClass}`}>
        {title} <span>{scTitle}</span>
      </h1>
    </span>
  );
}
