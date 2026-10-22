import Image from "next/image";

export default function StorySection() {
  return (
    <section className="story-section" id="cerita" aria-labelledby="story-title">
      <div className="story-image-wrap">
        <Image
          className="story-image"
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85"
          alt="Barista menyiapkan kopi dengan metode seduh manual"
          fill
          unoptimized
          sizes="(max-width: 680px) 86vw, 42vw"
        />
      </div>
      <div className="story-copy">
        <p className="section-kicker">Tentang Cafe JDM</p>
        <h2 className="section-title" id="story-title">
          Hal baik tumbuh dari proses yang sederhana.
        </h2>
        <p className="section-copy">
          Bagi kami, kopi selalu punya cerita: dari tanah tempat ia tumbuh,
          tangan yang merawatnya, sampai obrolan yang hadir di meja. Cafe JDM
          dibuat sebagai ruang untuk menikmati semua proses itu tanpa terburu-buru.
        </p>
        <a className="text-link" href="#suasana">
          Kenali ruang kami <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}