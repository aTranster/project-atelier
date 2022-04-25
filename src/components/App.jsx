import React from 'react';
import Header from './header/Header.jsx';
import Overview from './overview/Overview.jsx';
import ProductCardLists from './related/ProductCardLists.jsx';
import Qna from './qna/Qna.jsx';
import Ratings from './ratings-reviews/Ratings.jsx';
// import { getProduct } from '../helpers.js';
import { AppContextProvider } from './context/AppContext.jsx';

// export const AppContext = createContext({});

function App() {
  // const [productId, setProductId] = useState(40344);
  // const [productData, setProductData] = useState({});

  // useEffect(() => {
  //   getProduct(40344)
  //     .then((response) => setProductData(response));
  // }, []);

  return (
    <AppContextProvider>
      <Header />
      <Overview />
      <ProductCardLists />
      <Qna />
      <Ratings />
    </AppContextProvider>
  );
}

export default App;
