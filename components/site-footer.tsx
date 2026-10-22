export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <a className="brand" href="#top" aria-label="Cafe JDM, ke bagian atas">
          <span className="brand-mark" aria-hidden="true">
            CJ
          </span>
          <span className="brand-copy">
            <strong>CAFE JDM</strong>
            <small>COFFEE HOUSE</small>
          </span>
        </a>
        <p className="footer-note">Satu cangkir, satu jeda yang berarti.</p>
      </div>
      <nav className="footer-links" aria-label="Navigasi footer">
        <a href="#cerita">Tentang</a>
        <a href="#menu">Menu</a>
        <a href="#suasana">Suasana</a>
      </nav>
    </footer>
  );
}