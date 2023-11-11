import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Error404() {
  const History = useHistory();
  useEffect(() => {
    const id = setTimeout(() => {
      History.push("/");
      clearTimeout(id);
    }, 5000);
  });

  return <div>404</div>;
}

export default Error404;
