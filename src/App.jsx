import React from "react";

import heroImg from "./assets/images/hero.jpg";
import weddingImg from "./assets/images/wedding.jpg";
import corporateImg from "./assets/images/corporate.jpg";
import privateImg from "./assets/images/private.jpg";
import cuisineBg from "./assets/images/cuisine-bg.jpg";

export default function App() {
  const WHATSAPP_NUMBER = "91XXXXXXXXXX"; // TODO
  const whatsappText = encodeURIComponent(
    "Hi Zovilo, I’m planning an event and would like a luxury catering consultation."
  );
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;

  const nav = [
    { label: "Experiences", href: "#experiences" },
    { label: "Cuisines", href: "#cuisines" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-[#07070A] text-white">
      {/* NAVBAR (glass) */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="/" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-white/10">
              <span className="text-sm font-black tracking-widest text-[#f2dfb6]">
                ZV
              </span>
            </div>
            <div className="leading-tight">
              <div className="text-[13px] font-extrabold tracking-[0.28em]">
                ZOVILO
              </div>
              <div className="text-[12px] text-white/70">
                Luxury Wedding & Event Catering
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-xl px-3 py-2 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 transition hover:bg-white/15 md:inline-flex"
            >
              Request Menu
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-xl border border-[#d7b77a]/50 bg-[#d7b77a]/20 px-4 py-2 text-sm text-white transition hover:bg-[#d7b77a]/25"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO WITH BACKGROUND PHOTO */}
      <section className="relative">
        {/* Background image */}
        <img
          src={heroImg}
          alt="Luxury catering setup"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Premium overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-[#07070A]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(215,183,122,0.18),transparent_55%)]" />

        <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-14 md:pb-20 md:pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b77a]/35 bg-black/35 px-4 py-2 text-[12px] uppercase tracking-[0.18em] text-[#f2dfb6] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#d7b77a] shadow-[0_0_18px_rgba(215,183,122,.35)]" />
              Mumbai • Premium Catering Specialists
            </div>

            <h1 className="mt-5 text-[42px] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[64px]">
              Luxury catering for{" "}
              <span className="text-[#f2dfb6] drop-shadow-[0_10px_30px_rgba(0,0,0,.65)]">
                grand celebrations
              </span>
              .
            </h1>

            <p className="mt-4 text-[15px] leading-7 text-white/80 md:text-[16px]">
              Bespoke menus, live counters, elegant presentation, and flawless
              hospitality — curated for weddings & premium events.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl border border-[#d7b77a]/55 bg-[#d7b77a]/25 px-6 py-3 text-sm backdrop-blur transition hover:bg-[#d7b77a]/30"
              >
                Book a Consultation
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-black/30 px-6 py-3 text-sm text-white/90 backdrop-blur transition hover:bg-black/40"
              >
                View Gallery
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Bespoke Wedding Menus",
                "Live Food Counters",
                "Premium Presentation",
                "White-glove Service",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-xs text-white/85 backdrop-blur"
                >
                  <span className="h-2 w-2 rounded-full bg-[#d7b77a]" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Trust stats glass row */}
          <div className="mt-10 grid gap-3 md:grid-cols-4">
            {[
              ["500+", "Events Served"],
              ["10+", "Years Expertise"],
              ["50+", "Menu Styles"],
              ["5★", "Client Satisfaction"],
            ].map(([num, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/20 bg-black/25 p-5 backdrop-blur"
              >
                <div className="text-xl font-semibold">{num}</div>
                <div className="mt-1 text-xs text-white/75">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO EXPERIENCES (premium) */}
      <section id="experiences" className="mx-auto max-w-6xl px-5 py-12">
        <SectionHead
          title="Signature Experiences"
          desc="A premium culinary journey designed to match your celebration’s scale and style."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <PhotoCard
            img={weddingImg}
            title="Luxury Wedding Catering"
            desc="Royal buffet styling, multi-course menus and seamless service across all functions."
            chips={["Mehendi", "Sangeet", "Wedding", "Reception"]}
          />
          <PhotoCard
            img={corporateImg}
            title="Corporate & VIP Events"
            desc="Fine dining formats & curated buffets designed for premium audiences."
            chips={["Gala", "Launch", "Conference"]}
          />
          <PhotoCard
            img={privateImg}
            title="Private Celebrations"
            desc="Elegant menus & premium setups for birthdays, anniversaries, and intimate parties."
            chips={["Birthdays", "Anniversaries", "House Parties"]}
          />
        </div>
      </section>

      {/* CUISINES */}
      <section id="cuisines" className="relative py-20">

  {/* Background Image */}
  <img
    src={cuisineBg}
    alt="Luxury cuisine background"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#07070A]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(215,183,122,0.15),transparent_55%)]" />

  {/* Content */}
  <div className="relative mx-auto max-w-6xl px-5">

    <SectionHead
      title="Cuisines & Live Counters"
      desc="From classic Indian royalty to modern global spreads — with interactive live stations."
    />

    <div className="grid gap-6 md:grid-cols-2">
      <GlassCard
        title="Curated Cuisine Styles"
        desc="North Indian • Mughlai • Italian • Pan-Asian • Continental • Jain • Vegan — customized to your guests."
        chips={["Bespoke Menus", "Diet Options", "Tasting Support"]}
      />
      <GlassCard
        title="Live Counter Experiences"
        desc="Chaat • Pasta • Dim Sum • Kebabs • Waffles • Dessert Studio — premium presentation & smooth guest flow."
        chips={["Interactive", "Premium Setup", "Fast Service"]}
      />
    </div>

  </div>
</section>
      {/* GALLERY (still placeholders, but looks premium) */}
      <section id="gallery" className="mx-auto max-w-6xl px-5 py-12">
  <SectionHead
    title="Gallery"
    desc="A glimpse of our luxury catering experiences."
  />

  <div className="grid grid-cols-12 gap-4">

    <GalleryTile
      src="https://static.vecteezy.com/system/resources/thumbnails/036/729/567/small/ai-generated-catering-companies-light-gray-and-dark-amber-free-photo.jpg"
      className="col-span-12 min-h-[260px] md:col-span-6"
      label="Royal Wedding Buffet"
    />

    <GalleryTile
      src="https://media.istockphoto.com/id/1368324537/photo/ragda-puri-or-papdi-chat-popular-indian-snacks-or-street-food.jpg?s=612x612&w=0&k=20&c=Tt-UwwK8mgcCFPyih5TIy8YeMH2Cfwi5Dio30Ukkiq8="
      className="col-span-6 min-h-[170px] md:col-span-3"
      label="Live Chaat Counter"
    />

    <GalleryTile
      src=""
      className="col-span-6 min-h-[170px] md:col-span-3"
      label="Dessert Studio"
    />

    <GalleryTile
      src="https://png.pngtree.com/thumb_back/fw800/background/20250908/pngtree-elegant-fine-dining-restaurant-scene-delicious-food-wine-glasses-image_19017352.webp"
      className="col-span-12 min-h-[170px] md:col-span-4"
      label="Corporate Fine Dining"
    />

    <GalleryTile
      src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=1600&q=80"
      className="col-span-12 min-h-[170px] md:col-span-4"
      label="Modern Plating"
    />

    <GalleryTile
      src="https://img.freepik.com/premium-photo/pleasant-woman-giving-lunch-school-girl-cafeteria_392895-449898.jpg"
      className="col-span-12 min-h-[170px] md:col-span-4"
      label="Grand Service Setup"
    />

  </div>
</section>

      {/* REVIEWS */}
      <section id="reviews" className="mx-auto max-w-6xl px-5 py-12">
        <SectionHead
          title="Client Words"
          desc="Luxury clients trust short, elegant, real testimonials."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <QuoteCard
            quote="The food became the highlight of our wedding. Presentation was premium and the service was flawless."
            by="Riya & Karan, Mumbai"
          />
          <QuoteCard
            quote="Live counters were managed beautifully and guests kept coming back. Super classy experience."
            by="Aanya S., Bandra"
          />
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[28px] border border-[#d7b77a]/25 bg-gradient-to-b from-[#d7b77a]/14 to-black/30 p-7 backdrop-blur md:flex-row md:items-center md:p-9">
          <div>
            <h3 className="text-2xl font-semibold">
              Planning a luxury wedding or premium event?
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/80">
              Share your date, guest count, venue area, and cuisine preferences —
              we’ll recommend the perfect menu & setup.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/80">
              <span className="rounded-full border border-white/20 bg-black/25 px-4 py-2 backdrop-blur">
                Mumbai • Navi Mumbai • Thane
              </span>
              <span className="rounded-full border border-white/20 bg-black/25 px-4 py-2 backdrop-blur">
                Weddings • Corporate • Private
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => alert("Next: connect to a lead form / email")}
              className="rounded-2xl border border-white/25 bg-black/25 px-6 py-3 text-sm text-white/90 backdrop-blur transition hover:bg-black/35"
            >
              Request a Callback
            </button>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-[#d7b77a]/55 bg-[#d7b77a]/25 px-6 py-3 text-sm backdrop-blur transition hover:bg-[#d7b77a]/30"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 text-sm text-white/70">
          <div>
            <div className="text-xs font-extrabold tracking-[0.28em] text-white/85">
              ZOVILO
            </div>
            <div className="mt-1">Luxury Wedding & Event Caterers • Mumbai</div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a className="hover:text-[#f2dfb6]" href="#experiences">Experiences</a>
            <a className="hover:text-[#f2dfb6]" href="#gallery">Gallery</a>
            <a className="hover:text-[#f2dfb6]" href="#contact">Contact</a>
          </div>

          <div>© {new Date().getFullYear()} Zovilo. All rights reserved.</div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-3 text-sm text-white/95 shadow-[0_18px_55px_rgba(0,0,0,.55)] backdrop-blur transition hover:border-[#d7b77a]/40 hover:bg-black/40"
      >
        <span className="h-2 w-2 rounded-full bg-[#d7b77a]" />
        WhatsApp Zovilo
      </a>
    </div>
  );
}

/* ---------- components ---------- */

function SectionHead({ title, desc }) {
  return (
    <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
      <h2 className="text-[22px] font-semibold tracking-[-0.01em]">{title}</h2>
      <p className="max-w-2xl text-sm leading-6 text-white/70">{desc}</p>
    </div>
  );
}

function PhotoCard({ img, title, desc, chips = [] }) {
  return (
    <div className="group relative overflow-hidden rounded-[24px] border border-white/15 bg-black/25 shadow-[0_18px_55px_rgba(0,0,0,.45)]">
      <img
        src={img}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/15" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

      <div className="relative p-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b77a]/35 bg-black/30 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[#f2dfb6] backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-[#d7b77a]" />
          Premium
        </div>

        <h3 className="mt-3 text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-white/80">{desc}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-full border border-white/20 bg-black/25 px-4 py-2 text-xs text-white/85 backdrop-blur"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function GlassCard({ title, desc, chips = [] }) {
  return (
    <div className="relative overflow-hidden rounded-[22px] border border-white/15 bg-white/5 p-6 backdrop-blur transition hover:border-[#d7b77a]/30">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#d7b77a]/12 blur-[90px]" />
      </div>

      <div className="relative">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-white/70">{desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/75"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function GalleryTile({ src, label, className = "" }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/15 ${className}`}
    >
      {/* Image */}
      <img
        src={src}
        alt={label}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Gold Hover Glow */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(215,183,122,0.25),transparent_60%)]" />

      {/* Label */}
      <div className="absolute bottom-4 left-5 text-sm tracking-[0.14em] text-white/90">
        {label}
      </div>
    </div>
  );
}

function QuoteCard({ quote, by }) {
  return (
    <div className="rounded-[26px] border border-[#d7b77a]/22 bg-gradient-to-b from-[#d7b77a]/14 to-white/5 p-6 shadow-[0_18px_60px_rgba(0,0,0,.45)]">
      <p className="text-sm leading-7 text-white/90">“{quote}”</p>
      <div className="mt-3 text-xs tracking-[0.12em] text-[#f2dfb6]">
        — {by}
      </div>
    </div>
  );
}