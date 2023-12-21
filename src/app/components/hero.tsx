export default function Hero() {
  return (
    <div className="relative bg-slate-100">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <img className="h-11" src="./vercel.svg" alt="Your Company" />
            <div className="hidden sm:mt-32 sm:flex lg:mt-16"></div>
            <h1 className=" mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-8xl font-boeck">
              Cafe Mayer
            </h1>

            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#menu"
                className="rounded-md font-boeck bg-amber-800 px-8  py-2 text-lg hover:bg-amber-700 font-semibold text-white shadow-lg  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go to the menu
              </a>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="https://photos.smugmug.com/photos/i-V86n8kc/0/X5/i-V86n8kc-X5.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
