import { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import PropertyModal from './PropertyModal';
import ChatBox from '../Chatbox/chatbox';
import { API_BASE_URL } from '../../config';
export default function SearchProperties() {
  const [properties, setProperties] = useState([]);
  const [modalProperty, setModalProperty] = useState(null);
  const [chatProperty, setChatProperty] = useState(null);
  const [searchCity, setSearchCity] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [uniqueCities, setUniqueCities] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/property/all`);
        setProperties(res.data);
        const cities = [...new Set(res.data.map(p => p.city))];
        setUniqueCities(cities);
      } catch (error) {
        console.error('Failed to fetch properties', error);
      }
    };
    fetchProperties();
  }, []);

  const filteredProperties = selectedCity
    ? properties.filter(p => p.city.toLowerCase() === selectedCity.toLowerCase())
    : properties;

  const matchedCities = uniqueCities.filter(city =>
    city.toLowerCase().startsWith(searchCity.toLowerCase()) && searchCity
  );

  return (
    <div className="p-4 bg-[#F9FAFB] min-h-screen">
      <h1 className="text-2xl font-semibold text-[#1F2937] mb-6 text-center">Search Properties</h1>

      <div className="flex justify-center mb-8 relative z-20">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            placeholder="Enter city name..."
            className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          {matchedCities.length > 0 && (
            <ul className="absolute top-full left-0 w-full border border-slate-300 rounded shadow bg-white mt-1 max-h-60 overflow-y-auto">
              {matchedCities.map((city) => (
                <li
                  key={city}
                  onClick={() => {
                    setSelectedCity(city);
                    setSearchCity('');
                  }}
                  className="px-4 py-2 text-sm hover:bg-sky-100 cursor-pointer"
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>

        {selectedCity && (
          <button
            onClick={() => setSelectedCity('')}
            className="ml-3 px-4 py-2 text-sm text-white bg-rose-500 hover:bg-rose-600 rounded transition"
          >
            Clear Filter
          </button>
        )}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard
            key={property.id || property._id}
            property={property}
            onClick={() => setModalProperty(property)}
          />
        ))}

        {filteredProperties.length === 0 && (
          <div className="col-span-full text-center text-gray-500">
            No properties found for "{selectedCity || searchCity}"
          </div>
        )}
      </div>

      {modalProperty && (
        <PropertyModal
          property={modalProperty}
          onClose={() => setModalProperty(null)}
          openChat={(property) => {
            setChatProperty(property);
            setModalProperty(null);
          }}
        />
      )}

      {chatProperty && (
        <div className="fixed inset-0 z-[70] bg-black bg-opacity-40 flex items-center justify-center">
          <ChatBox
            senderId={localStorage.getItem("userId")}
            receiverId={chatProperty.user_id}
            propertyId={chatProperty.property_id}
            onClose={() => setChatProperty(null)}
          />
        </div>
      )}
    </div>
  );
}
