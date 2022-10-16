import React from "react";
import Navbar from "../Navbar";
import Insight from "./Insight";
import Cnm from "./Cnm";
import Lower from "./Lower";


function Dashboard() {

  return (
    <>
      <div className="dashboardBackground">
        <Navbar/>
        <div className="m-4 d-flex flex-column">
            <Insight />
            <Cnm />
            <Lower />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
