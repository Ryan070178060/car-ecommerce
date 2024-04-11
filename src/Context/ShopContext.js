import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('/allproducts')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            // Map over the data to extract image URLs
            const productsWithImageURLs = data.map(product => ({
                ...product,
                imageUrl: `https://autodealer.onrender.com/images/${product.image}` // Assuming image field contains the image filename
            }));
            setAllProducts(productsWithImageURLs);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
    
    const contextValue = { allProducts };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
