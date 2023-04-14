import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";

import Category from "./Category";

interface Category {
  id: number;
  catUrl: string;
  name: string;
  slug: string;
}

const defaultCategories: Category[] = [
  { id: 1, catUrl: "#", name: "Top Free Jazz Tracks" , slug: ""},
  { id: 2, catUrl: "#", name: "Top Free 80s Vaporwave" , slug: "" },
  { id: 3, catUrl: "#", name: "Top Free Chill Hip-Hop" , slug: "" },
  { id: 4, catUrl: "#", name: "Top Free Epic Tracks" , slug: "" },
  { id: 5, catUrl: "#", name: "Top Free Youtube Tracks" , slug: "" },
  { id: 5, catUrl: "#", name: "Top Free TikTok Tracks" , slug: "" },
  { id: 5, catUrl: "#", name: "Top Free Podcasts Tracks" , slug: "" },
  { id: 5, catUrl: "#", name: "Top Free Commercial Tracks" , slug: "" },

];

const Categories = () => {
  const [cats, setCats] = useState<Category[]>([]);
  useEffect(() => {
    setCats(defaultCategories);
  }, []);

  return (
    <>
      {cats ? (
        cats.map((item, index) => {
          return (
            <Category
              key={item.id}
              catProps={{
                id: item.id,
                url: item.catUrl,
                name: item.name,
                catSlug: item.slug
              }}
            />
          );
        })
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

export default Categories;
