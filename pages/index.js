import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';


const Home = () => {
  const [userInput, setUserInput] = useState('');

const onUserChangedText = (event) => {
  console.log(event.target.value);
  setUserInput(event.target.value);
};

const [apiOutput, setApiOutput] = useState('')
const [isGenerating, setIsGenerating] = useState(false)

const callGenerateEndpoint = async () => {
  setIsGenerating(true);
  
  console.log("Calling OpenAI...")
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userInput }),
  });

  const data = await response.json();
  const { output } = data;
  console.log("OpenAI replied...", output.text)

  setApiOutput(`${output.text}`);
  setIsGenerating(false);
}

  return (
    <div className="root">
      <Head>
        <title>GPT-3 Writer | Will.Gives</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Songwriter AI: The Future of Lyrics</h1>
          </div>
          <div className="header-subtitle">
          <h2>Write songs faster. Write songs better. Gain the advantage.</h2>
          <h2>✍️🎵</h2>
            <h3>Songwriter AI is the perfect tool for anyone who wants to improve their songwriting skills. Using AI, it will analyse your lyrics and suggest improvements - including synonyms, antonyms and rhymes. It can even rewrite entire songs instantly, giving you a whole new perspective on your lyrical aptitude.</h3>
          </div>
        </div>
         {/* Added Code*/}
         <div className="prompt-container">
         <textarea
            className="prompt-box"
            placeholder="start typing here"
            value={userInput}
            onChange={onUserChangedText}
          />
          {/* New code I added here */}
  <div className="prompt-buttons">
        <a
    className={isGenerating ? 'generate-button loading' : 'generate-button'}
    onClick={callGenerateEndpoint}
  >
    <div className="generate">
    {isGenerating ? <span class="loader"></span> : <p>Generate</p>}
      </div>
    </a>
        </div>
         {/* New code I added here */}
  {apiOutput && (
  <div className="output">
    <div className="output-header-container">
      <div className="output-header">
        <h3>Output</h3>
      </div>
    </div>
    <div className="output-content">
      <p>{apiOutput}</p>
    </div>
  </div>
)}
</div>
      </div>
    </div>
  );
};

export default Home;
