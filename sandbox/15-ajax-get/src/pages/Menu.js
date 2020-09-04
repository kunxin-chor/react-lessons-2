import React from "react"
import axios from "axios"

import {Welcome} from "../components/Welcome"


export default class Menu extends React.Component
{
    state = {
        menu:[]
    }
    constructor(props) {
        super(props);
    }
    
    // lifecycle:
    componentDidMount() {
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
        .then((response)=>{
            this.setState({
                menu:response.data.meals
            })
        })
    }
    
    render() {
     
        // functional programming way
        const listItems = this.state.menu.map( function(eachMenuItem) {
           return <li key={eachMenuItem.idMeal}>{eachMenuItem.strMeal}</li>
        })
    
    return (
        <div>
            <Welcome/>
            <h2>Our Menu:</h2>
            <ul>
            {listItems}
            </ul>
        </div>
        )
    }
   
}