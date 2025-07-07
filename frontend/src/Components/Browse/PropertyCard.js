export default function PropertyCard({ property, onClick }) {
  return (
    <div
      className="relative group cursor-pointer bg-white border border-slate-200 rounded-xl overflow-hidden shadow hover:shadow-md transition"
      onClick={onClick}
    >
      <img
        src={property.images[0]}
        alt={property.title}
        className="w-full h-40 object-cover"
      />

      <div className="p-3">
        <h2 className="font-semibold text-[#1F2937]">{property.title}</h2>
        <p className="text-sm text-gray-500">{property.city}</p>
      </div>

      <div className="absolute inset-0 bg-white/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 flex flex-col justify-center space-y-1">
        <h2 className="text-lg font-semibold text-sky-600">
          {property.property_type}
        </h2>
        <h2 className="text-lg font-semibold text-gray-800">
          {property.title}
        </h2>
        <p className="text-sm text-gray-500">{property.city}</p>

        <p className="text-sm text-gray-700 font-medium">
          {property.area}
          <span className="text-xs text-gray-500 ml-1">sq ft</span>
        </p>

        <p className="text-md font-bold text-emerald-600 mt-2">
          ₹{property.price}/month
        </p>
      </div>
    </div>
  );
}
