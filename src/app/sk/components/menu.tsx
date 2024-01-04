const products = [
  {
    id: 1,
    name: "Maccaron",

    price: "3€",
    imageSrc: "./macroons.jpeg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Gaštanové hniezdo",

    price: "5.90€",
    imageSrc:
      "https://photos.smugmug.com/photos/i-5wVZZnk/1/X4/i-5wVZZnk-X4.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Tiramisu",

    price: "5.90€",
    imageSrc: "./tiramisu.jpeg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Chocolate cake",

    price: "5.90€",
    imageSrc: "./choko.jpeg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Brownie cheesecake",

    price: "5.10€",
    imageSrc:
      "https://photos.smugmug.com/photos/i-WzpKwQK/0/X4/i-WzpKwQK-X4.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 6,
    name: "Chocolate",

    price: "4.80€",
    imageSrc:
      "https://photos.smugmug.com/photos/i-WTfHTSx/0/X4/i-WTfHTSx-X4.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 7,
    name: "Red velvet",
    price: "5.90€",
    imageSrc:
      "https://photos.smugmug.com/photos/i-gTfgFTq/1/X4/i-gTfgFTq-X4.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 8,
    name: "Pistachio cake with raspberry",

    price: "5.90€",
    imageSrc: "./fistachka.jpeg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...

  // More products...
];

export default function Menu() {
  return (
    <div className="bg-stone-100">
      <div>
        <h2 className="text-4xl font-semibold p-20 text-stone-900 font-boeck ">
          Naše dezerty
        </h2>
        <h2></h2>

        <div className="px-8 grid pb-14 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} className="group">
              <div className="aspect-h-1  aspect-w-1 w-full overflow-hidden rounded-lg bg-slate-200 xl:aspect-h-8 xl:aspect-w-7">
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
