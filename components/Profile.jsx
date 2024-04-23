import React from "react";
import PromptCard from "./PromptCard";
import { Suspense } from "react";

function Profile({ name, desc, data, handleEdit, handleDelete }) {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">{name} Profile</h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout">
        <Suspense fallback={<div>Awaiting Profile</div>}>
          {data.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
            />
          ))}
        </Suspense>
      </div>
    </section>
  );
}

export default Profile;
