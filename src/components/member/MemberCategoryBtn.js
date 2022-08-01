export default function MemberCategoryBtn({ handler }) {
  return (
    <section className="member-category">
      <section className="member-category-item active-tab" onClick={handler}>
        Prisma Hitung
      </section>
      <section className="member-category-item" onClick={handler}>
        ABAMA
      </section>
      <section className="member-category-item" onClick={handler}>
        Tematic
      </section>
      <section className="member-category-item" onClick={handler}>
        Fun English
      </section>
    </section>
  );
}
