import React from 'react'
import './Searchpage.css'
import {Button} from "@material-ui/core"
import SearchResult from "./SearchResult"

function SearchPage() {
    return (
        <div className="searchPage">
           <div className="searchPage_info">
                <p> 62 stays . 26 August to 30 August. 2 guests</p>
                <h1>Stays nearby</h1>
                <Button
                variant="outlined">Cancellation Flexibility</Button>
                <Button
                variant="outlined">Type of Place</Button>
                <Button
                variant="outlined">Price</Button>
                <Button
                variant="outlined">Rooms and beds</Button>
                <Button
                variant="outlined">More Filters</Button>
           </div>
           <SearchResult
           img="https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183_1280.jpg"
           location="Private Room"
           title="Stay at the beautiful place of Pokhara"
           description="1 guest. 1 bedroom . WiFi . Kitchen. Free-Parking. Washing Machine"
           star={4.73}
           price="$69 / night"
           total="$117 total"
           />
           <SearchResult
           img="https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183_1280.jpg"
           location="Private Room"
           title="Stay at the beautiful place of Pokhara"
           description="1 guest. 1 bedroom . WiFi . Kitchen. Free-Parking. Washing Machine"
           star={4.73}
           price="$69 / night"
           total="$117 total"
           />
           <SearchResult
           img="https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839183_1280.jpg"
           location="Private Room"
           title="Stay at the beautiful place of Pokhara"
           description="1 guest. 1 bedroom . WiFi . Kitchen. Free-Parking. Washing Machine"
           star={4.73}
           price="$69 / night"
           total="$117 total"
           />
        </div>
    )
}

export default SearchPage
