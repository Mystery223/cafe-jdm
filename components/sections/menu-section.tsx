import Image from "next/image";

const menuItems = [
  {
    name: "Senja Latte",
    detail: "Espresso house blend, susu segar, sentuhan gula aren.",
    price: "Rp 28.000",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Segelas latte dengan foam lembut",
  },
  {
    name: "Kopi Tubruk",
    detail: "Seduhan sederhana dengan karakter kopi yang berani.",
    price: "Rp 22.000",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Kopi hitam yang baru diseduh",
  },
  {
    name: "Butter Croissant",
    detail: "Lapisan renyah, bagian dalam lembut dan hangat.",
    price: "Rp 24.000",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Croissant keemasan di atas piring",
  },
];

export default function MenuSection() {
  return (
    <section className="menu-section" id="menu" aria-labelledby="menu-title">
      <div className="menu-heading">
        <div>
          <p className="section-kicker">Dari bar kami</p>
          <h2 className="section-title" id="menu-title">
            Teman baik untuk setiap jeda.
          </h2>
        </div>
        <p className="section-copy">
          Pilihan kopi, minuman non-kopi, dan kudapan untuk menemani waktu Anda.
        </p>
      </div>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <article className="menu-item" key={item.name}>
            <div className="menu-image-wrap">
              <Image
                className="menu-image"
                src={item.image}
                alt={item.imageAlt}
                fill
                unoptimized
                sizes="(max-width: 680px) 86vw, (max-width: 900px) 45vw, 28vw"
              />
            </div>
            <div className="menu-item-copy">
              <div className="menu-item-topline">
                <h3>{item.name}</h3>
                <span className="menu-price">{item.price}</span>
              </div>
              <p>{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="menu-more">
        <a className="button-quiet" href="#suasana">
          Jelajahi Cafe JDM
        </a>
      </div>
    </section>
  );
}