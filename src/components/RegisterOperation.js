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
                REGISTRAR UNA NUEVA OPERACION
            </main>
            
            <footer>
                <FooterElements />
            </footer>
        </div>
    );
}

export default Home;
