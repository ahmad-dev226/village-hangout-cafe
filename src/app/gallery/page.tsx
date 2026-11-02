
import Link from "next/link";

const galleryImages = [
  {
    src: "/images/breakfast.jpg",
    title: "A Beautiful Breakfast",
    category: "FROM OUR KITCHEN",
    href: "/menu",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/team.jpg",
    title: "Our Café Family",
    category: "OUR PEOPLE",
    href: "/story",
    className: "",
  },
  {
    src: "/images/founder.jpg",
    title: "The Story Behind Us",
    category: "OUR STORY",
    href: "/story",
    className: "",
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-[#faf8f3] text-[#34251f]">
      <section className="px-6 pb-16 pt-24 text-center md:pb-24 md:pt-32">
        <p className="mb-5 text-xs tracking-[0.35em] text-[#b56c4d]">
          A LITTLE LOOK INSIDE
        </p>

        <h1 className="font-serif text-5xl leading-tight md:text-7xl">
          Moments at
          <br />
          Village Hangout.
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#78685d]">
          Good food, beautiful coffee, familiar faces and little moments
          that make every visit special.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12">
        <div className="grid auto-rows-[260px] grid-cols-1 gap-5 md:auto-rows-[300px] md:grid-cols-2">
          {galleryImages.map((photo) => (
            <Link
              key={photo.src}
              href={photo.href}
              aria-label={`Explore ${photo.title}`}
              className={`group relative block overflow-hidden bg-[#e9e1d7] outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#b56c4d] ${photo.className}`}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition duration-500 group-hover:from-black/80" />

              <div className="absolute bottom-0 left-0 w-full p-7 text-white">
                <p className="mb-2 text-[10px] tracking-[0.25em] text-white/75">
                  {photo.category}
                </p>

                <div className="flex items-end justify-between gap-3">
                  <h2 className="font-serif text-2xl md:text-3xl">
                    {photo.title}
                  </h2>

                  <span className="shrink-0 text-xs uppercase tracking-widest text-white/90 transition-transform duration-300 group-hover:translate-x-2">
                    Explore ↗
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#eee8df] px-6 py-20 text-center">
        <p className="mb-4 text-xs tracking-[0.3em] text-[#b56c4d]">
          COME MAKE MEMORIES
        </p>

        <h2 className="font-serif text-4xl md:text-5xl">
          Your table is waiting.
        </h2>

        <p className="mt-5 text-sm text-[#78685d]">
          Visit us in JVC, Dubai.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block border border-[#59483e] px-8 py-4 text-xs uppercase tracking-widest transition hover:bg-[#34251f] hover:text-white"
        >
          Find Us ↗
        </Link>
      </section>
    </main>
  );
}
