const Navbar = (active) => (
  <nav className="navbar has-background-primary">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
        </a>
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className={active === 'home' ? 'navbar-item is-active' : 'navbar-item'} href="/">
            Home
          </a>
          <a className="navbar-item" href="/store">
            Store
          </a>
          <a className="navbar-item" href="/contact">
            Contact
          </a>
          <a className="navbar-item" href="/about">
            About
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
