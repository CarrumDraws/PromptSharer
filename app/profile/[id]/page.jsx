"use client";

import React, { useState, useEffect } from "react";

import Profile from "@components/Profile";
function TheirProfile({ params }) {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  // `/profile/${post.creator._id}?name=${post.creator.username}`

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/users/${params.id}`);
      const data = await response.json();
      setUser(data);
    };

    if (!user.email) fetchUser(); // Fetch posts if we have a userID
  }, [params.id]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };

    if (params.id) fetchPosts(); // Fetch posts if we have a userID
  }, [params.id]);

  return (
    <Profile
      name={user.username ? `${user.username}'s` : ""}
      desc={
        user.username ? `Welcome to ${user.username}'s profile page` : "Welcome"
      }
      data={posts}
    />
  );
}

export default TheirProfile;
