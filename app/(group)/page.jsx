
export default function Home() {
  return (
    <div className="pb-10">
      <h1 className="bg-gray-100 w-fit p-2 px-5 rounded-lg font-bold text-[#087e8b]">
        Homepage
      </h1>
      <hr className="bg-[#087e8b75] h-[1.5px] mt-2 mb-20" />
      <div className="flex gap-20 justify-center py-27">
        <a href="/book-categories">
          <div className="relative">
            <img
              alt="book cover"
              loading="lazy"
              width={314}
              height={398}
              decoding="async"
              src="img/6871eef27c349c487ef5d5b735bb3c41 (1).webp"
              className="rounded-3xl"
            />
            <div className="z-10 bg-white flex gap-2 absolute top-3 left-3 px-2.5 py-1 rounded-full items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="m4.405 15.526 4.53 4.53a4.78 4.78 0 0 0 6.75 0l4.39-4.39a4.78 4.78 0 0 0 0-6.75l-4.54-4.52a4.75 4.75 0 0 0-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.35.45 2.66 1.4 3.61Z"
                  stroke="#087E8B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M9.735 12.226a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                  stroke="#087E8B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
                <path
                  d="m13.235 17.226 4-4"
                  stroke="#087E8B"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <p className="text-deep-teal font-medium">Book</p>
            </div>
            <div className="absolute top-0 w-full h-full rounded-3xl flex items-center justify-center bg-black/0 hover:bg-black/35 opacity-0 hover:opacity-100 transition-opacity duration-300 text-center">
              <p className="text-4xl text-white w-44">
                View All Available Books
              </p>
            </div>
          </div>
        </a>
        <a href="/old-school-cartoons">
          <div className="relative">
            <img
              alt="cartoon cover"
              loading="lazy"
              width={314}
              height={398}
              decoding="async"
              src="img/486cbb07a669a7cc1c3fa6d41ca9a828.webp"
              className="rounded-3xl"
            />
            <div className="z-10 bg-white flex gap-2 absolute top-3 left-3 px-2.5 py-1 rounded-full items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="m4.405 15.526 4.53 4.53a4.78 4.78 0 0 0 6.75 0l4.39-4.39a4.78 4.78 0 0 0 0-6.75l-4.54-4.52a4.75 4.75 0 0 0-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.35.45 2.66 1.4 3.61Z"
                  stroke="#087E8B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M9.735 12.226a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                  stroke="#087E8B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
                <path
                  d="m13.235 17.226 4-4"
                  stroke="#087E8B"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <p className="text-deep-teal font-medium">Cartoon</p>
            </div>
            <div className="absolute top-0 w-full h-full rounded-3xl flex items-center justify-center bg-black/0 hover:bg-black/35 opacity-0 hover:opacity-100 transition-opacity duration-300 text-center">
              <p className="text-4xl text-white w-44">
                View All Available Cartoons
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
