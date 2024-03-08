import { useEffect } from "react";

export default function PostCard(post) {
  useEffect(() => {
    console.log("post", post);
  }, []);

  return (
    // <a
    //   className="flex flex-col bg-primary dark:bg-dk-primary rounded-lg"
    //   href={post_path}
    // >
    //   {img_path && (
    //     <div className="flex-shrink-0">
    //       <img
    //         className="h-52 w-full object-cover"
    //         src={img_path}
    //         alt="Project image"
    //       />
    //     </div>
    //   )}
    //   <div className="flex-1 bg-primary dark:bg-dk-primary p-6 flex flex-col justify-between">
    //     <h1 className="text-sm font-medium text-text dark:text-dk-text">
    //       {" "}
    //       {title}{" "}
    //     </h1>
    //     <p className="text-xl font-semibold text-gray-900"> {description} </p>
    //     <p className="text-sm font-medium text-gray-900"> {date} </p>
    //   </div>
    // </a>
    <div>
      <h1>PostCard</h1>
      <h2>AAA</h2>
    </div>
  );
}
