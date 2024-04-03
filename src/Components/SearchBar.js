import { useState } from "react";
import '../styles/search.scss'
export const SearchBar = ({updateQuery, apiStatus}) =>{
    const [value, setValue] = useState('');
    const disable = (apiStatus === "pending") || (apiStatus === "init")

    console.log(updateQuery);
    const search = () =>{
        updateQuery(value);
    }
    return(
    <header className="search-container">
         <input placeholder="Search Images ..." 
         value = {value} 
         onChange={(e) => setValue(e.target.value)}
         />
         <button onClick={search} disabled={disable}>Search</button>
    </header>
    );

    
}