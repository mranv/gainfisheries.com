// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div className="space-y-16 py-12">
      <section className="text-center">
        <h1 className="text-5xl font-bold text-ocean-blue mb-4">
          Welcome to Gain Fisheries
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Pioneering sustainable aquaculture for a better tomorrow
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center bg-gray-50 p-8 rounded-xl shadow-lg">
        <div>
          <h2 className="text-3xl font-semibold text-sea-green mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 mb-6">
            At Gain Fisheries, we&apos;re committed to revolutionizing fish
            farming through innovative techniques and sustainable practices. Our
            goal is to provide high-quality, responsibly sourced fish while
            preserving our aquatic ecosystems.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-ocean-blue text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out"
          >
            Learn More
          </Link>
        </div>
        <div className="relative h-64 md:h-auto">
          <Image
            src="/api/placeholder/800/600"
            alt="Fish farm"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-sea-green mb-8 text-center">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Sustainable Fish Farming",
            "Aquaculture Consulting",
            "Fish Health Management",
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold text-ocean-blue mb-3">
                {service}
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-sea-green mb-8 text-center">
          Contact Us
        </h2>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
