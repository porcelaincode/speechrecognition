import React, { useState, useEffect } from "react";

import HeaderComponent from "./components/HeaderComponent";
import MainContainer from "./components/MainContainer";

import { Button } from "@material-ui/core";

import MicIcon from "@material-ui/icons/Mic";
import StopRoundedIcon from "@material-ui/icons/StopRounded";

import { isChrome } from "react-device-detect";

import "./App.css";
import BrowserSupport from "./BrowserSupport";
import { Response } from "./processing/Response";

const SpeechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;

const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

function App() {
  const [isListening, setIsListening] = useState(false);
  const [dialogue, setDialogue] = useState(null);

  const [transcribedDialogues, setTranscribedDialogues] = useState([]);
  const [airesponse, setAiResponse] = useState([]);

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
        transcribedDialogues.push(dialogue);
        // do something with transcribed dialogue here...

        const response = Response(dialogue);
        airesponse.push(response);

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
      console.log(transcript);

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
      <HeaderComponent />
      <MainContainer
        speech={dialogue}
        transcribed={transcribedDialogues}
        airesponse={airesponse}
      />
      <div className="recordingContainer">
        <div className="waveContainer">
          {isListening ? (
            <></>
          ) : (
            <>
              <div className="wave"></div>
              <div className="wave2"></div>
              <div className="wave3"></div>
            </>
          )}
        </div>
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
  if (isChrome) return <App />;
  return <BrowserSupport />;
}

export default BrowserRenderer;
