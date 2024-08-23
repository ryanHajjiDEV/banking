import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Ryan",
    lastName: "Hajji",
    email: "ryanhajji@gmail.com",
  };
  return (
    <div>
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstName || "Guest"}
              subtext="Access and manage your accounts and transactions efficiently"
            />

            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250.35}
            />
          </header>
          RECENT TRANSACTIONS
        </div>

        <RightSideBar user={loggedIn} transactions={[]} banks={[{currentBalance: 123.50}, {currentBalance: 500.12}]} />
      </section>
    </div>
  );
};

export default Home;
