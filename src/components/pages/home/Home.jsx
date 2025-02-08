import React from "react";
import image from "../../../assets/image/image.png";
import Categories from "../../category/Categories";
import CourseList from "../../course/CourseList";
import Banner from "../../banner/Banner";
function Home() {
  return (
    <div className="w-full min-h-full flex flex-col">
      <Banner />
      <Categories />
      <CourseList />
    </div>
  );
}

export default Home;

