import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Home = lazy(() => import('pages/home'));

const BaseRouter: React.FC = () => {
  return (
    <Suspense fallback={<div>読込中…</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};

export default BaseRouter;
