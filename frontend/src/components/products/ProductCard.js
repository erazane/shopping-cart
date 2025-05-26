// function ProductCard({ product, onAddToCart }) {
//   const getImageSrc = (product) => {
//     const imageUrl = product.image || product.imageUrl;
//     if (!imageUrl) return `${process.env.PUBLIC_URL}/images/default-product.jpg`;
//     if (imageUrl.startsWith('http')) return imageUrl;
//     const cleanPath = imageUrl.replace(/^(\.\/)?images\//, '');
//     return `${process.env.PUBLIC_URL}/images/${cleanPath}`;
//   };

//   return (
//     <div className="product-card">
//       <img
//         src={getImageSrc(product)}
//         alt={product.name}
//         onError={(e) => {
//           e.target.src = `${process.env.PUBLIC_URL}/images/cake1.jpg`;
//           e.target.onerror = null;
//         }}
//       />
//       <h3>{product.name}</h3>
//       <p>${product.price.toFixed(2)}</p>
//       <button onClick={onAddToCart}>Add to Cart</button>
//     </div>
//   );
// }

// export default ProductCard;


function ProductCard({ product, onAddToCart }) {
  const getImageSrc = (product) => {
    const imageUrl = product.image;
    if (!imageUrl) return `${process.env.PUBLIC_URL}/images/default-product.jpg`;
    return `${process.env.PUBLIC_URL}/images/${imageUrl}`;
  };

  return (
    <div className="product-card">
      <img
        src={getImageSrc(product)}
        alt={product.name}
        onError={(e) => {
          e.target.src = `${process.env.PUBLIC_URL}/images/default-product.jpg`;
          e.target.onerror = null;
        }}
      />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
