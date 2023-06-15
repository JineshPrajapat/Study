import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Product = ({ title, image, specs, features, price, dimensions, id, requirements }) => {
    const navigate = useNavigate();
    return (
        <article>
            <div className='product-title'>
                <Link to={`products/${id}`}>{title}</Link>
            </div>

            <figure>
                <div className='product-image-container'>
                    <Link to={`products/${id}`}>
                        <img src={`./assets/${image}`} alt={title} />
                    </Link>
                </div>
            </figure>

            <aside>
                <div className='course-requirement'>
                    <h3>Requirements</h3>
                    <ul>
                        {requirements?.map((f, i) => {
                            return <li key={`requirements${i}`}>{f}</li>
                        })}
                    </ul>
                </div>
            </aside>

            <aside className='product-finance'>
                <div className='product-finance-price'>
                    &pound;{price}
                </div>
                <div className='product-action'>
                    <button onClick={() => navigate(`products/${id}`)}>View Course</button>
                    <button>Add to Cart</button>
                </div>
            </aside>
        </article>
    )
}

export default Product;