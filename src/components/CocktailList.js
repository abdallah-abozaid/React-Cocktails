import React, { useContext } from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import MyContext from "../context";
const CocktailList = () => {
  const ctx = useContext(MyContext);

  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      {ctx.loading && <Loading />}
      {ctx.cockails.length === 0 && (
        <h2 className="section-title">
          NO cockails match your Search caiteria
        </h2>
      )}
      <div className="cocktails-center">
        {ctx.cockails.length > 0 &&
          ctx.cockails.map((item) => (
            <Cocktail
              key={item.idDrink}
              id={item.idDrink}
              drink={item.strDrink}
              thum={item.strDrinkThumb}
              alocohol={item.strAlcoholic}
              Glass={item.strGlass}
            />
          ))}
      </div>
    </section>
  );
};

export default CocktailList;
