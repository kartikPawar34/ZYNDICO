const importedImages = import.meta.glob("../assets/images/sneaker/*.jpg", { eager: true });

const sneakDetails = {
    "1.jpg": { name: "Phantom Low-Top", price: "Rs 5,500" },
    "2.jpg": { name: "Retro Court White", price: "Rs 4,800" },
};

const imageCollection = Object.entries(importedImages).map(([path, module], index) => {
    const fileName = path.split('/').pop();
    const details = sneakDetails[fileName] || { name: "Limited Edition", price: "Rs 6,500" };
    return { id: index, src: module.default, ...details };
});

function Sneaker() {
    return (
        <>
            <div className="shirt-container">
                <h1 className="title">Velour Kicks</h1>
            </div>
            <p className="description"  id="product-description">Designed for men who move seamlessly from boardroom to street, combining comfort with modern style.</p>
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
export default Sneaker;