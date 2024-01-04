export default function Footer() {
  return (
    <div>
      <div>
        <footer className="pt-16 px-8 bg-stone-100 pb-14">
          <div className="mx-auto max-w-screen-xl border-t pt-8 sm:pt-16">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0 mr-16">
                <div className="text-5xl mb-16 font-black tracking-tighter font-boeck">
                  Mayer-Caffe
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-8 xl:justify-items-center sm:gap-6 xl:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase  font-serif">
                    Working hours:
                  </h2>
                  <ul className="text-gray-600">
                    <li className="mb-4">
                      <div>Monday: 08:00–20:00</div>
                    </li>
                    <li className="mb-4">
                      <div>Tuesday: 08:00–20:00</div>
                    </li>
                    <li className="mb-4">
                      <div>Wednesday: 08:00–20:00</div>
                    </li>
                    <li className="mb-4">
                      <div>Thursday: 08:00–20:00</div>
                    </li>
                    <li className="mb-4">
                      <div>Friday: 08:00–20:00</div>
                    </li>
                    <li className="mb-4">
                      <div>Saturday: 09:00–20:00</div>
                    </li>
                    <li className="mb-4">
                      <div>Sunday: 09:00–20:00</div>
                    </li>
                    <li className="mb-4">
                      <div className="text-xl font-semibold">
                        In holidays working hours could be diffrent!
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase font-serif">
                    CONTACTS
                  </h2>
                  <ul className="text-gray-600">
                    <li className="mb-4">
                      <a
                        href="tel:+421911522757"
                        className="flex items-center gap-2 hover:underline"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                          ></path>
                        </svg>
                        +421 911 522 757
                      </a>
                    </li>
                    {/* <li className="mb-4">
                      <a
                        href="mailto:info@best-walnuts.com"
                        className="flex items-center gap-2 hover:underline"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                          ></path>
                        </svg>
                        info@best-walnuts.com
                      </a>
                    </li> */}
                    <li className="mb-4">
                      <a
                        href="https://maps.app.goo.gl/miF6VPD3Piug4Gt87"
                        target="_blank"
                        className="flex items-center gap-2 hover:underline"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          ></path>
                        </svg>
                        Hlavné námestie 355/4, 811 01 Staré Mesto
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 " />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-lg text-gray-500 sm:text-center font-boeck">
                Mayer Cafe
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
