import React from 'react';

const currentYear = new Date().getFullYear();

const App = () => {
    return (
        <div>
            <header>
                <h1>A template for React Project</h1>
            </header>
            <main>
                <h1>Welcome to React</h1>
            </main>
            <footer>
                <p className="left">
                    <a href='https://github.com/m-f-d' target='blank'>Github</a>
                    <a href='https://www.linkedin.com/in/farhad86/' target='blank'>Linkedin</a>
                    <a href="mailto:mentorbd86@gmail.com" target='blank'>Email</a>
                    <a href="http://farhad.intels.co/" target='blank'>Website</a>
                </p>
                <p className="right">Developed with &copy; FARHAD AHMRD {currentYear}</p>
            </footer>
        </div>
    );
};

export default App;
