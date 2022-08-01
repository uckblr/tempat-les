export default function Info({ img, title }) {
  return (
    <section className="info">
      <img src={img} alt="info number" />
      <h2>{title}</h2>
    </section>
  );
}
