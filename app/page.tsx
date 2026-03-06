import Image from "next/image";
import Link from "next/link";

const hours = [
  { day: "Monday", time: "8:00 AM - 5:00 PM" },
  { day: "Tuesday", time: "8:00 AM - 5:00 PM" },
  { day: "Wednesday", time: "8:00 AM - 5:00 PM" },
  { day: "Thursday", time: "8:00 AM - 5:00 PM" },
  { day: "Friday", time: "8:00 AM - 5:00 PM" },
  { day: "Saturday", time: "By request" },
  { day: "Sunday", time: "Closed" },
];

const servicesOffered = [
  "Temporary electrical staffing",
  "Temporary-to-hire placements",
  "Direct hire recruiting",
  "Commercial electrical manpower support",
  "Project-based workforce support",
];

const candidateAreas = [
  "Electricians",
  "Electrical helpers",
  "Commercial electrical crews",
  "Job site support",
  "Project-based workers",
  "Skilled field-ready labor",
];

const hiringAreas = [
  "Commercial electrical staffing",
  "Short-term manpower support",
  "Long-term placements",
  "Direct hire recruiting",
  "Skilled project support",
  "Reliable field workforce",
];

export default function Home() {
  return (
    <>
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c71f25]">
              Electrical Staffing in North Carolina
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#111111] md:text-5xl lg:text-6xl">
              Built in reliability,
              <br />
              Driven by Quality.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70">
              P&amp;R Workforce is a reliable electrical staffing company based
              out of Goldsboro, serving Raleigh, Goldsboro, and Wilmington in
              North Carolina. We help businesses hire dependable electrical
              talent, and we help workers connect with the right opportunities.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#c71f25] px-6 py-3 text-sm font-semibold text-white hover:bg-[#a8171c]"
              >
                Request Staff
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-[#111111] px-6 py-3 text-sm font-semibold text-[#111111] hover:bg-black hover:text-white"
              >
                Find Work
              </Link>
            </div>

            <p className="mt-4 text-sm text-black/60">
              Serving Raleigh • Goldsboro • Wilmington • Surrounding North
              Carolina areas
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-[#f4f4f4] shadow-sm">
            <div className="relative aspect-[4/4] w-full">
              <Image
                src="/images/workforce.jpeg"
                alt="P&R Workforce electrical staffing team on site"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c71f25]">
                Welcome to P&amp;R Workforce in Goldsboro, NC
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111111] md:text-4xl">
                Thank you for choosing P&amp;R Workforce for your staffing or
                job search needs.
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-black/75">
                At P &amp; R Workforce LLC, we believe strong connections build
                strong futures — on the job site and beyond. We are a skilled
                electrical staffing company you can count on. Success is built
                one connection at a time.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/10 bg-[#f8f8f8] p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/55">
                    Based in
                  </p>
                  <p className="mt-3 text-lg font-semibold text-[#111111]">
                    Goldsboro, NC
                  </p>
                  <p className="mt-2 text-sm leading-7 text-black/65">
                    Serving Raleigh, Goldsboro, Wilmington, and surrounding
                    North Carolina areas.
                  </p>
                </div>

                <div className="rounded-2xl border border-black/10 bg-[#f8f8f8] p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/55">
                    Contact
                  </p>
                  <a
                    href="tel:+12522826094"
                    className="mt-3 block text-lg font-semibold text-[#111111] hover:text-[#c71f25]"
                  >
                    (252) 282-6094
                  </a>
                  <a
                    href="mailto:info.prworkforce@gmail.com"
                    className="mt-2 block break-all text-sm text-black/65 hover:text-[#c71f25]"
                  >
                    info.prworkforce@gmail.com
                  </a>
                  <p className="mt-3 text-sm text-black/65">
                    Available by phone, text, or email.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-black/10 bg-[#f8f8f8] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/55">
                  Service Area
                </p>
                <p className="mt-3 text-base leading-8 text-black/75">
                  P&amp;R Workforce proudly supports businesses and job seekers
                  in Goldsboro, Raleigh, Wilmington, and surrounding North
                  Carolina communities.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-[#111111] p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ff6a6f]">
                Hours of Operation
              </p>

              <div className="mt-6 space-y-4">
                {hours.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 text-sm"
                  >
                    <span className="font-medium text-white">{item.day}</span>
                    <span className="text-white/75">{item.time}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
                  Scheduling Note
                </p>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  Staffing requests and candidate inquiries can be submitted
                  online at any time. Phone and text support is available during
                  normal business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-[1400px] px-6 py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c71f25]">
            Services Offered
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {servicesOffered.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-black/10 bg-white p-5"
              >
                <div className="h-1 w-12 rounded-full bg-[#c71f25]" />
                <p className="mt-4 text-base font-semibold text-[#111111]">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c71f25]">
                Looking for a job?
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111111] md:text-4xl">
                Connect with opportunities that fit your experience.
              </h2>

              <p className="mt-4 text-base leading-8 text-black/75">
                We connect job seekers with electrical staffing opportunities
                that match their skills, availability, and career goals.
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {candidateAreas.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-black/75"
                  >
                    <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-[#c71f25]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full bg-[#c71f25] px-6 py-3 text-sm font-semibold text-white hover:bg-[#a8171c]"
              >
                Find Work
              </Link>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c71f25]">
                Need to hire?
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111111] md:text-4xl">
                Find dependable electrical talent for your next project.
              </h2>

              <p className="mt-4 text-base leading-8 text-black/75">
                P&amp;R Workforce helps connect businesses with reliable,
                skilled professionals across electrical and project support
                roles.
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {hiringAreas.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-black/75"
                  >
                    <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-[#c71f25]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full border border-[#111111] px-6 py-3 text-sm font-semibold text-[#111111] hover:bg-black hover:text-white"
              >
                Request Staff
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f8f8f8]">
        <div className="mx-auto max-w-[1400px] px-6 py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c71f25]">
                Contact P&amp;R Workforce
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111111] md:text-4xl">
                Let us know what services you’re looking for.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-black/75">
                Whether you need electrical staffing support or are looking to
                get hired, our team is ready to hear from you.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+12522826094"
                className="rounded-full bg-[#111111] px-6 py-3 text-sm font-semibold text-white hover:bg-black"
              >
                Call (252) 282-6094
              </a>
              <Link
                href="/contact"
                className="rounded-full bg-[#c71f25] px-6 py-3 text-sm font-semibold text-white hover:bg-[#a8171c]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c71f25]">
                Location
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111111] md:text-4xl">
                Based in Goldsboro, serving surrounding North Carolina areas.
              </h2>

              <p className="mt-4 text-base leading-8 text-black/75">
                P&amp;R Workforce supports employers and job seekers throughout
                Goldsboro, Raleigh, Wilmington, and nearby communities.
              </p>

              <div className="mt-6 space-y-3 text-sm text-black/70">
                <p>
                  <span className="font-semibold text-[#111111]">Phone:</span>{" "}
                  (252) 282-6094
                </p>
                <p>
                  <span className="font-semibold text-[#111111]">Email:</span>{" "}
                  info.prworkforce@gmail.com
                </p>
                <p>
                  <span className="font-semibold text-[#111111]">
                    Main Area:
                  </span>{" "}
                  Goldsboro, NC
                </p>
                <p>
                  <span className="font-semibold text-[#111111]">Serving:</span>{" "}
                  Raleigh, Goldsboro, Wilmington, and surrounding areas
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-sm">
              <iframe
                title="P&R Workforce service area map"
                src="https://www.google.com/maps?q=Goldsboro,NC&output=embed"
                className="h-[380px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c71f25]">
              Reviews
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111111] md:text-4xl">
              Our Google Business Profile is coming soon.
            </h2>

            <p className="mt-4 text-base leading-8 text-black/75">
              P&amp;R Workforce is a new electrical staffing company proudly
              serving Goldsboro, Raleigh, Wilmington, and surrounding North
              Carolina areas. Our Google Business Profile will be available soon
              where clients and job seekers can leave reviews and feedback.
            </p>

            <p className="mt-4 text-base leading-8 text-black/75">
              In the meantime, feel free to reach out if you need dependable
              electrical staffing support or if you are looking for your next
              job opportunity.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}