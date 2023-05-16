import './Header.scss';

function Header() {
  return (
    <div className="Header">
      <nav>
            <a>
                Marco Vassal
            </a>
            <ul>
                <li><a href="">Compétences</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
        <div className="ligne_head"></div>
    </div>
  );
}

export default Header;
