// Imports from React & Next
import React from "react";
import Head from "next/head";

// Local Component Imports
import { ProductCarousel, SearchBar } from "@/components/home";

// Service Imports
import { IProduct, products } from "@/services/products";

interface IHome {
  products: IProduct[];
}

function Home(props: IHome) {
  const { products } = props;

  return (
    <div className="h-[100%]">
      <div className="h-[10%]">
        <SearchBar />
      </div>
      <div className="h-[90%]">
        <ProductCarousel products={products} />
      </div>
    </div>
  );
}

interface IHomePage extends IHome {}

// Page Container
function HomePage(props: IHomePage) {
  const { products } = props;

  return (
    <>
      {/* For SEO */}
      <Head>
        <title>Home | BrandName</title>
      </Head>

      {/* Actual Page */}
      <Home products={products} />
    </>
  );
}

// Passing the props from the server side for it to render on server-side
export const getServerSideProps = async () => {
  return {
    props: {
      products,
    },
  };
};

export default HomePage;
