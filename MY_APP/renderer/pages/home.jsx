import Script from "next/script";
import { useCallback, useEffect } from "react";

export default function Home() {
  const onLoad = useCallback(() => {
    useEffect(() => {
      // componentDidMount() like
      // You can access to 'window' object from here
      // window.alert('Hello world')
      window.alert("onLoad");
      console.log("onLoad");
      webphone_api.onAppStateChange(function (state) {
        if (state === "loaded") {
          // //Set parameters (Replace upper case worlds with your settings)
          // //Alternatively these can be also preset in your webphone_config.js file or passed as URL parameters
          // webphone_api.setparameter("serveraddress", SERVERADDRESS);
          // webphone_api.setparameter("username", USERNAME);
          // webphone_api.setparameter("password", PASSWORD);
          // //See the “Parameters” section below for more options
          // //Start the webphone (optional but recommended)
          // webphone_api.start();
          // //These API calls below actually should be placed behind separate functions (button clicks)
          // //Make a call (Usually initiated by user action, such as click on a click to call button. Number can be extension, SIP username, SIP URI or mobile/landline phone)
          // webphone_api.call(NUMBER);
          // //Hang-up (usually called from “disconnect” button click)
          // webphone_api.hangup();
          // //Send instant message (Number can be extension, SIP username. Usually called from a “send chat” button)
          // webphone_api.sendchat(NUMBER, MESSAGETEXT);
        }
      });
    }, []);
  }, []);

  const onError = useCallback(() => {
    useEffect(() => {
      // componentDidMount() like
      // You can access to 'window' object from here
      // window.alert('Hello world')
      window.alert("error");
      console.log("error");
      webphone_api.onAppStateChange(function (state) {
        if (state === "loaded") {
          // //Set parameters (Replace upper case worlds with your settings)
          // //Alternatively these can be also preset in your webphone_config.js file or passed as URL parameters
          // webphone_api.setparameter("serveraddress", SERVERADDRESS);
          // webphone_api.setparameter("username", USERNAME);
          // webphone_api.setparameter("password", PASSWORD);
          // //See the “Parameters” section below for more options
          // //Start the webphone (optional but recommended)
          // webphone_api.start();
          // //These API calls below actually should be placed behind separate functions (button clicks)
          // //Make a call (Usually initiated by user action, such as click on a click to call button. Number can be extension, SIP username, SIP URI or mobile/landline phone)
          // webphone_api.call(NUMBER);
          // //Hang-up (usually called from “disconnect” button click)
          // webphone_api.hangup();
          // //Send instant message (Number can be extension, SIP username. Usually called from a “send chat” button)
          // webphone_api.sendchat(NUMBER, MESSAGETEXT);
        }
      });
    }, []);
  }, []);

  return (
    <Script
      src="/webphone/webphone_api.js"
      strategy="beforeInteractive"
      onLoad={onLoad}
      onError={onError}
    />
  );
}
