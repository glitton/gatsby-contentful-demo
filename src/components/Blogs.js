import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "slugify";

const Blogs = ({ blogs = [] }) => {
  return (
    <div className="recipes-list">
      {blogs.map(blog => {
        const { blogTitle, blogContent, image, id } = blog;
        const pathToImage = getImage(image);
        const slug = slugify(blogTitle, { lower: true });

        return (
          <main>
            <Link key={id} to={`/${slug}`} className="recipe">
              <GatsbyImage
                image={pathToImage}
                className="recipe-img"
                alt={blogTitle}
              />

              <h5>{blogTitle}</h5>
              <p>{blogContent.raw}</p>
            </Link>
          </main>
        );
      })}
    </div>
  );
};

export default Blogs;
