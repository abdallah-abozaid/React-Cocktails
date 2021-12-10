import React, { useContext } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import MyContext from "../context";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const ctx = useContext(MyContext);
  const param = useParams();
  const detalis = ctx.cockails.find((item) => item.idDrink === param.id);
  const ingrediants = [
    detalis.strIngredient1,
    detalis.strIngredient2,
    detalis.strIngredient3,
    detalis.strIngredient4,
    detalis.strIngredient5,
  ];
  console.log(detalis);
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
      <h2 className="section-title">{detalis.strDrink}</h2>
      <div className="drink">
        <img src={detalis.strDrinkThumb} alt="" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name : </span>
            {detalis.strDrink}
          </p>
          <p>
            <span className="drink-data">category : </span>
            {detalis.strCategory}
          </p>
          <p>
            <span className="drink-data">info : </span>
            {detalis.strInstructionsDE}
          </p>
          <p>
            <span className="drink-data">glass : </span>
            {detalis.strGlass}
          </p>
          <p>
            <span className="drink-data">instructions : </span>
            {detalis.strInstructions}
          </p>
          <p>
            <span className="drink-data">ingrediants : </span>
            {ingrediants.map((item, index) => {
              return item ? <span key={index}>{item} -</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
