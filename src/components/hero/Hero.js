import "../../styles/Hero.css";
import Header from "../../utils/Header";

export default function Hero() {
  return (
    <section className="hero">
      <section className="hero-section">
        <section className="hero-content">
          <Header
            title="Welcome to Rumbel AL-Mumtaz!"
            className="hero-header"
          />
          <h1>Menjadi hebat bersama Rumbel Al-Mumtaz</h1>
          <p>
            Rumbel AL-Mumtaz merupakan salah satu sarana untuk anak belajar
            menghitung lebih cepat dan mudah hanya menggunakan jari. Selain itu,
            sarana untuk beljar membaca dengan cara yang lebih menyenangkan.
          </p>
        </section>

        <img
          className="hero-img"
          src="/assets/image/hero.png"
          alt="astronout"
        />
      </section>
    </section>
  );
}
