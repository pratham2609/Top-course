import React from "react";
import { FcLike ,FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

export default function Card({ course, isLiked, setIsLiked }) {
  function clickHandler() {
    //logic
    if (isLiked.includes(course.id)) {
      //pehle se liked hai
      toast.warning("Like removed");
      setIsLiked((prev) => prev.filter((id) => id !== course.id));
    } else {
      if (isLiked.length === 0) {
        setIsLiked([course.id]);
      }
      else {
        setIsLiked((prev) => [...prev, course.id]);
      }
      toast.success("Liked");
    }
  }
  return (
    <div className="w-[300px] bg-bgDark rounded-md overflow-hidden">
      <div className="relative ">
        <img src={course.image.url} alt="" />
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-1 flex items-center justify-center">
          <button
            onClick={clickHandler}>
            {
              isLiked.includes(course.id) ?
                (<FcLike fontSize="1.75rem" />)
                : (<FcLikePlaceholder fontSize="1.75rem" />)
            }
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="text-white text-sm mt-2">{course.description.length>100 ? (course.description.substr(0,100)) + "..." : (course.description)}</p>
      </div>
    </div>
  );
}
