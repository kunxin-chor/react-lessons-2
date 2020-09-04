import React from "react"

import {Welcome} from "../components/Welcome"


export default function Menu(props)
{
    // imagine that we got this from an API
    let menuItems = [
        {
            id: 1,
            name:"Mystery Meat Pasta",
            price:12.00,
            image_url:`https://pbs.twimg.com/profile_images/961293232041676801/gjt3Uy-C_400x400.jpg`
        },
        {
            id: 2,
            name:"Generic Chicken Soup",
            price:7.50,
            image_url:`https://www.jocooks.com/wp-content/uploads/2018/01/instant-pot-chicken-noodle-soup-1-3.jpg`
        },
        {
            id: 3,
            name:"Very Green Salad",
            price:4.50,
            image_url:`https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/1/23/1/ss1d27_mixed_green_salad.jpg.rend.hgtvcom.826.620.suffix/1386276604828.jpeg`
        }
    ]
    
    // most straightfoward way
    // let listItems = [];
    // for (let item of menuItems)
    // {
    //     listItems.push(<li key={item.id.toString()}>{item.name}</li>);
    // }
    
    // functional programming way
    const listItems = menuItems.map( function(eachMenuItem) { 
        return <li key={eachMenuItem.id.toString()}>{eachMenuItem.name}</li>
    } )
    
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