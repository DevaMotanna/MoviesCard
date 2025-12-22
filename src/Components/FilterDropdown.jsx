const FilterDropdown = ({ setType }) => {
  return (
    <select onChange={(e) => setType(e.target.value)} className="border p-2">
      <option value="">All</option>
      <option value="movie">Movie</option>
      <option value="series">Series</option>
      <option value="episode">Episode</option>
    </select>
  );
};

export default FilterDropdown;