

import { createRoot } from 'react-dom/client';
import { App } from './App';

const rootEl = document.createElement('div');
document.body.appendChild(rootEl);

const root = createRoot(rootEl);
root.render(<App />);
