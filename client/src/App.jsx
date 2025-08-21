import "./App.css";
import SearchBar from "./components/SearchBar.jsx";
import PlaceCards from "./components/PlaceCards.jsx";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState(""); 

  const handleTagText = (text) => {
    //ค่อยDebug
    setSearch(text);
  }
  return (
    <div className="App">
      {/* Start coding here */}
      <div className=" flex flex-col justify-center items-center">
        <h1 className="text-4xl  text-sky-500 mt-10 font-medium">
          เที่ยวไหนดี
        </h1>
      </div>
        <SearchBar search={search} setSearch={setSearch} />
        <PlaceCards search={search} tagText={handleTagText} />
    </div>
  );
}

export default App;
