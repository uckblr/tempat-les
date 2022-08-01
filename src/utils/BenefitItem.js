export default function BenefitItem({ img, title, desc }) {
  return (
    <section className="benefit-item">
      <img src={img} alt="benefit item" />
      <article>
        <h3>{title}</h3>
        <p>{desc}</p>
      </article>
    </section>
  );
}
