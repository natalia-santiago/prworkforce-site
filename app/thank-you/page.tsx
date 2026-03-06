import Link from "next/link";

export default function ThankYouPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c71f25]">
          Thank You
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#111111] md:text-5xl">
          Your message has been sent.
        </h1>

        <p className="mt-5 text-base leading-8 text-black/70">
          We appreciate you reaching out to P&amp;R Workforce. Our team will get
          back to you as soon as possible.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-[#111111] px-6 py-3 text-sm font-semibold text-white hover:bg-black"
          >
            Back to Home
          </Link>

          <a
            href="tel:+12522826094"
            className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-[#111111] hover:bg-[#f5f5f5]"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}