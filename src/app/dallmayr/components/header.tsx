export default function Header() {
  return (
    <div className="bg-stone-950 text-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="flex justify-center">
        <img
          className="w-48"
          src="https://upload.wikimedia.org/wikipedia/de/thumb/a/ac/Dallmayr-Logo.svg/1280px-Dallmayr-Logo.svg.png"
          alt=""
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-7 text-white"></p>
        <h2 className="mt-2 font-boeck text-4xl font-bold tracking-tight text-white sm:text-6xl pb-8">
          We are retailers of Dallmayr coffee
        </h2>
        <a
          href="/"
          className="text-black font-serif bg-stone-50 hover:bg-stone-300 px-4 rounded-lg font-semibold py-4"
        >
          Back to homepage
        </a>
      </div>
    </div>
  );
}
