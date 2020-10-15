import React, {useState} from 'react'
import "./Search.css"
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {DateRangePicker} from "react-date-range";
import PeopleIcon from "@material-ui/icons/People"
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";

function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const history= useHistory();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };
    function handleSelect(range){
        setStartDate(range.selection.startDate);
        setEndDate(range.selection.endDate);
    }
    return (
        <div className="search">
            <DateRangePicker ranges={
                [selectionRange]} onChange={handleSelect}/>
            <h2>
                Number of guests
                <PeopleIcon/>
            </h2>
            <input min={0}
            defaultValue={2}
            type="number"/>
            <Button onClick={()=>history.push("/search")}> Search Airbnb </Button>
        </div>
    )
}

export default Search
