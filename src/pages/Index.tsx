import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const WEDDING_DATE = new Date("2025-07-20T16:00:00");

const IMG_HERO = "https://cdn.poehali.dev/files/f9901d45-151b-473d-9052-a277482de225.jpg";
const IMG_FLOWERS = "https://cdn.poehali.dev/projects/644a90fd-2005-47e5-8f2a-6e09bba79dbc/files/4680931c-68bc-4f68-8343-c49731154317.jpg";
const IMG_TABLE = "https://cdn.poehali.dev/projects/644a90fd-2005-47e5-8f2a-6e09bba79dbc/files/ad35d2bf-91f9-407e-99f6-c3c2a5b1fa00.jpg";
const IMG_BOUQUET = "https://cdn.poehali.dev/projects/644a90fd-2005-47e5-8f2a-6e09bba79dbc/files/ffce0604-9560-44ac-997c-3ccc14c447f3.jpg";
const IMG_ARCH = "https://cdn.poehali.dev/projects/644a90fd-2005-47e5-8f2a-6e09bba79dbc/files/cd8a2020-0eea-4e69-ac47-62fda8c69ca2.jpg";

function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const t = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(t);
  }, []);
  return time;
}

export default function Index() {
  const countdown = useCountdown(WEDDING_DATE);
  const [form, setForm] = useState({ name: "", phone: "", guests: "1", attendance: "yes", comment: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen texture-bg" style={{ backgroundColor: "var(--cream)" }}>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img src={IMG_HERO} alt="" className="w-full h-full object-cover" style={{ opacity: 0.28 }} />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 w-full">
          <div className="w-full max-w-2xl mx-auto px-8 py-14" style={{ border: "1px solid rgba(168,137,90,0.45)" }}>

            <p className="font-golos animate-fade-in delay-100" style={{ fontSize: "0.62rem", letterSpacing: "0.42em", textTransform: "uppercase", color: "var(--muted-text)", marginBottom: "1.5rem" }}>
              Приглашение на свадьбу
            </p>

            <h1 className="font-cormorant animate-fade-in-up delay-200" style={{ fontSize: "clamp(3rem, 10vw, 6.5rem)", fontWeight: 400, fontStyle: "italic", color: "var(--dark)", lineHeight: 1.1 }}>
              Анна & Дмитрий
            </h1>

            <div className="gold-divider animate-fade-in delay-300" style={{ margin: "16px 0" }}>
              <span style={{ color: "var(--gold)", fontSize: "10px" }}>♥</span>
            </div>

            <p className="font-cormorant animate-fade-in delay-500" style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 300, color: "var(--dark)", letterSpacing: "0.12em" }}>
              20 | 07 | 2025
            </p>

            <div className="gold-divider animate-fade-in delay-500" style={{ margin: "16px 0" }}>
              <span style={{ color: "var(--gold)", fontSize: "10px" }}>♥</span>
            </div>

            <p className="font-golos animate-fade-in delay-700" style={{ fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted-text)", lineHeight: 1.9, marginTop: "8px" }}>
              Будем рады разделить с вами<br />этот особенный день!
            </p>
          </div>

          <a href="#welcome" style={{ marginTop: "2rem", color: "rgba(74,55,40,0.32)" }} className="animate-fade-in delay-900">
            <Icon name="ChevronDown" size={22} />
          </a>
        </div>
      </section>

      {/* ── WELCOME ── */}
      <section id="welcome" style={{ backgroundColor: "var(--cream)", borderTop: "1px solid rgba(168,137,90,0.12)" }}>
        <div className="max-w-5xl mx-auto px-6 py-20" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>

          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "1.5rem" }}>
              <span style={{ color: "var(--gold)", fontSize: "1.6rem" }}>✿</span>
              <p className="font-golos" style={{ fontSize: "0.62rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--gold)", marginTop: "6px" }}>
                Дорогие наши!
              </p>
              <div className="gold-divider" style={{ justifyContent: "flex-start", margin: "6px 0 0" }}>
                <span style={{ color: "var(--gold)", fontSize: "10px" }}>♥</span>
              </div>
            </div>

            <p className="font-golos" style={{ color: "var(--muted-text)", fontSize: "0.92rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Мы хотим, чтобы этот день стал незабываемым для нас и для наших близких. Приглашаем вас разделить с нами радость нашей свадьбы!
            </p>

            <p className="font-cormorant" style={{ fontStyle: "italic", fontSize: "2rem", color: "var(--gold)", lineHeight: 1.2, marginBottom: "8px" }}>
              Ждём вас!
            </p>
            <span style={{ color: "var(--gold)", fontSize: "10px" }}>♥</span>
          </div>

          <div style={{ position: "relative" }}>
            <div style={{ overflow: "hidden", borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%", aspectRatio: "1", maxWidth: "320px", margin: "0 auto" }}>
              <img src={IMG_FLOWERS} alt="Свадебные цветы" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── DETAILS ── */}
      <section id="details" style={{ backgroundColor: "var(--beige-section)" }}>
        <div className="max-w-5xl mx-auto px-6 py-20">

          <div className="text-center" style={{ marginBottom: "3.5rem" }}>
            <p className="font-golos" style={{ fontSize: "0.65rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--gold)" }}>
              Детали
            </p>
            <div className="gold-divider" style={{ margin: "10px 0 0" }}>
              <span style={{ color: "var(--gold)", fontSize: "10px" }}>♥</span>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
            {[
              { icon: "Calendar", label: "Дата", lines: ["20 июля 2025", "(воскресенье)"] },
              { icon: "CircleDot", label: "Церемония", lines: ["16:00", "Выездная регистрация"] },
              { icon: "UtensilsCrossed", label: "Банкет", lines: ["18:00", "Праздничный ужин"] },
              { icon: "MapPin", label: "Место", lines: ["Загородный отель", "«Счастье»", "Московская обл.,", "д. Сосновка, 15"] },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "12px" }}>
                <div style={{ width: "50px", height: "50px", border: "1px solid rgba(168,137,90,0.48)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={item.icon as "Calendar"} fallback="Circle" size={20} style={{ color: "var(--gold)" }} />
                </div>
                <p className="font-golos" style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--muted-text)" }}>
                  {item.label}
                </p>
                <div>
                  {item.lines.map((l, j) => (
                    <p key={j} className="font-golos" style={{ fontSize: j === 0 ? "1rem" : "0.78rem", color: j === 0 ? "var(--dark)" : "var(--muted-text)", lineHeight: 1.55 }}>
                      {l}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COUNTDOWN ── */}
      <section style={{ backgroundColor: "var(--cream2)", borderTop: "1px solid rgba(168,137,90,0.12)", borderBottom: "1px solid rgba(168,137,90,0.12)" }}>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <img src={IMG_BOUQUET} alt="" style={{ width: "70px", height: "110px", objectFit: "cover", borderRadius: "4px", opacity: 0.45, flexShrink: 0, display: "none" }} className="md:block" />
            <div style={{ flex: 1 }}>
              <p className="font-golos text-center" style={{ fontSize: "0.62rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "10px" }}>
                До нашей свадьбы осталось
              </p>
              <div className="gold-divider" style={{ marginBottom: "2rem" }}>
                <span style={{ color: "var(--gold)", fontSize: "10px" }}>♥</span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", textAlign: "center" }}>
                {[
                  { val: countdown.days, label: "Дня" },
                  { val: countdown.hours, label: "Часов" },
                  { val: countdown.minutes, label: "Минут" },
                  { val: countdown.seconds, label: "Секунд" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="font-cormorant" style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", fontWeight: 300, color: "var(--dark)", lineHeight: 1 }}>
                      {String(item.val).padStart(2, "0")}
                    </div>
                    <div className="font-golos" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted-text)", marginTop: "6px" }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DRESSCODE + WISHES ── */}
      <section style={{ backgroundColor: "var(--beige-section)" }}>
        <div className="max-w-5xl mx-auto px-6 py-20" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>

          <div>
            <p className="font-golos" style={{ fontSize: "0.62rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "8px" }}>
              Дресс-код
            </p>
            <div className="gold-divider" style={{ justifyContent: "flex-start", marginBottom: "2rem" }}>
              <span style={{ color: "var(--gold)", fontSize: "10px" }}>♥</span>
            </div>
            <div style={{ display: "flex", gap: "12px", marginBottom: "1.5rem" }}>
              {["#E8E0D8", "#C5B8AA", "#9AA896", "#8A8078"].map((c, i) => (
                <div key={i} style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: c, border: "1.5px solid rgba(168,137,90,0.28)", flexShrink: 0 }} />
              ))}
            </div>
            <p className="font-golos" style={{ fontSize: "0.88rem", color: "var(--muted-text)", lineHeight: 1.72 }}>
              Мы будем рады, если вы поддержите цветовую гамму нашей свадьбы
            </p>
          </div>

          <div>
            <p className="font-golos" style={{ fontSize: "0.62rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "8px" }}>
              Пожелания
            </p>
            <div className="gold-divider" style={{ justifyContent: "flex-start", marginBottom: "2rem" }}>
              <span style={{ color: "var(--gold)", fontSize: "10px" }}>♥</span>
            </div>
            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <Icon name="Mail" size={28} style={{ color: "var(--gold)", opacity: 0.65, flexShrink: 0, marginTop: "2px" }} />
              <p className="font-golos" style={{ fontSize: "0.88rem", color: "var(--muted-text)", lineHeight: 1.72 }}>
                Ваши тёплые слова и пожелания для нас — лучший подарок! Но если вы хотите порадовать нас по-другому, будем благодарны за вклад в бюджет нашей семьи.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section style={{ backgroundColor: "var(--cream)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", height: "260px" }}>
          <div style={{ backgroundColor: "var(--cream2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "100px", height: "100px", border: "1px solid rgba(168,137,90,0.5)", borderRadius: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <span className="font-cormorant" style={{ fontSize: "2rem", color: "var(--gold)", fontWeight: 400, lineHeight: 1 }}>А</span>
              <span style={{ color: "var(--gold)", fontSize: "8px" }}>♥</span>
              <span className="font-cormorant" style={{ fontSize: "2rem", color: "var(--gold)", fontWeight: 400, lineHeight: 1 }}>Д</span>
            </div>
          </div>
          <div style={{ overflow: "hidden" }}>
            <img src={IMG_TABLE} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ overflow: "hidden" }}>
            <img src={IMG_BOUQUET} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ overflow: "hidden" }}>
            <img src={IMG_ARCH} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* ── RSVP ── */}
      <section id="rsvp" style={{ backgroundColor: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto px-6 py-20" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>

          <div>
            <p className="font-golos" style={{ fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--dark)", lineHeight: 1.6 }}>
              Подтвердите, пожалуйста,<br />своё присутствие
            </p>
            <div className="gold-divider" style={{ justifyContent: "flex-start", margin: "12px 0 18px" }}>
              <span style={{ color: "var(--gold)", fontSize: "10px" }}>♥</span>
            </div>
            <p className="font-golos" style={{ fontSize: "0.85rem", color: "var(--muted-text)" }}>
              Будем ждать ваш ответ до 01.07.2025
            </p>

            <div style={{ marginTop: "2.5rem" }}>
              <p className="font-golos" style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--muted-text)", marginBottom: "12px" }}>
                или свяжитесь с нами:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Icon name="Phone" size={13} style={{ color: "var(--gold)" }} />
                  <span className="font-golos" style={{ fontSize: "0.85rem", color: "var(--dark)" }}>+7 (000) 123-45-67 — Анна</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Icon name="Phone" size={13} style={{ color: "var(--gold)" }} />
                  <span className="font-golos" style={{ fontSize: "0.85rem", color: "var(--dark)" }}>+7 (999) 765-43-21 — Дмитрий</span>
                </div>
              </div>
            </div>

            <p className="font-cormorant" style={{ fontStyle: "italic", fontSize: "1.35rem", color: "var(--muted-text)", marginTop: "3.5rem" }}>
              С любовью, Анна и Дмитрий
            </p>
          </div>

          <div>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "4rem 2rem", border: "1px solid rgba(168,137,90,0.28)", backgroundColor: "rgba(255,255,255,0.4)" }}>
                <Icon name="Heart" size={30} style={{ color: "var(--gold)", margin: "0 auto 16px" }} />
                <p className="font-cormorant" style={{ fontSize: "2rem", fontWeight: 300, color: "var(--dark)" }}>Спасибо!</p>
                <p className="font-golos" style={{ fontSize: "0.88rem", color: "var(--muted-text)", marginTop: "8px" }}>
                  Ваш ответ принят. Мы с нетерпением вас ждём!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>

                <div>
                  <label className="font-golos" style={{ display: "block", fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted-text)", marginBottom: "6px" }}>
                    Ваше имя
                  </label>
                  <input type="text" required value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="font-golos"
                    style={{ width: "100%", padding: "11px 14px", border: "1px solid rgba(168,137,90,0.32)", color: "var(--dark)", background: "rgba(255,255,255,0.5)", fontSize: "0.88rem" }}
                    placeholder="Имя и фамилия" />
                </div>

                <div>
                  <label className="font-golos" style={{ display: "block", fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted-text)", marginBottom: "6px" }}>
                    Телефон
                  </label>
                  <input type="tel" value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="font-golos"
                    style={{ width: "100%", padding: "11px 14px", border: "1px solid rgba(168,137,90,0.32)", color: "var(--dark)", background: "rgba(255,255,255,0.5)", fontSize: "0.88rem" }}
                    placeholder="+7 (___) ___-__-__" />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div>
                    <label className="font-golos" style={{ display: "block", fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted-text)", marginBottom: "6px" }}>
                      Присутствие
                    </label>
                    <select value={form.attendance} onChange={e => setForm({ ...form, attendance: e.target.value })}
                      className="font-golos"
                      style={{ width: "100%", padding: "11px 14px", border: "1px solid rgba(168,137,90,0.32)", color: "var(--dark)", background: "rgba(255,255,255,0.5)", fontSize: "0.88rem", cursor: "pointer" }}>
                      <option value="yes">С радостью буду</option>
                      <option value="no">Не смогу</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-golos" style={{ display: "block", fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted-text)", marginBottom: "6px" }}>
                      Гостей
                    </label>
                    <select value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })}
                      className="font-golos"
                      style={{ width: "100%", padding: "11px 14px", border: "1px solid rgba(168,137,90,0.32)", color: "var(--dark)", background: "rgba(255,255,255,0.5)", fontSize: "0.88rem", cursor: "pointer" }}>
                      {["1","2","3","4"].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-golos" style={{ display: "block", fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted-text)", marginBottom: "6px" }}>
                    Пожелания / ограничения в питании
                  </label>
                  <textarea rows={3} value={form.comment}
                    onChange={e => setForm({ ...form, comment: e.target.value })}
                    className="font-golos"
                    style={{ width: "100%", padding: "11px 14px", border: "1px solid rgba(168,137,90,0.32)", color: "var(--dark)", background: "rgba(255,255,255,0.5)", fontSize: "0.88rem", resize: "none" }}
                    placeholder="Аллергии, вегетарианское…" />
                </div>

                <button type="submit" disabled={loading} className="btn-gold"
                  style={{ width: "100%", opacity: loading ? 0.72 : 1, marginTop: "4px" }}>
                  {loading ? "Отправляем…" : "Подтвердить"}
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "var(--cream2)", borderTop: "1px solid rgba(168,137,90,0.13)", padding: "28px 24px", textAlign: "center" }}>
        <p className="font-cormorant" style={{ fontStyle: "italic", fontSize: "1.1rem", color: "var(--muted-text)" }}>
          С любовью, Анна и Дмитрий
        </p>
        <p className="font-golos" style={{ fontSize: "0.58rem", letterSpacing: "0.22em", color: "rgba(138,117,104,0.45)", textTransform: "uppercase", marginTop: "6px" }}>
          20 · 07 · 2025
        </p>
      </footer>

    </div>
  );
}
