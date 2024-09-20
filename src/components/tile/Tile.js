import React from "react";

export const Tile = ({name, description = {} }) => {
  return (
    <div className="tile-container">
      <ol className="tile-list">
      <li className="tile-title">{name}</li>
      {Object.entries(description).map(([key, value], index) => (
       key !== "name" && <p key={index} className="tile">{value}</p>
          )       
           )}

      </ol>
     

     
      
    </div>
  );
};

