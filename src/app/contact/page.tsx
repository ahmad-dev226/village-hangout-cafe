
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-[#faf8f3] text-[#34251f]">
      <section className="px-6 pb-20 pt-24 text-center md:pb-28 md:pt-32">
        <p className="mb-5 text-xs tracking-[0.35em] text-[#b56c4d]">
          WE WOULD LOVE TO SEE YOU
        </p>

        <h1 className="font-serif text-5xl leading-tight md:text-7xl">
          Come on in.
          <br />
          Stay a little longer.
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#78685d]">
          Whether it&apos;s your morning coffee, a slow breakfast or a weekend
          brunch, there&apos;s always a place for you at our table.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 md:grid-cols-2 md:px-12">
        <div className="bg-[#eee8df] p-8 md:p-12">
          <p className="mb-6 text-xs tracking-[0.3em] text-[#b56c4d]">
            FIND OUR CAFÉ
          </p>

          <h2 className="font-serif text-3xl md:text-4xl">
            Your neighbourhood
            <br />
            café in JVC.
          </h2>

          <p className="mt-8 text-sm leading-7 text-[#78685d]">
            Shop 6, Reef Residence,
            <br />
            District 13, Jumeirah Village Circle,
            <br />
            Dubai, United Arab Emirates.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Village+Hangout+Cafe+Reef+Residence+JVC+Dubai"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block border border-[#59483e] px-7 py-4 text-xs uppercase tracking-widest transition hover:bg-[#34251f] hover:text-white"
          >
            Get Directions ↗
          </a>
        </div>

        <div className="border border-[#e9e1d7] p-8 md:p-12">
          <p className="mb-6 text-xs tracking-[0.3em] text-[#b56c4d]">
            SAY HELLO
          </p>

          <h2 className="font-serif text-3xl md:text-4xl">
            Let&apos;s connect.
          </h2>

          <div className="mt-9 space-y-8">
            <div>
              <p className="mb-2 text-[10px] tracking-[0.2em] text-[#b56c4d]">
                CALL US
              </p>
              <a
                href="tel:+971566506045"
                className="text-sm hover:text-[#b56c4d]"
              >
                +971 56 650 6045
              </a>
            </div>

            <div>
              <p className="mb-2 text-[10px] tracking-[0.2em] text-[#b56c4d]">
                WHATSAPP
              </p>
              <a
                href="https://wa.me/971566506045"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-[#b56c4d]"
              >
                Chat with us ↗
              </a>
            </div>

            <div>
              <p className="mb-2 text-[10px] tracking-[0.2em] text-[#b56c4d]">
                INSTAGRAM
              </p>
              <a
                href="https://www.instagram.com/villagehangoutcafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-[#b56c4d]"
              >
                @villagehangoutcafe ↗
              </a>
            </div>

            <div>
              <p className="mb-2 text-[10px] tracking-[0.2em] text-[#b56c4d]">
                OPENING HOURS
              </p>
              <p className="text-sm">Every day · 7:00 AM – 8:30 PM</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#30251f] px-6 py-20 text-center text-white">
        <p className="mb-4 text-xs tracking-[0.3em] text-[#d5a184]">
          YOUR NEXT COFFEE DATE
        </p>
        <h2 className="font-serif text-4xl md:text-5xl">
          We&apos;ll save you a seat.
        </h2>
        <Link
          href="/menu"
          className="mt-8 inline-block border border-white/50 px-8 py-4 text-xs uppercase tracking-widest transition hover:bg-white hover:text-[#30251f]"
        >
          Explore Our Menu
        </Link>
      </section>
    </main>
  );
}
