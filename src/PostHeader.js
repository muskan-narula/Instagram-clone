import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./PostHeader.css";

const PostHeader = ({username}) => {
  return (
    <div className="post__header">
      <Avatar
        className="post_avatar"
        alt="avatar"
        src="https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/81314795_1532535843570185_447709602843197440_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=JCKDcKrnOOMAX-ujhTQ&_nc_ht=scontent.fdel8-1.fna&oh=90a6b26d2b67eece978a835daab8ddf3&oe=600AFF7F"
      />
      <h3>{username}</h3>
    </div>
  );
};

export default PostHeader;
