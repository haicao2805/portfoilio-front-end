/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Provider } from 'react-redux';
import '../styles/tailwind.css';
import { store } from '../store';
import Navbar from '../components/navbar';

export interface AppProps {
    Component: React.FunctionComponent;
    pageProps: any;
}

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <div className="relative flex flex-col min-h-screen overflow-hidden bg-container">
                <video
                    playsInline
                    autoPlay
                    muted
                    loop
                    className="absolute top-0 left-0 z-0 object-cover w-full h-full"
                    poster="https://steamcommunity.com/economy/profilebackground/items/628750/2ea2b54fa28ead1625e272ab0628967ade369c15.jpg?size=320x200"
                >
                    <source
                        src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/628750/ddaba24d87fe20c5e5967e22bcff67e497becd69.webm"
                        type="video/webm"
                    />
                    <source
                        src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/628750/525c9bbf9c0551a2a5bdb27c8dabb4de2f2b0d5c.mp4"
                        type="video/mp4"
                    />
                </video>
                <Navbar />
                <Component {...pageProps} />
            </div>
        </Provider>
    );
};

export default App;
