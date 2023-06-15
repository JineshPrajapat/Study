import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from './fetcher';
import './ProductDetails.css';

const ProductDetail = () => {
    const [product, setProducts] = React.useState({ errorMessage: '', data: {} });
    const { productId } = useParams();

    React.useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getProductById(productId);
            setProducts(responseObject);
        }
        fetchData();
    }, [productId]);
    return (

        <article className='course-detail'>
            <div className='course-title'>
                {product.data.title}
            </div>

            <div className='video-info'>
                <figure>
                    <div className='product-image-conatiner'>
                        <img src={`/assets/${product.data.image}`} alt={product.data.title} />
                        {/* <video src={`./videos/${product.data.video}`} type="video/mp4" controls> */}
                            {/* <source src={`./videos/${product.data.video}`} type="video/mp4" /> */}
                        {/* </video> */}
                    </div>
                </figure>

                <aside>
                    <div className='course-info'>
                        <div className='course-info-courinfo'>
                            <h1>{product.data.courinfo?.heading}</h1>
                            <h4>{product.data.courinfo?.headline}</h4>
                            <h5>{product.data.courinfo?.student}</h5>
                            <h5>Created by <span style={{ color: 'red', textDecoration:'underline' }}>{product.data.courinfo?.createby }</span></h5>
                        </div>
                        <div className='course-info-element'>
                            <h5>{product.data.element?.created_date}</h5>
                            <h5>{product.data.element?.language}</h5>
                            <h5>{product.data.element?.caption}</h5>
                        </div>
                    </div>
                </aside>
            </div>


            <div className='course-description-finance'>
                <div className='course-description'>
                    <h3>What You Will Learn</h3>
                    <ul>
                        {product.data.learning?.map((f, i) => {
                            return <li key={`learning${i}`}>{f}</li>
                        })}
                    </ul>
                </div>

                <div className='course-finance'>
                    <div className='course-finance-price'>
                        &pound;{product.data.price}
                    </div>
                    <div className='product-action'>
                        <button>Subscription</button>
                        <button>Add to Cart</button>
                        <button>Buy now </button>
                    </div>
                </div>
            </div>
            <div className='course-requirement'>
                    <h3>Requirements</h3>
                    <ul>
                        {product.data.requirements?.map((f, i) => {
                            return <li key={`requirements${i}`}>{f}</li>
                        })}
                    </ul>
                </div>

        </article>
    )
}

export default ProductDetail;