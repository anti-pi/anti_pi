import React from 'react';
import mensCollectionImage from "../../assets/newest_logo2.png";
import womensCollectionImage from "../../assets/newest_logo.png";
import { Link } from 'react-router-dom';

const ClientOrUser = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        
        <div
          className="relative flex-1 p-6 rounded-xl"
          style={{
            background: "linear-gradient(135deg, #f8fafc 0%, #e5e7eb 100%)"
          }}
        >
          <Link to="/register-user">
            <img 
              src={womensCollectionImage} 
              alt="users" 
              className="w-full h-[250px] md:h-[400px] object-contain rounded-lg hover:opacity-90 transition border-[1px] border-black"


            />
          </Link>
        </div>

        <div
          className="relative flex-1 p-6 rounded-xl"
          style={{
            background: "linear-gradient(135deg, #f8fafc 0%, #e5e7eb 100%)"
          }}
        >
          <Link to="/register-client">
            <img 
              src={mensCollectionImage} 
              alt="clients" 
               className="w-full h-[250px] md:h-[400px] object-contain rounded-lg hover:opacity-90 transition border-[1px] border-black"
            />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ClientOrUser;
