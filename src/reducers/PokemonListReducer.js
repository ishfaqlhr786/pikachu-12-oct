const initialState = {
  //  loading: false,
   data:null,
  //  errorMsg: "",
 //   count: 0,
  };
  
  const PokemonListReducer = (state = initialState, action) => {
    switch (action.type) {
      case "Country_LIST_SUCCESS":
        
        return {
            ...state,
           // loading: false,
            data: action.payload
           // errorMsg: "",
           // count: action.payload.count,
          };
  
      case "Country_LIST_FAIL":
        return {
          ...state,
         // loading: false,
         // errorMsg: "country not found",
        };
  
      
       
      default:
        return state;
    }
  };
  
  export default PokemonListReducer;
  