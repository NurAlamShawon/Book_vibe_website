import React from "react";

const Description = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex">
        <div className="w-1/2">
          <img src="/books.jpg" alt="" srcset="" />
        </div>

        <div className="w-1/2">
          <h1 className="font-bold text-4xl playfair-display">{}</h1>
          <p className="font-medium text-xl text-[#4f4e4e]">By :{}
          </p>

          {/* fiction table  */}
          <div className="overflow-x-auto rounded-box border border-base-content/5 w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Fiction</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>
                      <span className="font-bold text-base">Review</span>
                      {}
                    </p>
                    <p>
                      <span className="font-bold text-base">Tags</span>
                      {}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* rating table */}
          <div className="overflow-x-auto   max-w-sm">
            <table className="table border-separate">
              <tbody>
                <tr>
                  <td>Number of Pages:</td>
                  <td className="font-bold text-base">{}</td>
                </tr>

                <tr>
                  <td>Publisher:</td>
                  <td className="font-bold text-base">{}</td>
                </tr>
                <tr>
                  <td>Year of Publishing:</td>
                  <td className="font-bold text-base">{}</td>
                </tr>
                <tr>
                  <td>Rating:</td>
                  <td className="font-bold text-base">{}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <button class="btn mr-4">Read</button>
          <button className="btn btn-info text-white">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default Description;
