import React from "react";

interface farmerProps {
  title: string;
  farmerLogo: string;
  farmerAPY: number | undefined;
  monthlyAPY: number | undefined;
  totalAPY: number | undefined;
  yieldTitle: string;
  backgroundColor: string;
}

export default function Farmer({
  title,
  farmerLogo,
  farmerAPY,
  monthlyAPY,
  totalAPY,
  backgroundColor,
  yieldTitle,
}: farmerProps) {
  return (
    <div>
      <h1>{title}</h1>
      <div className="farmerWrapper" style={{ background: backgroundColor }}>
        <div className="titleWrapper">
          <img src={farmerLogo} height={80} alt="" />
        </div>
        <div className="statsWrapper">
          <div className="stats">
            <p>APY:</p>
            <p>{farmerAPY}%</p>
          </div>
          <div className="stats">
            <p>30d avg:</p>
            <p>{monthlyAPY}%</p>
          </div>
          <div className="stats">
            <p>Total:</p>
            <p>{totalAPY}%</p>
          </div>
        </div>
        <div className="subTitle">
          <p>{yieldTitle}</p>
        </div>
      </div>
    </div>
  );
}
