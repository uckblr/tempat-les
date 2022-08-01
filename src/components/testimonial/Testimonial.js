import CenterHeader from "../../utils/CenterHeader";
import "../../styles/Testimonial.css";
import Buble from "./Buble";
import { TestimonialData } from "../../data/TestimonialData";

export default function Testimonial() {
  return (
    <section className="testimonial-section">
      <CenterHeader
        headTitle="Kata Mereka"
        headClass="testimonial-header"
        title="Apa kata para orang tua"
        scTitle="Tentang Kami?"
        titleClass="testimonial-title"
      />

      <section className="parent-say">
        {TestimonialData.map((item) => (
          <Buble
            key={item.id}
            img={item.img}
            title={item.name}
            desc={item.desc}
            body={item.body}
          />
        ))}
      </section>
    </section>
  );
}
