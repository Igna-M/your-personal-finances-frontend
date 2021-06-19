import React from 'react'

import HeaderElements from './HeaderElements'
import HomeBodyElements from './apisFetch/IncomesElement'
import FooterElements from './FooterElements'

function Home() {
    return (
        <div className="App">
            <header>
                <HeaderElements />
                <h1>Incomes</h1>
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
