import React , {useState, useEffect} from 'react';
import './App.css';
import FooterContainer from "./components/FooterContainer";
import MetaFooterContainer from "./components/MetaFooterContainer";
import MainContainer from "./components/MainContainer";
import { Button } from "@material-ui/core";
import MicIcon from '@material-ui/icons/Mic';

const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function App() {
  const [isListening, setIsListening] = useState(false)
  const [dialogue, setDialogue] = useState(null)
  const [savedDialogue, setSavedDialogue] = useState([])

  useEffect(() => {
    handleListen()
  }, [isListening])

  const handleListen = () => {
    if(isListening) {
      
      mic.start()
      mic.onend = () => {
        console.log('console...')
        mic.start()
      }

    } else {
      
      mic.stop()  
      mic.onend = () => {
        console.log('Stop')
      }

    }

    mic.onstart = () => {
      console.log("Mic is on")
    }

    // actual transcribing of the result 
    mic.onresult = event => {
      const transcript = Array.from(event.results)
      .map(result=> result[0])
      .map(result => result.transcript)
      .join("")
      console.log(transcript)

      setDialogue(transcript)

      mic.onerror = event => {
        console.log(event.error)
      }
    }

  }

  console.log(`You said: ${dialogue}`)

  return (
    <div className="App">
      <MainContainer speech={dialogue}/>
      <MetaFooterContainer/>
      <div className="recordingContainer">
        <div className="waveContainer">
          {isListening ? <>
          </> : <>
          <div className="wave"></div>
          <div className="wave2"></div>
          <div className="wave3"></div>
          </>}
        </div>
        <div className="buttonContainer">
          <Button 
            style={{
              borderRadius: "200px", 
              height:"5em", 
              width:"5em",
            }}
            variant="outlined" 
            color="primary" 
            size="large"
            onClick={()=> setIsListening(
              prevState => !prevState
            )
          }
          >
              <MicIcon fontSize="large" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
