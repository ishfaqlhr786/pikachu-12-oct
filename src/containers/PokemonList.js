/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCountry } from "../actions/pokemonActions";
import { useEffect } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const PokemonList = (props) => {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);
  console.log(pokemonList, "list from selector");

  useEffect(() => {
    FetchData(1);
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetCountry(page));
  };
  const Showdata = () => {
    console.log(pokemonList.data)
    
    if (!_.isEmpty(pokemonList.data)) {
      
      return pokemonList.data.map((el) => {
        return (
          <div className={"list-wrapper"}>
            
            <div className={"pokemom-item"}>
              <p>{el.name}</p>
              
            </div>
          </div>
        );
      });
    }
    if (pokemonList.loading) {
      return <p>Loading...</p>;
    }
    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>;
    }
    return <p>unable to get data</p>;
  };

  return (
    <div>
      <div className={"search-wrapper"}>
        <p>Search:</p>
       
      </div>
      {Showdata()}

      {!_.isEmpty(pokemonList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonList.count / 15)}
          pageRangeDisplayed={2}
          marginPageDisplayed={1}
          onPageChange={(data) => FetchData(data.selected + 1)}
          containerClassName={"paginaton"}
        />
      )}
    
    </div>
  );
};
export default PokemonList;
