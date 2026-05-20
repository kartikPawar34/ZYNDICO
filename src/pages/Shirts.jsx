
const importedImages = import.meta.glob("../assets/images/shirt/*.jpg", { eager: true });

const productDetails = {
    "1.jpg": { name: "Vintage Oversized Tee", price: "Rs 1,200" },
    "2.jpg": { name: "Classic White Linen", price: "Rs 2,500" },
    "3.jpg": { name: "Midnight Black Formal", price: "Rs 3,200" },
    "4.jpg": { name: "Streetwear Graphic", price: "Rs 1,800" },
    "5.jpg": { name: "Pastel Oxford", price: "Rs 2,100" },
    "6.jpg": { name: "Denim Rugged", price: "Rs 4,500" },
    "7.jpg": { name: "Cuban Collar", price: "Rs 1,900" },
    "8.jpg": { name: "Premium Silk", price: "Rs 5,000" },
};

const imageCollection = Object.entries(importedImages).map(([path, module], index) => {
    const fileName = path.split('/').pop(); 
    const details = productDetails[fileName] || { name: "New Arrival", price: "Contact Us" };

    return {
        id: index,
        src: module.default,
        name: details.name,
        price: details.price
    };
});

function Shirt() {
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
>                <h1 className="title" style={{ 
                    color: "#040404"
                }}>
                    Metro Ease </h1>
                <p className="discrip">Engineered for the modern man. Experience breathable, all-day comfort that moves with you, designed with an uncompromising eye for style.</p>
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
export default Shirt;