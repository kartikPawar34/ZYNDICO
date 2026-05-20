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
          <div 
                className="shirt-container"  
                style={{ 
                    backgroundImage: 'url(https://i.pinimg.com/736x/a8/b2/91/a8b2913dfd6a02e10089690081864178.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100vh'
                }}
>                <h1 className="title">
                    Velour Kicks
                </h1>
                <p className="discrip">Designed for men who move seamlessly from boardroom to street, combining comfort with modern style.</p>
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
export default Sneaker;