import React from 'react'

import HeaderElements from './HeaderElements'
import HomeBodyElements from './apisFetch/HomeBodyElements'
import FooterElements from './FooterElements'

function Home() {
    return (
        <div className="App">
            <header>
                <HeaderElements />
            </header>

            <main>
                <HomeBodyElements />
            </main>
            
            <footer>
                <FooterElements />
            </footer>
        </div>
    );
}

export default Home;
