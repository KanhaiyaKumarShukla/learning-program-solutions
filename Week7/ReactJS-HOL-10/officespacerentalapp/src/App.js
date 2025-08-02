import React from 'react';
import './App.css';

function App() {


  const officeSpaces = [
  {
    id: 1,
    name: "One World Trade Center",
    rent: 120000,
    address: "285 Fulton St, New York, NY 10007, USA",
    image: "https://westave.com/wp-content/uploads/2020/04/Corridor_Office_Isolated_Images_6507_6520_redo_SA_ver01-scaled.jpg"
  },
  {
    id: 2,
    name: "The Shard",
    rent: 95000,
    address: "32 London Bridge St, London SE1 9SG, UK",
    image: "https://image.made-in-china.com/2f0j00AhzGJmsIMBqR/Luxury-Office-Computer-Desks-Office-Furniture-Executive-Office-Tables.jpg"
  },
  {
    id: 3,
    name: "Marina Bay Financial Centre",
    rent: 85000,
    address: "12 Marina Blvd, Tower 3, Singapore 018982",
    image: "https://images.squarespace-cdn.com/content/v1/5a68d30f268b962d59f0dba0/1594221681709-EK3IECSU0CA5A50NZ3O5/Unit+1-1.jpg"
  },
  {
    id: 4,
    name: "Shanghai Tower",
    rent: 110000,
    address: "501 Yincheng Middle Rd, Pudong, Shanghai, China",
    image: "https://tse1.mm.bing.net/th/id/OIP.B44AFy8f598zgN-XyDA89gHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 5,
    name: "Burj Khalifa Offices",
    rent: 150000,
    address: "1 Sheikh Mohammed bin Rashid Blvd, Dubai, UAE",
    image: "https://tse3.mm.bing.net/th/id/OIP.5QPJl4YQs6Ys7_GWuNpCAgHaFj?r=0&w=1600&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 6,
    name: "Sydney Cove Premium Suites",
    rent: 55000,
    address: "5 Young St, Sydney NSW 2000, Australia",
    image: "https://archziner.com/wp-content/uploads/2019/02/white-leather-chair-wooden-desk-office-design-ideas-desk-lamp-laptop-beige-curtains.webp"
  }
];

  return (
    <div className="app">

      <h1 className="header">Office Space Rental Listings</h1>
      
      <div className="office-list">
   
        {officeSpaces.map((office) => (
          <div key={office.id} className="office-card">
         
            <img 
              src={office.image} 
              alt={office.name} 
              className="office-image"
            />
            
  
            <div className="office-details">
              <h2>{office.name}</h2>
              <p><strong>Address:</strong> {office.address}</p>
              

              <p className="rent">
                <strong>Rent:</strong> 
                <span className={office.rent <= 60000 ? 'textRed' : 'textGreen'}>
                  ₹{office.rent.toLocaleString()}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;