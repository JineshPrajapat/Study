// import React from 'react';
// import { useParams, useSearchParams } from 'react-router-dom';
// import { getProduct } from './fetcher';
// import Product from './Product';
// import products from './ProductDetails';

// const Category = ({ id, title, oncategoryClick }) => {
//     const [products, setproducts] = React.useState({ errorMessage: '', data: {} });
//     // const [products, setproducts] = React.useState({errorMessage: '', data: []});
//     const { categoryId } = useParams();

//     React.useEffect(() => {
//         const fetchData = async () => {
//             const responseObject = await getProduct(categoryId);
//             setproducts(responseObject);
//         }
//         fetchData();
//     }, [categoryId]);

//     // const renderproduct = () => {
//     //     return products.data.map(p =>
//     //         <Product key={p.id} {...p}>{p.title}</Product>
//     //     )
//     // }
//     return (
//         // <div>
//         //     {products.errorMessage && <div>Error:{products.errorMessage}</div>}
//         //     {products.data && renderproduct()}
//         // </div>
//     )
// };

// export default Category;


import React from 'react';

const Category =({id,title,oncategoryClick})=>{
    return(
        <div key={id} onClick={() => oncategoryClick(id)}>{title}</div>
    )
}

export default Category;