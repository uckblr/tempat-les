import "../../styles/Info.css";
import { InfoData } from "../../data/InfoData";
import InfoItem from "../../utils/InfoItem";

export default function Info() {
  return (
    <section className="info-section">
      {InfoData.map((item) => (
        <InfoItem key={item.id} img={item.img} title={item.title} />
      ))}
    </section>
  );
}
