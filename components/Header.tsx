import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-full border border-black/10 bg-black">
            <Image
              src="/images/logo-cropped.jpeg"
              alt="P&R Workforce LLC logo"
              fill
              className="object-contain p-1"
              priority
            />
          </div>

          <div>
            <p className="text-[1.2rem] font-semibold tracking-tight text-[#111111]">
              P&amp;R Workforce LLC
            </p>
            <p className="text-xs uppercase tracking-[0.26em] text-black/50">
              Staffing Company
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-[#111111] hover:text-[#c71f25]"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-[#111111] hover:text-[#c71f25]"
          >
            Contact
          </Link>
          <Link
            href="/reviews"
            className="text-sm font-medium text-[#111111] hover:text-[#c71f25]"
          >
            Reviews
          </Link>
          <a
            href="tel:+12525826094"
            className="rounded-full bg-[#111111] px-5 py-2.5 text-sm font-semibold text-white hover:bg-black"
          >
            (252) 582-6094
          </a>
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-[#c71f25] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#a8171c] md:hidden"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}