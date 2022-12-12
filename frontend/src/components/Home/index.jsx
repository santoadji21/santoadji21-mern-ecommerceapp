import { getListProducts } from '@/store/actions/product/index.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Card from '../Card/index.jsx';
import Layout from '../Layout/index.jsx';

function Home() {
  const dispatch = useDispatch();
  const products_data = useSelector((state) => state.productList);

  const { loading, error, products } = products_data;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getListProducts());
  }, [dispatch]);

  return (
    <div className="container m-auto ">
      <Layout>
        <div className="mt-10">{/* <Carrousel /> */}</div>

        <div className="mt-10">
          {error ? (
            <div className="alert alert-error shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {products.map((product, index) => (
                <div key={index}>
                  <Card
                    loading={loading}
                    key={index}
                    brand={product.brand}
                    title={product.description}
                    price={`$${product.price}`}
                    tag={product.tag}
                    image={product.image}
                    onClick={() => {
                      navigate(`/product/${product._id}`);
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
}

export default Home;
