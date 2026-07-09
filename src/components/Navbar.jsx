function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">
        <span>🐾</span>
        Cat Haven
      </div>
      <nav>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#breeds">Breeds</a>
        <a href="#contact">Contact</a>
      </nav>
      <button>Explore</button>
    </header>
  );
}

export default Navbar;
