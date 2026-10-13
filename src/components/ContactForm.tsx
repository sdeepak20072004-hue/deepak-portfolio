"use client";

import { useState, type FormEvent } from "react";
import { LoaderCircle, Send, CheckCircle2, AlertCircle } from "lucide-react";

type FormState =
  | { status: "idle"; message: "" }
  | { status: "loading"; message: "Sending your message…" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const initialState: FormState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state.status === "loading") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    setState({ status: "loading", message: "Sending your message…" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(result.message || "Your message could not be sent. Please try again.");
      }
      form.reset();
      setState({
        status: "success",
        message: result.message || "Thanks! Your message has been sent.",
      });
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please email me directly.",
      });
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact Deepak">
      <div className="form-row">
        <label>
          Your name
          <input name="name" type="text" autoComplete="name" placeholder="e.g. Rahul Sharma" minLength={2} maxLength={80} required disabled={state.status === "loading"} />
        </label>
        <label>
          Email address
          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={254} required disabled={state.status === "loading"} />
        </label>
      </div>
      <label>
        Subject <span className="form-optional">(optional)</span>
        <input name="subject" type="text" placeholder="What would you like to discuss?" maxLength={120} disabled={state.status === "loading"} />
      </label>
      <label>
        Message
        <textarea name="message" placeholder="Tell me a little about your idea…" rows={5} minLength={10} maxLength={5000} required disabled={state.status === "loading"} />
      </label>
      <div className="form-trap" aria-hidden="true">
        <label>
          Leave this field empty
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="form-submit-row">
        <button className="button button-primary" type="submit" disabled={state.status === "loading"}>
          {state.status === "loading" ? <LoaderCircle size={17} className="spin" /> : <Send size={17} />}
          {state.status === "loading" ? "Sending…" : "Send message"}
        </button>
        <span className="form-privacy">Your details are used only to respond to your message.</span>
      </div>
      {state.status !== "idle" && (
        <p className={`form-status form-status-${state.status}`} role="status" aria-live="polite">
          {state.status === "success" ? <CheckCircle2 size={18} /> : state.status === "error" ? <AlertCircle size={18} /> : null}
          {state.message}
        </p>
      )}
      <p className="form-fallback">Prefer email? <a href="mailto:Sdeepak20072004@gmail.com">Sdeepak20072004@gmail.com</a></p>
    </form>
  );
}
