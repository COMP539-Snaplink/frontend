import React, { useState } from 'react';
import './homePage.css';

const HomePage = () => {
    const [inputUrl, setInputUrl] = useState('');
    const [customized, setCustomized] = useState('');
    const [generatedUrl, setGeneratedUrl] = useState('');

    const handleGenerate = () => {
        // Implement the logic to generate the URL
        // Placeholder logic:
        setGeneratedUrl(`original/snaplk/${customized || inputUrl}`);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedUrl);
        // You might want to implement some feedback to the user that the text was copied.
    };

    return (
        <div className="snaplink-creator">
            <header>
                <h1>Snaplink</h1>
                <button className="login-button">Login</button>
            </header>
            <main>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="original/snaplk url"
                        value={inputUrl}
                        onChange={e => setInputUrl(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Customized"
                        value={customized}
                        onChange={e => setCustomized(e.target.value)}
                    />
                    <button className="generate-button" onClick={handleGenerate}>
                        Generate
                    </button>
                </div>
                <div className="output-group">
                    <input
                        type="text"
                        readOnly
                        value={generatedUrl}
                        placeholder="original/snaplk url"
                    />
                    <button className="copy-button" onClick={handleCopy}>
                        Copy
                    </button>
                </div>
            </main>
        </div>
    );
}

export default HomePage;