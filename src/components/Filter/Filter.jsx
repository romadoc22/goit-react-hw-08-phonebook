import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "redux/contacts/filterSlice";
import css from './Filter.module.css'

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = filter => dispatch(setFilter(filter));

  const changeFilterValue = e => {
    handleFilterChange(e.currentTarget.value);
  };  

    return (
        <label className={css.label}>
          Find contacts by name
          <input className={css.input}
            type="text"
            onChange={changeFilterValue}
          />
        </label>
      )
};
  
  export default Filter;