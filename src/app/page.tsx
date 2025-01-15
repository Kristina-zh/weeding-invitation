import Image from "next/image";
import Link from 'next/link';

import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />

      {/* <section id="home-page" className="flex flex-col justify-center items-center py-16">
        <div className="relative">
          <Image src="http://s3.amazonaws.com/cdn-rileygrey-dev/108480/37412269-3c01-4e83-b92f-e5b4d358f7db.png" alt="Cover" width={800} height={450} className="object-cover" />
          <p className="absolute text-4xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">August 16, 2024</p>
          <h1 className="text-5xl text-center text-white mt-4">Riley &amp; Grey</h1>
        </div>
      </section>

      <section id="about-page" className="py-16">
        <h2 className="text-4xl text-right">Welcome</h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto text-left">
          If we had it our way, all of us would be crammed on a gondola, sipping Hot Toddys up to the snowy slopes...
        </p>
      </section>

      <section id="couple-page" className="py-16">
        <h2 className="text-4xl text-right">The Couple</h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto text-left">
          One fateful summer a few years ago, two kids traveled to the Sasquatch! Music Festival in Washington as strangers...
        </p>
      </section>

      <section id="weddingparty-page" className="py-16">
        <h2 className="text-4xl text-right">Wedding Party</h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto text-left">
          Meet our incredible wedding party!
        </p>
      </section>

      <section id="schedule-page" className="py-16">
        <h2 className="text-4xl text-right">Schedule</h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto text-left">
          Join us for a weekend full of celebration!
        </p>
      </section>

      <section id="registry-page" className="py-16">
        <h2 className="text-4xl text-right">Registry</h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto text-left">
          We are beyond grateful to be celebrating our wedding with you. Your attendance is as good a gift as any, but for those who would like, we have thoughtfully put together our registry with items to help us start this next chapter in our lives.
        </p>
      </section>

      <section id="location-page" className="py-16">
        <h2 className="text-4xl text-right">Telluride, CO</h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto text-left">Get Busy</p>
        <div className="text-center">
          <Link href="#locationModal">
            <a className="text-blue-600 hover:underline" id="modal-link">View Places</a>
          </Link>
        </div>
      </section>

      <section id="travel-page" className="py-16">
        <h2 className="text-4xl text-right">Travel</h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto text-left">
          Wish you could teleport to the mountains? Us, too. Here are the next best options.
        </p>
        <div className="mt-4">
          <h3 className="font-semibold">Fly</h3>
          <Link href="http://www.kayak.com" target="_blank">
            <a className="text-blue-600 hover:underline">Find Flights</a>
          </Link>
        </div>
        <div className="mt-2">
          <h3 className="font-semibold">Drive</h3>
          <Link href="http://maps.google.com" target="_blank">
            <a className="text-blue-600 hover:underline">Find Directions</a>
          </Link>
        </div>
        <div className="mt-2">
          <h3 className="font-semibold">Train</h3>
          <Link href="http://www.amtrak.com" target="_blank">
            <a className="text-blue-600 hover:underline">Find Trains</a>
          </Link>
        </div>
      </section>

      <section id="accommodations-page" className="py-16">
        <h2 className="text-4xl text-right">Accommodations</h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto text-left">
          Roughin’ it. Sorta.
        </p>
        <div className="mt-4 space-y-8">
          {[
            { name: 'Dunton River Camp', price: '$150 per night', address: '50014 Road 38, Dolores, Colorado' },
            { name: 'Major Ross', price: '$150 per night', address: '52068 Road 38, Dolores, Colorado' },
            { name: "Christy's Tent", price: '$150 per night', address: '52068 Road 38, Dolores, Colorado' }
          ].map(accommodation => (
            <div key={accommodation.name} className="border p-4">
              <h3 className="text-xl font-semibold">{accommodation.name}</h3>
              <p className="text-gray-700">{accommodation.price}</p>
              <p className="text-gray-700">{accommodation.address}</p>
              <Link href="#">
                <a className="text-blue-600 hover:underline">More Info</a>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="rsvp-page" className="py-16">
        <h2 className="text-4xl text-right">RSVP</h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto text-left">
          We'd love to know if you can make it!
        </p>
        <div className="mt-4">
          <input type="text" placeholder="Your Name" className="border rounded p-2 w-full" />
          <button className="mt-4 bg-blue-600 text-white rounded py-2 px-4">Submit</button>
        </div>
      </section> */}

    </div>
  );
}
