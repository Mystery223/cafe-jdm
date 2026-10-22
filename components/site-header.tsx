export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Cafe JDM, ke bagian atas">
        <span className="brand-mark" aria-hidden="true">
          CJ
        </span>
        <span className="brand-copy">
          <strong>CAFE JDM</strong>
          <small>COFFEE HOUSE</small>
        </span>
      </a>

      <nav className="site-nav" aria-label="Navigasi utama">
        <a href="#cerita">Cerita</a>
        <a href="#menu">Menu</a>
        <a href="#suasana">Ruang</a>
      </nav>

      <a className="header-cta" href="#menu">
        Jelajahi menu
      </a>
    </header>
  );
}