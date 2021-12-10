import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const MyContext = React.createContext();

export const MyProvider = (props) => {
  const [loading, setloading] = useState(false);
  const [searchTearm, setsearchTearm] = useState("a");
  const [cockails, setcockails] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      setloading(true);
      const res = await fetch(`${url}${searchTearm}`);
      const data = await res.json();
      if (data.drinks) {
        setcockails(data.drinks);
      } else {
        setcockails([]);
      }
      setloading(false);
    };
    fetching();
  }, [searchTearm]);

  const contextContent = {
    loading,
    searchTearm,
    cockails,
    setsearchTearm,
  };
  return (
    <MyContext.Provider value={contextContent}>
      {props.children}
    </MyContext.Provider>
  );
};
export default MyContext;
