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
      "https://photos.smugmug.com/photos/i-26xTqRw/1/X4/i-26xTqRw-X4.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Soy Cherry",
    href: "#",
    price: "$35",
    imageSrc:
      "https://photos.smugmug.com/photos/i-Jx4Gs7g/1/X5/i-Jx4Gs7g-X5.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 2,
    name: "Soy Cherry",
    href: "#",
    price: "$35",
    imageSrc:
      "https://photos.smugmug.com/photos/i-zdvp5Tr/1/X4/i-zdvp5Tr-X4.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
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
