const importedImages = import.meta.glob("../assets/images/hoodies/*.jpg", { eager: true });

const hoodieDetails = {
    "1.jpg": { name: "Oversized Heavy Fleece", price: "Rs 3,200" },
    "2.jpg": { name: "Streetwear Acid Wash", price: "Rs 3,500" },
    // ... add more
};

const imageCollection = Object.entries(importedImages).map(([path, module], index) => {
    const fileName = path.split('/').pop();
    const details = hoodieDetails[fileName] || { name: "Essential Hoodie", price: "Rs 2,999" };
    return { id: index, src: module.default, ...details };
});

function Hoodies() {
    return (
        <>
           <div 
                className="shirt-container"  
                style={{ 
                    backgroundImage: 'url(https://i1-c.pinimg.com/1200x/35/74/7e/35747ed4d30ed8fbbd0bd2da87bd6dcd.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh'
                }}
>
                <h1 className="title">Zyndico Hoodies</h1>
                <p className="discrip">
                    Crafted from a heavy-weight cotton blend, it offers that coveted boxy, oversized silhouette without feeling bulky.
            </p>
            </div>
            <div className="product-grid">
                {imageCollection.map((item) => (
                    <div key={item.id} className="product-card">
                        <div className="image-wrapper"><img src={item.src} alt={item.name} /></div>
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
export default Hoodies;