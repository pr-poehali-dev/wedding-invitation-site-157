import Icon from "@/components/ui/icon";

export default function DresscodeSection() {
  return (
    <section id="dresscode" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ transform: "scaleX(-1)" }}>
        <img src="https://cdn.poehali.dev/files/c00b9751-aa29-4f9f-95d1-1bff2e177e39.png"
          alt="" className="w-full h-full object-cover" style={{ opacity: 0.13 }} />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">

        <div className="text-center mb-20">
          <p className="font-golos mb-4" style={{ color: "var(--gold)", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>
            пожелания к образу
          </p>
          <h2 className="font-cormorant font-light mb-6" style={{ fontSize: "3.2rem", color: "var(--dark)" }}>
            Дресс-код
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          <div>
            <p className="font-golos mb-8" style={{ color: "var(--muted-text)", fontSize: "0.68rem", letterSpacing: "0.25em", textTransform: "uppercase" }}>
              цветовая палитра
            </p>
            <div className="flex gap-4 mb-10">
              {[
                { color: "#F7F3EE", label: "Крем" },
                { color: "#C9A8A8", label: "Роза" },
                { color: "#B8976A", label: "Золото" },
                { color: "#8A9B8E", label: "Шалфей" },
                { color: "#3D2E22", label: "Тёмный" },
              ].map((c, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full border"
                    style={{ backgroundColor: c.color, borderColor: "rgba(184,151,106,0.3)" }} />
                  <span style={{ color: "var(--muted-text)", fontSize: "9px", fontFamily: "Golos Text, sans-serif" }}>{c.label}</span>
                </div>
              ))}
            </div>

            <h3 className="font-cormorant font-light text-2xl mb-4" style={{ color: "var(--dark)" }}>
              Элегантный вечерний стиль
            </h3>
            <p className="font-golos leading-relaxed" style={{ color: "var(--muted-text)", fontSize: "0.9rem" }}>
              Мы мечтаем о нежной, утончённой атмосфере нашего праздника. Пожалуйста, выбирайте наряды в пастельных и землистых тонах — это создаст особое настроение нашего вечера.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <Icon name="Check" size={14} style={{ color: "var(--gold)" }} />
                <p className="font-golos" style={{ color: "var(--dark)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  Рекомендуем
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Вечерние платья и костюмы",
                  "Нежные пастельные оттенки",
                  "Кремовый, пудровый, бежевый",
                  "Золотые и бронзовые акценты",
                  "Шалфей, пыльная роза, лиловый",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-golos text-sm" style={{ color: "var(--muted-text)" }}>
                    <span style={{ color: "var(--gold)", marginTop: "1px" }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ borderTop: "1px solid rgba(184,151,106,0.2)", paddingTop: "28px" }}>
              <div className="flex items-center gap-3 mb-5">
                <Icon name="X" size={14} style={{ color: "var(--rose)" }} />
                <p className="font-golos" style={{ color: "var(--dark)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  Пожалуйста, без
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Белый и ivory (цвет невесты)",
                  "Чёрный цвет",
                  "Яркие неоновые оттенки",
                  "Повседневная одежда",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-golos text-sm" style={{ color: "var(--muted-text)" }}>
                    <span style={{ color: "var(--rose)", marginTop: "1px" }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
