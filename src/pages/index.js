import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>E-commerce App</title>
      </Head>

      <Header />
      <div className="max-w-screen-xl mx-auto flex justify-center space-x-10">
          {/* Banner */}
          <Banner banner="1" />
          <Banner banner="2"/>
          {/* Product Feed */}
          
      </div>
    </div>
  );
}
