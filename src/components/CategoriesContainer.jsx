import React from "react";
import "../assets/styles/CategoriesContainer.scss";
import Category from "./Category";

const CategoriesContainer = () => (
  <div className="categoriesContainer">
    <Category
      title="ANIMATION"
      quantity="52 Titles"
      urlVideo={"https://www.w3schools.com/html/mov_bbb.mp4"}
    />
    <Category
      title="ACTION"
      quantity="67 Titles"
      urlVideo={
        "https://player.vimeo.com/external/428128367.sd.mp4?s=4dfe8ab8f0affac0ee8b19ecf0de03ab2791eeb8&amp;profile_id=139&amp;oauth2_token_id=57447761"
      }
    />
    <Category
      title="SCIFI"
      quantity="102 Titles"
      urlVideo={
        "https://player.vimeo.com/external/570532660.hd.mp4?s=49caa93fefd4c0cde1c82407591296350479904a&profile_id=174"
      }
    />
    <Category
      title="FANTASY"
      quantity="98 Titles"
      urlVideo={
        "https://player.vimeo.com/external/385265711.sd.mp4?s=a3ec0188306a874c94862a5b019713c38fb32afc&profile_id=164"
      }
    />
  </div>
);

export default CategoriesContainer;
