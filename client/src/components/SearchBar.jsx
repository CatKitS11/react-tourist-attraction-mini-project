const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex flex-col justify-start m-5 p-5">
      <h1 className="text-xl font-normal justify-start text-left mb-2">
        ค้นหาที่เที่ยว
      </h1>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="หาที่เที่ยวแล้วไปกัน ..."
        className=" bg-white rounded-full text-center border-1 border-gray-300  h-10 w-4/5"
      />
    </div>
  );
};

export default SearchBar;
