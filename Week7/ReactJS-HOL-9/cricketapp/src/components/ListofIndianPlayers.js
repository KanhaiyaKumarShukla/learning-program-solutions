import React from "react";

const ListofIndianPlayers = ({ IndianPlayers }) => {
  return (
    <div>
      {IndianPlayers.map((player, index) => (
        <li key={index}>{player}</li>
      ))}
    </div>
  );
};

export default ListofIndianPlayers;
