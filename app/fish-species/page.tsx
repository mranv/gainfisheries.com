// app/fish-species/page.tsx
import FishSpecies from "../../components/FishSpecies";

export default function FishSpeciesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-ocean-blue text-center">
        Our Fish Species
      </h1>
      <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
        Discover the diverse range of fish species we cultivate using
        sustainable aquaculture practices.
      </p>
      <FishSpecies />
    </div>
  );
}
