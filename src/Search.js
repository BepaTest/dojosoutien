import React, {Component} from 'react';

const Search = ({handleChange})=>(
      <input type='text' placeholder='findyourpokemon' onChange={(event)=>handleChange(event.target.value)}/>
      );
 
export default Search;