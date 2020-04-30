const Header = () => {
  const view = `
    <div class="Header-main">
      <div class="Header-logo">
          <a href="/">
            100tifi.co
          </a>
      </div>
      <div class="Header-nav">
        <a href="#/about/">
          About
        </a>
      </div>
    </div>
    <div class="hero">
       <img src="src/img/hero.jpg">
    </div>
  `;
  return view;
};

export default Header;