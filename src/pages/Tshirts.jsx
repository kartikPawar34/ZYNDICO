const importedImages = import.meta.glob("../assets/images/t-shirt/*.jpg", { eager: true });

const details = {
    "1.jpg": { name: "Boxy  Basic", price: "Rs 999" },
    "2.jpg": { name: "Graphic Shoulder", price: "Rs 1,299" },
};

const imageCollection = Object.entries(importedImages).map(([path, module], index) => {
    const fileName = path.split('/').pop();
    const info = details[fileName] || { name: "Premium Tee", price: "Rs 1,100" };
    return { id: index, src: module.default, ...info };
});

function Tshirt() {
    return (
        <>
          <div 
                className="shirt-container"  
                style={{ 
                    backgroundImage: 'url(https://i1-c.pinimg.com/736x/04/9d/c2/049dc2815f092ce563d3feef41e63aec.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh'
                }}
>                <h1 className="title" style={{ 
                    color: "goldenrod"
                }}
                >Nova Line </h1>
                <p className="discrip">Built for men who push limits, combining performance fabrics with casual versatility.</p>

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
export default Tshirt;