import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Electrical Staffing",
    desc: "Reliable staffing support for commercial and industrial electrical projects across North Carolina.",
    img: "/images/hero.jpeg",
  },
  {
    title: "Project Support",
    desc: "Skilled electrical professionals ready to support contractors and project timelines.",
    img: "/images/hero.jpeg",
  },
  {
    title: "Commercial Electrical Work",
    desc: "Experienced staffing for panel work, conduit runs, equipment installation, and electrical build-outs.",
    img: "/images/hero.jpeg",
  },
  {
    title: "Industrial Electrical Work",
    desc: "Dependable manpower for large-scale electrical systems and infrastructure projects.",
    img: "/images/hero.jpeg",
  },
  {
    title: "Workforce Placement",
    desc: "Helping companies hire qualified electrical workers and helping job seekers find the right opportunity.",
    img: "/images/hero.jpeg",
  },
];

const jobs = [
  "/images/jobs/job01.jpeg",
  "/images/jobs/job02.jpeg",
  "/images/jobs/job03.jpeg",
  "/images/jobs/job04.jpeg",
  "/images/jobs/job05.jpeg",
  "/images/jobs/job06.jpeg",
  "/images/jobs/job07.jpeg",
  "/images/jobs/job08.jpeg",
  "/images/jobs/job09.jpeg",
  "/images/jobs/job10.jpeg",
  "/images/jobs/job11.jpeg",
  "/images/jobs/job12.jpeg",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-10 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:py-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#cf2027]">
              Welcome to P&R Workforce in Goldsboro, NC
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Skilled electrical staffing you can count on.
            </h1>

            <p className="mt-6 text-lg text-black/70">
              At P&R Workforce LLC, we believe strong connections build strong
              futures — on the job site and beyond. We provide dependable
              electrical staffing support for contractors and businesses across
              North Carolina.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#cf2027] px-6 py-3 text-sm font-semibold text-white"
              >
                Contact Us
              </Link>

              <a
                href="tel:+12522826094"
                className="rounded-full border border-black/20 px-6 py-3 text-sm font-semibold"
              >
                Call or Text (252) 282-6094
              </a>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative overflow-hidden rounded-[28px] border border-black/10">
            <div className="relative aspect-[4/5] sm:aspect-[16/11]">
              <Image
                src="/images/hero.jpeg"
                alt="P&R Workforce job site"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#cf2027]">
            Services
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Staffing support built around your electrical projects.
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="overflow-hidden rounded-[24px] border border-black/10 bg-white"
              >
                <div className="relative h-60">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 text-black/70">{service.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR JOBS */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#cf2027]">
            Our Jobs
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Real electrical work from our job sites.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {jobs.map((imgSrc, index) => (
              <div
                key={imgSrc}
                className="overflow-hidden rounded-[24px] border border-black/10"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={imgSrc}
                    alt={`P&R Workforce job ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}