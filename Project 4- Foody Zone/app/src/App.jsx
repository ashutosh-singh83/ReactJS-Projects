import CardContainer from "./Components/CardContainer";
import Navbar from "./Components/Navbar";
export const BASE_URL = "http://localhost:9000";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const [filteredData, setfilteredData] = useState(null);
  const [selected_btn, setselected_btn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setloading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setfilteredData(json);
        setloading(false);
      } catch (error) {
        seterror("unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchVal = e.target.value;
    if (searchVal === "") {
      setfilteredData(null);
    }

    // food->backend data
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchVal.toLowerCase())
    );
    setfilteredData(filter);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setfilteredData(data);
      setselected_btn("all");
      return;
    }

    // food->backend data
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setfilteredData(filter);
    setselected_btn("type");
  };
  console.log(data);
  if (error) return <div>{error}</div>;
  if (loading) return <div>loading.....</div>;

  return (
    <div>
      <Navbar
        searchFood={searchFood}
        filterFood={filterFood}
        selected_btn={selected_btn}
      />
      <CardContainer data={filteredData} />
    </div>
  );
};

export default App;
