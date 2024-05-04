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
    name: " Kurací vývar",
    href: "#",
    price: "5.5€",
    imageSrc: "./soup.jpeg",
    imageAlt: "yogurt with fruits",
  },
  {
    id: 2,
    name: "Hokkaido sup",
    href: "#",
    price: "7€",
    imageSrc: "./hokaiddo.jpeg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Avokádovo Lososový Tartar",
    href: "#",
    price: "14€",
    imageSrc:
      "https://photos.smugmug.com/photos/i-T2Kfxk5/1/X4/i-T2Kfxk5-X4.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Lososovy Steak",
    href: "#",
    price: "18€",
    imageSrc: "./ryba.jpeg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Šalát s krevetami a Mango",
    href: "#",
    price: "14€",
    imageSrc: "./salat.jpeg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 6,
    name: "Omeleta z šunkou a syrom",
    href: "#",
    price: "13€",
    imageSrc: "./omlet.jpeg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 7,
    name: "Pasta s morskými plodmi",
    href: "#",
    price: "19€",
    imageSrc: "./pasta.jpeg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 8,
    name: "Tuniakový tosť z avokado",
    href: "#",
    price: "12€",
    imageSrc: "./tost.jpeg",
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
          className="text-4xl font-semibold p-28 text-slate-900 font-boeck "
        >
          Hlavné jedlá
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
