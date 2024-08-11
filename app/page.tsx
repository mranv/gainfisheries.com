// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-ocean-blue mb-4">
          Welcome to Gain Fisheries
        </h1>
        <p className="text-xl text-gray-600">
          Pioneering sustainable aquaculture for a better tomorrow
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-sea-green mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700">
            At Gain Fisheries, we're committed to revolutionizing fish farming
            through innovative techniques and sustainable practices. Our goal is
            to provide high-quality, responsibly sourced fish while preserving
            our aquatic ecosystems.
          </p>
          <Link
            href="/about"
            className="inline-block mt-4 px-6 py-2 bg-ocean-blue text-white rounded-lg hover:bg-blue-700 transition-colors"
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

      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-sea-green mb-6">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Sustainable Fish Farming",
            "Aquaculture Consulting",
            "Fish Health Management",
          ].map((service, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-ocean-blue mb-2">
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
    </div>
  );
}
