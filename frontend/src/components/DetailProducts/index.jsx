import React from 'react';
import Layout from '../Layout/index.jsx';

import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '@/store/actions/product/index.js';

function DetailProduct() {
  const [productQty, setProductQty] = React.useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state) => state.productDetails);

  React.useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${productQty}`);
  };

  const getRating = (rating) => {
    let stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(
        <svg
          key={i}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          className="hi-solid hi-star inline-block w-5 h-5">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white">
      <Layout>
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <Link to={'/'}>
            <div className="my-6 font-medium">Back</div>
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <img src={product.image} alt="Product Image" />
            </div>

            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                <div>
                  <div className=" text-indigo-600 tracking-wide text-sm font-semibold">
                    {product.brand}
                  </div>
                  <p className="block font-semibold md:text-lg text-gray-600 hover:text-gray-500">
                    {product.title}
                  </p>
                </div>
                <div className="text-orange-500 text-left sm:text-right"></div>
              </div>
              <div className="prose prose-indigo mb-4">
                <p>{product.description}</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-gray-600 font-medium">${product.price}</div>
                </div>
                <div className="p-5 bg-gray-100 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-medium">Buyer rating:</span>
                    <span className="text-orange-500">{getRating(product.rating)}</span>
                  </div>
                  <div className="text-sm text-gray-600">{product.numReviews} Reviews</div>
                </div>
                <h2>Qty</h2>
                <select
                  className="select select-bordered w-full max-w-xs"
                  value={productQty}
                  onChange={(e) => setProductQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x, index) => (
                    <option key={index} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                  <button className="btn btn-secondary capitalize btn-outline px-10 ">
                    Favorite
                  </button>
                  <button
                    onClick={addToCartHandler}
                    className="btn btn-primary capitalize btn-outline px-20 "
                    disabled={product.countInStock === 0}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default DetailProduct;
