export default function Header() {
  return (
    <div className="bg-stone-950 text-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="flex justify-center">
        <img src="../haffner.png" alt="" />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-7 text-white"></p>
        <h2 className="mt-2 text-4xl  font-boeck font-bold tracking-tight text-white sm:text-6xl pb-8">
          Sme predajcovia vína HAFFNER!
        </h2>
        <a
          href="/sk"
          className="text-black bg-white px-4 rounded-lg font-semibold py-4 font-serif"
        >
          Späť na domovskú stránku
        </a>
      </div>
    </div>
  );
}
