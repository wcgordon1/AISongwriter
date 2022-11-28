import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';

const Home = () => {
  return (
    <div className="root">
      <Head>
        <title>GPT-3 Writer | buildspace</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Songwriter AI: The Future of Lyrics</h1>
          </div>
          <div className="header-subtitle">
            <h2>Songwriter AI is the perfect tool for anyone who wants to improve their songwriting skills. Using AI, it will analyse your lyrics and come up with improved lyrics, including synonyms, antonyms and rhymes. It can even rewrite entire songs instantly, giving you a whole new perspective on your lyrical abilities.</h2>
            <h2>Write songs faster. Write songs better. Gain the advantage.</h2>
          </div>
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
