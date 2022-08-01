import "../styles/HeaderBanner.css";
import Header from "./Header";

export default function HeaderBanner({
  wrapper,
  img,
  header,
  headerClass,
  titleClass,
  btnClass,
  title,
  sctitle,
  entitle,
  desc,
  to,
}) {
  return (
    <section className={`header-banner ${wrapper}`}>
      <img src={`/assets/image/${img}`} alt="header banner" />

      <article>
        <Header title={header} className={headerClass} />
        <h1>
          {title} <span className={titleClass}>{sctitle} </span>
          {entitle}
        </h1>

        <p>{desc}</p>
      </article>
    </section>
  );
}
