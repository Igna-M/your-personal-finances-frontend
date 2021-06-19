import React from 'react'

import HeaderElements from './HeaderElements'

import FooterElements from './FooterElements'

function Home() {
    return (
        <div className="App">
            <header>
                <HeaderElements />
            </header>

            <main>
                <p>ERROR 404</p>
                <p>Page Not Found</p>
            </main>
            
            <footer>
                <FooterElements />
            </footer>
        </div>
    );
}

export default Home;
