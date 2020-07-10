import React, { Fragment, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import ErrorBoundary from "./components/ErrorBoundary";
import Container from "./styles/shared/Container";

// Melakukan lazy loading untuk setiap component
// Untuk code splitting sehingga page yang tidak di pake
// Tidak di gabung dalam chunk utama
const Home = lazy(() => import("./pages/Home"));
const CreateTodo = lazy(() => import("./pages/CreateTodo"));
const SingleTodo = lazy(() => import("./pages/SingleTodo"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <ErrorBoundary>
          <Suspense
            fallback={<h1 style={{ textAlign: "center" }}>Loading...</h1>}
          >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/create" component={CreateTodo} />
              <Route exact path="/todo/:id" component={SingleTodo} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Container>
    </Router>
  );
}

export default App;
