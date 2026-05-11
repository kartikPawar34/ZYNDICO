
const importedImages = import.meta.glob("../assets/images/suit/*.jpg", { eager: true });

const suitDetails = {
    "1.jpg": { name: "Italian Charcoal Suit", price: "Rs 15,000" },
    "2.jpg": { name: "Midnight Velvet Tuxedo", price: "Rs 18,500" },
    "3.jpg": { name: "Royal Blue 3-Piece", price: "Rs 22,000" },
    "4.jpg": { name: "Classic Black Peak Lapel", price: "Rs 14,000" },
    // ... add up to 8.jpg
};

const imageCollection = Object.entries(importedImages).map(([path, module], index) => {
    const fileName = path.split('/').pop();
    const details = suitDetails[fileName] || { name: "Bespoke Suit", price: "Rs 19,999" };
    return { id: index, src: module.default, ...details };
});

function Highend() {
    return (
        <>
            <div className="shirt-container">
                <h1 className="title">
                    Velour Vision
                </h1>
                <p className="discrip">Designed for evenings that demand luxury, where fabric and fit speak louder than words.</p>
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
export default Highend;