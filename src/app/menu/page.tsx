
"use client";

import { useState } from "react";

const categories = ["All", "Breakfast", "Bowls", "Burgers", "Mains"];

const dishes = [
  {
    name: "English Breakfast",
    category: "Breakfast",
    price: 71,
    description:
      "Eggs, beef bacon or fruit bowl, sausages, hash browns, homemade baked beans and grilled mushrooms. Served with sourdough.",
  },
  {
    name: "Kickboxer Omelette",
    category: "Breakfast",
    price: 62,
    description:
      "Eggs loaded with bacon, sausage, cheddar cheese, caramelised onions and mushrooms. Served with Lyonnaise potatoes.",
  },
  {
    name: "Lemon Ricotta Pancake",
    category: "Breakfast",
    price: 42,
    description:
      "Three fluffy pancakes topped with lemon ricotta, blueberry compote and fresh blueberries.",
  },
  {
    name: "Queens's Breakfast",
    category: "Breakfast",
    price: 71,
    description:
      "Grilled mushrooms, vegan sausage or eggs, halloumi, Lyonnaise potatoes, hash brown and English muffin.",
  },
  {
    name: "Nourishing Bowl",
    category: "Breakfast",
    price: 58,
    description:
      "Baby spinach, baby potatoes, avocado salsa, grilled halloumi, egg and pink labneh with pomegranate.",
  },
  {
    name: "Classic Pancake & Eggs",
    category: "Breakfast",
    price: 37,
    description:
      "Two fluffy pancakes with scrambled eggs and your choice of honey or maple syrup.",
  },
  {
    name: "New York Benedict",
    category: "Breakfast",
    price: 54,
    description:
      "New York roll with crispy fried chicken, poached eggs, avocado and homemade spicy hollandaise.",
  },
  {
    name: "Truffle Mushroom Avo Toast",
    category: "Breakfast",
    price: 54,
    description:
      "Sourdough with mashed avocado, whipped feta, truffle mushrooms, poached egg and harissa.",
  },
  {
    name: "Village Hangout Benny",
    category: "Breakfast",
    price: 67,
    description:
      "Two poached eggs on brioche with signature jalapeño relish, mustard hollandaise and homemade matchstick potatoes.",
  },
  {
    name: "Loaded French Toast",
    category: "Breakfast",
    price: 52,
    description:
      "Brioche French toast with whipped cream, strawberries, caramelised banana, pistachios and ice cream.",
  },
  {
    name: "Village Berry Brioche",
    category: "Breakfast",
    price: 52,
    description:
      "Brioche French toast with mixed berries, homemade clotted cream and berry compote.",
  },
  {
    name: "Village Hangout Jerk Chicken",
    category: "Bowls",
    price: 58,
    description:
      "12-hour marinated jerk chicken with coconut rice, mango salsa, greens and jalapeños.",
  },
  {
    name: "Teriyaki Chicken",
    category: "Bowls",
    price: 61,
    description:
      "Teriyaki chicken with scallion rice, pineapple salsa, cucumber, avocado and vegetables.",
  },
  {
    name: "Pan Seared Salmon Bowl",
    category: "Bowls",
    price: 74,
    description:
      "Pan-seared salmon with ginger and garlic, coconut rice, avocado, mango, edamame and spicy mayo.",
  },
  {
    name: "Nutty Chicken & Quinoa Salad",
    category: "Bowls",
    price: 52,
    description:
      "Pulled chicken, vegetables, cranberries, cashews, seeds and quinoa in ginger cilantro dressing.",
  },
  {
    name: "Salmon Nicoise Salad",
    category: "Bowls",
    price: 68,
    description:
      "Grilled salmon with green beans, baby potatoes, tomatoes, egg, avocado, olives and balsamic dressing.",
  },
  {
    name: "The Morning After Smash",
    category: "Burgers",
    price: 60,
    description:
      "Beef smash patty, Gruyère, Parmesan, bacon, avocado and fried egg in a toasted croissant.",
  },
  {
    name: "New York Smash Burger",
    category: "Burgers",
    price: 58,
    description:
      "Grilled beef patty with cheddar, iceberg, tomato and mayo in a soft bun. Served with fries.",
  },
  {
    name: "The Sweet & Spicy Seoul",
    category: "Burgers",
    price: 52,
    description:
      "Crispy fried chicken, kimchi slaw, homemade pepper jam and gochujang mayo. Served with fries.",
  },
  {
    name: "Teriyaki Salmon",
    category: "Mains",
    price: 76,
    description:
      "Baked salmon in house teriyaki sauce with steamed rice or sweet potato mash and broccolini.",
  },
  {
    name: "Paprika Chicken",
    category: "Mains",
    price: 58,
    description:
      "Herb-marinated chicken glazed with paprika and maple, served with stir-fried quinoa and roasted pepper yogurt sauce.",
  },
  {
    name: "Steak & Fries",
    category: "Mains",
    price: 78,
    description:
      "Herb-cooked rib eye steak with fries, side salad and café de Paris butter.",
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredDishes =
    activeCategory === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#30251f]">
      <nav className="flex items-center justify-between border-b border-[#30251f]/10 px-6 py-6 md:px-16">
        <a href="/" className="font-serif text-xl font-bold">
          VILLAGE <span className="text-[#ad6748]">HANGOUT.</span>
          <span className="block text-[9px] tracking-[0.3em]">
            CAFÉ · JVC DUBAI
          </span>
        </a>

        <a
          href="/"
          className="text-xs uppercase tracking-widest transition hover:text-[#ad6748]"
        >
          ← Back Home
        </a>
      </nav>

      <section className="px-6 py-20 text-center md:py-28">
        <p className="mb-6 text-[10px] tracking-[0.35em] text-[#ad6748]">
          VILLAGE HANGOUT CAFÉ · JVC DUBAI
        </p>

        <h1 className="font-serif text-6xl md:text-8xl">
          A menu made
          <br />
          <span className="italic text-[#ad6748]">with love.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-[#75685f]">
          Fresh ingredients, beautiful flavours and food made from scratch.
          Find something delicious for every moment of your day.
        </p>
      </section>

      <section className="px-5 pb-24 md:px-16">
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`border px-6 py-3 text-[10px] uppercase tracking-[0.15em] transition ${
                activeCategory === category
                  ? "border-[#30251f] bg-[#30251f] text-white"
                  : "border-[#30251f]/20 hover:border-[#ad6748] hover:text-[#ad6748]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-8 md:grid-cols-2">
          {filteredDishes.map((dish, index) => (
            <article
              key={dish.name}
              className="border-b border-[#30251f]/15 pb-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-[9px] tracking-[0.2em] text-[#ad6748]">
                    {dish.category.toUpperCase()} · {String(index + 1).padStart(2, "0")}
                  </p>

                  <h2 className="font-serif text-2xl md:text-3xl">
                    {dish.name}
                  </h2>
                </div>

                <p className="shrink-0 text-sm text-[#ad6748]">
                  AED {dish.price}
                </p>
              </div>

              <p className="mt-4 max-w-md text-xs leading-7 text-[#75685f]">
                {dish.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#30251f] px-6 py-20 text-center text-white">
        <p className="mb-5 text-[10px] tracking-[0.3em] text-[#d69a77]">
          GOOD FOOD IS BETTER TOGETHER
        </p>

        <h2 className="font-serif text-4xl md:text-6xl">
          Come hungry.
          <br />
          <span className="italic text-[#d69a77]">Leave happy.</span>
        </h2>

        <a
          href="/contact"
          className="mt-9 inline-block bg-[#ad6748] px-9 py-4 text-[10px] tracking-[0.2em] transition hover:bg-white hover:text-[#30251f]"
        >
          FIND OUR CAFÉ ↗
        </a>
      </section>

      <footer className="bg-[#30251f] px-6 pb-10 text-center text-xs text-white/50">
© 2026 Village Hangout Café. All rights reserved.      </footer>
    </main>
  );
}
