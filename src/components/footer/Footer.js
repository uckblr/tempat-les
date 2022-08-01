import "../../styles/Footer.css";
import Logo from "../../utils/Logo";

export default function Footer() {
  return (
    <footer>
      <header>
        <Logo logoClass="footer-logo" titleClass="title-logo-footer" />
        <p>
          Rumbel AL-Mumtaz merupakan salah satu sarana untuk anak belajar
          menghitung lebih cepat dan mudah hanya menggunakan jari. Selain itu,
          sarana untuk beljar membaca dengan cara yang lebih menyenangkan.
        </p>
      </header>

      <section className="footer-link">
        <h3>Home</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Blogs</a>
          </li>
          <li>
            <a href="/">Offers</a>
          </li>
          <li>
            <a href="/">Pircing</a>
          </li>
        </ul>
      </section>
      <section className="footer-link">
        <h3>Services</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Blogs</a>
          </li>
          <li>
            <a href="/">Offers</a>
          </li>
          <li>
            <a href="/">Pircing</a>
          </li>
        </ul>
      </section>
      <section className="footer-link">
        <h3>About</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Blogs</a>
          </li>
          <li>
            <a href="/">Offers</a>
          </li>
          <li>
            <a href="/">Pircing</a>
          </li>
        </ul>
      </section>
      <section className="footer-link">
        <h3>Offers</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Blogs</a>
          </li>
          <li>
            <a href="/">Offers</a>
          </li>
          <li>
            <a href="/">Pircing</a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
