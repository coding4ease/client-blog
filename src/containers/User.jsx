import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React from "react";

function User() {
  return (
    <div className="user-label">
      <AccountCircleIcon fontSize="Large" />
      <div>
        <span>Admin Jul 29 . 1 min</span>
      </div>
    </div>
  );
}

export default User;
