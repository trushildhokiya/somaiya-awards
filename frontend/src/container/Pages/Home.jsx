import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Somaiya Awards {new Date().getFullYear()}
      </h1>
      
      <Link to="/auth/login">
      <button className="bg-blue-500 m-5 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Login
      </button>
      
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Card 1</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel faucibus leo. 
            Vivamus vestibulum pharetra magna nec ultrices.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Card 2</h2>
          <p className="text-gray-600">
            Nunc et mauris vitae eros pellentesque laoreet. Nulla cursus massa non odio ultrices 
            ultrices. Vestibulum convallis ultricies lorem et elementum.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Card 3</h2>
          <p className="text-gray-600">
            Proin in metus eu mauris fringilla dapibus. Integer at quam non elit lacinia faucibus 
            eu sed felis. In in ipsum sed ante venenatis rutrum at sed velit.
          </p>
        </div>
      </div>
      
      <footer className="mt-12 text-center text-gray-600">
        &copy; {new Date().getFullYear()} Somaiya Awards | All rights reserved
      </footer>
    </div>
  );
};

export default Home;
