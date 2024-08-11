# Remove the pages directory
rm -rf pages

# Ensure the app directory exists
mkdir -p app

# Create the main layout file
cat > app/layout.tsx << EOL
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gain Fisheries',
  description: 'Modern fish farming techniques and information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
EOL

# Create the home page
cat > app/page.tsx << EOL
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Welcome to Gain Fisheries</h1>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/fish-species'>Fish Species</Link>
      </nav>
    </div>
  )
}
EOL

# Create the about page
mkdir app/about
cat > app/about/page.tsx << EOL
export default function About() {
  return (
    <div>
      <h1>About Gain Fisheries</h1>
      <p>We are dedicated to modern and sustainable fish farming practices.</p>
    </div>
  )
}
EOL

# Create the fish species page
mkdir app/fish-species
cat > app/fish-species/page.tsx << EOL
import FishSpecies from '@/components/FishSpecies'

export default function FishSpeciesPage() {
  return (
    <div>
      <h1>Fish Species</h1>
      <FishSpecies />
    </div>
  )
}
EOL

# Create a components directory and add the FishSpecies component
mkdir -p components
cat > components/FishSpecies.tsx << EOL
import React from 'react';

const fishSpecies = [
  { name: 'Tilapia', environment: 'Freshwater', growthRate: 'Fast' },
  { name: 'Salmon', environment: 'Saltwater', growthRate: 'Moderate' },
  { name: 'Catfish', environment: 'Freshwater', growthRate: 'Fast' },
  { name: 'Trout', environment: 'Freshwater', growthRate: 'Moderate' },
];

const FishSpecies = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Fish Species for Farming</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fishSpecies.map((fish, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{fish.name}</h3>
            <p>Environment: {fish.environment}</p>
            <p>Growth Rate: {fish.growthRate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FishSpecies;
EOL

# Update next.config.js
echo "/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig" > next.config.js

# Update package.json scripts
npm pkg set scripts.build="next build"
npm pkg set scripts.deploy="npm run build && touch out/.nojekyll && gh-pages -d out -t true"

# Commit changes
git add .
git commit -m "Update to App Router structure"

# Deploy to GitHub Pages
npm run deploy
