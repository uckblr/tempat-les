export default function Buble({ img, title, desc, body }) {
  return (
    <section className="parent-say-item">
      <div className="buble-box">
        <img
          src="assets/image/right-quotes.png"
          alt="buble icon"
          className="buble-icon"
        />
        <div className="buble"></div>
        <p>{body}</p>
      </div>

      <section className="parent-profile">
        <img className="parent-profile-img" src={img} alt="parent profile" />
        <section className="parent-profile-text">
          <h3>{title}</h3>
          <p>{desc}</p>
        </section>
      </section>
    </section>
  );
}
