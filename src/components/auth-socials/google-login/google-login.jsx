import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import React from "react";

const GoogleLoginModal = ({ authGoogle }) => {
  return (
    <GoogleOAuthProvider clientId="1039025715188-jf51ia90k11f4fvjfcc61vpi81qmb84a.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const data = jwt_decode(credentialResponse.credential);
          authGoogle(data);
        }}
        type="icon"
        theme="outline"
        size="large"
        text="use"
        shape="rectangular"
        // useOneTap={true}
        cancel_on_tap_outside={true}
        auto_select={true}
        ux_mode="popup"
        state="pass-through value"
        itp_support={true}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginModal;
