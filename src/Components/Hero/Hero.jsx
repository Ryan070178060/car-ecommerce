import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate and Link
import "./Hero.css";

const Hero = () => {
  const phoneNumber = '+254701978060';
  const navigate = useNavigate(); // Use useNavigate hook

  const [allProducts, setAllProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedItem, setSearchedItem] = useState({});
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []); // Fetch products only once on component mount

  const fetchProducts = () => {
    fetch('https://car-backend-1.onrender.com/allproducts')
      .then(response => response.json())
      .then(data => {
        setAllProducts(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterProducts(query);
  };

  const filterProducts = (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }
    const filtered = allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filtered.slice(0, 5)); // Show only first 5 suggestions
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchedProduct = allProducts.find(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (searchedProduct) {
      setSearchedItem(searchedProduct);
      // Navigate to the searched item
      navigate(`/product/${searchedProduct.id}`);
    }
  };

  const openWhatsAppContact = () => {
    window.location.href = `https://wa.me/${phoneNumber}`;
  };

  return (
    <div className="container">
      <div className="welcome-hero-txt">
        <h2>get your desired car in reasonable price</h2>
        <p>
          Get the coolest cars and services at an exclusive price, customs also available.
        </p>
        <button className="welcome-btn" onClick={openWhatsAppContact}>contact us</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search for products..."
        />
        <button type="submit">Search</button>
        {suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map((product, index) => (
              <li key={index}>
                <Link to={`/product/${product.id}`}>
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </form>
      {searchedItem.id && ( // Render searched item if it exists
        <div className="searched-item">
          <Link to={`/product/${searchedItem.id}`}>
            <p>{searchedItem.name}</p>
          </Link>
        </div>
      )}
      
    </div>
  );
}

export default Hero;
