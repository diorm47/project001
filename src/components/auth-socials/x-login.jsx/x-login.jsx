import React from "react";
import TwitterLogin from "react-twitter-login";

const XLogin = (props) => {
  const authHandler = (err, data) => {
    console.log(err, data);
  };

  return (
    <TwitterLogin
      authCallback={authHandler}
      consumerKey="Z6DEmOkh5tBClc26212G1Quej"
      consumerSecret="xUT0DnFVouAlRuPZXmh6r0RUE1sWe1pantBWpg8kzSbmYwtUYR"
    />
  );
};
export default XLogin;
