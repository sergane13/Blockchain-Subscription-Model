import { ethers } from "ethers";
import { useEffect, useState } from "react";

import MetaMask from "../components/metamaskConnection.js";
import NavBar from "../components/navbar.js"
import MainPage from "../components/mainPage.js";
import Footer from "../components/footer.js";

export default function Home() {

    return(
        <>
            <NavBar>
                <MetaMask></MetaMask>
            </NavBar>
            <MainPage/>
            <Footer/>
        </>
    );
}