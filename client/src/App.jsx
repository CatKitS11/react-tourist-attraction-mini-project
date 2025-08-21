import "./App.css";
import SearchBar from "./components/SearchBar.jsx";
import PlaceCards from "./components/PlaceCards.jsx";

function App() {
  return (
    <div className="App">
      {/* Start coding here */}
      <div className=" flex flex-col justify-center items-center">
        <h1 className="text-4xl  text-sky-500 mt-10 font-medium">
          เที่ยวไหนดี
        </h1>
      </div>
        <SearchBar />
        <PlaceCards />
    </div>
  );
}

export default App;
