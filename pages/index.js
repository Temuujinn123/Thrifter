import Head from "next/head";
import Header from "../Components/header";
import Container from "../Components/container";
import Banner from "../Components/banner";
import { HomeMarket } from "../Components/homeMarket";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thrifter</title>
      </Head>
      <Header />
      <Banner />
      <div className="mt-20"></div>
      <Container>
        <HomeMarket />
      </Container>
    </div>
  );
}
