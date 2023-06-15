import React, { useState } from 'react';
import './App.css';
import Category from './components/Category';
import { getCategories,getProduct } from './components/fetcher';
import Product from './components/Product';
function App() {

  const [categories, setcategories] = useState({errorMessage: '', data: []});
  const [products, setproducts] = useState({errorMessage: '', data: []});
  
// fetching data from json server
  React.useEffect(()=>{
    const fetchData= async () =>{
      const responseObject= await getCategories();
      setcategories(responseObject);
    }
    fetchData();
  })

  const categoryClick = id => {
    const fetchData= async () =>{
      const responseObject= await getProduct(id);
      setproducts(responseObject);
    }
    fetchData();
  }

  const renderCategories = () => {
    return categories.data.map(c =>
      <Category key={c.id} id={c.id} title={c.title} oncategoryClick={() => categoryClick(c.id)}></Category>);
  }


  const renderproduct = () => {
    return products.data.map(p =>
     <Product key={p.id} {...p}>{p.title}</Product>
      )
  }


  return (
    <>
      <header>E-Learning</header>

      <section>
        <nav>
          { categories.errorMessage && <div>Error:{categories.errorMessage}</div>}
          {
            categories.data && renderCategories()
          }
        </nav>
        <main>
          <h1>Courses</h1>
          { categories.errorMessage && <div>Error:{categories.errorMessage}</div>}
          { products.data && renderproduct() }
          
        </main>
      </section>
      <footer>
        footer
      </footer>
    </>
  );
}

export default App;
