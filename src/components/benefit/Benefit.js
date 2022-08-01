import "../../styles/Benefit.css";
import { BenefitData } from "../../data/BenefitData";
import BenefitItem from "../../utils/BenefitItem";
import CenterHeader from "../../utils/CenterHeader";

export default function Benefit() {
  return (
    <section className="benefit-section">
      <CenterHeader
        headTitle="Keunggulan"
        headClass="benefit"
        title="Alasan kenapa kami adalah"
        scTitle="Pilihan yang tepat"
      />

      <section className="benefit-list">
        {BenefitData.map((item) => (
          <BenefitItem key={item.id} {...item} />
        ))}
      </section>
    </section>
  );
}
