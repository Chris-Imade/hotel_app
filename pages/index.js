import Head from 'next/head';
import AboutSect from '../components/AboutSect';
import Clients from '../components/Clients';
import Footer from '../components/Footer';
import LuxSec from '../components/LuxSec';
import HeaderSec from "../components/HeaderSec";
// import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="bg-gray-300">
      <Head>
        <title>Hotel app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="over__head">
        <main className="text-white pt-14 flex flex-col justify-items-center items-center">
            <div className="top flex flex-col justify-items-center items-center">
              <h1 className="text-6xl font-bold">Rex Rene</h1>
              <h4 className="text-xl font-bold">Hotel and Suit</h4>
            </div>
            <div className="text-xs mt-8 middle flex flex-col justify-items-center items-center">
              <div className="text-sm bot_mid text-center">
                <p><span className="text-white text-sm">Developed By:</span>SoftWeb Web Services</p>
                <p><span className="text-white text-sm">Client:</span> Monalisa Hotel design</p>
              </div>
            </div>
            <div className="text-xs mt-8 bottom text-center">
                <p>01 <br />Main Page</p>
            </div>
        </main>
      </div>

      <HeaderSec />
      <AboutSect />
      <LuxSec />
      <Clients />


      <footer className="">
        <Footer />
      </footer>
    </div>
  )
}
