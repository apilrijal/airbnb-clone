import React, {useState} from 'react'
import "./Banner.css"
import {Button} from "@material-ui/core";
import Search from './Search'
import {useHistory} from "react-router-dom";

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="banner">
            <div className="banner_search">
                {showSearch && <Search/>}
                <Button onClick={() => setShowSearch(!showSearch)}
                className="banner_searchButton" variant="outlined">{showSearch ? "Hide": "Search dates"} </Button>
            </div>
            <div className="banner_info">
                <h1>get out and stretch your imagination</h1>
                <h5>
                    Plan a trip and 
                    find out the hidden gem near you
                </h5>
                <Button variant="outlined" onClick={()=>
                   history.push("/search")
                } >Find a Hotel</Button>
            </div>
        </div>
    )
}

export default Banner
