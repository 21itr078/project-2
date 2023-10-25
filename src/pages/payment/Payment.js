// Payment.js
import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import imge from '../paym.jpg'; // Update the image path if needed

const Payment = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment gateway" />
      <img src={imge} alt="anva" width={250} />
      
      <div className="pb-10">
        <p>Payment gateway only applicable for Production build.</p>
        <Link to="/">
          <button className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Payment;
