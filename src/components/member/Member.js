import "../../styles/Member.css";
import { DataPengajar } from "../../data/DataPengajar";
import MemberItem from "./MemberItem";
import { useEffect, useState } from "react";
import CenterHeader from "../../utils/CenterHeader";
import MemberCategoryBtn from "./MemberCategoryBtn";

export default function Member() {
  const [dataPengajar, setDataPengajar] = useState([]);

  const handleSelect = (e) => {
    const activeTab = document.querySelectorAll(".member-category-item");
    if (e.target.innerText === "ABAMA") {
      setDataPengajar(
        DataPengajar.filter((member) => member.job === "Pengajar ABAMA")
      );
      activeTab[0].classList.remove("active-tab");
      activeTab[1].classList.add("active-tab");
      activeTab[2].classList.remove("active-tab");
      activeTab[3].classList.remove("active-tab");
    } else if (e.target.innerText === "Tematic") {
      setDataPengajar(
        DataPengajar.filter((member) => member.job === "Pengajar Tematic")
      );
      activeTab[0].classList.remove("active-tab");
      activeTab[1].classList.remove("active-tab");
      activeTab[2].classList.add("active-tab");
      activeTab[3].classList.remove("active-tab");
    } else if (e.target.innerText === "Fun English") {
      setDataPengajar(
        DataPengajar.filter((member) => member.job === "Pengajar Fun English")
      );
      activeTab[0].classList.remove("active-tab");
      activeTab[1].classList.remove("active-tab");
      activeTab[2].classList.remove("active-tab");
      activeTab[3].classList.add("active-tab");
    } else {
      setDataPengajar(
        DataPengajar.filter((member) => member.job === "Pengajar Prisma Hitung")
      );
      activeTab[0].classList.add("active-tab");
      activeTab[1].classList.remove("active-tab");
      activeTab[2].classList.remove("active-tab");
      activeTab[3].classList.remove("active-tab");
    }
  };

  useEffect(() => {
    setDataPengajar(
      DataPengajar.filter((member) => member.job === "Pengajar Prisma Hitung")
    );
  }, []);
  return (
    <section className="member-section">
      <CenterHeader
        headTitle="Pengajar Kami"
        headClass="member-header"
        title="Berkenalan dengan"
        scTitle="Pengajar terbaik kami"
      />
      <MemberCategoryBtn handler={handleSelect} />
      <section className="member-list">
        {dataPengajar.map((member) => (
          <MemberItem
            key={member.id}
            img={member.img}
            title={member.name}
            job={member.job}
          />
        ))}
      </section>
    </section>
  );
}
