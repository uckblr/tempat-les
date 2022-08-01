export default function MemberItem({ img, title, job }) {
  return (
    <section className="member">
      <img src={img} alt="member" className="member-img" />
      <section className="member-text">
        <h1>{title}</h1>
        <p>{job}</p>
      </section>
    </section>
  );
}
