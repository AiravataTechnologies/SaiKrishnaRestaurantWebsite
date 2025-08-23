import React from "react";
import { Router, Route, Switch } from "wouter";
import Home from "./pages/Home";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import MenuPage from "./pages/MenuPage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/menu" component={MenuPage} />
        <Route path="/blog" component={BlogPage} />
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
