import axios from "axios";

export const GetCountry = (page) => async (dispatch) => {
 //const data=[];
  try {
   // dispatch({
     // type: "POKEMON_LIST_LOADING",
   // });
    // const perPage = 15;
    // const offset = page * perPage - perPage;
    // // page 1 = offset 0
    // // page 2 = offset 15
    const res = await axios.get(
    // 'https://restcountries.eu/rest/v2/all'
  // `https://restcountries.com/v3.1/all`
   `https://pokeapi.co/api/v2/pokemon`
   
 // `https://jsonplaceholder.typicode.com/posts`
    )
   
    
    dispatch({
      type: "Country_LIST_SUCCESS",
    payload: res.data.results  // for pokemon
    //payload: res.data // for jsonplaceholders
   // console.log(res.data)
    });
  } catch (e) {
    console.log(e.message, "error");
    dispatch({
      type: "Country_LIST_FAIL",
    });
  }
};
