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
    name: "Maccaron",

    price: "$12",
    imageSrc:
      "https://photos.smugmug.com/photos/i-fnRKThb/1/X4/i-fnRKThb-X4.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Romova baba",

    price: "$35",
    imageSrc:
      "https://photos.smugmug.com/photos/i-5wVZZnk/1/X4/i-5wVZZnk-X4.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Tiramisy",

    price: "$89",
    imageSrc:
      "https://photos.smugmug.com/photos/i-QwHvQZm/1/X4/i-QwHvQZm-X4.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Choko tort",

    price: "$35",
    imageSrc:
      "https://photos.smugmug.com/photos/i-Gbpqg26/1/X4/i-Gbpqg26-X4.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 1,
    name: "Zaher",

    price: "$12",
    imageSrc:
      "https://photos.smugmug.com/photos/i-WzpKwQK/0/X4/i-WzpKwQK-X4.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Frukts v Chocolade",

    price: "$35",
    imageSrc:
      "https://photos.smugmug.com/photos/i-WTfHTSx/0/X4/i-WTfHTSx-X4.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Red Velvet",
    price: "$89",
    imageSrc:
      "https://photos.smugmug.com/photos/i-gTfgFTq/1/X4/i-gTfgFTq-X4.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Choko tort",

    price: "$35",
    imageSrc:
      "https://photos.smugmug.com/photos/i-Gbpqg26/1/X4/i-Gbpqg26-X4.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function Menu() {
  return (
    <div className="bg-stone-100">
      <div>
        <h2 className="text-5xl font-semibold p-20 text-stone-900 animate-pulse">
          Our Desserts
        </h2>
        <h2></h2>

        <div className="px-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-slate-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
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
