import React from "react";

import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="You own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, storem collect NFTs, exchange & earn crypto.
        Join 25+ million people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interfaxe MarketPlace"
        description="Experience a buttery UI of ProNef NFT MarketPlace. 
        Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deplyment"
        description="ProNef is built using Expo which runs natively on all users devices. You can easily get yoir app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center flex-col bg-primary text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by <span className="bold">Satish Kumar</span>
        </p>
      </div>
    </>
  );
};

export default App;
