import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/store/actions/user/index.js';

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const navigaGatetoCart = () => {
    console.log('Navigating to cart');
    navigate('/cart');
  };

  const handleLogout = () => {
    console.log('Logging out');
    dispatch(logout());
    navigate('/');
  };

  React.useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo, navigate, dispatch, userLogin]);

  return (
    <div className="navbar bg-gray-200 rounded-md mt-3 px-5">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Proshop</a>
      </div>
      <div className="flex-1">
        <a href="/product" className="btn btn-ghost normal-case text-xl">
          Product
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block" onClick={navigaGatetoCart}>
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {userInfo ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                <span>{userInfo.name.charAt(0)}</span>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">{userInfo.name}</a>
              </li>
              <li>
                <a>{userInfo.isAdmin ? 'Admin' : 'User'}</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <button className="btn btn-active btn-primary" onClick={() => navigate('/login')}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
