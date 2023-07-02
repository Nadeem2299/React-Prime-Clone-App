// app component can have js jsx and css (optional)

// .represents custom import from same folder

// app component specific css
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './containers/ErrorBoundary/ErrorBoundary';
import { HelmetProvider } from 'react-helmet-async';
import { PageContext } from './contexts/PageContext';
import { CartContext } from './contexts/CartContext';
import { useReducer } from 'react';
import cartReducer from './reducers/cartReducer';
import AppRoutes from './routes/AppRoutes/AppRoutes';
// import { useReducer } from 'react';
// import cartReducer from './reducers/cartReducer';

/*
imports ()
comp definations
export
*/

// comp def
// comp starts with cap case
function App () {
  // want to pass the following data via context created
  const userStatus = {
    isLoggedIn: true,
    lastLogin: new Date()
  };
  const [cartState, cartDispatch] = useReducer(cartReducer);
  const cart = {
    cartState, // needed for header comp
    cartDispatch // needed for shoppage comp
  }
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <CartContext.Provider value={cart}>
          <BrowserRouter>
            {/* jsx starts */}
            <div>
              <Header navBgColor="black" />

              <main className="mt-5 pt-3">
                <ErrorBoundary>
                  {/* step 2 of context API provide the data to the list of components you want to share */}
                  <PageContext.Provider value={userStatus}>
                    {/* routing */}
                    <AppRoutes />
                  </PageContext.Provider>
                </ErrorBoundary>
              </main>

              <Footer />
            </div>
            {/* jsx ends */}
          </BrowserRouter>
        </CartContext.Provider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

// export
export default App;
