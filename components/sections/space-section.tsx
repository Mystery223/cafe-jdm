import Image from "next/image";

const facilities = [
  "Wi-Fi 150 Mbps",
  "Ruang ber-AC",
  "Area merokok",
  "Stopkontak tersedia",
  "Musholla",
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
    alt: "Area duduk café dengan meja kayu dan cahaya alami",
    sizes: "(max-width: 680px) 86vw, 35vw",
  },
  {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=85",
    alt: "Sudut interior café yang nyaman",
    sizes: "(max-width: 680px) 42vw, 25vw",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85",
    alt: "Kopi dan perlengkapan seduh di atas meja",
    sizes: "(max-width: 680px) 42vw, 28vw",
  },
];

export default function SpaceSection() {
  return (
    <section className="space-section" id="suasana" aria-labelledby="space-title">
      <div className="space-heading">
        <div>
          <p className="section-kicker">Singgah lebih lama</p>
          <h2 className="section-title" id="space-title">
            Ruang yang terasa seperti milik sendiri.
          </h2>
        </div>
        <p className="section-copy">
          Datang untuk bekerja, bertemu, atau sekadar memberi ruang bagi diri
          sendiri. Ada tempat untuk setiap cara menikmati hari.
        </p>
      </div>

      <div className="facility-list" aria-label="Fasilitas Kopi Senja">
        {facilities.map((facility, index) => (
          <div className="facility-item" key={facility}>
            <span className="facility-index">0{index + 1}</span>
            <strong>{facility}</strong>
          </div>
        ))}
      </div>

      <div className="gallery-grid" aria-label="Suasana Kopi Senja">
        {gallery.map((image) => (
          <div className="gallery-image-wrap" key={image.src}>
            <Image
              className="gallery-image"
              src={image.src}
              alt={image.alt}
              fill
              unoptimized
              sizes={image.sizes}
            />
          </div>
        ))}
      </div>
    </section>
  );
}