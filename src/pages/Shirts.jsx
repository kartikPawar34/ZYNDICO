import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const importedImages = import.meta.glob("../assets/images/shirt/*.jpg", { eager: true });

const productDetails = {
    "1.jpg": { name: "Vintage Oversized Tee", price: 1200, category: "Casual" },
    "2.jpg": { name: "Classic White Linen", price: 2500, category: "Casual" },
    "3.jpg": { name: "Midnight Black Formal", price: 3200, category: "Formal" },
    "4.jpg": { name: "Streetwear Graphic", price: 1800, category: "Casual" },
    "5.jpg": { name: "Pastel Oxford", price: 2100, category: "Formal" },
    "6.jpg": { name: "Denim Rugged", price: 4500, category: "Casual" },
    "7.jpg": { name: "Cuban Collar", price: 1900, category: "Casual" },
    "8.jpg": { name: "Premium Silk", price: 5000, category: "Highend" },
};

const imageCollection = Object.entries(importedImages).map(([path, module]) => {
    const fileName = path.split("/").pop(); // This gives "1.jpg", "2.jpg", etc.
    const rawId = fileName.split(".")[0];   // This extracts just "1", "2", etc.
    const details = productDetails[fileName] || { name: "New Arrival", price: 0, category: "Casual" };

    return {
        id: rawId, // Matches your ProductDetails dictionary keys perfectly
        src: module.default,
        name: details.name,
        price: details.price,
        category: details.category
    };
});

function Shirt() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = selectedCategory === "All" 
        ? imageCollection 
        : imageCollection.filter(item => item.category === selectedCategory);

    return (
        <>
            <div 
                className="shirt-container"  
                style={{ 
                    backgroundImage: 'url(https://i.pinimg.com/736x/c6/87/9b/c6879bea30a9ebae2a96a733c423b2ae.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh'
                }}
            >                
                <h1 className="title" style={{ color: "#040404" }}>Metro Ease</h1>
                <p className="discrip">
                    Engineered for the modern man. Experience breathable, all-day comfort that moves with you. 
                    From boardroom to boulevard, experience shirts that breathe, flex, and elevate your presence.
                </p>
            </div>

            <div className="filter-container" style={{ textAlign: 'center', margin: '20px 0' }}>
                {["All", "Casual", "Formal", "Highend"].map((category) => (
                    <button 
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        style={{
                            margin: '0 10px',
                            padding: '10px 20px',
                            backgroundColor: selectedCategory === category ? '#040404' : '#fff',
                            color: selectedCategory === category ? '#fff' : '#040404',
                            border: '1px solid #040404',
                            cursor: 'pointer',
                            borderRadius: '4px'
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="product-grid">
                {filteredProducts.map((item) => (
                    <div 
                        key={item.id} 
                        className="product-card" 
                        onClick={() => navigate(`/ProductPage/${item.id}`)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="image-wrapper">
                            <img src={item.src} alt={item.name} />
                        </div>
                        <div className="product-info">
                            <h3>{item.name}</h3>
                            <p className="price">Rs {item.price.toLocaleString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Shirt;