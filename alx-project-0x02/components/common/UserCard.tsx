import React from 'react'
import { UserProps } from "@/interfaces";

const UserCard = ( {name, email, address}) => {
    return (
    <div className="bg-white shadow-md rounded p-5">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">Email: {email}</p>
      <p className="text-gray-600">
        Address: {address.street}, {address.suite}, {address.city}
      </p>
    </div>
  );
}

export default UserCard