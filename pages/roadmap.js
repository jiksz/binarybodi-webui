import Head from 'next/head'

export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">

      <Head>
        <title>Roadmap | Binary Bodi</title>
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
          <a href="/home" className=""><img src="images/logobodi.png" width="108" alt="" className="logo-image" /></a>
          <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
            <a href="/home" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">Home</a>
            <a href="/mint" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">Mint</a>
            <a href="/bodi" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">Genesis</a>
            <a href="/syndicate" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">Syndicate </a>
            <a href="faq" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">FAQ</a>
            <a href="/roadmap" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">Roadmap</a>
            <a href="/about" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">About</a>
          </nav>
        </div>
      </div>
      <div className="md:w-2/3 w-4/5 " id="about">
        <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
          <div className="lg:w-1/3 w-3/4">
            <br></br><br></br>
            <h1 className="text-6xl montserrat text-blau ">Roadmap </h1>
          </div>
        </div>
        <div id="gallery" className="   mx-6 py-6">
          <div className="flex flex-wrap  items-center mx-6   py-6 ">
            <div className="mt-6 border-b-2 py-6">
              <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                <p className="text-xl text-white my-6  Poppitandfinch">
                  The road map for Binary Bodi is collaborative and will be decided by Bodi holders. With imaginative ideas, adequate resources and coordination, we believe we can bring Binary Bodi to every vertical of popular culture!<br></br><br></br><br></br> Binary Bodi will become operational once the mint  period is over. Each Bodi-holder will be able to claim all future drops and contents for free. A collaborative social experiment for the cryptosphere. A members-only society  for the discerning and degenrative minds of crypto twitter. </p>
              </div>
            </div>
            <div id="traits" className="flex flex-wrap justify-around  mx-6 py-6">
              <div className="lg:w-/2 w-/4">
                <br></br><br></br>
                <p className="text-blau Montserrat-Light text-2xl">Phase 1 | June 2022
                </p>
                <p className="text-xl text-white my-6  Poppitandfinch">Issuance of  Syndicate Pass.
                </p>
                <p className="text-blau Montserrat-Light text-2xl">Phase 2  |  Jully 2022
                </p>
                <p className="text-xl text-white my-6  Poppitandfinch"> BinaryBodi Chapter#1 Release.
                </p>
                <p className="text-blau Montserrat-Light text-2xl">Phase 3  | Q3 2022
                </p>
                <p className="text-xl text-white my-6  Poppitandfinch"> Full chapters and gameplay
                </p>
                <p className="text-blau Montserrat-Light text-2xl">Phase 4 | Q1 2023
                </p>
                <p className="text-xl text-white my-6  Poppitandfinch">
                  Native Social Market Place </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-full border-b-2	pb-6">
          <a href="/home" className=""><img src="images/logobodi.png" width="108" alt="" className="logo-image" /></a>
          <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
            <a href="/home" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">Home</a>
            <a href="/mint" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">Mint</a>

            <a href="faq" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">FAQ</a>
            <a href="/roadmap" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">Roadmap</a>
            <a href="/about" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">About</a>

            <a href="https://discord.gg/QtNPdpZKZE" className="text-1xl Poppitandfinchsans text-blau   m-6">Discord</a>
            <a href="https://twitter.com/binarybodi" className="text-1xl Poppitandfinchsans text-blau  m-6">Twitter</a>
            <a href="https://linktr.ee/binarybodi" className="text-1xl Poppitandfinchsans text-white hover:text-black m-6">Communities</a>
          </nav>
        </div>
      </div>
      <p className="text-1xl text-white my-6  Poppitandfinch">All rights granted (c) <span className="text-blau text-1xl Poppitandfinchsans">Binary Bodi </span> Fork it  <a href="https://github.com/zibits/binarybodi" className="text-blau text-1xl Poppitandfinchsans">Github </a></p>
    </div>
  )
}
