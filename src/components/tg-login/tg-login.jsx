import React, { useEffect, useRef } from "react";
export const TLoginButtonSize = {
  Large: "large",
  Medium: "medium",
  Small: "small",
};

function TelegramAuthButton({
  botName,
  buttonSize = TLoginButtonSize.Large,
  cornerRadius = 20,
  requestAccess = "write",
  usePic = false,
  onAuthCallback,
  redirectUrl,
  lang = "en",
  additionalClasses = "",
}) {
  // const containerRef = useRef(null);

  useEffect(() => {
    if (onAuthCallback != null) {
      window.TelegramOnAuthCb = (user) => onAuthCallback(user);
    }

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?21";


    script.async = true;
    script.setAttribute("data-telegram-login", botName);
    script.setAttribute("data-size", buttonSize);
    script.setAttribute("data-radius", cornerRadius);
    script.setAttribute("data-userpic", usePic);
    script.setAttribute("data-lang", lang);
    if (redirectUrl != null) {
      script.setAttribute("data-auth-url", redirectUrl);
    }
    if (onAuthCallback != null) {
      script.setAttribute("data-onauth", "TelegramOnAuthCb(user)");
    }
    if (requestAccess != null) {
      script.setAttribute("data-request-access", requestAccess);
    }

    // containerRef.current.appendChild(script);

    // return () => {
    //   if (containerRef.current) {
    //     containerRef.current.removeChild(script);
    //   }
    // };
  }, [
    botName,
    buttonSize,
    cornerRadius,
    requestAccess,
    usePic,
    onAuthCallback,
    redirectUrl,
    lang,
  ]);

  return (
    <div className={`tlogin-button`} onclick="return TWidgetLogin.auth();" />
  );
}

function TGLogin() {
  return (
    <TelegramAuthButton
      botName="GGLegadropbot"
      buttonSize={TLoginButtonSize.Large}
      lang="en"
      usePic={false}
      cornerRadius={20}
      onAuthCallback={(user) => {
        console.log("Hello, user!", user);
      }}
      requestAccess={"write"}
      additionalClasses={"css-class-for-wrapper"}
    />
  );
}

export default TGLogin;
