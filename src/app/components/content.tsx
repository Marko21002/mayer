export default function Content() {
  return (
    <div className="mt-32 overflow-hidden sm:mt-40">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Caffe Mayer in the Heart of Bratislava
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Welcome to Caffe Mayer, your oasis of indulgence nestled in the
              vibrant heart of Bratislava. At Caffe Mayer, we take pride in
              offering a delightful experience that combines the rich flavors of
              exceptional desserts, aromatic coffee, and the finest kosher
              wines.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              <span className="font-semibold">
                Handcrafted Chocolate Magic:
              </span>
              Immerse yourself in the world of chocolate alchemy with our
              signature chocolate creations. At Caffe Mayer, we take pride in
              producing our own exclusive chocolate mark, blending quality
              ingredients and craftsmanship to bring you an unparalleled
              chocolate indulgence.
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src="https://photos.smugmug.com/photos/i-X5sNSn8/0/X5/i-X5sNSn8-X5.jpg"
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  src="https://photos.smugmug.com/photos/i-WkFwvVs/1/X4/i-WkFwvVs-X4.jpg"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  src="https://photos.smugmug.com/photos/i-SRwHzqH/1/X4/i-SRwHzqH-X4.jpg"
                  alt=""
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src="https://photos.smugmug.com/photos/i-RjV5tDj/1/X4/i-RjV5tDj-X4.jpg"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
