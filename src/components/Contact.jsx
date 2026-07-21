"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.44 3.44 10.05 8.21 11.68.6.12.82-.27.82-.6 0-.3-.01-1.08-.02-2.12-3.34.75-4.04-1.65-4.04-1.65-.55-1.44-1.34-1.82-1.34-1.82-1.09-.77.08-.76.08-.76 1.21.09 1.85 1.29 1.85 1.29 1.07 1.87 2.81 1.33 3.49 1.02.11-.79.42-1.33.76-1.64-2.67-.31-5.47-1.38-5.47-6.13 0-1.35.46-2.46 1.22-3.33-.12-.31-.53-1.56.12-3.25 0 0 1-.33 3.3 1.27a11.1 11.1 0 0 1 6.02 0c2.29-1.6 3.29-1.27 3.29-1.27.65 1.69.24 2.94.12 3.25.76.87 1.22 1.98 1.22 3.33 0 4.76-2.81 5.82-5.48 6.13.43.38.81 1.13.81 2.28 0 1.65-.02 2.98-.02 3.38 0 .33.22.72.83.6C20.56 22.34 24 17.74 24 12.3 24 5.5 18.63 0 12 0Z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.44v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

const LETTERS_ONLY = /[^A-Za-zÀ-ÿ\s'-]/g;
const API_URL = "https://portfolio-api-production-d79c.up.railway.app/api/contact";

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "nom") {
      setForm({ ...form, [name]: value.replace(LETTERS_ONLY, "") });
    } else {
      setForm({ ...form, [name]: value });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        const firstError = data && typeof data === "object" ? Object.values(data)[0] : null;
        throw new Error(firstError || "Une erreur est survenue. Verifiez vos informations.");
      }

      setStatus("success");
      setForm({ nom: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 border-l-4 border-accent pl-4">
          ME CONTACTER
        </h2>
        <p className="text-textsecondary text-lg mb-12 max-w-2xl">
          Pret a discuter de votre prochain projet ou d'une opportunite ?
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-bgcard border border-bordersubtle rounded-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-sm tracking-wider text-textsecondary">TRANSMISSION INTERFACE</span>
              <span className="font-mono text-xs text-accent">SECURE v2.1</span>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs text-textmuted block mb-2">NOM</label>
                  <input
                    type="text"
                    name="nom"
                    value={form.nom}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                    className="w-full bg-bgprimary border border-bordersubtle rounded px-4 py-3 text-sm focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-textmuted block mb-2">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="email@example.com"
                    className="w-full bg-bgprimary border border-bordersubtle rounded px-4 py-3 text-sm focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-xs text-textmuted block mb-2">MESSAGE</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Votre message..."
                  className="w-full bg-bgprimary border border-bordersubtle rounded px-4 py-3 text-sm focus:outline-none focus:border-accent resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-accent text-bgprimary font-semibold px-6 py-3 rounded hover:bg-accentdim transition disabled:opacity-50"
              >
                {status === "loading" ? "ENVOI EN COURS..." : "ENVOYER"}
              </button>

              {status === "success" && (
                <p className="text-accent text-sm font-mono">Message envoye avec succes.</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm font-mono">{errorMsg}</p>
              )}
            </form>
          </div>

          <div className="flex flex-col gap-4">
            <a href="https://github.com/Altizou" target="_blank" rel="noopener noreferrer" className="bg-bgcard border border-bordersubtle rounded-lg p-6 flex items-center gap-4 hover:border-accent transition">
              <div className="w-9 h-9 rounded bg-bgprimary border border-bordersubtle flex items-center justify-center text-accent">
                <GithubIcon />
              </div>
              <div>
                <span className="font-mono text-xs text-textmuted block">GITHUB</span>
                <span className="text-sm break-all">github.com/Altizou</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/ramanantsirahonanaaltizou" target="_blank" rel="noopener noreferrer" className="bg-bgcard border border-bordersubtle rounded-lg p-6 flex items-center gap-4 hover:border-accent transition">
              <div className="w-9 h-9 rounded bg-bgprimary border border-bordersubtle flex items-center justify-center text-accent">
                <LinkedinIcon />
              </div>
              <div>
                <span className="font-mono text-xs text-textmuted block">LINKEDIN</span>
                <span className="text-sm break-all">ramanantsirahonanaaltizou</span>
              </div>
            </a>

            <a href="mailto:ramanantsirahonana2@gmail.com" className="bg-bgcard border border-bordersubtle rounded-lg p-6 flex items-center gap-4 hover:border-accent transition">
              <div className="w-9 h-9 rounded bg-bgprimary border border-bordersubtle flex items-center justify-center text-accent">
                <Mail size={18} />
              </div>
              <div>
                <span className="font-mono text-xs text-textmuted block">EMAIL</span>
                <span className="text-sm break-all">ramanantsirahonana2@gmail.com</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}