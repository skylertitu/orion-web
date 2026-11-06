"use client";

import { FormEvent, useState } from "react";
import type { Dict } from "@/lib/messages/types";
import { site } from "@/lib/site";

export default function ContactForm({ dict }: { dict: Dict }) {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState(dict.contact.projectTypes[0]?.id || "empleo");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    hp: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Por favor ingresa tu nombre o el de tu empresa.";
    if (!formData.email.trim()) errs.email = "Por favor ingresa un correo electrónico de contacto.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) errs.email = "Por favor ingresa un correo electrónico válido.";
    if (!formData.message.trim() || formData.message.trim().length < 10) errs.message = "Por favor escribe un mensaje de al menos 10 caracteres.";
    return errs;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (formData.hp) return;
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    const typeLabel = dict.contact.projectTypes.find((t) => t.id === selectedType)?.label || selectedType;
    const subject = encodeURIComponent(`Contacto Portafolio — ${typeLabel} — ${formData.name.trim()}`);
    const body = encodeURIComponent(`Hola Siomey,\n\n${formData.message.trim()}\n\n---\nTipo de consulta: ${typeLabel}\nRemitente: ${formData.name.trim()}\nCorreo: ${formData.email.trim()}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  function copyEmail() {
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  }

  return (
    <div className="contact-container">
      <div className="contact-layout">
        <div className="contact-info">
          <div className="contact-channel-item">
            <span className="contact-channel-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </span>
            <div className="contact-channel-body">
              <span className="contact-channel-label">Email</span>
              <a href={`mailto:${site.email}`} className="contact-channel-val">
                {site.email}
              </a>
            </div>
            <button
              type="button"
              className="contact-copy-btn"
              onClick={copyEmail}
              aria-label={dict.contact.copyEmail}
              title={dict.contact.copyEmail}
            >
              {copied ? (
                <span className="copied-tag">{dict.contact.emailCopied || "¡Copiado!"}</span>
              ) : (
                <>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>

          <a
            href="https://wa.me/593963142795"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-channel-item contact-channel-interactive"
          >
            <span className="contact-channel-icon contact-channel-icon-wa" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.017.501 3.917 1.379 5.582L.057 23.43a.5.5 0 00.608.608l5.848-1.322A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.95 9.95 0 01-5.103-1.405l-.366-.217-3.82.864.813-3.72-.238-.382A9.95 9.95 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
            </span>
            <div className="contact-channel-body">
              <span className="contact-channel-label">WhatsApp</span>
              <span className="contact-channel-val">+593 96 314 2795</span>
            </div>
            <span className="contact-channel-arrow" aria-hidden="true">↗</span>
          </a>

          <div className="contact-meta-row">
            <div className="contact-meta-item">
              <span className="live-status-dot" />
              <div className="contact-channel-body">
                <span className="contact-channel-label">Estado</span>
                <span className="contact-meta-val">{dict.contact.availability}</span>
              </div>
            </div>

            <div className="contact-meta-item">
              <span className="contact-meta-icon" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </span>
              <div className="contact-channel-body">
                <span className="contact-channel-label">Tiempo de respuesta</span>
                <span className="contact-meta-val">{dict.contact.responseTime}</span>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <div style={{ display: "none" }} aria-hidden="true">
            <label htmlFor="website_url">Website</label>
            <input
              id="website_url"
              type="text"
              name="website_url"
              tabIndex={-1}
              autoComplete="off"
              value={formData.hp}
              onChange={(e) => setFormData({ ...formData, hp: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-name">
              {dict.contact.name} <span className="req">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder={dict.contact.namePh}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={errors.name ? "has-error" : ""}
            />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">
              {dict.contact.email} <span className="req">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={dict.contact.emailPh}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={errors.email ? "has-error" : ""}
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="contact-project-type">{dict.contact.projectType}</label>
            <select
              id="contact-project-type"
              name="projectType"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {dict.contact.projectTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">
              {dict.contact.message} <span className="req">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              placeholder={dict.contact.messagePh}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={errors.message ? "has-error" : ""}
            />
            {errors.message && <span className="field-error">{errors.message}</span>}
          </div>

          <button className="btn btn-primary btn-block" type="submit">
            <span>{dict.contact.submit}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>

          {submitted && (
            <div className="form-ok" role="alert">
              <strong>✓ Cliente de correo iniciado</strong>
              <p>
                Se ha generado el mensaje prellenado en tu cliente de correo para{" "}
                <strong>{site.email}</strong>.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}