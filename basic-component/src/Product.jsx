
//  function Product({ name, price, image }) {
//   return (
//     <div style={{ border: "1px solid black", padding: "10px", width: "220px" }}>
//       <img
//         src={image}
//         alt={name}
//         width="150"
//         height="150"
//       />
//       <h3>{name}</h3>
//       <p>Price: ₹{price}</p>
//     </div>
//   );
// }

// export default Product;


function Product({ name, price, image }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px", width: "220px" }}>
      <img
        src={image}
        alt={name}
        width="150"
        height="150"
      />
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
    </div>
  );
}

export default Product;

