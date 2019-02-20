import React from "react";

function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto py-5 text-center">
        <h1 className="text-title">
          {name} <span className="text-blue">{title}</span>
        </h1>
      </div>
    </div>
  );
}
export default Title;
