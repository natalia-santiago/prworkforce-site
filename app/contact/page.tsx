export default function ContactPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1100px] px-6 py-14 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#c71f25]">
          Contact P&amp;R Workforce
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#111111] md:text-5xl">
          Hire staff or get hired.
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-8 text-black/70">
          Tell us what services you’re looking for, or let us know if you are
          seeking employment. Our team will get back to you quickly.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-5">
            <p className="text-sm font-semibold text-[#111111]">Phone</p>
            <a
              href="tel:+19197444460"
              className="mt-2 block text-sm text-black/70 hover:text-[#c71f25]"
            >
              (919) 744-4460
            </a>
          </div>

          <div className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-5">
            <p className="text-sm font-semibold text-[#111111]">Email</p>
            <a
              href="mailto:info.prworkforce@gmail.com"
              className="mt-2 block break-all text-sm text-black/70 hover:text-[#c71f25]"
            >
              info.prworkforce@gmail.com
            </a>
          </div>

          <div className="rounded-2xl border border-black/10 bg-[#f7f7f7] p-5">
            <p className="text-sm font-semibold text-[#111111]">Service Area</p>
            <p className="mt-2 text-sm text-black/70">
              Goldsboro, Raleigh &amp; Wilmington, NC
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[28px] border border-black/10 bg-[#111111] p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ff6a6f]">
              How we can help
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Staffing support for employers and opportunities for job seekers.
            </h2>

            <p className="mt-4 text-base leading-8 text-white/75">
              Reach out if you need dependable electrical staffing support or if
              you’re looking for your next role in the field.
            </p>

            <div className="mt-8 space-y-4 text-sm text-white/80">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">For employers</p>
                <p className="mt-2 leading-7 text-white/75">
                  Tell us about your staffing needs, timeline, project type, and
                  service area.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">For job seekers</p>
                <p className="mt-2 leading-7 text-white/75">
                  Share your work experience, availability, preferred location,
                  and the type of role you’re seeking.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">Business hours</p>
                <p className="mt-2 leading-7 text-white/75">
                  Monday–Friday: 8:00 AM – 5:00 PM
                  <br />
                  Saturday: By request
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm md:p-8">
            <form
              name="contact"
              method="POST"
              action="/thank-you"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="grid gap-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-[#111111]"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-[#c71f25]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-[#111111]"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-[#c71f25]"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-[#111111]"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-[#c71f25]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiryType"
                    className="mb-2 block text-sm font-medium text-[#111111]"
                  >
                    I am contacting you to...
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 outline-none focus:border-[#c71f25]"
                  >
                    <option value="">Select one</option>
                    <option value="hire-staff">Hire staff</option>
                    <option value="find-work">Find work</option>
                    <option value="general-question">Ask a general question</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="mb-2 block text-sm font-medium text-[#111111]"
                >
                  City / Service Area
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="Example: Raleigh, NC"
                  className="w-full rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-[#c71f25]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[#111111]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  required
                  placeholder="Tell us what you need or share your work experience and availability."
                  className="w-full rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-[#c71f25]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="rounded-full bg-[#c71f25] px-7 py-3 text-sm font-semibold text-white hover:bg-[#a8171c]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}