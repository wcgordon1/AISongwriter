import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import { useState } from 'react';

const [userInput, setUserInput] = useState('');
const onUserChangedText = (event) => {
  console.log(event.target.value);
  setUserInput(event.target.value);
};

const Home = () => {
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
            <h2>Songwriter AI is the perfect tool for anyone who wants to improve their songwriting skills. Using AI, it will analyse your lyrics and suggest improvements - including synonyms, antonyms and rhymes. It can even rewrite entire songs instantly, giving you a whole new perspective on your lyrical aptitude.</h2>
            <h2>Write songs faster. Write songs better. Gain the advantage.</h2>
          </div>
        </div>
         {/* Added Code*/}
         <div className="prompt-container">
         <textarea
            className="prompt-box"
            placeholder="start typing here"
            value={userInput}
            onChange={onUserChangedText}
          />;
          

      
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://will.gives"
          target="_blank"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>Build with Will</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
