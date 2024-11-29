import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Hero,
  PopularProducts,
  SuperQuality,
  SpecialOffer,
  Subscribe,
  Services,
  CustomerReviews,
  Footer,
} from "./sections";
import Nav from "./components/Nav";
import { ProductDetails } from "./components";

const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <main className="relative">
        <Nav />
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <Routes>
            <Route path="/" element={<PopularProducts />} />
            {/* <Route path="/ProductDetails" element={<ProductDetails />} /> */}
          </Routes>
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffer />
        </section>
        <section className="bg-pale-blue padding">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className=" bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </Router>
  </ChakraProvider>
);

export default App;
