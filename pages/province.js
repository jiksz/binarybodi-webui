import Head from 'next/head'

export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">

<Head>
                <title>Province | Binary Bodi</title>
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
                <a href="/chapters" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Oracle</a>
                <a href="faq" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">FAQ</a>
                <a href="/roadmap" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">Roadmap</a>
                <a href="/about" className="text-2xl Poppitandfinchsans text-white hover:text-black m-6">About</a>
              </nav>
            </div>
          </div>
        <div className="md:w-2/3 w-4/5 " id="about">
       <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                <div className="lg:w-1/3 w-3/2">  
                <br></br><br></br>
       <h1 className="text-6xl montserrat text-blau ">Provable Fairness </h1>
         </div>
          </div>
          <div id="gallery" className="   mx-6 py-6">
                <div className="flex flex-wrap  items-center mx-6   py-6 ">
                  <div className="mt-6 border-b-2 py-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
          <p className="text-xl text-white my-6  Poppitandfinch">
          To make sure no funny business goes on in the minting period, the tokens will be sorted in the following manner. Additionally no core team members will be allowed to shop tokens on secondary in the pre-reveal period. </p>
             </div>
            </div>
          <div id="traits" className="flex flex-wrap justify-around  mx-6 py-6">
          <div className="lg:w-/2 w-/4">
               <br></br><br></br>
                    <p className="text-blau Montserrat-Light text-2xl">Randomizing the metadata
                    </p><br></br>
                     <p className="text-blau Montserrat-Light text-2xl">Sort all tokens by the SHA-256 sum of the GIF itself
                  </p><br></br>
                    <p className="text-blau Montserrat-Light text-2xl">Shuffle using Ruby’s Array#shuffle(Random.new(SEED))
                    </p><br></br>
                     <p className="text-blau Montserrat-Light text-2xl"> BinaryBodi Chapter#1 Release.
                   </p><br></br>
               <p className="text-blau Montserrat-Light text-2xl">Seed is 14264359 (block number at time of shuffle)
                    </p><br></br>
                     <p className="text-blau Montserrat-Light text-2xl">Rotate list by community supplied number X (Array#cycle)
                    </p><br></br>
            <p className="text-blau Montserrat-Light text-2xl">11944, the number of BING BONG reactions to this post at time of shuffle.
                    </p><br></br>
                     <p className="text-blau Montserrat-Light text-2xl"> 
                     Generate provenance hash, save to contract </p><br></br>
                     <p className="text-blau Montserrat-Light text-2xl">
                    Provenance hash is the SHA-256 of the final order of the all the tokens strung together.
                    </p><br></br>
                     <p className="text-blau Montserrat-Light text-2xl"> 
                     Let list sale be open for 1 hour, then mint 78 tokens in one transaction…</p>
                    </div> 
                </div>
                  </div>    
                </div>
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
