import { Input } from "components/Input";
import { useEffect, useState } from "react";
import queryString from "query-string";

export const Filters = ({ onSearch }) => {
  // When the user click the Search button to search for the filter queries. onSearch handler function will be called.
  // Hook Up Local State For Property Key Search Query Filtered Using useState hook
  const [petFriendly, setPetFriendly] = useState(false);
  const [hasParking, setHasParking] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const handleSearch = () => {
    //Call out the onSearch handler function
    onSearch({ petFriendly, hasParking, minPrice, maxPrice });
  };

  useEffect(() => {
    // Set the initial query string for the filters
    const {
      petFriendly: petFriendlyInitial,
      hasParking: hasParkingInitial,
      minPrice: minPriceInitial,
      maxPrice: maxPriceInitial,
    } = queryString.parse(window.location.search);

    setPetFriendly(petFriendlyInitial === true);
    setHasParking(hasParkingInitial === true);
    setMinPrice(minPriceInitial || "");
    setMaxPrice(maxPriceInitial || "");
  }, []);
  return (
    <div className="max-w-5xl mx-auto my-5 flex gap-5 border-solid border-slate-400 border-2 p-5 rounded-md">
      <div className="flex-1">
        <div>
          <label className="cursor-pointer">
            <input
              type="checkbox"
              checked={hasParking}
              onChange={() => setHasParking((value) => !value)}
            />
            <span className="pl-2">has parking</span>
          </label>
        </div>
        <div>
          <label className="cursor-pointer">
            <input
              type="checkbox"
              checked={petFriendly}
              onChange={() => setPetFriendly((value) => !value)}
            />
            <span className="pl-2">pet friendly</span>
          </label>
        </div>
      </div>
      <div className="flex-1">
        <span>Min price</span>
        <Input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>
      <div className="flex-1">
        <span>Max price</span>
        <Input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div>
        <div className="btn" onClick={handleSearch}>
          Search
        </div>
      </div>
    </div>
  );
};
