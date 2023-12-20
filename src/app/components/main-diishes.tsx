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
    name: "Lapsha",
    href: "#",
    price: "$12",
    imageSrc:
      "https://photos.smugmug.com/photos/i-GTDcX63/1/X4/i-GTDcX63-X4.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Venskiy",
    href: "#",
    price: "$35",
    imageSrc:
      "https://photos.smugmug.com/photos/i-npbDvfH/1/X4/i-npbDvfH-X4.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Tiramisy",
    href: "#",
    price: "$89",
    imageSrc:
      "https://photos.smugmug.com/photos/i-4G2nPKG/1/X5/i-4G2nPKG-X5.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Hleb omlet",
    href: "#",
    price: "$35",
    imageSrc:
      "https://photos.smugmug.com/photos/i-qMCgnqQ/1/X4/i-qMCgnqQ-X4.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 1,
    name: "Kamamber",
    href: "#",
    price: "$12",
    imageSrc:
      "https://photos.smugmug.com/photos/i-q6BWQXM/1/X4/i-q6BWQXM-X4.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Omlet Roll",
    href: "#",
    price: "$35",
    imageSrc:
      "https://photos.smugmug.com/photos/i-SvXR58G/1/X4/i-SvXR58G-X4.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Lapsha s krevetkoi",
    href: "#",
    price: "$89",
    imageSrc:
      "https://photos.smugmug.com/photos/i-D7XSFXW/0/X4/i-D7XSFXW-X4.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Jija",
    href: "#",
    price: "$35",
    imageSrc:
      "https://photos.smugmug.com/photos/i-fhwXLMK/0/X4/i-fhwXLMK-X4.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function Menu2() {
  return (
    <div className="bg-stone-100">
      <div>
        <h2
          id="menu"
          className="text-3xl font-semibold p-28 text-stone-900 animate-pulse"
        >
          Main Dishes
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
