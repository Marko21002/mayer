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
    name: "with cinamon",
    href: "#",
    price: "$12",
    imageSrc:
      "https://photos.smugmug.com/photos/i-JWxxvb2/0/X4/i-JWxxvb2-X4.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Soy Cherry",
    href: "#",
    price: "$35",
    imageSrc:
      "https://photos.smugmug.com/photos/i-JCfF4kN/0/X4/i-JCfF4kN-X4.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Coffe milk",
    href: "#",
    price: "$89",
    imageSrc:
      "https://photos.smugmug.com/photos/i-qkBknVd/0/X4/i-qkBknVd-X4.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Meshok",
    href: "#",
    price: "$35",
    imageSrc:
      "https://photos.smugmug.com/photos/i-tN7pC4X/0/X4/i-tN7pC4X-X4.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 1,
    name: "Brown",
    href: "#",
    price: "$12",
    imageSrc:
      "https://photos.smugmug.com/photos/i-7nNV4Kz/0/X5/i-7nNV4Kz-X5.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "White",
    href: "#",
    price: "$35",
    imageSrc:
      "https://photos.smugmug.com/photos/i-zMJKrgx/0/X4/i-zMJKrgx-X4.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Tiramisy",
    href: "#",
    price: "$89",
    imageSrc:
      "https://photos.smugmug.com/photos/i-Fc9DhsD/0/X4/i-Fc9DhsD-X4.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Dark Chokolande with orange",
    href: "#",
    price: "$35",
    imageSrc:
      "https://photos.smugmug.com/photos/i-zjRMd58/0/X4/i-zjRMd58-X4.jpg",
    imageAlt:
      "https://photos.smugmug.com/photos/i-zjRMd58/0/X4/i-zjRMd58-X4.jpg",
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
