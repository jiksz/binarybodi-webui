import Head from 'next/head'
export default function Home() {
  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
<Head>
                <title>Genesis | Binary Bodi</title>
                <link rel="icon" href="/images/favicon-32x32.png" />
                <meta property="og:title" content="BinaryBodi"  key="ogtitle" />
                <meta property="og:description" content="Curated collection of 7777 Bodi NFTs on Ethereum" key="ogdesc" />
                <meta property="og:type" content="website" key="ogtype" />
                <meta property="og:url" content="https://binarybodi.xyz" key="ogurl"/>
                <meta property="og:site_name" content="https://binarybodi.xy" key="ogsitename" />
                <meta name="twitter:card" content="summary_large_image" key="twcard"/>
                <meta property="twitter:domain" content="BinaryBodi" key="twdomain" />
                <meta property="twitter:url" content="https://binarybodi.xyz" key="twurl" />
                <meta name="twitter:title" content="BinaryBodi" key="twtitle" />
                <meta name="twitter:description" content="Curated collection of 7777 Bodi NFTs on Ethereum " key="twdesc" />
</Head>
          <div >
            <div className="flex items-center justify-between w-full border-b-2	pb-6">
              <a href="/home" className=""><img src="images/143.png" width="110" alt="" className="logo-image" /></a><span></span>
              <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
                <a href="/home" className="text-2xl Poppitandfinch text-white hover:text-black m-6">Home</a>
                <a href="/mint" className="text-2xl Poppitandfinch text-white hover:text-black m-6">Mint</a>
                <a href="/bodi" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Genesis</a>
                <a href="/chapters" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Oracles</a>
                <a href="faq" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">FAQ</a>
                <a href="/roadmap" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Roadmap</a>
                <a href="/about" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">About</a>
              </nav>
            </div>
          </div>
          
        <div className="md:w-1/2 w-4/5 " id="about">
          <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                  <div className="">  
                  <br></br><br></br>
         <h1 className="text-6xl montserrat text-blau ">Genesis Editions </h1>
         
            </div>
            </div>
            <div id="traits" className="flex flex-wrap justify-around  mx-6 py-6">
              <p className="text-2xl text-white my-6  Poppitandfinch"> Genesis Issue of Bodi Oracle includes Seven Issues which is curated by the founders itself including the Art works and contents. Future Issues, contribution and direction of the Bodi Oracle is managed by the community. 
 </p>
             
          </div>
        </div>

  <div className="md:w-1/2 w-4/5 " id="about">
          <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                  <div className="">  
                  <br></br><br></br>
         <h1 className="text-6xl montserrat text-blau ">Bodi PFP </h1>
            </div>
            </div>
            <div id="traits" className="flex flex-wrap justify-around  mx-6 py-6">
              <p className="text-2xl text-white my-6  Poppitandfinch"> A collection of 7777 Bodi  PFP NFTS made from a combination of 150 unique traits. Binary Bodi's lives on the Ethereum blockchain in form of ERC-721 tokens. There are no Bonding curves, price tiers etc. Minting  a Binary Bodi costs 0.077 ETH.  Bodi pfp is issued as Syndicate Pass which is the permanent access token of Binary Bodi RPG.  </p>
              
              <p className="text-2xl text-white my-6  Poppitandfinch"> Syndicate  members agreed to allow all other members to freely reprint their contents, to exchange rewards with each other, and to occasionally print a Issue of magazines and newspapers And anyone who agreed to those terms was allowed to join the syndicate.  </p>
             
          
          </div>
        </div>
   

    <div className="md:w-2/3 w-4/5 " id="about">
           <br></br>
           <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <a href="/home" className=""><img src="images/502.svg" width="108" alt="" className="logo-image" /></a>
            <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
              <a href="/home" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Home</a>
                <button type="button" className="text-2xl Poppitandfinchsans text-white  m-6">Mint</button>
              <a href="/faq" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">FAQ</a>
              <a href="/about" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">About US</a>
              <a href="/province" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Province</a>
              <a href="https://discord.gg/QtNPdpZKZE" className="text-2xl Poppitandfinchsans text-blau   m-6">Discord</a>
              <a href="https://twitter.com/binarybodi" className="text-2xl Poppitandfinchsans text-blau  m-6">Twitter</a>
              <a href="https://linktr.ee/binarybodi" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Communities</a>   
            </nav>
          </div>
        </div>
        <p className="text-1xl text-white my-6  Poppitandfinch">All rights granted (c) <span className="text-blau text-1xl Poppitandfinchsans">Binary Bodi </span> Fork it  <a href="https://github.com/zibits/binarybodi" className="text-blau text-1xl Poppitandfinchsans">Github </a></p>
     </div>    
    )
  }
