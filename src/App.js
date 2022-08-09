import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import CreateWord from "./component/CreateWord";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateDay from "./component/CreateDay";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/create_word" element={<CreateWord />} />
          <Route path="create_day" element={<CreateDay />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
