import React from 'react';
import mensCollectionImage from "../../assets/mens-collection.webp";
import womensCollectionImage from "../../assets/womens-collection.webp";
import { Link } from 'react-router-dom';

const ClientOrUser = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        
        <div className="relative flex-1">
          <Link to="/register-user">
            <img 
              src={womensCollectionImage} 
              alt="users" 
              className="w-full h-[200px] md:h-[500px] object-cover rounded-lg hover:opacity-90 transition"
            />
          </Link>
        </div>

        <div className="relative flex-1">
          <Link to="/register-client">
            <img 
              src={mensCollectionImage} 
              alt="clients" 
              className="w-full h-[200px] md:h-[500px] object-cover rounded-lg hover:opacity-90 transition"
            />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ClientOrUser;
