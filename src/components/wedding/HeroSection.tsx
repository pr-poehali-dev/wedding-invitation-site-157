import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/files/c00b9751-aa29-4f9f-95d1-1bff2e177e39.png";

export default function HeroSection() {
  return (
    <>
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center gap-8 py-5"
        style={{ color: "var(--muted-text)", backgroundColor: "rgba(247,243,238,0.92)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(184,151,106,0.15)" }}>
        {["#details|Детали", "#dresscode|Дресс-код", "#rsvp|Подтверждение", "#contacts|Контакты"].map((item) => {
          const [href, label] = item.split("|");
          return (
            <a key={href} href={href}
              className="font-golos transition-colors duration-300 hover:opacity-60"
              style={{ color: "var(--muted-text)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              {label}
            </a>
          );
        })}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_IMAGE} alt="Wedding" className="w-full h-full object-cover"
            style={{ objectFit: "cover" }} />
        </div>

        <div className="relative z-10 text-center px-6">
          <p className="animate-fade-in delay-100 font-golos mb-10"
            style={{ color: "var(--muted-text)", fontSize: "0.7rem", letterSpacing: "0.4em", textTransform: "uppercase" }}>
            приглашение на свадьбу
          </p>

          <h1 className="animate-fade-in-up delay-200 font-cormorant font-light leading-none mb-3"
            style={{ fontSize: "clamp(4.5rem, 13vw, 10rem)", color: "var(--dark)", letterSpacing: "-0.01em" }}>
            Дмитрий
          </h1>

          <p className="animate-fade-in delay-400 font-cormorant italic"
            style={{ fontSize: "2rem", color: "var(--gold)", letterSpacing: "0.1em", margin: "0.5rem 0" }}>
            &amp;
          </p>

          <h1 className="animate-fade-in-up delay-300 font-cormorant font-light leading-none mb-14"
            style={{ fontSize: "clamp(4.5rem, 13vw, 10rem)", color: "var(--dark)", letterSpacing: "-0.01em" }}>
            Алина
          </h1>

          <div className="animate-fade-in delay-700 flex items-center justify-center gap-5 mb-16">
            <span style={{ width: "40px", height: "1px", background: "rgba(168,137,90,0.5)", display: "block" }} />
            <p className="font-golos font-light" style={{ color: "var(--muted-text)", letterSpacing: "0.2em", fontSize: "0.85rem" }}>
              08 августа 2026
            </p>
            <span style={{ width: "40px", height: "1px", background: "rgba(168,137,90,0.5)", display: "block" }} />
          </div>

          <a href="#details" className="animate-fade-in delay-900 inline-block font-golos"
            style={{
              color: "var(--dark)", border: "1px solid rgba(168,137,90,0.6)",
              padding: "13px 36px", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase",
              transition: "all 0.35s ease"
            }}
            onMouseEnter={e => { (e.target as HTMLElement).style.backgroundColor = "rgba(168,137,90,0.12)"; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.backgroundColor = "transparent"; }}>
            Подробнее
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-1100"
          style={{ color: "rgba(74,55,40,0.4)" }}>
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>
    </>
  );
}
