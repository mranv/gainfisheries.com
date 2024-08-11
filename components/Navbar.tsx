// components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-ocean-blue shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-white font-bold text-xl">
            Gain Fisheries
          </Link>
          <div className="space-x-4">
            <Link
              href="/"
              className="text-white hover:text-sand transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-sand transition-colors"
            >
              About
            </Link>
            <Link
              href="/fish-species"
              className="text-white hover:text-sand transition-colors"
            >
              Fish Species
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
