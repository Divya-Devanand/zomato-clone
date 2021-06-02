import React, { useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import "./RestaurantPage.css";

function RestaurantPage() {

    let values= [{
        type: ['cafe','continental','Fast food'],
        name: "Trippy Goat",
        rating: 4.2,
        area:"Cunningham Road",
        img:"https://b.zmtcdn.com/data/collections/5d13e5bef6e5a44cfb7ea19fb915a9ba_1616407816.jpg",
        id:"1",  
        big_img: "https://b.zmtcdn.com/data/pictures/6/19708456/f3144207091a0e2260bd2cd4677ec059.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"       
    },
{
        type: ['cafe','Desserts','Fast food'],
        name: "Delistic-Chocolate, Patisserie & Cafe",
        rating: 3.9,
        area: "St Marks Road",
        img: "https://b.zmtcdn.com/data/collections/bc0c37f8fc87da896641714b9ef7f0b7_1575621158.jpg",
        id: "2",
        big_img: "https://b.zmtcdn.com/data/pictures/0/19729830/4b31947dd5726b80a3c07a5c7dfde054.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
},
{
        type: ['Microbrewery','Casual Dining','Continental'],
        name: "Ironhill Bengaluru",
        rating: 4.0,
        area:"Marathalli",
        img:"https://b.zmtcdn.com/data/collections/df4ccbf9f6b6db21b07d12a18577b5af_1582106658.jpg",
        id:"3",
        big_img: "https://b.zmtcdn.com/data/pictures/7/19672427/a6a82e272f77be9cfa554dccedc7b1b4.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
},
{
        type: ['casual Dining','kerala','North Indian'],
        name: "Gustum",
        rating: 4.3,
        area:"HSR",
        img:"https://b.zmtcdn.com/data/collections/81dc179878a8d9e8b2ab03e4eaeab0df_1459434256.jpg",
        id:"4",
        big_img: "https://b.zmtcdn.com/data/pictures/1/19689651/ee6127a4849baf58a9c4ff06a4aa83fe.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
},
{
    type: ['Bar','Casual Dining - Asian','Japanese'],
    name: "Ikigai",
    rating: 3.9,
    area: "M G Road",
    img: "https://b.zmtcdn.com/data/pictures/chains/1/18680821/384677c9d4dce3784cb569ea0b5c0efe.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*",
    // img="https://b.zmtcdn.com/data/pictures/chains/1/18680821/384677c9d4dce3784cb569ea0b5c0efe.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*"
    id: "5",
    big_img: "https://b.zmtcdn.com/data/pictures/0/19682400/4324912dda336fde8023215fc7e01eaa.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
},
{
    type: ['Casual Dining- Chinese','North Indian'],
    name: "Ultimate Cuisine",
    rating: 4.1,
    area: "New BEL Road",
    img: "https://b.zmtcdn.com/data/collections/3fa6a1d163fa81af3b4fb3e33a7bb540_1535355867.jpg",
    id: "6",
    big_img: "https://b.zmtcdn.com/data/pictures/chains/3/19707373/49c802e1bb8c189f778520f4a7e8e661_featured_v2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
},
{
    type: ['Casual Dining- Italian'],
    name: "Morsel Treats",
    rating: 3.5,
    area: "Indiranagar",
    img: "https://b.zmtcdn.com/data/res_imagery/52004_RESTAURANT_OBP4.jpg?fit=around%7C450%3A450&crop=450%3A450%3B0%2C0",
    id: "7",
    big_img: "https://b.zmtcdn.com/data/pictures/chains/7/19690927/6d308dc1c48b79bf5966dfb24986cffa.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
},
{
    type: ['cafe','Coffee','Desserts'],
    name: "ARAKU Coffee",
    rating: 4.3,
    area: "Indiranagar",
    img: "https://b.zmtcdn.com/data/pictures/chains/3/18893343/58033440e6a7c53d38fddf965eb99c13_featured_v2.jpg",
    id: "8",
    big_img: "https://b.zmtcdn.com/data/pictures/5/19693835/462c53453d1f5b26e2a027d4aa91bf9f.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"
}
]

    const { productId }= useParams();
    const [restaurant, setRestaurant] = useState(values);

    

        useEffect (() => {
            let Data= values.filter((restaurant) => productId === restaurant.id);
            console.log("Data:", Data);
            setRestaurant (Data);
        }, []);

        useEffect(() => {
            console.log("restaurant>>>",restaurant[0].name);
        }, [restaurant])

    return (
        <div>
            <div className="banner"
        style={{
            height: 448,
            backgroundSize: "cover",
            backgroundImage: `url(${restaurant[0].big_img})`,
            backgroundPosition: "center center",
        }}
        ></div>
        <div className="restaurant-title">
        <h1>{restaurant[0].name}</h1>
        <div className="restaurant-rating">
        <p>Rating: {restaurant[0].rating}</p>
        </div>
        </div>
            <h3 className="restaurant-type">
                {restaurant[0].type.map((option)=> (
                    <p>{option},</p>
                ))}
            </h3>
            <div className="restaurant-area">{restaurant[0].area}</div>
        </div>
    )
}

export default RestaurantPage
