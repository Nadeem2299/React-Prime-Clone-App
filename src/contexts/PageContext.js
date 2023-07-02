import { createContext } from 'react';

// Step 1 of context API: Create context with any data or even null inside
// have the context to have any data (optional)

export const PageContext = createContext(); // you can have some data inside
console.log(PageContext);

// Step 2 OF context API: refer App.js

// step 3 of context API is in ContactUsPage
