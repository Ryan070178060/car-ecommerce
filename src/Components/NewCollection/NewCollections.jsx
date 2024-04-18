import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './NewCollections.css';

const NewCollections = () => {
  const [newCollection, setNewCollection] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://car-backend-1.onrender.com/newcollection')
      .then((response) => response.json())
      .then((data) => {
        setNewCollection(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='new_collections'>
      <h1>New Collections</h1>
      <hr />
      {loading ? (
        <div className="loading">
          <div className="spinner"></div> {/* Adding the spinner */}
          <p>Loading...</p>
        </div>
      ) : (
        <div className="collections">
          {newCollection.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewCollections;