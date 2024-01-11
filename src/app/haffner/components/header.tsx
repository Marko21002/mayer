export default function Header() {
  return (
    <div className="bg-stone-950 text-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="flex justify-center">
        <img src="./haffner.png" alt="" />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <a
          href="/"
          className="text-black bg-white px-4
          font-semibold py-4 font-serif"
        >
          Back to homepage
        </a>
      </div>
    </div>
  );
}
