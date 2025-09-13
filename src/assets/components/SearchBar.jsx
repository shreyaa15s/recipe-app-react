function SearchBar({ onSearch }) {
  return (
    <div className="flex justify-center my-6">
      <input
        type="text"
        placeholder="Search for recipes..."
        className="border rounded-l px-4 py-2 w-64 focus:outline-none"
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-r">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
