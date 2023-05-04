import "./App.css";


import {  useEffect, useState } from "react";


import AddEmployee from "./components/AddEmployee";
import DataTable from "./components/DataTable";

function App() {
  const [userData, setUSerData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api")
      .then((res) => res.json())
      .then((data) => {
        setUSerData(data.data);
      })
      ;
  }, [userData]);

  return (
    <div className="App">
      <div>
        <AddEmployee />
      </div>
      <div>
        <DataTable fetchData={userData} />
      </div>
    </div>
  );
}

export default App;
