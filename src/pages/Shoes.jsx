
const importedImages = import.meta.glob("../assets/images/shoes/*.jpg", { eager: true });

const shoeDetails = {
    "1.jpg": { name: "Arctic White Trainers", price: "Rs 4,500" },
    "2.jpg": { name: "Midnight Stealth Runners", price: "Rs 5,200" },
    "3.jpg": { name: "Desert Suede Boots", price: "Rs 7,800" },
    "4.jpg": { name: "Classic Street Lows", price: "Rs 3,900" },
    "5.jpg": { name: "Infinity Sports Knit", price: "Rs 6,100" },
    "6.jpg": { name: "Leather Heritage Brogues", price: "Rs 8,500" },
    "7.jpg": { name: "Neon Flux Basketball", price: "Rs 9,200" },
    "8.jpg": { name: "Urban Explorer Highs", price: "Rs 5,500" },
};

const imageCollection = Object.entries(importedImages).map(([path, module], index) => {
    const fileName = path.split('/').pop(); 
    const details = shoeDetails[fileName] || { name: "Premium Footwear", price: "Rs 4,999" };

    return {
        id: index,
        src: module.default,
        name: details.name,
        price: details.price
    };
});

function Shoes() {
    return (
        <>
          <div 
                className="shirt-container"  
                style={{ 
                    backgroundImage: 'url(https://i1-c.pinimg.com/1200x/f0/17/00/f01700d2f3839a396f10771cd6a7d830.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh'
                }}
>                <h1 className="title" style={{ 
                    color: "black"
                }}>
                    LuxeMotion 
                </h1>
                <p className="discrip"  id="product-description">Crafted for men with a taste for understated luxury, blending minimal design with bold accents.</p>
            </div>

            <div className="product-grid">
                {imageCollection.map((item) => (
                    <div key={item.id} className="product-card">
                        <div className="image-wrapper">
                            <img src={item.src} alt={item.name} />
                        </div>
                        <div className="product-info">
                            <h3>{item.name}</h3>
                            <p className="price">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Shoes;