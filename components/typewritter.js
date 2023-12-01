import Typewriter from 'typewriter-effect';
import React , {useEffect,useState} from 'react'
const TypeWriterEffect = (props) => {
    const {setDisplayDes,textContent,setDisplayButton,text, highlightedWord, highlightColor, defaultColor} = props
    useEffect(()=>{
        setDisplayButton(true)
    },[setDisplayButton])

    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
      let currentText = '';
      let currentIndex = 0;
  
      const interval = setInterval(() => {
        currentText += textContent[currentIndex];
        setDisplayText(currentText);
        currentIndex++;
  
        if (currentIndex === textContent.length) {
          clearInterval(interval);
          setDisplayDes(true)
        }
      }, 30); // Adjust the typing speed (milliseconds)
  
      return () => clearInterval(interval); // Clean up on component unmount
    }, [textContent]);


    useEffect(() => {
        const cursorInterval = setInterval(() => {
          setShowCursor((prevShowCursor) => !prevShowCursor);
        }, 500); // Adjust the blinking speed (milliseconds)
        return () => clearInterval(cursorInterval); // Clean up on component unmount
      }, []);
  
    const getWordColor = (word) => {
      if (word === highlightedWord) {
        return highlightColor;
      }
      return defaultColor;
    };
    return (
        <>
            <h1 className="typewriter">
                {displayText.split(' ').map((word, index) => (
                    <span key={index} style={{ color: getWordColor(word) }}>
                    {word}{' '}
                    </span>
                ))}
                {showCursor && <span className="cursor" style={{color : "#002381", fontWeight : 800}}>|</span>}
            </h1>
            {/* <Typewriter
                options={{
                strings: ['The #1 Most trusted IPTV provider'],
                autoStart: true,
                pauseFor : 15000,
                loop : true,
                callFunction : () => {console.log("hello")}
            }}
            /> */}
            {/* <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString(textContent)
                .callFunction(() => {
                    setDisplayDes(true)
                })
                .pauseFor(15000)
                .callFunction(() => {
                    // setDisplayDes(true)
                    // console.log("done")
                })
                .deleteAll()
                // .callFunction(() => {
                //     console.log('All strings were deleted');
                // })
                .start();
            }}
            options={{
                autoStart: true,
                loop: true,
                delay : 0.5
              }}
            /> */}




        </>
    )
}
export default TypeWriterEffect