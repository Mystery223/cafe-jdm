import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <Image
        className="hero-photo"
        src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=2200&q=90"
        alt="Interior kedai kopi yang hangat dengan meja kayu dan cahaya sore"
        fill
        priority
        unoptimized
        sizes="100vw"
      />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow">
          <span className="eyebrow-rule" aria-hidden="true" />
          Kopi pilihan · ruang untuk jeda
        </p>
        <h1 id="hero-title">
          Ruang untuk <em>menikmati</em> hari.
        </h1>
        <p className="hero-intro">
          Secangkir kopi yang diracik dengan teliti, suasana yang membuat waktu
          berjalan sedikit lebih pelan.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#menu">
            Lihat menu
          </a>
          <a className="button-quiet" href="#cerita">
            Cerita kami
          </a>
        </div>
      </div>
      <span className="hero-caption">Kopi Senja · Coffee House</span>
    </section>
  );
}