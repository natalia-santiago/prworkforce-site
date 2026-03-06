import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="text-xl font-semibold tracking-tight">
            P&amp;R Workforce LLC
          </p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-white/70">
            Reliable electrical staffing based in Goldsboro, serving Raleigh,
            Goldsboro, Wilmington, and surrounding North Carolina areas.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
            Contact
          </p>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <p>Goldsboro, NC</p>
            <a href="tel:+12522826094" className="block hover:text-white">
              (252) 282-6094
            </a>
            <a
              href="mailto:info.prworkforce@gmail.com"
              className="block break-all hover:text-white"
            >
              info.prworkforce@gmail.com
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
            Quick Links
          </p>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <Link href="/" className="block hover:text-white">
              Home
            </Link>
            <Link href="/contact" className="block hover:text-white">
              Contact
            </Link>
            <p>Built in reliability, Driven by Quality.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-6 py-5 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {year} P&amp;R Workforce LLC. All rights reserved.</p>
          <p>Electrical Staffing in North Carolina</p>
        </div>
      </div>
    </footer>
  );
}