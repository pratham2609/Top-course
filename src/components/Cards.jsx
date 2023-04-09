import React, { useState } from "react";
import Card from "./Card";

export default function Cards({ courses, category }) {
  const [isLiked, setIsLiked] = useState([]);

  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach(array => {
        array.forEach(courseData => {
          allCourses.push(courseData);
        })
      })
      return allCourses;
    }
    else {
      //specific category ka data pass hoga
      return courses[category];
    }

  }
  return (
    <div className="flex flex-wrap gap-4 mb-4 justify-center">
      {getCourses().map((course) => (
        <Card key={course.id}
          course={course}
          isLiked={isLiked}
          setIsLiked={setIsLiked} />
      ))
      }
    </div>
  );
}
