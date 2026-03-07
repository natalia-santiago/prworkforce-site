// app/reviews/page.tsx
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <section className="bg-[#f7f7f7]">
      <div className="mx-auto w-full max-w-[1100px] px-6 py-16 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#cf2027]">
          Reviews
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-black sm:text-5xl">
          Our Google Business Profile is coming soon.
        </h1>

        <div className="mt-8 max-w-4xl space-y-8 text-lg leading-8 text-black/70">
          <p>
            P&amp;R Workforce is an electrical staffing company proudly serving
            Goldsboro, Raleigh, Wilmington, and surrounding North Carolina
            areas. Our Google Business Profile will be available soon where
            clients and job seekers can leave reviews and feedback.
          </p>

          <p>
            In the meantime, feel free to reach out if you need dependable
            electrical staffing support or if you are looking for your next job
            opportunity.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-[#cf2027] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Contact Us
          </Link>

          <a
            href="tel:+12525826094"
            className="rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/5"
          >
            Call or Text (252) 582-6094
          </a>
        </div>
      </div>
    </section>
  );
}