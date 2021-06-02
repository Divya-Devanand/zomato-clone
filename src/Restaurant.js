import React from 'react'
import Product from "./Product"
import "./Restaurant.css"

function Restaurant() {



    return (
        <div>
            <div className="restaurant" >
                    <div className="restaurant-row">
                        
                        <Product
                            type= {['cafe','continental','Fast food']}
                            name= "Trippy Goat"
                            rating= {4.2}
                            area="Cunningham Road"
                            img="https://b.zmtcdn.com/data/collections/5d13e5bef6e5a44cfb7ea19fb915a9ba_1616407816.jpg"
                            id="1"
                        />
                        <Product
                            type= {['cafe','Desserts','Fast food']}
                            name= "Patisserie & Cafe"
                            rating= {3.9}
                            area="St Marks Road"
                            img="https://b.zmtcdn.com/data/collections/bc0c37f8fc87da896641714b9ef7f0b7_1575621158.jpg"
                            id="2"
                        />
                        <Product 
                            type= {['Microbrewery','Casual Dining','Continental']}
                            name= "Ironhill Bengaluru"
                            rating= {4.0}
                            area="Marathalli"
                            img="https://b.zmtcdn.com/data/collections/df4ccbf9f6b6db21b07d12a18577b5af_1582106658.jpg"
                            id="3"
                        />
                        <Product 
                            type= {['casual Dining','kerala','North Indian']}
                            name= "Gustum"
                            rating= {4.3}
                            area="HSR"
                            img="https://b.zmtcdn.com/data/collections/81dc179878a8d9e8b2ab03e4eaeab0df_1459434256.jpg"
                            id="4"
                        />
                        </div>
                        <div className="restaurant-row" >
                        <Product 
                            type= {['Bar','Casual Dining - Asian','Japanese']}
                            name= "Ikigai"
                            rating= {3.9}
                            area="M G Road"
                            img="https://b.zmtcdn.com/data/pictures/chains/1/18680821/384677c9d4dce3784cb569ea0b5c0efe.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                            // img="https://b.zmtcdn.com/data/pictures/chains/1/18680821/384677c9d4dce3784cb569ea0b5c0efe.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                            id="5"
                        />
                        <Product 
                            type= {['Casual Dining- Chinese','North Indian']}
                            name= "Ultimate Cuisine"
                            rating= {4.1}
                            area="New BEL Road"
                            img="https://b.zmtcdn.com/data/collections/3fa6a1d163fa81af3b4fb3e33a7bb540_1535355867.jpg"
                            id="6"
                        />
                        <Product 
                            type= {['Casual Dining- Italian']}
                            name= "Morsel Treats"
                            rating= {3.5}
                            area="Indiranagar"
                            img="https://b.zmtcdn.com/data/res_imagery/52004_RESTAURANT_OBP4.jpg?fit=around%7C450%3A450&crop=450%3A450%3B0%2C0"
                            id="7"
                        />
                        <Product 
                            type= {['cafe','Coffee','Desserts']}
                            name= "ARAKU Coffee"
                            rating= {4.3}
                            area="Indiranagar"
                            img="https://b.zmtcdn.com/data/pictures/chains/3/18893343/58033440e6a7c53d38fddf965eb99c13_featured_v2.jpg"
                            id="8"
                        />
                    </div>
                </div>
            </div>
            
    )
}

export default Restaurant
