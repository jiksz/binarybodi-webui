import Head from 'next/head'
export default function Home() {
  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Bodi | Binary Bodi</title>
        <link rel="icon" href="/images/fab.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/fav144.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/fab.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta property="og:title" content="BinaryBodi" key="ogtitle" />
        <meta property="og:description" content="Metaverse Press Syndicate" key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://binarybodi.xyz" key="ogurl" />
        <meta property="og:site_name" content="https://binarybodi.xy" key="ogsitename" />
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta property="twitter:domain" content="BinaryBodi" key="twdomain" />
        <meta property="twitter:url" content="https://binarybodi.xyz" key="twurl" />
        <meta name="twitter:title" content="BinaryBodi" key="twtitle" />
        <meta name="twitter:description" content="The Oracle of Binarybodi is a network of countercultural newspapers and magazines. " key="twdesc" />
      </Head>
      <div >
        <div className="flex items-center justify-between w-full border-b-2	pb-6">
          <a href="/home" className=""><img src="images/logobodi.png" width="108" alt="" className="logo-image" /></a>
          <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
            <a href="/home" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">Home</a>
            <a href="/mint" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">Mint</a>

            <a href="faq" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">FAQ</a>
            <a href="/roadmap" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">Roadmap</a>
            <a href="/about" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">About</a>


            <a href="https://linktr.ee/binarybodi" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">Communities</a>
          </nav>
        </div>
      </div>
      <div className="md:w-1/2 w-1/2 " id="about">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between w-full 	pb-6">
          <div className="lg:w-1/2 w-3/4">
            <h1 className="text-5xl montserrat text-blau ">Binary Bodi</h1>
            <p className="text-2xl text-white my-6  Poppitandfinch">Open-access Singularity in the Metaverse.</p>
          </div>
          <img className="lg:w-1/2 w-3/4" src="images/fewfw.png" alt="" title="" width="300px" className="feature-image" />
        </div>
      </div>

      <div className="sm:w-1/2 w-4/5 py-6 " id="about">
        <div className="flex flex-wrap lg:flex-nowrap justify-around ">
          <div className="mt- py-6">



            <p className="text-2xl text-white my-6  Poppitandfinch">

              Bodi means the knowledge or wisdom, or awakened intellect by which a man becomes a buddha the illuminated or enlightened intellect. Binary here represents the Metaverse. Binarybodi emphasizes the inherent potential of every sentient being to become a Buddha. So essentially Binarybodi means Awakening through Metaverse.


            </p>

            <p className="text-2xl text-white my-6  Poppitandfinch">Each Bodi is unique and programmatically generated from over 15 layers, including expression, headwear, clothing, and more. They are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. There will only ever exist 7777 Binary Bodi's. Purchasing a Bodi costs 0.07 ETH.</p>
            <p className="text-2xl text-white my-6  Poppitandfinch">A fusion of reality and wisdom in the metaverse enables sentient beings to realize the inseparability of samsara and nirvana and the unity of subject and object. To attain a state of perfect freedom, in which one is awakened to the eternal.</p>
            <p className="text-2xl text-white my-6  Poppitandfinch">An experiment involving alchemy of universal dynamics, Generative art, and game theory. An attempt to shape the future of Gen Z Meta society via cultural, social, and linguistic multiverses.
            </p>


          </div>


        </div></div>




      <div className="md:w-2/3 w-4/5 " id="about">
        <br></br>
        <div className="flex items-center justify-between w-full border-b-2	pb-6">
          <a href="/home" className=""><img src="images/logobodi.png" width="108" alt="" className="logo-image" /></a>

          <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
            <a href="/home" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">Home</a>
            <a href="/mint" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">Mint</a>

            <a href="faq" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">FAQ</a>
            <a href="/roadmap" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">Roadmap</a>
            <a href="/about" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">About</a>

            <a href="https://discord.gg/QtNPdpZKZE" className="text-1xl Poppitandfinchsans text-blau   m-6">Discord</a>

            <a href="https://linktr.ee/binarybodi" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">Communities</a>
          </nav>
        </div>
      </div>
      <p className="text-1xl text-white my-6  Poppitandfinch">All rights granted (c) <span className="text-blau text-1xl Poppitandfinchsans">Binary Bodi </span> Fork it  <a href="https://github.com/zibits/binarybodi" className="text-blau text-1xl Poppitandfinchsans">Github </a></p>
    </div>
  )
}
