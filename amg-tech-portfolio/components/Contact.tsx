"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import CodeWindow from "./CodeWindow";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { contact } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement
      >,
    ) => {
      setForm((current) => ({
        ...current,
        [key]: event.target.value,
      }));
    };

  const send = (event: React.FormEvent) => {
    event.preventDefault();

    const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`;

    window.location.href =
      `mailto:${contact.email}` +
      `?subject=${encodeURIComponent(
        `Portfolio message from ${form.name}`,
      )}` +
      `&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl overflow-x-clip px-5 py-24"
    >
      <SectionHead
        file="contact.json"
        title="Have an idea? Let's talk."
        sub="If you have a project, collaboration or opportunity in mind, send me a message and let's see what we can build."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_.8fr]">
        <Reveal>
          <CodeWindow file="contact.json">
            <form onSubmit={send} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="font-mono text-xs text-blue-300"
                >
                  "name"
                </label>

                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your name"
                  className="mt-2 w-full border-b border-white/10 bg-transparent py-2.5 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-blue-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="font-mono text-xs text-blue-300"
                >
                  "email"
                </label>

                <input
                  id="email"
                  required
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@example.com"
                  className="mt-2 w-full border-b border-white/10 bg-transparent py-2.5 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-blue-400"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="font-mono text-xs text-blue-300"
                >
                  "message"
                </label>

                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell me a little about your project..."
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.025] p-3 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-blue-400"
                />
              </div>

              <button type="submit" className="btn-primary">
                Send message
              </button>

              <p className="text-xs text-slate-600">
                This opens your default email application.
              </p>
            </form>
          </CodeWindow>
        </Reveal>

        <Reveal from="right">
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6">
            <h3 className="text-2xl font-bold text-white">
              Get in touch
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Whether it&apos;s a website, frontend project, collaboration
              or freelance opportunity, I&apos;d be happy to hear what
              you&apos;re working on.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href={`mailto:${contact.email}`}
                className="flex gap-4 rounded-xl p-2 transition-colors hover:bg-white/[0.04]"
              >
                <FaEnvelope className="mt-1 text-blue-400" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    Email
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {contact.email}
                  </p>
                </div>
              </a>

              <div className="flex gap-4 p-2">
                <FaMapMarkerAlt className="mt-1 text-violet-400" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    Location
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {contact.location}
                  </p>
                </div>
              </div>

              <a
                href={`tel:${contact.phone}`}
                className="flex gap-4 rounded-xl p-2 transition-colors hover:bg-white/[0.04]"
              >
                <FaPhoneAlt className="mt-1 text-emerald-400" />
                <div>
                  <p className="text-sm font-semibold text-white">
                    Phone
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {contact.phoneLabel}
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-8 flex gap-3 border-t border-white/[0.07] pt-6">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex size-11 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-blue-400/30 hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex size-11 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-blue-400/30 hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex size-11 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-emerald-400/30 hover:text-white"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}