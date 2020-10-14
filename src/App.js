import React ,{lazy, Suspense} from 'react';
import {Redirect, Switch, Route} from "react-router-dom";
import ReceipeCard from './components/receipe-card';
import {HOME, PAYMENT_PAGE} from './constants/RoutesEnum';
import LoaderComp from './components/loading';

const ReceipeListComp = lazy(() => import('./pages/RceipeList'));
const PaymentPageComp = lazy(() => import('./pages/payment'));

function App() {
  return (
    <Suspense fallback={<LoaderComp></LoaderComp>}>
      <Switch>
        <Route exact path={HOME} component={ReceipeListComp}/>
        <Route exact path={PAYMENT_PAGE} component={PaymentPageComp}/>
        <Redirect to={HOME}/>
      </Switch>
    </Suspense>

  );
}

export default App;
