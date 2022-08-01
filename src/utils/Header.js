import "../styles/Header.css";

export default function Header({ className, title }) {
  return (
    <header>
      <h4 className={className}>{title}</h4>
    </header>
  );
}
