# Deepak Saini — Portfolio

A responsive personal portfolio for showcasing Deepak's learning journey in full-stack development and AI engineering.

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS 4
- Lucide React
- Zod validation for contact submissions

## Run locally

```powershell
npm install
npm run dev
```

Open http://localhost:3000.

## Contact form email setup

The contact form API validates submissions server-side and sends email through Resend. Email delivery stays disabled until environment variables are configured.

1. Copy `.env.example` to `.env.local`.
2. Add your Resend API key to `RESEND_API_KEY`.
3. Set `CONTACT_FROM_EMAIL` to a sender address/domain allowed by your Resend account.
4. Set `CONTACT_TO_EMAIL` to the inbox where you want portfolio enquiries.
5. Restart the dev server after changing environment variables.

Do not commit `.env.local`, expose keys in `NEXT_PUBLIC_*` variables, or share API keys in chat/screenshots. The example file is safe to commit because it contains placeholders only.

The route includes input validation, a honeypot field, and a small in-memory throttle for development. That throttle is per-process and is not sufficient as production-grade abuse protection on serverless/multi-instance hosting; before public launch, add a shared rate limiter and/or CAPTCHA/Turnstile and test provider delivery.

## Quality checks

```powershell
npm run typecheck
npm run lint
npm run build
```

## Project status

In development. Planned capabilities and project vision should not be interpreted as already implemented features.
