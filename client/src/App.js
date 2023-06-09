import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
//import Category from "./components/Category";
// import Order from "./components/Order";
import About from "./pages/About";
import Service from "./pages/Service";
import Services from "./pages/Services";
import User from "./pages/User";
import Footer from "./components/Footer";

// import logo from "./logo.svg";
import "./App.css";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  uri: "/graphql",
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <div className="page-container">
            <div className="header-container">
              <Navbar />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user" element={<User />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* <Route path="/order" element={<Order />} /> */}
              <Route path="/services" element={<Services />} />
              <Route path="/service/:serviceId" element={<Service />} />
              <Route path="/about" element={<About />} />
              <Route
                path="*"
                element={<h1 className="display-2">Wrong page!</h1>}
              />
            </Routes>
            <div className="footer-container">
              <Footer />
            </div>
          </div>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
