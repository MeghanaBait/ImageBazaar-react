import {SearchBar} from "./Components/SearchBar";
import {Pagination} from "./Components/Pagination";
import {ImageList} from "./Components/ImageList";
import {Navbar} from "./Components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

//apiStatus: init | pending | error | success
const URL = "https://api.unsplash.com/search/photos";
const ACCESSKEY = "W4XPcDYHIzD_4QZFECow-QijeseLpHic7eCL_gIMRLE";
const ImageBazaarApp = () =>{
    const [pageNumber, setPageNumber] = useState(1);
    const [query, setQuery] = useState('nature');
    const [data, setData] = useState(null);
    const [apiStatus, setApiStatus] = useState("init");

    const updateQuery = (newQuery) =>{
        setQuery(newQuery);
        setPageNumber(1);
    }

    useEffect(() => {
        setApiStatus("pending");
        (async function(){
            try{
                const response = await axios({
                    url:`${URL}`,
                    params:{
                        page:pageNumber,
                        query:query,
                        client_id:ACCESSKEY
                    },
                    method:"GET"
                });
                setData(response.data);
                setApiStatus("success");
            }
            catch(error){
                alert("Something went wrong");
                setApiStatus("error");
            }
        })();
    },[pageNumber, query]);

    return (
        <div className="container">
            <Navbar />
            <SearchBar updateQuery={updateQuery} apiStatus={apiStatus} />
            <ImageList list={data?.results} />
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} apiStatus={apiStatus}/>
        </div>
    )
}

export default ImageBazaarApp;