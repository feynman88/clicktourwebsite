// const stats = [
//   { label: "Transactions every 24 hours", value: "44 million" },
//   { label: "Assets under holding", value: "$119 trillion" },
//   { label: "New users annually", value: "46,000" },
// ];

import Image from "next/image";
const values = [
  {
    name: "Customer-Centricity",
    description:
      "Our clients are at the heart of everything we do. We exceed expectations through personalized service and attention to detail.",
  },
  {
    name: "Innovation",
    description: "Embracing cutting-edge technology to enhance the customer experience and streamline operations.",
  },
  {
    name: "Integrity",
    description: "Upholding transparency, honesty, and ethical practices in all business dealings.",
  },
  {
    name: "Excellence",
    description:
      "Striving for excellence in every aspect of our operations, delivering top-quality services and creating exceptional experiences for our clients.",
  },
];
export const metadata = {
  title: "About Click Tour",
  description:
    "Discover Click Tour, your gateway to unforgettable travel experiences in Egypt, UAE, Oman, and Tanzania, where we prioritize customer-centricity, innovation, and sustainability.",
  keywords: "travel, Egypt, UAE, Oman, Tanzania, tourism, vacations, cultural tours, sustainable travel",
};

export default function About() {
  return (
    <div className="bg-white">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#809cff] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-24 sm:pt-48 lg:px-8 lg:pt-24">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Click Tour</h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Welcome to Click Tour, where your adventure begins across multiple breathtaking destinations! Though
                    we are a new player in the travel industry, our passion for crafting unforgettable journeys is
                    unmatched. Our team of dedicated travel professionals is committed to offering personalized travel
                    experiences that showcase the rich history, vibrant culture, and stunning natural beauty of Egypt,
                    the UAE, Oman, and Tanzania.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1568322445389-dc9223328f88?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        width={2187}
                        height={3280}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        width={2187}
                        height={3280}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1547531455-c20b677ded4b?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        width={2187}
                        height={3280}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/flagged/photo-1550489518-40f49ba4bf20?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        width={2187}
                        height={3280}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1587975844577-56dfe5d3fca8?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Travel image"
                        width={2187}
                        height={3280}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div>
              <img src="/images/mission.png" alt="" className="w-20 h-20 mb-5 " />
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission</h2>
              <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                  <p className="text-xl leading-8 text-gray-600">
                    Is to craft transformative journeys that go beyond sightseeing, allowing travelers to connect deeply
                    with the rich histories, vibrant cultures, and stunning natural beauty of our destinations, all
                    while ensuring a positive impact on the environment and local communities.
                  </p>
                  <div className="mt-10 max-w-xl text-base leading-7 text-gray-700"></div>
                </div>
              </div>
            </div>

            <img src="/images/vision.png" alt="" className="w-20 h-20 mb-5 " />

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Vision</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-600">
                  To be a leading Destination Management Company recognized globally for our commitment to eco-friendly
                  tourism, innovation, and delivering personalized, seamless travel experiences that connect our clients
                  with the heart and soul of the destinations we serve.
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700"></div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center"></div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <Image
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
            width={2187}
            height={3280}
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <img src="/images/customer.png" alt="" className="w-20 h-20 mb-5 " />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our values</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We place Customer-Centricity at the forefront, ensuring that every decision is made with our clients best
              interests in mind. Our dedication to Innovation pushes us to adopt the latest technologies, enhancing the
              overall customer experience and optimizing our operations.
            </p>
          </div>

          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.name}
                className="border border-gray-200 p-8 rounded shadow-md  hover:bg-slate-100 hover:shadow-lg transition-shadow"
              >
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
    </div>
  );
}
