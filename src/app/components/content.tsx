export default function Content() {
  return (
    <div className="mt-32 overflow-hidden sm:mt-40">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-4xl font-bold font-boeck tracking-tight text-gray-900 sm:text-4xl">
              About Mayer Cafe in the Heart of Bratislava
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600 font-serif">
              Welcome to Mayer Cafe, your oasis of indulgence nestled in the
              vibrant heart of Bratislava. At Caffe Mayer, we take pride in
              offering a delightful experience that combines the rich flavors of
              exceptional desserts, aromatic coffee, and the finest kosher
              wines.
            </p>
            <p className="mt-6 font-serif leading-7 text-gray-600 text-lg">
              <span className="font-semibold font-boeck text-lg pr-3">
                Handcrafted Chocolate Magic:
              </span>
              Immerse yourself in the world of chocolate alchemy with our
              signature chocolate creations. At Caffe Mayer, we take pride in
              producing our own exclusive chocolate mark, blending quality
              ingredients and craftsmanship to bring you an unparalleled
              chocolate indulgence.
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-center gap-6 sm:gap-8 lg:contents">
            <div className="w-full sm:w-90 lg:ml-auto lg:w-auto lg:flex-none lg:self-center">
              <img
                src="./tort.jpeg"
                alt=""
                className="mx-auto aspect-[5/5] w-90 sm:w-[39rem] rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  src="https://photos.smugmug.com/photos/i-9WKLtg5/0/X4/i-9WKLtg5-X4.jpg"
                  alt=""
                  className="aspect-[3/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover hidden sm:block"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  src="https://photos.smugmug.com/photos/i-c3zHcsP/1/X4/i-c3zHcsP-X4.jpg"
                  alt=""
                  className="aspect-[5/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover hidden sm:block"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src="https://photos.smugmug.com/photos/i-npGB7KD/1/X4/i-npGB7KD-X4.jpg"
                  alt=""
                  className="aspect-[3/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover hidden sm:block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
