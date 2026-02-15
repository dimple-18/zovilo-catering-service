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
                className="zv-bubble-btn inline-flex items-center justify-center rounded-2xl border border-white/25 bg-black/30 px-6 py-3 text-sm text-white/90 backdrop-blur transition hover:bg-black/30"
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
    className="absolute inset-0 h-full w-full object-cover object-top"
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
      src="https://t3.ftcdn.net/jpg/01/76/33/14/360_F_176331484_nLHY9EoW0ETwPZaS9OBXPGbCJhT70GZe.jpg"
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

{/* PREMIUM TRANSITION STRIP (between Gallery and Reviews) */}
<section className="relative py-10 mt-10 ">
  {/* subtle background: NOT solid black */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(215,183,122,0.16),transparent_55%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_65%,rgba(255,255,255,0.10),transparent_55%)]" />

  <div className="relative mx-auto max-w-6xl px-5">
    <div className="grid gap-5 md:grid-cols-[1.1fr_.9fr] md:items-center">
      {/* Text */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b77a]/35 bg-[#d7b77a]/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#f2dfb6]">
          <span className="h-2 w-2 rounded-full bg-[#d7b77a]" />
          Trusted for luxury celebrations
        </div>

        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.01em]">
          A premium experience,{" "}
          <span className="text-[#f2dfb6]">from first bite to final service</span>.
        </h3>

        <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
          Consistent taste • Elegant counters • Smooth guest flow — designed for weddings and high-profile events.
        </p>
      </div>

      {/* CTA + mini proof */}
      <div className="relative overflow-visible py-10 mt-10 flex flex-wrap items-center justify-start gap-3 md:justify-end">
        <div className="hidden md:flex items-center gap-3 text-xs text-white/60">
          <span className="rounded-full border border-white/12 bg-white/5 px-4 py-2">500+ Events</span>
          <span className="rounded-full border border-white/12 bg-white/5 px-4 py-2">50+ Menus</span>
          <span className="rounded-full border border-white/12 bg-white/5 px-4 py-2">5★ Focus</span>
        </div>

        <a
          href="#contact"
          className="zv-bubble-btn inline-flex items-center justify-center rounded-2xl border border-[#d7b77a]/55 bg-[#d7b77a]/12 px-6 py-3 text-sm text-white transition hover:bg-[#d7b77a]/12"
        >
          Get Quote
        </a>

        <a
          href="#cuisines"
          className="zv-bubble-btn inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/90 transition hover:bg-white/5"
        >
          View Menus
        </a>
      </div>
    </div>
  </div>
</section>

{/* REVIEWS */}
      <section
  id="reviews"
  className="relative py-20"
  style={{
    backgroundImage:
      "url('https://thumbs.dreamstime.com/b/salmon-tatrare-small-plates-catering-event-banquet-food-155459361.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark + Gold Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-[#07070A]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(215,183,122,0.15),transparent_60%)]" />

  <div className="relative mx-auto max-w-6xl px-5">

    <SectionHead
      title="Client Words"
      desc="Luxury celebrations deserve unforgettable catering experiences."
    />

    <div className="grid gap-6 md:grid-cols-2">

      <ReviewCard
        quote="The food became the highlight of our wedding. Presentation was premium and the service was flawless."
        name="Riya & Karan"
        location="Mumbai"
      />

      <ReviewCard
        quote="Live counters were managed beautifully and guests kept coming back. Super classy experience."
        name="Aanya Shah"
        location="Bandra"
      />

      <ReviewCard
        quote="From tasting session to final execution, everything was handled with perfection. Truly luxury service."
        name="Vikram Malhotra"
        location="Navi Mumbai"
      />

      <ReviewCard
        quote="Every guest appreciated the menu variety and elegance. Zovilo made our event unforgettable."
        name="Neha & Arjun"
        location="Thane"
      />

    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="relative overflow-hidden border-t border-white/10">
  {/* subtle glow */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#d7b77a]/12 blur-[90px]" />
    <div className="absolute right-[-90px] bottom-[-90px] h-80 w-80 rounded-full bg-white/8 blur-[110px]" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#07070A] to-black" />
  </div>

  <div className="relative mx-auto max-w-6xl px-5 py-14">
    {/* Premium CTA strip */}
    <div className="mb-10 grid gap-5 rounded-[28px] border border-[#d7b77a]/25 bg-white/5 p-6 backdrop-blur-xl md:grid-cols-[1.2fr_.8fr] md:items-center md:p-8">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d7b77a]/35 bg-[#d7b77a]/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#f2dfb6]">
          <span className="h-2 w-2 rounded-full bg-[#d7b77a]" />
          Premium Catering • Mumbai
        </div>

        <h3 className="mt-4 text-2xl font-semibold tracking-[-0.01em]">
          Make your celebration unforgettable with{" "}
          <span className="text-[#f2dfb6]">ZOVILO</span>.
        </h3>
        <p className="mt-2 text-sm leading-6 text-white/70">
          Share your date, guest count, and venue area — we’ll suggest a luxury menu & setup that fits your event.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 md:justify-end">
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/90 transition hover:bg-white/10"
        >
          Request a Callback
        </a>
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-2xl border border-[#d7b77a]/50 bg-[#d7b77a]/15 px-6 py-3 text-sm text-white transition hover:bg-[#d7b77a]/20"
        >
          WhatsApp Now
        </a>
      </div>
    </div>

    {/* Main footer grid */}
    <div className="grid gap-10 md:grid-cols-4">
      {/* Brand */}
      <div className="md:col-span-2">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/5">
            <span className="text-sm font-black tracking-widest text-[#f2dfb6]">ZV</span>
          </div>
          <div>
            <div className="text-[13px] font-extrabold tracking-[0.28em]">ZOVILO</div>
            <div className="text-xs text-white/60">Luxury Wedding & Event Catering</div>
          </div>
        </div>

        <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
          Five-star culinary experiences for weddings and premium events — bespoke menus, live counters,
          elegant presentation, and flawless hospitality.
        </p>

        {/* mini highlights */}
        <div className="mt-5 flex flex-wrap gap-2">
          {["Bespoke Menus", "Live Counters", "Luxury Presentation", "White-glove Service"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Quick links */}
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
          Quick Links
        </div>
        <div className="mt-4 grid gap-2 text-sm text-white/70">
          <a className="w-fit rounded-lg px-2 py-1 hover:bg-white/5 hover:text-white" href="#experiences">
            Experiences
          </a>
          <a className="w-fit rounded-lg px-2 py-1 hover:bg-white/5 hover:text-white" href="#cuisines">
            Cuisines
          </a>
          <a className="w-fit rounded-lg px-2 py-1 hover:bg-white/5 hover:text-white" href="#gallery">
            Gallery
          </a>
          <a className="w-fit rounded-lg px-2 py-1 hover:bg-white/5 hover:text-white" href="#reviews">
            Reviews
          </a>
          <a className="w-fit rounded-lg px-2 py-1 hover:bg-white/5 hover:text-white" href="#contact">
            Contact
          </a>
        </div>
      </div>

      {/* Contact */}
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
          Contact
        </div>

        <div className="mt-4 grid gap-3 text-sm text-white/70">
          <div className="rounded-2xl border border-white/12 bg-white/5 p-4">
            <div className="text-xs uppercase tracking-[0.16em] text-white/55">Call / WhatsApp</div>
            <div className="mt-1 text-white/85">+91 XXXXXXXXXX</div>
          </div>

          <div className="rounded-2xl border border-white/12 bg-white/5 p-4">
            <div className="text-xs uppercase tracking-[0.16em] text-white/55">Email</div>
            <div className="mt-1 text-white/85">hello@zovilo.com</div>
          </div>

          <div className="rounded-2xl border border-white/12 bg-white/5 p-4">
            <div className="text-xs uppercase tracking-[0.16em] text-white/55">Service Areas</div>
            <div className="mt-1 text-white/85">Mumbai • Navi Mumbai • Thane</div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55">
      <div>© {new Date().getFullYear()} Zovilo. All rights reserved.</div>

      <div className="flex flex-wrap items-center gap-3">
        <a className="hover:text-[#f2dfb6]" href="#contact">Privacy</a>
        <span className="text-white/25">•</span>
        <a className="hover:text-[#f2dfb6]" href="#contact">Terms</a>
        <span className="text-white/25">•</span>
        <a className="hover:text-[#f2dfb6]" href="#contact">Sitemap</a>
      </div>
    </div>
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
function ReviewCard({ quote, name, location }) {
  return (
    <div className="group relative overflow-hidden rounded-[26px] border border-white/20 bg-black/30 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#d7b77a]/40">

      {/* Soft gold hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(215,183,122,0.25),transparent_60%)]" />

      <p className="relative text-sm leading-7 text-white/90">
        “{quote}”
      </p>

      <div className="relative mt-5">
        <div className="text-sm font-semibold text-[#f2dfb6]">
          {name}
        </div>
        <div className="text-xs tracking-[0.14em] text-white/70">
          {location}
        </div>
      </div>
    </div>
  );
}