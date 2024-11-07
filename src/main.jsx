import { createRoot, hydrateRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import '@/index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

if (rootElement?.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
