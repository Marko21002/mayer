/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: "Almonds in milk chokolade with cinamon",
    href: "#",
    price: "11,90€",
    imageSrc: "./almonds.jpeg",
    imageAlt: "almonds&milk choco",
  },
  {
    id: 2,
    name: "Soy Cherry&Dark chocolate",
    href: "#",
    price: "13,90€",
    imageSrc: "cherry.jpeg",
    imageAlt: "sour cherry",
  },
  {
    id: 3,
    name: "Coffe beans & milk chocolate",
    href: "#",
    price: "13,90€",
    imageSrc: "./coffe.jpeg",
    imageAlt: "Coffe beans & milk chocolate",
  },
  {
    id: 4,
    name: "Princess Sisi",
    href: "#",
    price: "19,00€",
    imageSrc: "./sisi.jpeg",
    imageAlt: "Princess Sisi.",
  },
  {
    id: 5,
    name: "Almonds in dark chocolate & Cinamon",
    href: "#",
    price: "11,90€",
    imageSrc: "./brown.jpeg",
    imageAlt: "Almonds in dark chocolate & Cinamon",
  },
  {
    id: 6,
    name: "Raisins in milk chocolate & Cinamon",
    href: "#",
    price: "13,90€",
    imageSrc: "./raisins.jpeg",
    imageAlt: "Raisins in milk chocolate & Cinamon",
  },
  {
    id: 7,
    name: "Almonds in dark chocolate with chili&salt",
    href: "#",
    price: "13,90€",
    imageSrc: "./black.jpeg",
    imageAlt: "dark",
  },
  {
    id: 8,
    name: "Orange in dark chocolate & cocoa",
    href: "#",
    price: "13,90€",
    imageSrc: "./orange.jpeg",
    imageAlt: "orange",
  },
  // More products...
];

export default function Menu() {
  return (
    <div className="bg-stone-100">
      <div>
        <h2 className="text-5xl font-semibold p-20 text-stone-900 animate-pulse"></h2>
        <h2></h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 px-8">
          {products.map((product) => (
            <a key={product.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-slate-200 xl:aspect-h-8 xl:aspect-w-7 transition-transform transform  hover:scale-110">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center "
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
