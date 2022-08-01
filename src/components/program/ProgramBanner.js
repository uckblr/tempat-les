import "../../styles/Program.css";
import Header from "../../utils/Header";
import { ProgramBannerData } from "../../data/ProgramBannerData";
import ProgramBannerItem from "../../utils/ProgramBannerItem";

export default function ProgramBanner() {
  return (
    <section className="program-banner-section">
      <Header title="Program" className="program" />

      <section className="program-banner-list">
        {ProgramBannerData.map((item) => (
          <ProgramBannerItem key={item.id} img={item.img} title={item.title} />
        ))}
      </section>
    </section>
  );
}
