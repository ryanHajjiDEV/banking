import Link from "next/link";
import React from "react";
import Image from "next/image";
import BankCard from "./BankCard";
import { countTransactionCategories } from "@/lib/utils";
import Category from "./Category";
import { Button } from "./ui/button";

const RightSideBar = ({ user, transactions, banks }: RightSidebarProps) => {
  const categories: CategoryCount[] = countTransactionCategories(transactions);

  return (
    <aside className="right-sidebar">
      <section className="flex-col pb-8 ">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">
              {user.firstName[0]}
            </span>
          </div>

          <div className="profile-details">
            <h1 className="profile-name">
              {user.firstName}&nbsp;{user.lastName}
            </h1>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>

        <section className="banks">
          <div className="flex w-full justify-between">
            <h2 className="header-2">My Banks</h2>
            <Link href="/" className="flex gap-2">
            
            <Link href="/my-banks">
            <Button className="view-all-btn w-full mt-6 mb-[-2px] text-14 font-semibold text-gray-600 items-end">
              View all Cards
            </Button>
          </Link>
            </Link>
          </div>
          {banks?.length > 0 && (
            <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
              <div className="relative z-10">
                <BankCard
                  key={banks[0].$id}
                  account={banks[0]}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                />
              </div>
              {banks[1] && (
                <div className="absolute right-0 top-8 z-0 w-[90%]">
                  <BankCard
                    key={banks[1].$id}
                    account={banks[1]}
                    userName={`${user.firstName} ${user.lastName}`}
                    showBalance={false}
                  />
                </div>
              )}
            </div>
          )}
          

          <div className="mt-10 flex flex-1 flex-col gap-6">
            <h2 className="header-2">Top categories</h2>
            <p
              className="total-transactions-category mt-[-20px]
"
            >
              How many transactions you've made for each
            </p>
            <div className="space-y-5">
              {categories.map((category, index) => (
                <Category key={category.name} category={category} id={""} />
              ))}
            </div>
          </div>
        </section>

        <section className="transactions">
          <h2 className="header-2"></h2>
        </section>
      </section>
    </aside>
  );
};

export default RightSideBar;
