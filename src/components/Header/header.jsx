import "./header.scss";

const Header = () => {
  return (
    <header id="header">
      <nav>
        <ul>
          <a href="#presentation">
            <li>Présentation</li>
          </a>
          <a href="#chiffresCles">
            <li>Chiffres Clés</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
