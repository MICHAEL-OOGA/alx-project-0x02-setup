// pages/users.tsx
import React from "react";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="min-h-screen p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 bg-gray-100">
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};


export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const users: UserProps[] = data.map((user: any) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      suite: user.address.suite,
      city: user.address.city,
    },
  }));

  return {
    props: {
      users,
      
    },
  };
};

export default UsersPage;
