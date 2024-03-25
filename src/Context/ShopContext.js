import React, { createContext, useEffect, useState } from "react";

export const ShopContext=createContext(null);

const ShopContextProvider=(props) => {

    const [all_product,setAll_product] = useState([]);
    
    useEffect(() => {
        fetch('https://localhost:4000/allproducts')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log("Fetched data:", data);
                setAll_product(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);
    
    
    const contextValue = {all_product};



    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;