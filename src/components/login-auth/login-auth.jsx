import React, { useState } from "react";
import "./login-auth.css";

import AuthorizationModal from "./authorization";
import LoginModal from "./login";

function LoginAuth({ setLoginModal }) {
  const [authModalType, setAuthModalType] = useState(true);

  return (
    <div className="modal_wrapper_template">
      {!authModalType ? (
        <AuthorizationModal
          setLoginModal={setLoginModal}
          setAuthModalType={setAuthModalType}
        />
      ) : (
        <LoginModal
          setLoginModal={setLoginModal}
          setAuthModalType={setAuthModalType}
        />
      )}
    </div>
  );
}

export default LoginAuth;
