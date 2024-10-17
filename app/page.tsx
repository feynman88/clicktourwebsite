


const people  = [
  {
    name: "Egypt",
    role: "Connect with a land rich in history, culture, and natural beauty. Come discover Egypt with us—where every journey is a story waiting to be told",
    imageUrl:
      "https://images.unsplash.com/photo-1587975844610-40f1ad10d07e?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "UAE",
    role: "Explore the vibrant cityscape of Dubai, home to soaring skyscrapers and luxury shopping, or find tranquility in the vast deserts and serene beaches.",
    imageUrl:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Oman",
    role: "Journey through Oman’s diverse terrain, from the majestic mountains and golden deserts to the turquoise waters of the Arabian Sea. ",
    imageUrl:
      "https://images.unsplash.com/photo-1621680696874-edd80ce57b72?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tanzania",
    role: "Experience the majestic spectacle of the Great Migration in the Serengeti, or marvel at the stunning beauty of the Ngorongoro Crater.",
    imageUrl:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1768&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


export default function Home() {
  return (

    <div>

      {/* hero section */}

    <div className="">
      <div className="relative isolate overflow-hidden pt-14">
        <video autoPlay loop muted playsInline className="absolute inset-0 -z-10 h-full w-full object-cover">
          <source src="/videos/bm.mp4" type="video/mp4" />
        </video>
    
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
         

          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-6xl">
              Where Every Journey is a New Story Waiting to be Told
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Welcome to Click Tour, where your adventure begins. Whether you’re discovering the ancient treasures of
              Egypt, the futuristic landscapes of the UAE, or the wild beauty of Tanzania, we create seamless,
              personalized travel experiences.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* <a
                href="/contactus"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                contact us
              </a> */}
              <a
                href="/about"
                className="rounded-md border px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                About Click Tour
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>

{/* Destinations section */}

  <div className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Destinations</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Embark on a journey of discovery with our handpicked destinations. From ancient wonders to modern marvels,
            we offer unforgettable experiences tailored to your wanderlust. Let us guide you to the worlds most
            captivating places.
          </p>
          <br />
          <a href="/destinations" className="mt-6 text-lg leading-8 text-gray-600 flex items-center">
            View All Destinations
            {/* <ArrowUpRightIcon className="mt-1 ml-2 h-5 w-5 flex-none text-black-800" aria-hidden="true" /> */}
          </a>
        </div>

        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>

{/* services section */}
<div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover object-top"
              src="https://images.unsplash.com/photo-1675371627059-cfbf29585a4f?q=80&w=3096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>

        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-indigo-600"> Tailored Travel Experiences</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h1>

            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                Discover a world of possibilities with our diverse range of travel services. Whether you are seeking
                relaxation, adventure, or cultural immersion, we have the perfect journey for you.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <img src="/icons/PaperAirplaneIcon.svg" className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Beach Escapes & Leisure</strong> Unwind on pristine
                    beaches and indulge in luxurious resorts. Our leisure packages offer the perfect blend of relaxation
                    and indulgence for those seeking a tranquil getaway.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <img src="/icons/GlobeAltIcon.svg" className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Cultural & Historical Tours</strong> For the
                    thrill-seekers and explorers, our adventure packages push boundaries and create unforgettable
                    experiences. From trekking remote landscapes to diving in crystal-clear waters, adventure awaits.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <img src="/icons/GlobeAltIcon.svg" className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Tailor-Made Itineraries</strong> Your dream
                    vacation, crafted just for you. Our bespoke travel planning service ensures every aspect of your
                    journey is personalized to your preferences and desires.
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <img src="/icons/UserGroupIcon.svg" className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Group Travel & Corporate Retreats</strong>{" "}
                    Strengthen bonds and create lasting memories with our group and corporate travel options. We handle
                    all the details, allowing you to focus on what matters most – the shared experience.
                  </span>
                </li>
              </ul>

              <a href="/services" className="mt-6 text-lg leading-8 text-gray-600 flex items-center">
                View all of our services
                <img src="/icons/ArrowUpRightIcon.svg" className="mt-1 ml-2 h-5 w-5 flex-none text-black-800" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


{/* environment */}
 <div className="relative isolate overflow-hidden bg-white ">
      <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <video autoPlay loop muted playsInline className="absolute inset-0 -z-10 h-full w-full object-cover">
          <source src="/videos/suswhite.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-green-600 to-yellow-200 bg-clip-text text-transparent sm:text-4xl">
            Our Commitment to Sustainability
            <br />
            Travel Responsibly, Leave a Positive Impact
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            At Click Tour, we integrate sustainable practices into every excursion, ensuring your travel benefits both
            the environment and local communities.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/sustainability"
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            >
              Learn More about Sustainability
            </a>
          </div>
        </div>
      </div>
    </div>

</div>



  );
}
