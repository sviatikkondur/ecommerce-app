import React from 'react'
import { createRoot } from 'react-dom/client'
import { RootComponent } from './RootComponent';

createRoot(document.getElementById('root') as HTMLDivElement).render(<RootComponent />);