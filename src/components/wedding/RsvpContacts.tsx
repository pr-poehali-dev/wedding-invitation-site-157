import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function RsvpContacts() {
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
    <>
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
    </>
  );
}
