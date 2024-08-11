const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Gain Fisheries</h3>
            <p>Pioneering sustainable aquaculture for a better tomorrow</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-sand transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-sand transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/fish-species"
                  className="hover:text-sand transition-colors"
                >
                  Fish Species
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: info@gainfisheries.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Gain Fisheries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
