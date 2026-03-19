import React from "react";
import Link from "next/link";

function generateLinks(data) {
  let x = [];
  let longPath = ""; // Initialize the longPath variable outside the loop
  data.forEach((ele, id) => {
    if (ele === "home") {
      x.push({ name: "home", link: "/" });
      longPath = "/"; // Reset the longPath for "home"
    } else {
      id === 1 ? (longPath += ele) : (longPath += "/" + ele);
      x.push({ name: ele, link: longPath });
    }
  });
  return x;
}

function Breadcrumb({ data }) {
  return (
    <div className="flex flex-wrap">
      {generateLinks(data).map((ele, id) => {
        return (
          <React.Fragment key={ele.name}>
            {id > 0 && <span className="mx-1 ">&gt;</span>}
            <Link
              href={ele.link}
              className="capitalize font-medium text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300"
            >
              {ele.name}
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Breadcrumb;
