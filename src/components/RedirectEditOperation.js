import React, { useEffect } from "react";

function RedirectEditOperation(props) {

  let operationId = props.match.params.id
  let idUrl = 'http://localhost:3001/editOperation/' + operationId

  useEffect(() => {
    window.location.href = idUrl;
  });

  return (
    <div>
      <h2>Edit Product</h2>
    </div>
  );
}

export default RedirectEditOperation;