import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/files/c00b9751-aa29-4f9f-95d1-1bff2e177e39.png";

export default function Index() {
  const [form, setForm] = useState({
    name: "",
    guests: "1",
    attendance: "yes",
    dietary: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen texture-bg" style={{ backgroundColor: "var(--cream)" }}>

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

      {/* DETAILS */}
      <section id="details" className="relative py-28 px-6 overflow-hidden">
        {/* Акварельный фон в тематике героя */}
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

          {/* Сетка: Календарь + Детали */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

            {/* Календарь августа 2026 */}
            <div className="text-center" style={{ backgroundColor: "rgba(255,255,255,0.72)", border: "1px solid rgba(168,137,90,0.22)", padding: "2rem", backdropFilter: "blur(4px)" }}>
              <p className="font-golos mb-1" style={{ fontSize: "0.62rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)" }}>
                Август 2026
              </p>
              <div style={{ width: "40px", height: "1px", background: "rgba(168,137,90,0.4)", margin: "8px auto 20px" }} />

              {/* Дни недели */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px", marginBottom: "6px" }}>
                {["Пн","Вт","Ср","Чт","Пт","Сб","Вс"].map(d => (
                  <div key={d} className="font-golos text-center" style={{ fontSize: "0.6rem", color: "var(--muted-text)", letterSpacing: "0.05em", padding: "4px 0" }}>
                    {d}
                  </div>
                ))}
              </div>

              {/* Дни месяца — август 2026 начинается с субботы (6-й день) */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "3px" }}>
                {/* Пустые ячейки до 1 августа (сб = позиция 6) */}
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

              {/* Легенда */}
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

              {/* Карточка: Дата */}
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

              {/* Карточка: Церемония */}
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

              {/* Карточка: Место */}
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

              {/* Подпись */}
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

      {/* DRESSCODE */}
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

      {/* RSVP */}
      <section id="rsvp" className="py-28 px-6">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-16">
            <p className="font-golos mb-4" style={{ color: "var(--gold)", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>
              ваш ответ
            </p>
            <h2 className="font-cormorant font-light mb-4" style={{ fontSize: "3.2rem", color: "var(--dark)" }}>
              Подтверждение
            </h2>
            <p className="font-cormorant italic text-xl mb-6" style={{ color: "var(--muted-text)" }}>
              Просим ответить до 1 мая 2025
            </p>
            <div className="section-divider" />
          </div>

          {submitted ? (
            <div className="text-center py-20 border"
              style={{ borderColor: "rgba(184,151,106,0.25)", backgroundColor: "rgba(255,255,255,0.5)" }}>
              <div className="mb-6 flex justify-center">
                <Icon name="Heart" size={30} style={{ color: "var(--rose)" }} />
              </div>
              <h3 className="font-cormorant font-light text-3xl mb-3" style={{ color: "var(--dark)" }}>Спасибо!</h3>
              <p className="font-golos text-sm" style={{ color: "var(--muted-text)" }}>
                Мы получили ваш ответ и с нетерпением ждём встречи.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block font-golos mb-2"
                  style={{ color: "var(--muted-text)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  Ваше имя
                </label>
                <input type="text" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full py-3 px-4 border bg-transparent font-golos text-sm"
                  style={{ borderColor: "rgba(184,151,106,0.3)", color: "var(--dark)" }}
                  placeholder="Имя и фамилия" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-golos mb-2"
                    style={{ color: "var(--muted-text)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                    Присутствие
                  </label>
                  <select value={form.attendance}
                    onChange={(e) => setForm({ ...form, attendance: e.target.value })}
                    className="w-full py-3 px-4 border bg-transparent font-golos text-sm cursor-pointer"
                    style={{ borderColor: "rgba(184,151,106,0.3)", color: "var(--dark)" }}>
                    <option value="yes">С радостью буду</option>
                    <option value="no">К сожалению, не смогу</option>
                  </select>
                </div>
                <div>
                  <label className="block font-golos mb-2"
                    style={{ color: "var(--muted-text)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                    Гостей
                  </label>
                  <select value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-full py-3 px-4 border bg-transparent font-golos text-sm cursor-pointer"
                    style={{ borderColor: "rgba(184,151,106,0.3)", color: "var(--dark)" }}>
                    {["1", "2", "3", "4"].map(n => (
                      <option key={n} value={n}>{n} {n === "1" ? "гость" : "гостя"}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-golos mb-2"
                  style={{ color: "var(--muted-text)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  Пожелания к меню
                </label>
                <input type="text" value={form.dietary}
                  onChange={(e) => setForm({ ...form, dietary: e.target.value })}
                  className="w-full py-3 px-4 border bg-transparent font-golos text-sm"
                  style={{ borderColor: "rgba(184,151,106,0.3)", color: "var(--dark)" }}
                  placeholder="Аллергии, вегетарианское, халяль…" />
              </div>

              <div>
                <label className="block font-golos mb-2"
                  style={{ color: "var(--muted-text)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  Пожелания молодожёнам
                </label>
                <textarea rows={4} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full py-3 px-4 border bg-transparent font-golos text-sm resize-none"
                  style={{ borderColor: "rgba(184,151,106,0.3)", color: "var(--dark)" }}
                  placeholder="Ваши тёплые слова…" />
              </div>

              <div className="text-center pt-4">
                <button type="submit" className="btn-wedding">
                  Отправить подтверждение
                </button>
              </div>

            </form>
          )}

        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6" style={{ backgroundColor: "var(--dark)" }}>
        <div className="max-w-3xl mx-auto text-center">

          <p className="font-golos mb-4" style={{ color: "rgba(184,151,106,0.65)", fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>
            есть вопросы?
          </p>
          <h2 className="font-cormorant font-light mb-6" style={{ fontSize: "2.8rem", color: "var(--cream)" }}>
            Свяжитесь с нами
          </h2>
          <div className="section-divider mb-14" style={{ backgroundColor: "rgba(184,151,106,0.35)" }} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {[
              { role: "Координатор свадьбы", name: "Елена", phone: "+7 999 123-45-67", extra: "@wedding_elena" },
              { role: "Общие вопросы", name: "Михаил", phone: "+7 999 765-43-21", extra: "wedding@example.com" },
            ].map((c, i) => (
              <div key={i}>
                <p className="font-golos mb-4" style={{ color: "rgba(247,243,238,0.38)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  {c.role}
                </p>
                <p className="font-cormorant font-light text-2xl mb-3" style={{ color: "var(--cream)" }}>{c.name}</p>
                <p className="font-golos text-sm mb-1" style={{ color: "var(--gold)" }}>{c.phone}</p>
                <p className="font-golos text-sm" style={{ color: "rgba(247,243,238,0.45)" }}>{c.extra}</p>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid rgba(184,151,106,0.18)", paddingTop: "48px" }}>
            <p className="font-cormorant italic text-2xl mb-2" style={{ color: "rgba(247,243,238,0.5)" }}>
              Мы ждём вас с любовью
            </p>
            <p className="font-cormorant font-light" style={{ fontSize: "2.8rem", color: "var(--cream)" }}>
              Алина & Михаил
            </p>
            <p className="font-golos mt-4" style={{ color: "rgba(184,151,106,0.45)", fontSize: "0.7rem", letterSpacing: "0.25em" }}>
              14 · 06 · 2025
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}