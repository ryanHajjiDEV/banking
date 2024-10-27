import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BankTabItem } from "./BankTabItem";
import BankInfo from "@/components/BankInfo";
import TransactionsTable from "./TransactionsTable";
import { Pagination } from "./Pagination";

const RecentTransactions = ({
  accounts,
  transactions = [],
  appwriteItemId,
  page = 1,
}: RecentTransactionsProps) => {
  const rowsPerPage = 10;
  const totalPages = Math.ceil(transactions.length / rowsPerPage);

  const indexOfLastTransaction = page * rowsPerPage;
  const indexofFirstTransaction = indexOfLastTransaction - rowsPerPage;

  const currentTransactions = transactions.slice(
    indexofFirstTransaction,
    indexOfLastTransaction
  );

  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="recent-transactions-label">Recent transactions</h2>
        <Link
          href={`/transaction-history/?id=${appwriteItemId}`}
          className="view-all-btn"
        >
          View All
        </Link>
      </header>

      <Tabs defaultValue="{appwriteItemId}" className="w-full mb-2">
        <TabsList className="recent-transactions-tablist">
          {accounts.map((account: Account) => (
            <TabsTrigger key={account.id} value={account.appwriteItemId}>
              <BankTabItem
                key={account.id}
                account={account}
                appwriteItemId={appwriteItemId}
              />
            </TabsTrigger>
          ))}
        </TabsList>

        {accounts.map((account: Account) => (
          <TabsContent
            value={account.appwriteItemId}
            key={account.id}
            className="space-y-4"
          >
            <div className="mb-10">
              <BankInfo
                account={account}
                appwriteItemId={appwriteItemId}
                type="full"
              />
            </div>

            <TransactionsTable transactions={currentTransactions} />

            {totalPages > 1 && (
              <div className="my-3 w-full">
                <Pagination totalPages={totalPages} page={page} />
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default RecentTransactions;
