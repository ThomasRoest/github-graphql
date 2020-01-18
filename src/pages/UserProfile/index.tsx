import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { USER } from "../../Queries";
import Debug from "../../components/Debug";

const UserProfile = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(USER, {
    variables: { username: id }
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <Debug data={data} />
    </div>
  );
};

export default UserProfile;