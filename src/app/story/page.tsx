

const photos = {
 team: "/images/team.jpg",
founder: "/images/founder.jpg",
breakfast: "/images/breakfast.jpg",
};

const dishes = [
  {
    label: "MOST LOVED",
    name: "Full English Breakfast",
    description: "Eggs. Beef or Turkey bacon. Sausage. All from scratch.",
  },
  {
    label: "SIGNATURE",
    name: "Village Hangout Benny",
    description: "Brioche. Braised beef or Crispy Chicken. Poached egg. Mustard hollandaise.",
  },
  {
    label: "NEW ON MENU",
    name: "3 Stack Crisp",
    description: "Buttermilk pancakes. Hot honey. Crispy chicken.",
  },
  {
    label: "WEEKEND FAVOURITE",
    name: "Village Berry Brioche",
    description: "Homemade brioche. Homemade clotted cream. Mixed berry compote.",
  },
];

export default function StoryPage() {
  return (
    <main className="bg-[#f8f5ef] text-[#30251f]">
      <section className="relative min-h-[650px] overflow-hidden bg-[#30251f] text-[#fffaf2]">
        <div className="absolute inset-0">
          <img
            src={photos.team}
            alt="Village Hangout Café team"
            className="h-full w-full object-cover opacity-40"
          />
        </div>
        <div className="relative mx-auto flex min-h-[650px] max-w-7xl flex-col justify-center px-6 py-24 md:px-12">
          <p className="mb-8 text-xs tracking-[0.35em] text-[#e5b58c]">
            OUR STORY · SINCE 2023
          </p>
          <h1 className="max-w-3xl font-serif text-6xl leading-[1.05] md:text-8xl">
            We didn&apos;t know
            <br />
            how to run
            <br />
            a café.
          </h1>
          <p className="mt-8 font-serif text-3xl italic text-[#e5b58c] md:text-5xl">
            We just knew how to care.
          </p>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/85">
            Good coffee, a proper breakfast and a lazy brunch can fix almost
            anything. We&apos;ve believed that since childhood. We still do.
          </p>
        </div>
      </section>

      <div className="overflow-hidden border-y border-[#ded5c9] py-5">
        <p className="whitespace-nowrap text-center text-[10px] tracking-[0.2em] md:text-xs">
          ✦ ALL DAY BREAKFAST　 ✦ SPECIALTY COFFEE　 ✦ WEEKEND BRUNCH　 ✦ MADE
          FROM SCRATCH　 ✦ WOMEN-LED　 ✦ OPEN DAILY 7AM
        </p>
      </div>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:items-center md:px-12">
        <div>
          <p className="mb-5 text-xs tracking-[0.3em] text-[#a45f43]">
            WHAT WE BELIEVE
          </p>
          <h2 className="font-serif text-5xl leading-tight md:text-6xl">
            Not a chain.
            <br />
            Never will be.
          </h2>
        </div>
        <div className="space-y-6 text-sm leading-8 text-[#65584f]">
          <p>
            Village Hangout Café is a small, family-run café built with every
            penny saved and more heart than we can put into words. We opened
            our doors in JVC in 2023 with one intention — to create a space
            where the community feels genuinely at home.
          </p>
          <p>
            Everything you eat here is made from scratch. Every single day.
            Not because it&apos;s trendy. Because it&apos;s the only way we
            know how to do it. No jars. No shortcuts. No compromises. From
            the hollandaise to the hot honey to the brioche — it all starts
            in our kitchen, from scratch, that morning.
          </p>
          <p>
            We&apos;re JVC&apos;s home for all day breakfast and weekend
            brunch. Whether you&apos;re an early riser chasing your first
            coffee at 7am or a late starter who believes brunch is a
            lifestyle — our café is ready for you all day long.
          </p>
          <p>
            We&apos;re right here in Jumeirah Village Circle — and a short
            drive from Arjan, Motor City, JVT and Al Barsha.
          </p>
        </div>
      </section>

      <section className="bg-[#eee7dc] px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden">
            <img
              src={photos.founder}
              alt="Varsha, founder of Village Hangout Café"
              className="max-h-[700px] w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-5 text-xs tracking-[0.3em] text-[#a45f43]">
              MEET THE FOUNDER
            </p>
            <h2 className="font-serif text-5xl leading-tight">
              Hi, I&apos;m Varsha.
            </h2>
            <p className="mb-8 mt-3 font-serif text-2xl italic text-[#a45f43]">
              The person behind all of this.
            </p>
            <div className="space-y-5 text-sm leading-8 text-[#65584f]">
              <p>
                I&apos;ve been meaning to write this for almost 3 years. 😅
              </p>
              <p>
                I grew up in India&apos;s coffee heartland. Spent my childhood
                around coffee estates, completely unaware that this world
                would one day become mine.
              </p>
              <p>
                For 10 years I was an R&amp;D engineer. Good at my job. But
                somewhere along the way I stopped feeling it.
              </p>
              <p>
                When we moved to Dubai, I asked myself for the first time in
                34 years — what actually makes me come alive?
              </p>
              <p>
                The answer was sitting in my roots the whole time. Good
                coffee. A real breakfast. The simple belief I grew up with —
                that these two things together can fix almost anything.
              </p>
              <p>
                So I took a leap into something I knew absolutely nothing
                about. No café experience. No culinary background. Just a
                deep love for what a good morning can do for a person.
              </p>
              <p>
                What I didn&apos;t expect — was finding a team who believed
                in that same love just as deeply. Every morning they show up,
                pour their heart into every cup, every plate, every smile.
                Village Hangout Café is as much theirs as it is mine. 🧡
              </p>
              <p>
                Three years in — I&apos;m still learning. Still excited.
                Still convinced that coffee and breakfast can fix almost
                anything.
              </p>
              <p>Thank you for being part of this. Really. 🙏</p>
            </div>
            <p className="mt-8 font-serif text-2xl">Varsha</p>
            <p className="mt-1 text-xs tracking-widest text-[#a45f43]">
              FOUNDER · VILLAGE HANGOUT CAFÉ · JVC DUBAI
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <div className="mb-14 text-center">
          <p className="mb-5 text-xs tracking-[0.3em] text-[#a45f43]">
            FROM OUR KITCHEN
          </p>
          <h2 className="font-serif text-5xl md:text-6xl">
            Cooked from memory.
            <br />
            Made for JVC.
          </h2>
        </div>
        <div className="mb-14 overflow-hidden">
  <img
    src={photos.breakfast}
    alt="Village Hangout Café breakfast"
    className="h-[300px] w-full object-cover md:h-[500px]"
  />
</div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish) => (
            <article key={dish.name} className="border-t border-[#cfc3b5] pt-5">
              <p className="mb-4 text-[10px] tracking-[0.2em] text-[#a45f43]">
                {dish.label}
              </p>
              <h3 className="font-serif text-2xl">{dish.name}</h3>
              <p className="mt-3 text-sm leading-7 text-[#76675c]">
                {dish.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="/menu"
            className="inline-block border border-[#30251f] px-9 py-4 text-xs tracking-[0.2em] transition hover:bg-[#30251f] hover:text-white"
          >
            EXPLORE FULL MENU →
          </a>
        </div>
      </section>

      <section className="bg-[#30251f] px-6 py-24 text-center text-[#fffaf2]">
        <p className="mb-6 text-xs tracking-[0.3em] text-[#e5b58c]">
          ALL DAY BREAKFAST &amp; BRUNCH
        </p>
        <h2 className="mx-auto max-w-3xl font-serif text-5xl leading-tight md:text-7xl">
          Breakfast at 7am or brunch at noon —
          <span className="text-[#e5b58c]"> we don&apos;t judge.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-white/70">
          Village Hangout Café is JVC&apos;s home for all day breakfast and
          weekend brunch. Our kitchen runs from 7am to 8:30pm — because good
          food shouldn&apos;t have a curfew.
        </p>
        <div className="mt-12 border-y border-white/20 py-8">
          <p className="font-serif text-4xl">7:00am — 8:30pm</p>
          <p className="mt-3 text-xs tracking-[0.2em] text-[#e5b58c]">
            OPEN DAILY · WALK-INS ALWAYS WELCOME
          </p>
          <p className="mt-3 text-xs text-white/60">
            SHOP 6 · REEF RESIDENCE · JVC DUBAI
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <div className="mb-12 text-center">
          <p className="mb-5 text-xs tracking-[0.3em] text-[#a45f43]">
            SPECIALTY COFFEE
          </p>
          <h2 className="font-serif text-5xl md:text-6xl">
            Two Beans. Two Stories. One Machine.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="border border-[#ded5c9] p-9">
            <p className="text-xs tracking-[0.2em] text-[#a45f43]">
              COLOMBIA · MAGDALENA RIVER VALLEY
            </p>
            <h3 className="mt-5 font-serif text-4xl">Rio Magdalena</h3>
            <p className="mt-2 text-sm text-[#76675c]">Single Origin</p>
            <div className="mt-8 grid grid-cols-2 gap-5 text-sm">
              <div>
                <p className="text-[10px] tracking-widest text-[#a45f43]">VARIETIES</p>
                <p className="mt-2">Castillo, Caturra</p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-[#a45f43]">PROCESS</p>
                <p className="mt-2">Washed</p>
              </div>
            </div>
            <p className="mt-8 font-serif text-xl italic">Cranberry · Hazelnut · Caramel</p>
          </div>
          <div className="border border-[#ded5c9] p-9">
            <p className="text-xs tracking-[0.2em] text-[#a45f43]">
              BRAZIL · ETHIOPIA
            </p>
            <h3 className="mt-5 font-serif text-4xl">Bond Street</h3>
            <p className="mt-2 text-sm text-[#76675c]">Signature Blend</p>
            <div className="mt-8 grid grid-cols-2 gap-5 text-sm">
              <div>
                <p className="text-[10px] tracking-widest text-[#a45f43]">ORIGINS</p>
                <p className="mt-2">Brazil, Ethiopia</p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-[#a45f43]">PROCESS</p>
                <p className="mt-2">Natural</p>
              </div>
            </div>
            <p className="mt-8 font-serif text-xl italic">Sweet · Chocolate · Strawberry</p>
          </div>
        </div>
        <div className="mt-10 text-center">
          <p className="font-serif text-3xl">Ceremonial Matcha</p>
          <p className="mt-4 text-sm leading-8 text-[#76675c]">
            Pure · Highest grade　 |　 Ube Matcha　 |　 Cloud Matcha　 |
            Salted Pistachio Matcha
          </p>
        </div>
      </section>

      <section className="bg-[#eee7dc] px-6 py-24 text-center">
        <p className="mb-5 text-xs tracking-[0.3em] text-[#a45f43]">
          OUR PHILOSOPHY
        </p>
        <h2 className="font-serif text-4xl md:text-6xl">
          Good coffee and breakfast
          <br />
          can fix almost anything.
        </h2>
        <div className="mx-auto mt-14 grid max-w-4xl gap-12 text-left md:grid-cols-2">
          <div>
            <h3 className="font-serif text-2xl">Community first.</h3>
            <p className="mt-4 text-sm leading-7 text-[#76675c]">
              Village Hangout Café was built for JVC. For the neighbours,
              the regulars, the first-timers. A café where everyone feels
              genuinely at home.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-2xl">Women-led. Homegrown.</h3>
            <p className="mt-4 text-sm leading-7 text-[#76675c]">
              Founded by Varsha, run with heart, staffed by a team that
              loves what they do. This is a family café in every sense
              of the word. 🧡
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#30251f] px-6 py-24 text-center text-[#fffaf2]">
        <p className="mb-5 text-xs tracking-[0.3em] text-[#e5b58c]">
          COME FIND US
        </p>
        <h2 className="font-serif text-5xl md:text-7xl">
          JVC&apos;s best kept secret.
          <br />
          <span className="text-[#e5b58c]">Not for much longer.</span>
        </h2>
        <div className="mx-auto mt-14 grid max-w-5xl gap-10 text-sm md:grid-cols-3">
          <div>
            <p className="mb-3 text-[10px] tracking-[0.2em] text-[#e5b58c]">ADDRESS</p>
            <p>Shop 6, Reef Residence</p>
            <p>District 13, JVC Dubai</p>
          </div>
          <div>
            <p className="mb-3 text-[10px] tracking-[0.2em] text-[#e5b58c]">HOURS</p>
            <p>Open daily · 7:00am — 8:30pm</p>
            <p>Walk-ins welcome</p>
          </div>
          <div>
            <p className="mb-3 text-[10px] tracking-[0.2em] text-[#e5b58c]">PHONE</p>
            <a href="tel:+971566506045">+971 56 650 6045</a>
            <p className="mt-2">villagehangoutjvc@gmail.com</p>
          </div>
        </div>
        <a
          href="/contact"
          className="mt-12 inline-block border border-[#e5b58c] px-9 py-4 text-xs tracking-[0.2em] text-[#e5b58c] transition hover:bg-[#e5b58c] hover:text-[#30251f]"
        >
          GET IN TOUCH →
        </a>
      </section>
    </main>
  );
}
