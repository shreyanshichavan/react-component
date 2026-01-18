// import Hello from './Hello';

// function App() {
//   return (
//     <div>
//       <Hello />
//     </div>
//   );
// }

// export default App;


// import Header from './Header';
// import Footer from './Footer';

// function App() {
//   return (
//     <div>
//       <Header />
//       <Footer />
//     </div>
//   );
// }

// export default App;



// import Greeting from './Greeting';
// import UserCard from './UserCard';

// function App() {
//   return (
//     <div>
//       <Greeting name="Shreyanshi" />

//       <UserCard username="Amit" age={22} />
//       <UserCard username="Riya" age={20} />
//       <UserCard username="Rahul" age={25} />
//     </div>
//   );
// }

// export default App;



// import Greeting from './Greeting';
// import UserCard from './UserCard';

// function App() {
//   return (
//     <div>
//       <Greeting name="Shreyanshi" />

//       <UserCard username="Amit" age={22}>
//         <p>This is extra content</p>
//       </UserCard>

//       <UserCard username="Riya" age={20}>
//         <button>View Profile</button>
//       </UserCard>

//       <UserCard username="Rahul" age={25}>
//         <p>Student</p>
//       </UserCard>
//     </div>
//   );
// }

// export default App;


// import Status from './Status';
// import Message from './Message';

// function App() {
//   return (
//     <div>
//       <Status isOnline={true} />
//       <Status isOnline={false} />

//       <Message text="Hello React!" />
//       <Message />
//     </div>
//   );
// }

// export default App;


// import NameItem from './NameItem';

// function App() {
//   const names = ["Amit", "Riya", "Rahul", "Shreyanshi"];

//   return (
//     <div>
//       <h2>Names List</h2>
//       <ul>
//         {names.map((name, index) => (
//           <NameItem key={index} name={name} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


// import NameItem from './NameItem';
// import Product from './Product';

// function App() {

//   // NAMES ARRAY
//   const names = ["Amit", "Riya", "Rahul", "Shreyanshi"];

//   // PRODUCTS ARRAY
//   const products = [
//     { id: 1, name: "Laptop", price: 50000 },
//     { id: 2, name: "Mobile", price: 20000 },
//     { id: 3, name: "Headphones", price: 3000 }
//   ];

//   return (
//     <div>
//       <h2>Names List</h2>
//       <ul>
//         {names.map((n, index) => (
//           <NameItem key={index} name={n} />
//         ))}
//       </ul>

//       <h2>Products List</h2>
//       {products.map((p) => (
//         <Product key={p.id} name={p.name} price={p.price} />
//       ))}
//     </div>
//   );
// }

// export default App;


// import Product from './Product';

// function App() {

//   const products = [
//     {
//       id: 1,
//       name: "Headphones",
//       price: 3000,
//       image: "https://images.unsplash.com/photo-1518449077959-2d1f0f4b36f1"
//     }
//   ];

//   return (
//     <div>
//       <h2>Product List</h2>

//       {products.map((item) => (
//         <Product
//           key={item.id}
//           name={item.name}
//           price={item.price}
//           image={item.image}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;


// import Product from './Product';


// import headphoneImg from './assets/headphone.jpg';
// import laptopImg from './assets/laptop.jpg';
// import mobileImg from './assets/mobile.jpg';

// function App() {

//   const products = [
//     {
//       id: 1,
//       name: "Headphones",
//       price: 3000,
//       image: headphoneImg
//     },
//     {
//       id: 2,
//       name: "laptop",
//       price: 55000,
//       image: laptopImg
//     },
//     {
//       id: 3,
//       name: "mobile",
//       price: 20000,
//       image: mobileImg
//     }
//   ];

//   return (
//     <div>
//       <h2>Product List</h2>

//       {products.map((item) => (
//         <Product
//           key={item.id}
//           name={item.name}
//           price={item.price}
//           image={item.image}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;


// import Quiz from "./component/Quiz.jsx";


// function App() {
//   return (
//     <div>
//       <Quiz />
//     </div>
//   );
// }

// export default App;

import Quiz from "./component/Quiz";

function App() {
  return <Quiz />;
}

export default App;





