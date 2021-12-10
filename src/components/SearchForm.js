import React, { useEffect, useContext, useRef, useCallback } from "react";
import MyContext from "../context";
const SearchForm = () => {
  const ctx = useContext(MyContext);
  const ref = useRef("");
  useEffect(() => {
    ref.current.focus();
  }, []);
  const changeHandler = useCallback(() => {
    ctx.setsearchTearm(ref.current.value);
  });

  return (
    <div className="section search">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-control">
          <label htmlFor="name"> search your Favorate cocktials</label>
          <input type="text" ref={ref} id="name" onChange={changeHandler} />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
