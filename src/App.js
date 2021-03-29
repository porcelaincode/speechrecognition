import React, { useState, useEffect } from "react";

// import custom components
import FooterComponent from "./components/FooterComponent";
import MainContainer from "./components/MainContainer";
import BrowserSupport from "./BrowserSupport";

// import material ui components
import { Button } from "@material-ui/core";

// import icons
import MicIcon from "@material-ui/icons/Mic";
import StopRoundedIcon from "@material-ui/icons/StopRounded";

// import utility tools
import { isChrome, isChromium } from "react-device-detect";

// import css file
import "./App.css";

const SpeechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;

const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

function App() {
  const [isListening, setIsListening] = useState(true);
  const [dialogue, setDialogue] = useState(null);

  const [messageArray, setMessageArray] = useState([]);

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        mic.start();
      };
    } else {
      mic.stop();
      // when stop button is clicked
      mic.onend = () => {
        console.log("mic stopped");

        if (dialogue !== null) {
          console.log(dialogue);
        }

        setDialogue("");
      };
    }

    // when mic button is clicked
    mic.onstart = () => {
      console.log("Mic is on");
    };

    // actual transcribing of the result
    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

      setDialogue(transcript);

      mic.onerror = (event) => {
        console.log(`Error occured : ${event.error}`);
      };
    };
  };

  if (dialogue === null) {
    console.log(`dialogue empty`);
  }

  return (
    <div className="App">
      <FooterComponent />
      <MainContainer speech={dialogue} />
      <div className="recordingContainer">
        <div className="waveContainer">{isListening ? <></> : <></>}</div>
        <div className="buttonContainer">
          <Button
            style={{
              borderRadius: "200px",
              height: "5em",
              width: "5em",
            }}
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => setIsListening((prevState) => !prevState)}
          >
            {isListening ? (
              <StopRoundedIcon fontSize="large" />
            ) : (
              <MicIcon fontSize="large" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

function BrowserRenderer() {
  console.log(`Chrome detected [bool]: ${isChrome}`);
  if (isChrome || isChromium) return <App />;
  return <BrowserSupport />;
}

export default BrowserRenderer;
