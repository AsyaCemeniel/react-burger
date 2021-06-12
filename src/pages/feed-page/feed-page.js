import React from "react";
import Feed from "../../components/feed";

const FeedPage = () => {
  return (
    <div>
      <div className="text text_type_main-large mt-10">Лента заказов</div>
      <div>
        <Feed />
      </div>
    </div>
  );
};

export default FeedPage;
