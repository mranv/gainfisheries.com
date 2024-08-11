# Update the fish species page to use a relative import
cat > app/fish-species/page.tsx << EOL
import FishSpecies from '../../components/FishSpecies'

export default function FishSpeciesPage() {
  return (
    <div>
      <h1>Fish Species</h1>
      <FishSpecies />
    </div>
  )
}
EOL

# Create or update tsconfig.json to include path aliases
cat > tsconfig.json << EOL
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOL

# Update next.config.js to enable TypeScript path aliases
echo "/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': __dirname,
    };
    return config;
  },
}

module.exports = nextConfig" > next.config.js

# Commit changes
git add .
git commit -m "Fix module import and set up path aliases"

# Rebuild the project
npm run build
