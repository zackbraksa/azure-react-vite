import React, { useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState("");

  const getData = async () => {
    try {
      const response = await axios.get("api/hello", {
        // your payload here
      });
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error);
      console.error("There was an error!", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>Data: {data}</div>
      <div>Error: {error}</div>
    </>
  );
}

export default App;
