import Icon from "@/components/ui/icon";

export default function DetailsSection() {
  return (
    <section id="details" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src="https://cdn.poehali.dev/files/c00b9751-aa29-4f9f-95d1-1bff2e177e39.png"
          alt="" className="w-full h-full object-cover" style={{ opacity: 0.18 }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <p className="font-golos mb-4" style={{ color: "var(--gold)", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>
            детали события
          </p>
          <h2 className="font-cormorant font-light mb-6" style={{ fontSize: "3.2rem", color: "var(--dark)" }}>
            Наш особенный день
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Календарь августа 2026 */}
          <div className="text-center" style={{ backgroundColor: "rgba(255,255,255,0.72)", border: "1px solid rgba(168,137,90,0.22)", padding: "2rem", backdropFilter: "blur(4px)" }}>
            <p className="font-golos mb-1" style={{ fontSize: "0.62rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)" }}>
              Август 2026
            </p>
            <div style={{ width: "40px", height: "1px", background: "rgba(168,137,90,0.4)", margin: "8px auto 20px" }} />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px", marginBottom: "6px" }}>
              {["Пн","Вт","Ср","Чт","Пт","Сб","Вс"].map(d => (
                <div key={d} className="font-golos text-center" style={{ fontSize: "0.6rem", color: "var(--muted-text)", letterSpacing: "0.05em", padding: "4px 0" }}>
                  {d}
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "3px" }}>
              {Array.from({ length: 5 }).map((_, i) => <div key={`e${i}`} />)}
              {Array.from({ length: 31 }).map((_, i) => {
                const day = i + 1;
                const isWedding = day === 8;
                return (
                  <div key={day} className="font-golos" style={{
                    padding: "6px 2px",
                    fontSize: "0.82rem",
                    borderRadius: "50%",
                    lineHeight: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    aspectRatio: "1",
                    backgroundColor: isWedding ? "rgba(168,137,90,0.12)" : "transparent",
                    border: isWedding ? "1px solid rgba(168,137,90,0.5)" : "none",
                    color: isWedding ? "var(--gold)" : "var(--dark)",
                    fontWeight: isWedding ? 500 : 400,
                    position: "relative",
                  }}>
                    {day}
                    {isWedding && (
                      <span style={{ fontSize: "8px", lineHeight: 1, marginTop: "1px", color: "var(--gold)" }}>♥</span>
                    )}
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid rgba(168,137,90,0.18)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "rgba(168,137,90,0.5)" }} />
                <span className="font-golos" style={{ fontSize: "0.72rem", color: "var(--muted-text)" }}>
                  08 августа — день нашей свадьбы
                </span>
              </div>
            </div>
          </div>

          {/* Детали церемонии */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            <div className="detail-card" style={{ backgroundColor: "rgba(255,255,255,0.72)", border: "1px solid rgba(168,137,90,0.22)", padding: "1.5rem 2rem", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", gap: "1.25rem" }}>
              <div style={{ width: "44px", height: "44px", border: "1px solid rgba(168,137,90,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name="Calendar" size={20} style={{ color: "var(--gold)" }} />
              </div>
              <div>
                <p className="font-golos" style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--muted-text)", marginBottom: "4px" }}>Дата</p>
                <p className="font-cormorant font-light" style={{ fontSize: "1.5rem", color: "var(--dark)", lineHeight: 1.1 }}>08 августа 2026</p>
                <p className="font-cormorant italic" style={{ fontSize: "1rem", color: "var(--gold)" }}>Суббота</p>
              </div>
            </div>

            <div className="detail-card" style={{ backgroundColor: "rgba(255,255,255,0.72)", border: "1px solid rgba(168,137,90,0.22)", padding: "1.5rem 2rem", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", gap: "1.25rem" }}>
              <div style={{ width: "44px", height: "44px", border: "1px solid rgba(168,137,90,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name="Clock" size={20} style={{ color: "var(--gold)" }} />
              </div>
              <div>
                <p className="font-golos" style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--muted-text)", marginBottom: "4px" }}>Церемония</p>
                <p className="font-cormorant font-light" style={{ fontSize: "1.5rem", color: "var(--dark)", lineHeight: 1.1 }}>16:00</p>
                <p className="font-golos" style={{ fontSize: "0.85rem", color: "var(--muted-text)", marginTop: "2px" }}>На открытой террасе</p>
              </div>
            </div>

            <div className="detail-card" style={{ backgroundColor: "rgba(255,255,255,0.72)", border: "1px solid rgba(168,137,90,0.22)", padding: "1.5rem 2rem", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", gap: "1.25rem" }}>
              <div style={{ width: "44px", height: "44px", border: "1px solid rgba(168,137,90,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon name="MapPin" size={20} style={{ color: "var(--gold)" }} />
              </div>
              <div>
                <p className="font-golos" style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--muted-text)", marginBottom: "4px" }}>Место проведения</p>
                <p className="font-cormorant font-light" style={{ fontSize: "1.5rem", color: "var(--dark)", lineHeight: 1.1 }}>Отель Lotte</p>
                <p className="font-golos" style={{ fontSize: "0.85rem", color: "var(--muted-text)", marginTop: "2px" }}>Открытая терраса</p>
              </div>
            </div>

            <p className="font-cormorant italic text-center" style={{ fontSize: "1.1rem", color: "var(--muted-text)", marginTop: "0.5rem" }}>
              Церемония пройдёт в 16:00 на открытой террасе отеля Lotte
            </p>

          </div>
        </div>

        {/* Программа */}
        <div className="mt-20 text-center">
          <div className="max-w-md mx-auto" style={{ backgroundColor: "rgba(255,255,255,0.6)", padding: "2rem 2.5rem", border: "1px solid rgba(168,137,90,0.18)", backdropFilter: "blur(4px)" }}>
            <p className="font-golos mb-10" style={{ color: "var(--muted-text)", fontSize: "0.68rem", letterSpacing: "0.28em", textTransform: "uppercase" }}>
              программа вечера
            </p>
            <div className="space-y-6">
              {[
                { time: "16:00", event: "Торжественная церемония" },
                { time: "17:00", event: "Фотосессия и аперитив" },
                { time: "18:00", event: "Банкет и праздничный ужин" },
                { time: "20:00", event: "Танцы и развлечения" },
                { time: "23:00", event: "Завершение вечера" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6">
                  <span className="font-cormorant text-xl w-14 text-right shrink-0" style={{ color: "var(--gold)" }}>
                    {item.time}
                  </span>
                  <div className="shrink-0" style={{ width: "1px", height: "32px", backgroundColor: "rgba(184,151,106,0.28)" }} />
                  <span className="font-golos text-sm text-left" style={{ color: "var(--dark)" }}>{item.event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
