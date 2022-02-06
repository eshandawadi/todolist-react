import React from "react";

export const Dialog = (props) => {
  return (
    <section className={"dialog"}>
      <div className="backdrop" onClick={props.closeDialog}></div>
      <div className="card slideTop"> {props.children}</div>
    </section>
  );
};
