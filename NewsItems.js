import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsUrl, author, date, source,  } = this.props;

    return (
      <div className="px-2 my-3 md:p-4">
        <div className="shadow-xl  shadow-blue-500 ">
          <div className="   shadow-md shadow-red-500     overflow-hidden   flex   cursor-pointer  justify-center items-center align-middle text-center rounded-lg">
            <img
              className="object-cover w-fit  h-[250px] hover:scale-110 transition duration-300  ease-in-out  "
              src={imageurl}
              alt="/"
            />
          </div>

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}...</div>
            <p className="text-gray-700 text-base">{description}...</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-4 rounded-2xl">
              <a href={newsUrl} className="cursor-pointer" target="_blank">
                Read More
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
