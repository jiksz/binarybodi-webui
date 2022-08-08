import Head from 'next/head'
import Web3 from "web3";
import { useState, useEffect } from 'react';

import { ADDRESS, ABI } from "../config.js"

export default function Mint() {

  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false)

  const [walletAddress, setWalletAddress] = useState(null)

  // FOR MINTING
  const [how_many_mayan, set_how_many_mayan] = useState(1)

  const [mayanContract, setMayanContract] = useState(null)

  // INFO FROM SMART Contract

  const [totalSupply, setTotalSupply] = useState(0)

  const [saleStarted, setSaleStarted] = useState(false)

  const [mayanPrice, setMayanPrice] = useState(0)

  useEffect(async () => {

    signIn()

  }, [])

  async function signIn() {
    if (typeof window.web3 !== 'undefined') {
      // Use existing gateway
      window.web3 = new Web3(window.ethereum);

    } else {
      alert("No Ethereum interface injected into browser. Read-only access");
    }

    window.ethereum.enable()
      .then(function (accounts) {
        window.web3.eth.net.getNetworkType()
          // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
          .then((network) => { console.log(network); if (network != "rinkeby") { alert("You are on " + network + " network. Change network to mainnet or you won't be able to do anything here") } });
        let wallet = accounts[0]
        setWalletAddress(wallet)
        setSignedIn(true)
        callContractData(wallet)

      })
      .catch(function (error) {
        // Handle error. Likely the user rejected the login
        console.error(error)
      })
  }

  //

  async function signOut() {
    setSignedIn(false)
  }

  async function callContractData(wallet) {
    // let balance = await web3.eth.getBalance(wallet);
    // setWalletBalance(balance)
    const mayanContract = new window.web3.eth.Contract(ABI, ADDRESS)
    setMayanContract(mayanContract)

    const salebool = await mayanContract.methods.saleIsActive().call()
    // console.log("saleisActive" , salebool)
    setSaleStarted(salebool)

    const totalSupply = await mayanContract.methods.totalSupply().call()
    setTotalSupply(totalSupply)

    const mayanPrice = await mayanContract.methods.mayanPrice().call()
    setMayanPrice(mayanPrice)

  }

  async function mintMayan(how_many_mayan) {
    if (mayanContract) {

      const price = Number(mayanPrice) * how_many_mayan

      const gasAmount = await mayanContract.methods.mintMayan(how_many_mayan).estimateGas({ from: walletAddress, value: price })
      console.log("estimated gas", gasAmount)

      console.log({ from: walletAddress, value: price })

      mayanContract.methods
        .mint(how_many_mayan)
        .send({ from: walletAddress, value: price, gas: String(gasAmount) })
        .on('transactionHash', function (hash) {
          console.log("transactionHash", hash)
        })

    } else {
      console.log("Wallet not connected")
    }

  };
  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>MintBinary Bodi</title>
        <link rel="icon" href="/images/fab.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/fav144.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/fab.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta property="og:title" content="BinaryBodi" key="ogtitle" />
        <meta property="og:description" content="Curated collection of 7777 Bodi NFTs on Ethereum" key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://binarybodi.xyz" key="ogurl" />
        <meta property="og:site_name" content="https://binarybodi.xy" key="ogsitename" />
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta property="twitter:domain" content="BinaryBodi" key="twdomain" />
        <meta property="twitter:url" content="https://binarybodi.xyz" key="twurl" />
        <meta name="twitter:title" content="BinaryBodi" key="twtitle" />
        <meta name="twitter:description" content="Curated collection of 7777 Bodi NFTs on Ethereum " key="twdesc" />
      </Head>
      <div >
        <div className="flex items-center justify-between w-full border-b-2	pb-6">
          <a href="/home" className=""><img src="images/logobodi.png" width="190" alt="" className="logo-image" /></a><span></span>
          <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
            <a href="/home" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">Home</a>
            <a href="/mint" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">Mint</a>
            <a href="/bodi" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">Bodi</a>

            <a href="faq" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">FAQ</a>
            <a href="/roadmap" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">Roadmap</a>
            <a href="/about" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">About</a>
          </nav>
        </div>
      </div>

      <div className="md:w-2/3 w-4/5 " id="about">
        <div id="traits" className="flex flex-wrap justify-around  mx-6 py-6">
          <div className="lg:w-/2 w-/4">
            <p className="text-blau Montserrat-Light text-5xl">Syndicate Pass</p>
            <p className="text-xl text-white my-6  Poppitandfinch">A syndicate Pass or Bodi Syndic is designed to be the gatekeeper of the Oracle and MPS. Every pass holder can become a member of MPS, Syndicate members agreed to allow all other members to freely reprint their contents, to exchange loyalty rewards with each other, and to occasionally print an Issue of magazines and newspapers And anyone who agreed to those terms was allowed to join the syndicate, by minting or purchasing The Bodi PFP aka Syndicate Pass.
            </p>

            <p className="text-blau Montserrat-Light text-2xl"> ⦁	Gateway to Oracle and MPS.</p>
            <p className="text-blau Montserrat-Light text-2xl"> ⦁	Only syndicate members can make contents & Submissions</p>
            <p className="text-blau Montserrat-Light text-2xl"> ⦁	Permanent Syndicate Membership.</p>
            <p className="text-blau Montserrat-Light text-2xl"> ⦁	Genesis Edition free drops.</p>
            <p className="text-blau Montserrat-Light text-2xl"> ⦁	Unparallel royalty rewards and Loyalty points.</p>




            <div className="mt-6 border-b-2 py-6">

            </div><br></br>
            <p className="text-blau Montserrat-Light text-2xl">
              NFT Economics
            </p><br></br>
            <p class="Roboto-ThinItalic">Name: <span class="name"> Bodi Syndic</span> </p>
            <p class="Roboto-ThinItalic">Supply:<span class="name"> 7777</span> </p>
            <p class="Roboto-ThinItalic">Mint Price:<span class="name"> 0.1ETH</span> </p>
            <p class="Roboto-ThinItalic">Blockchain<span class="name"> ETH</span> </p>
            <p class="Roboto-ThinItalic">Royality:<span class="name"> 1.5%</span> </p>
            <p class="Roboto-ThinItalic">Max Mint:<span class="name"> 7 per wallet</span> </p>


          </div>

        </div>
      </div>
      <div id="traits" className="flex flex-wrap justify-around  mx-6 py-6">
        <div className="lg:w-/2 w-/4">
          <p className="text-blau Montserrat-Light text-5xl">Mint Now</p>
        </div></div>
      <div className="md:w-2/3 w-4/5 " id="about">
        <div className="md:w-2/3 w-4/5">
          <div className="mt-6 border-b-2 py-6">
            <div className="flex flex-col items-center">
              <span className="flex Poppitandfinchsans text-3xl text-white items-center bg-grey-lighter rounded rounded-r-none my-4 ">Net Pass Minted :  <span className="text-blau text-6xl"> {!signedIn ? <>-</> : <>{totalSupply}</>} / 7777</span></span>
              <div id="mint" className="flex justify-around  mt-8 mx-6">
                <span className="flex Poppitandfinchsans text-3xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3">Mint</span>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={how_many_mayan}
                  onChange={e => set_how_many_mayan(e.target.value)}
                  name=""
                  className="Poppitandfinchsans pl-4 text-4xl  inline bg-grey-lighter  py-2 font-normal rounded text-grey-darkest  font-bold"
                />
                <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">Bodi Syndic</span>
              </div>
              {saleStarted ?
                <button onClick={() => mintMayan(how_many_mayan)} className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white  ">Mint {how_many_mayan} Bodi Syndic for {(mayanPrice * how_many_mayan) / (10 ** 18)} ETH + GAS</button>
                : <button className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white ">Please connect with your wallet</button>
              }
            </div> <br></br><br></br>
            <p className="text-blau Montserrat-Light text-5xl">Syndicate Pass</p>
            <p className="text-xl text-white my-6  Poppitandfinch">Anyone holding a Syndicate Pass can contribute to the Oracle and produce revolutionary ideologies. empowering creators and brands to tell culture-defining stories and deliver unique access and experiences.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full border-b-2	pb-6">
          <a href="/home" className=""><img src="images/logobodi.png" width="190" alt="" className="logo-image" /></a>
          <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
            <a href="/home" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">Home</a>
            <a href="/mint" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">Mint</a>

            <a href="faq" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">FAQ</a>
            <a href="/roadmap" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">Roadmap</a>
            <a href="/about" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">About</a>
            <a href="https://discord.gg/QtNPdpZKZE" className="text-1xl Poppitandfinchsans text-blau   m-6">Discord</a>
            <a href="https://twitter.com/binarybodi" className="text-1xl Poppitandfinchsans text-blau  m-6">Twitter</a>

          </nav>
        </div>
      </div>
      <p className="text-1xl text-white my-6  Poppitandfinch">All rights granted (c) <span className="text-blau text-1xl Poppitandfinchsans">Binary Bodi </span> Fork it  <a href="https://github.com/zibits/binarybodi" className="text-blau text-1xl Poppitandfinchsans">Github </a></p>
    </div>
  )
}
