import React ,{ useEffect } from 'react'
import { push } from "@socialgouv/matomo-next";

const crispID = process.env.NEXT_PUBLIC_CRISP
class LiveChat extends React.Component {
    componentDidMount () {
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = crispID;
      (function() {
        var d = document;
        var s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
        function handleChatOpen() {
          push(["trackEvent", "crisp", "chat opened"]);
        }
        function handleChatClosed() {
          push(["trackEvent", "crisp", "chat closed"]);
        }
        $crisp.push(['on', 'chat:opened',handleChatOpen]);
        $crisp.push(['on', 'chat:closed',handleChatClosed]);
      })();
    }
    render () {
      return null;
    }
  }
  export default LiveChat