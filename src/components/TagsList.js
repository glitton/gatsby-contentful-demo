import React from "react";
import setupTags from "../utils/setupTags";

const TagsList = ({ shapesRecipes }) => {
  const newTags = setupTags(shapesRecipes);
  return (
    <div>
      <h4>tags list</h4>
    </div>
  );
};

export default TagsList;
