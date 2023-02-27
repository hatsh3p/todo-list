/** 
 * Similar to index.js on the server side, index.js on the client side is the
 * first file that runs.
 * 
 * From the React documentation: "Applications built with just React usually have a 
 * single root DOM node."
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
