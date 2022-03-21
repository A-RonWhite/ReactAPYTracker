import React, { useEffect, useState } from "react";
import Farmer from "./components/Farmer";
import basisLogo from "./images/basis-logo.png";
import franciumLogo from "./images/francium-logo.png";
import tulipLogo from "./images/tulip-logo.svg";
import "./App.css";

interface currAPY {
  basis: number;
  francium: number;
  tulip: number;
}

function App() {
  const [apy, setAPY] = useState<Partial<currAPY>>({});
  const [totalAPY, setTotalAPY] = useState<Partial<any>>({
    totalAvg: {
      basis: 0,
      francium: 0,
      tulip: 0,
    },
  });
  const [monthlyAPY, setMonthlyAPY] = useState<Partial<any>>({
    monthAvg: {
      basis: 0,
      francium: 0,
      tulip: 0,
    },
  });

  useEffect(() => {
    fetchAPY();
    //call api every 2 and a half mins
    setInterval(() => fetchAPY(), 150000);

    fetchAverageAPY();
    setInterval(() => fetchAverageAPY(), 600000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAPY = () => {
    fetch(
      `https://react-api-feed.herokuapp.com/apy?API_KEY=${process.env.REACT_APP_APY_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data !== undefined || null) {
          console.log(data);
          setAPY(data);
          console.log(apy);
        }
      });
  };

  const fetchAverageAPY = () => {
    fetch(
      `https://react-api-feed.herokuapp.com/avg-apy?API_KEY=${process.env.REACT_APP_APY_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.length !== 0) {
          setTotalAPY(data.totalAvg);
          setMonthlyAPY(data.monthAvg);
        }
      });
  };

  return (
    <div className="App">
      <main className="container">
        <Farmer
          title="Basis"
          farmerLogo={basisLogo}
          farmerAPY={apy.basis}
          monthlyAPY={monthlyAPY.basis}
          totalAPY={totalAPY.basis}
          yieldTitle={"Single-Sided Staking"}
          backgroundColor={
            "radial-gradient(circle, rgba(64,64,64,1) 0%, rgba(41,41,41,1) 100%)"
          }
        />
        <Farmer
          title="Francium"
          farmerLogo={franciumLogo}
          farmerAPY={apy.francium}
          monthlyAPY={monthlyAPY.francium}
          totalAPY={totalAPY.francium}
          yieldTitle={"Lending"}
          backgroundColor={
            "#090017 linear-gradient( 136deg, rgba(217, 51, 137, 0.4) 0%, rgba(59, 195, 243, 0.4) 50%, rgba(15, 255, 135, 0.4) 100% )"
          }
        />
        <Farmer
          title="Tulip"
          farmerLogo={tulipLogo}
          farmerAPY={apy.tulip}
          monthlyAPY={monthlyAPY.tulip}
          totalAPY={totalAPY.tulip}
          yieldTitle={"Lending"}
          backgroundColor={"linear-gradient(315deg,#001426,#042e4f)"}
        />
      </main>
    </div>
  );
}

export default App;
