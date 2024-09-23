// src/__tests__/main.test.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { vi } from 'vitest';
import App from '../App';

describe('main.jsx', () => {
  it('renders the App component using ReactDOM.createRoot', async () => {
    const rootElement = document.createElement('div');
    rootElement.id = 'root';
    document.body.appendChild(rootElement);
    const getElementByIdSpy = vi.spyOn(document, 'getElementById').mockReturnValue(rootElement);
    const createRootSpy = vi.spyOn(ReactDOM, 'createRoot').mockReturnValue({
      render: vi.fn(),
    });
    await import('../main.jsx');
    expect(createRootSpy).toHaveBeenCalledWith(rootElement);
    expect(createRootSpy().render).toHaveBeenCalledWith(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    getElementByIdSpy.mockRestore();
    createRootSpy.mockRestore();
  });
});
