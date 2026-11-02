
const dishes = [
  {
    name: "Lemon Ricotta Pancakes",
    description: "Fluffy pancakes, creamy ricotta and fresh lemon.",
    price: "AED 42",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=900",
    tag: "GUEST FAVOURITE",
  },
  {
    name: "New York Benedict",
    description: "A breakfast classic, made the Village way.",
    price: "AED 54",
    image:
      "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=900",
    tag: "SIGNATURE",
  },
  {
    name: "Truffle Mushroom Avo Toast",
    description: "Avocado, mushrooms and rich truffle flavours.",
    price: "AED 54",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=900",
    tag: "BRUNCH FAVOURITE",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#30251f]">
      

      {/* Hero */}
      <section className="grid min-h-[680px] md:grid-cols-2">
        <div className="flex flex-col justify-center px-8 py-20 md:px-16 lg:px-24">
          <p className="mb-7 text-[10px] tracking-[0.35em] text-[#ad6748]">
            GOOD FOOD. GOOD MOOD. GOOD COMPANY.
          </p>

          <h1 className="max-w-xl font-serif text-6xl leading-[1.08] tracking-tight md:text-7xl lg:text-8xl">
            A little
            <br />
            escape in
            <br />
            <span className="italic text-[#ad6748]">your village.</span>
          </h1>

          <p className="mt-8 max-w-sm text-sm leading-7 text-[#75685f]">
            Your neighbourhood corner for beautiful breakfasts, delicious
            coffee and moments worth slowing down for.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="bg-[#ad6748] px-8 py-4 text-[10px] tracking-[0.2em] text-white transition hover:bg-[#30251f]"
            >
              EXPLORE OUR MENU ↗
            </a>
            <a
              href="#story"
              className="border border-[#30251f]/30 px-8 py-4 text-[10px] tracking-[0.2em] transition hover:border-[#ad6748] hover:text-[#ad6748]"
            >
              OUR STORY
            </a>
          </div>

          <div className="mt-16 flex items-center gap-4">
            <div className="h-px w-12 bg-[#ad6748]" />
            <p className="text-[10px] tracking-[0.2em] text-[#75685f]">
              MADE WITH LOVE IN JVC, DUBAI
            </p>
          </div>
        </div>

        <div className="relative min-h-[450px] overflow-hidden md:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600"
            alt="Beautiful coffee and café experience"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute bottom-8 left-8 border border-white/60 bg-white/90 px-6 py-5 backdrop-blur-sm">
            <p className="font-serif text-2xl italic">Stay a little longer.</p>
            <p className="mt-2 text-[9px] tracking-[0.25em] text-[#75685f]">
              YOUR TABLE IS WAITING
            </p>
          </div>
        </div>
      </section>

      {/* Introduction strip */}
      <section className="bg-[#30251f] px-6 py-12 text-center text-[#f8f5ef]">
        <p className="font-serif text-2xl italic md:text-3xl">
          Not just a café. Your favourite little neighbourhood ritual.
        </p>
      </section>

      {/* Story */}
      <section
        id="story"
        className="grid gap-12 px-8 py-24 md:grid-cols-2 md:items-center md:px-16 lg:px-24"
      >
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200"
            alt="Warm and welcoming café interior"
            className="h-[470px] w-full object-cover"
          />
          <div className="absolute -bottom-5 -right-4 bg-[#ad6748] px-7 py-6 text-white">
            <p className="font-serif text-3xl italic">Since 2023</p>
            <p className="mt-1 text-[9px] tracking-[0.2em]">OUR STORY</p>
          </div>
        </div>

        <div className="md:pl-12">
          <p className="mb-5 text-[10px] tracking-[0.3em] text-[#ad6748]">
            A PLACE TO BELONG
          </p>
          <h2 className="font-serif text-5xl leading-tight md:text-6xl">
            More than
            <br />
            <span className="italic text-[#ad6748]">just coffee.</span>
          </h2>
          <p className="mt-7 text-sm leading-8 text-[#75685f]">
            At Village Hangout Café, we believe the best moments happen around
            a table. From slow morning breakfasts to afternoon coffee dates,
            we bring people together through thoughtful food and genuine
            hospitality.
          </p>
          <a
            href="#visit"
            className="mt-9 inline-block border-b border-[#ad6748] pb-2 text-[10px] tracking-[0.2em] text-[#ad6748]"
          >
            COME SAY HELLO ↗
          </a>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="bg-[#eee8df] px-8 py-24 md:px-16 lg:px-24">
        <div className="mb-14 text-center">
          <p className="mb-4 text-[10px] tracking-[0.3em] text-[#ad6748]">
            SOMETHING DELICIOUS AWAITS
          </p>
          <h2 className="font-serif text-5xl md:text-6xl">
            Made to <span className="italic text-[#ad6748]">make you smile.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#75685f]">
            From comforting classics to little indulgences, discover your next
            favourite.
          </p>
        </div>

        <div className="grid gap-9 md:grid-cols-3">
          {dishes.map((dish) => (
            <article key={dish.name} className="group">
              <div className="relative overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 bg-[#f8f5ef] px-4 py-2 text-[9px] tracking-[0.15em]">
                  {dish.tag}
                </span>
              </div>
              <div className="flex items-start justify-between gap-3 pt-6">
                <div>
                  <h3 className="font-serif text-2xl">{dish.name}</h3>
                  <p className="mt-2 text-xs leading-6 text-[#75685f]">
                    {dish.description}
                  </p>
                </div>
                <span className="shrink-0 text-sm text-[#ad6748]">
                  {dish.price}
                </span>
              </div>
            </article>
          ))}
        </div>

       <div className="mt-16 text-center">
  <a
    href="/menu"
    className="inline-block bg-[#30251f] px-10 py-4 text-[10px] tracking-[0.2em] text-white transition hover:bg-[#ad6748]"
  >
    DISCOVER THE FULL MENU ↗
  </a>
</div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="relative flex min-h-[520px] items-center justify-center overflow-hidden text-center text-white"
      >
        <img
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1600"
          alt="Cosy café atmosphere"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#241a15]/60" />
        <div className="relative z-10 max-w-2xl px-6 py-20">
          <p className="mb-6 text-[10px] tracking-[0.35em]">
            SLOW DOWN. SIP. CONNECT.
          </p>
          <h2 className="font-serif text-5xl leading-tight md:text-7xl">
            Life tastes better
            <br />
            <span className="italic text-[#e7b18f]">together.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-white/80">
            Whether it's your morning ritual, a catch-up with friends or a
            well-deserved break, there's always room for you here.
          </p>
          <a
            href="#visit"
            className="mt-9 inline-block border border-white px-9 py-4 text-[10px] tracking-[0.2em] transition hover:bg-white hover:text-[#30251f]"
          >
            FIND YOUR WAY HERE
          </a>
        </div>
      </section>

      {/* Visit */}
      <section
        id="visit"
        className="grid gap-12 px-8 py-24 md:grid-cols-2 md:px-16 lg:px-24"
      >
        <div>
          <p className="mb-5 text-[10px] tracking-[0.3em] text-[#ad6748]">
            WE'D LOVE TO SEE YOU
          </p>
          <h2 className="font-serif text-5xl leading-tight md:text-6xl">
            Your village.
            <br />
            <span className="italic text-[#ad6748]">Your café.</span>
          </h2>
          <p className="mt-8 text-sm leading-7 text-[#75685f]">
            Shop 6, Reef Residence,
            <br />
            District 13, Jumeirah Village Circle,
            <br />
            Dubai, United Arab Emirates.
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Village+Hangout+Cafe+JVC+Dubai"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block bg-[#ad6748] px-8 py-4 text-[10px] tracking-[0.2em] text-white transition hover:bg-[#30251f]"
          >
            GET DIRECTIONS ↗
          </a>
        </div>

        <div className="border-t border-[#30251f]/15 pt-8 md:border-l md:border-t-0 md:pl-12">
          <div className="mb-9">
            <p className="text-[10px] tracking-[0.25em] text-[#ad6748]">
              OPEN EVERY DAY
            </p>
            <p className="mt-3 font-serif text-3xl">7:00 AM — 8:30 PM</p>
          </div>
          <div className="mb-9">
            <p className="text-[10px] tracking-[0.25em] text-[#ad6748]">
              CALL US
            </p>
            <a href="tel:+971566506045" className="mt-3 block font-serif text-3xl">
              +971 56 650 6045
            </a>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.25em] text-[#ad6748]">
              FOLLOW OUR JOURNEY
            </p>
            <a
              href="https://www.instagram.com/villagehangoutcafe/"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block font-serif text-2xl hover:text-[#ad6748]"
            >
              @villagehangoutcafe ↗
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#30251f] px-8 py-12 text-center text-[#f8f5ef]">
        <p className="font-serif text-3xl font-bold">
          VILLAGE <span className="italic text-[#d69a77]">HANGOUT.</span>
        </p>
        <p className="mt-3 text-[9px] tracking-[0.3em] text-white/60">
          CAFÉ · JVC DUBAI
        </p>
        <div className="my-8 h-px bg-white/15" />
        <p className="text-[10px] tracking-wider text-white/50">
© 2026 Village Hangout Café. All rights reserved.        </p>
        <p className="mt-3 text-[10px] text-white/50">
          Website concept by SOJEX
        </p>
      </footer>
    </main>
  );
}
