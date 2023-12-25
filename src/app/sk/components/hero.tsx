export default function Hero() {
  return (
    <div className="relative bg-slate-100">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-12 xl:col-span-6">
          <div className="pb-16 flex">
            <ul className="flex space-x-4">
              <li>
                <a href="/sk">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/1280px-Flag_of_Slovakia.svg.png"
                    alt=""
                    className="w-10"
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
                    alt=""
                    className="w-12 pt-1"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-auto max-w-2xl lg:mx-0 ">
            <img className="h-40" src="./logo2.png" alt="Your Company" />

            <h1 className=" mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-8xl font-boeck">
              Kaviareň Mayer
            </h1>

            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#menu"
                className="rounded-md font-boeck bg-amber-800 px-8  py-2 text-lg hover:bg-amber-700 font-semibold text-white shadow-lg  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Ponuka
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
