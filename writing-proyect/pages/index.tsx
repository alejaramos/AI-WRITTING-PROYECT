import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/SideBar"

const Home: NextPage = () => {

  return (
    <div className="bg-indigo-100 mx-auto h-screen">
    <Sidebar></Sidebar>
    <div>
  
    </div>
    </div>
  );
};

export default Home;
