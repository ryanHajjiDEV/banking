"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Input } from "@/components/ui/input";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 441,
  height: 460,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
  borderRadius: theme.shape.borderRadius * 3.5,
  boxShadow: `0px 4px 7px rgba(0, 0, 0, 0.05)`,
}));

const BlackBoxPaper = styled(Paper)(({ theme }) => ({
  width: 1000,
  height: 620,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
  borderRadius: theme.shape.borderRadius * 2,
}));

const BBPInside = styled(Paper)(({ theme }) => ({
  width: 210,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
  borderRadius: theme.shape.borderRadius * 2,
}));
const BBPRow = styled(Paper)(({ theme }) => ({
  width: 260,
  height: 70,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
  borderRadius: theme.shape.borderRadius * 2,
}));
const RoundedRectangle = styled(Paper)(({ theme }) => ({
  width: 65,
  height: 18,
  ...theme.typography.body2,
  textAlign: "center",
  borderRadius: theme.shape.borderRadius * 100,
  boxShadow: `0px 4px 7px rgba(0, 0, 0, 0.05)`,
}));
const RoundedReview = styled(Paper)(({ theme }) => ({
  width: 380,
  height: 300,
  ...theme.typography.body2,
  textAlign: "center",
  borderRadius: theme.shape.borderRadius * 4,
  boxShadow: `0px 4px 7px rgba(0, 0, 0, 0)`,
}));

const LandingPage = () => {
  return (
    <>
      <main className="relative min-h-screen">
        <header>
          <nav className="bg-white py-0">
            <div className="flex items-center justify-between h-28 px-4 md:px-8 lg:px-20">
              <div className="flex items-center space-x-4">
                <Image
                  className="w-[120px] h-auto"
                  src="/icons/HorizonLogoWText.svg"
                  alt="Horizon logo with text"
                  width={120}
                  height={120}
                />
              </div>

              <div className="hidden md:flex space-x-[45px] font-light text-[16px] justify-center items-center flex-row min-h-screen absolute ml-[180px]">
                <Link href="/ErrorPage">Home</Link>
                <Link href="/">Features</Link>
                <Link href="/">Overview</Link>
                <Link href="/">Pricing</Link>
              </div>

              <div className="flex space-x-1">
                <Button className="text-[#388EFF] text-[13px] tracking-[-0.2px] hidden md:block">
                  <Link href="/sign-in">Your Horizon Dashboard</Link>
                </Button>
                <Button className="bg-[#388EFF] text-[#FFFFFF] text-[13px] hidden md:block">
                  <Link href="/sign-up">Open a new Horizon</Link>
                </Button>
              </div>
            </div>
          </nav>
        </header>

        <div className="relative flex flex-col justify-center items-center px-9 md:px-8">
          <h1 className="text-[75px] font-semibold text-center leading-[75px] tracking-[0px] mb-4 md:my-12">
            Your Digital Bank,
            <br /> Simple, Secure, Seamless
          </h1>
          <p className="text-[22px] font-light text-gray-600 text-center mb-4 md:my-[-30px]">
            Unlock financial freedom with Horizon. Enjoy instant access, top
            security, and a <br /> seamless banking experience just for you.
          </p>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 my-[65px]">
            <Button className="outline-btn w-full md:w-[250px] h-[55px]">
              <Link href="/sign-in">Your Horizon Dashboard</Link>
            </Button>

            <Button className="bg-[#388EFF] text-[#FFFFFF] text-[17px] w-full md:w-[250px] h-[55px]">
              <Link href="/sign-up">Open a new Horizon</Link>
            </Button>
          </div>
        </div>
        <div className="relative flex flex-col items-center">
          <div className="w-full sm:w-auto p-4 sm:px-8 max-w-[1400px]">
            <Image
              src="/icons/Screen.svg"
              alt="Screen"
              width={1400}
              height={1400}
              className="max-w-full h-auto"
            ></Image>
          </div>
          {/* Cool Facts Banner positioned further underneath Screen.svg */}
          <div className="z-20 mt-20 sm:mt-[110px] max-sm:p-10">
            <Image
              src="/icons/Banner.svg"
              alt="Cool Facts Banner"
              width={1000}
              height={1000}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </main>

      <section className="bg-[#FAFAFC] min-h-[1500px] flex flex-row items-center justify-center border-t border-[#dedede] stroke-4 mt-[100px] border-b">
        <div className="flex flex-col justify-center items-center mt-[80px]">
          <p className="font-semibold text-blue-450">
            LET'S GET DOWN TO DETAILS
          </p>
          <h2 className="font-semibold text-[40px] tracking-[-0.5px]">
            Welcome to a New World of Banking{" "}
          </h2>
          <p className="text-center text-[18px] font-normal tracking-[0.5px] text-gray-600 mt-1">
            We know the current online banks are average - that's why we took
            the time to design and test the <br /> most efficient and secure
            experience for you
          </p>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: 9,
              gap: 4,
            }}
          >
            <DemoPaper
              variant="elevation"
              sx={{
                border: "1px solid rgba(0,0,0,0.15)",
                flex: "1 1 calc(33.33% - 32px)",
                maxWidth: "441px",
              }}
            >
              <div className="">
                <Image
                  src="/icons/InteractiveTransactions.svg"
                  alt="Interactive Transactions"
                  width={390}
                  height={100}
                  className="mx-[9px] my-5"
                />
                <div
                  className="py-[-10px]
              "
                >
                  <div className="my-[200px]">
                    <Image
                      src="/icons/Transparency.svg"
                      alt="Transparency Tag"
                      width={100}
                      height={100}
                      className="absolute mt-[-30px] ml-2"
                    ></Image>
                  </div>

                  <h2 className="font-semibold text-[22px] tracking-[-0.1px] relative text-left mt-[-212px] pl-[8px]">
                    Interactive Transactions List
                  </h2>
                </div>

                <h2 className="mt-"></h2>
                <div>
                  <div>
                    <p className="font-medium text-[#6B6B6B] tracking-[-0.1px] relative text-left pl-[8px] text-[16px]">
                      See every transaction you've made with a simple and
                      elegant UI. Switch between Bank accounts and see the
                      amount and channel of your payment.
                    </p>
                  </div>
                </div>
              </div>
            </DemoPaper>
            <DemoPaper
              variant="elevation"
              sx={{
                border: "1px solid rgba(0,0,0,0.15)",
                flex: "1 1 calc(33.33% - 32px)",
                maxWidth: "441px",
              }}
            >
              <div className="">
                <Image
                  src="/icons/paymentTransfer.svg"
                  alt="Interactive Transactions"
                  width={390}
                  height={100}
                  className="mx-[9px] my-5"
                />
                <div
                  className="py-[-10px]
              "
                >
                  <div className="my-[264px]">
                    <Image
                      src="/icons/SimpleAndQuick.svg"
                      alt="Transparency Tag"
                      width={100}
                      height={100}
                      className="absolute mt-[-30px] ml-2"
                    ></Image>
                  </div>

                  <h2 className="font-semibold text-[22px] tracking-[-0.1px] relative text-left mt-[-212px] pl-[8px]">
                    Simple and Quick Payment Transfer
                  </h2>
                </div>

                <h2 className="mt-"></h2>
                <div>
                  <div>
                    <p className="font-medium text-[#6B6B6B] tracking-[-0.1px] relative text-left pl-[8px] text-[16px]">
                      Simply and quickly send money to any other user or your
                      own account. Pay back dinner or start saving for a
                      holiday, the freedom is yours.
                    </p>
                  </div>
                </div>
              </div>
            </DemoPaper>
            <DemoPaper
              variant="elevation"
              sx={{
                border: "1px solid rgba(0,0,0,0.15)",
                flex: "1 1 calc(33.33% - 32px)",
                maxWidth: "441px",
              }}
            >
              <div className="">
                <Image
                  src="/icons/PhonePlaidAuth.svg"
                  alt="Interactive Transactions"
                  width={390}
                  height={100}
                  className="mx-[9px] my-[-5px]"
                />
                <div
                  className="py-[-10px]
              "
                >
                  <div className="my-[165px]">
                    <Image
                      src="/icons/SecureAuth.svg"
                      alt="Transparency Tag"
                      width={100}
                      height={100}
                      className="absolute mt-[-30px] ml-2"
                    ></Image>
                  </div>

                  <h2 className="font-semibold text-[22px] tracking-[-0.1px] relative text-left mt-[-212px] pl-[8px]">
                    Plaid Authentication
                  </h2>
                </div>

                <h2 className="mt-"></h2>
                <div>
                  <div>
                    <p className="font-medium text-[#6B6B6B] tracking-[-0.1px] relative text-left pl-[8px] text-[16px]">
                      We use Plaid Authentication to securely connect to your
                      bank of choice. An effortless onboarding gets you to where
                      you need to be in seconds.
                    </p>
                  </div>
                </div>
              </div>
            </DemoPaper>
            <DemoPaper
              variant="elevation"
              sx={{
                border: "1px solid rgba(0,0,0,0.15)",
                flex: "1 1 calc(33.33% - 32px)",
                maxWidth: "441px",
              }}
            >
              <div className="">
                <Image
                  src="/icons/cards.svg"
                  alt="Interactive Transactions"
                  width={390}
                  height={100}
                  className="mx-[9px] my-5"
                />
                <div
                  className="py-[-10px]
              "
                >
                  <div className="my-[260px]">
                    <Image
                      src="/icons/Organisation.svg"
                      alt="Transparency Tag"
                      width={100}
                      height={100}
                      className="absolute mt-[-30px] ml-2"
                    ></Image>
                  </div>

                  <h2 className="font-semibold text-[22px] tracking-[-0.1px] relative text-left mt-[-212px] pl-[8px]">
                    Keep all your Accounts in one place
                  </h2>
                </div>

                <h2 className="mt-"></h2>
                <div>
                  <div>
                    <p className="font-medium text-[#6B6B6B] tracking-[-0.1px] relative text-left pl-[8px] text-[16px]">
                      Neatly organise all your card information in one place.
                      Click on any of the cards to view transaction history and
                      copy and paste its ID
                    </p>
                  </div>
                </div>
              </div>
            </DemoPaper>
            <DemoPaper
              variant="elevation"
              sx={{
                border: "1px solid rgba(0,0,0,0.15)",
                flex: "1 1 calc(33.33% - 32px)",
                maxWidth: "441px",
              }}
            >
              <div className="">
                <Image
                  src="/icons/Balance-Card-01.svg"
                  alt="Interactive Transactions"
                  width={390}
                  height={100}
                  className="mx-[9px] my-5"
                />
                <div
                  className="py-[-10px]
              "
                >
                  <div>
                    <Image
                      src="/icons/Balance-Card-02.svg"
                      alt="Interactive Transactions"
                      width={390}
                      height={100}
                      className="mx-[9px] my-[-11px]"
                    />
                  </div>

                  <div>
                    <Image
                      src="/icons/Holiday+3.svg"
                      alt="Group +3"
                      width={100}
                      height={100}
                      className="relative ml-[280px]"
                    />
                  </div>

                  <div className="my-[238px]">
                    <Image
                      src="/icons/Accesibility.svg"
                      alt="Transparency Tag"
                      width={100}
                      height={100}
                      className="absolute mt-[-245px] ml-2"
                    ></Image>
                  </div>

                  <h2 className="font-semibold text-[22px] tracking-[-0.1px] relative text-left mt-[-212px] pl-[8px]">
                    Easy to access Card Information
                  </h2>
                </div>

                <h2 className="mt-"></h2>
                <div>
                  <div>
                    <p className="font-medium text-[#6B6B6B] tracking-[-0.1px] relative text-left pl-[8px] text-[16px]">
                      Neatly organise all your card information in one place.
                      Click on any of the cards to view transaction history and
                      copy and paste its ID
                    </p>
                  </div>
                </div>
              </div>
            </DemoPaper>
            <DemoPaper
              variant="elevation"
              sx={{
                border: "1px solid rgba(0,0,0,0.15)",
                flex: "1 1 calc(33.33% - 32px)",
                maxWidth: "441px",
              }}
            >
              <div className="">
                <Image
                  src="/icons/SimpleOnboarding.svg"
                  alt="Interactive Transactions"
                  width={390}
                  height={100}
                  className="mx-[9px] my-5"
                />
                <div
                  className="py-[-10px]
              "
                >
                  <div className="my-[235px]">
                    <Image
                      src="/icons/ItsTooEasy.svg"
                      alt="Transparency Tag"
                      width={100}
                      height={100}
                      className="absolute mt-[-30px] ml-2"
                    ></Image>
                  </div>

                  <h2 className="font-semibold text-[22px] tracking-[-0.1px] relative text-left mt-[-212px] pl-[8px]">
                    Simple Onboarding
                  </h2>
                </div>

                <h2 className="mt-"></h2>
                <div>
                  <div>
                    <p className="font-medium text-[#6B6B6B] tracking-[-0.1px] relative text-left pl-[8px] text-[16px]">
                      A beautiful UI and simple form that'll get you into the
                      app in seconds.
                    </p>
                  </div>
                </div>
              </div>
            </DemoPaper>
          </Box>
          <Button className="bg-[#388EFF] text-white mt-[70px] px-[190px] py-[25px] text-[16px]">
            <Link href={"/sign-up"}>Open a new Horizon</Link>
            <Image
              src="/icons/RightArrow.svg"
              alt="Right Arrow"
              width={38}
              height={38}
            />
          </Button>
        </div>
      </section>
      <section className="bg-[#FFFFFF] min-h-[800px] flex flex-row items-center justify-center relative">
        <div className="relative mb-[500px]">
          <div className="flex flex-col">
            <h1 className="text-[48px] font-semibold leading-[55px] mr-[900px] mb-[500px]">
              Experience Seamless <br /> Banking Anytime, Anywhere
            </h1>
            <p className="text-[20px] text-gray-500 -mt-[480px] tracking-wide">
              Manage your finances easily with our secure banking app. Access{" "}
              <br />
              all features and make informed decisions with real-time data.
              Plaid <br /> authentication ensures your data is kept safe.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-[10px] mt-[40px] tracking-[0.4px] -my-[290px]">
            <div className="relative w-full flex items-center">
              <Image
                src="/icons/Tick.svg"
                alt="Blue Tick"
                width={21}
                height={20}
                className="mr-[10px]"
              />
              <p className="text-[20px] whitespace-nowrap mr-15">
                Advanced Security Measures
              </p>
            </div>

            <div className="relative w-full flex items-center">
              <Image
                src="/icons/Tick.svg"
                alt="Blue Tick"
                width={21}
                height={20}
                className="mr-[10px]"
              />
              <p className="text-[20px] whitespace-nowrap mr-15">
                24/7 Access to all your Accounts
              </p>
            </div>

            <div className="relative w-full flex items-center">
              <Image
                src="/icons/Tick.svg"
                alt="Blue Tick"
                width={21}
                height={20}
                className="mr-[10px]"
              />
              <p className="text-[20px] whitespace-nowrap mr-15">
                200+ Bank Choices (US and abroad)
              </p>
            </div>
            <div className="flex items-center space-x-2 pt-8">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-[500px] h-[55px] input-btn text-[50px] placeholder:text-[15.5px]"
              />
              <Button
                type="submit"
                className="bg-blue-450 text-white h-[55px] w-[55px] p-0 rounded-[10px]"
              >
                <Image
                  src="/icons/RightArrow.svg"
                  alt="Confirm Email"
                  width={10} // doesnt affect shit
                  height={10} // doesnt affect shit
                  className="w-[40px] h-[40px] object-contain"
                />
              </Button>
            </div>
          </div>
          <Image
            src="/icons/BanksList.svg"
            alt="Banks list"
            width={600}
            height={600}
            className="ml-[890px] -my-[520px] hidden lg:block"
          />
        </div>
      </section>
      <section className="min-h-[850px] h-[10px] bg-[#181818]">
        <div className="flex items-center justify-center h-full min-h-screen mr-[800px]">
          <BlackBoxPaper
            sx={{
              backgroundColor: "#252525",
              padding: "16px",
            }}
            className="mb-[125px] ml-[500px] px-10"
          >
            <div className="flex flex-col items-center w-full gap-2 mb-[15px]">
              <div className="flex justify-between gap-4 mt-[115px]">
                {" "}
                <BBPInside
                  className="flex-1 h-[173px]"
                  sx={{
                    backgroundColor: "#181818",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    width: "250px",
                  }}
                >
                  <div className="flex flex-row items-center">
                    <Image
                      src="/icons/Barclays.svg"
                      alt="743.33"
                      width={55}
                      height={55}
                    />

                    <div>
                      <h1 className="text-white mx-[9px] text-[15px] tracking-[0.1px]">
                        Barclays
                      </h1>
                    </div>
                    <div>
                      <Image
                        src="/icons/Three dots.svg"
                        alt="Three dots"
                        height={19}
                        width={19}
                        className="mx-[50px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="mt-[10px]">
                      <Image
                        src="/icons/Money1.svg"
                        alt="743.33"
                        width={135}
                        height={135}
                      />
                    </div>
                    <RoundedRectangle
                      sx={{
                        backgroundColor: "#252525",
                      }}
                      className="flex items-center mt-5 pl-2"
                    >
                      <div className="flex flex-row items-center">
                        <Image
                          src="/icons/BlueCirclePrimary.svg"
                          alt="Blue Circle Primary"
                          width={7}
                          height={7}
                        />
                        <div className="text-[#838383] font-light text-[10px] pl-[6px]">
                          <h2>Primary</h2>
                        </div>
                      </div>
                    </RoundedRectangle>
                  </div>
                </BBPInside>
                <BBPInside
                  className="flex-1 h-[173px] max-w-[300px]"
                  sx={{
                    backgroundColor: "#181818",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    width: "250px",
                  }}
                >
                  <div className="flex flex-row items-center">
                    <Image
                      src="/icons/Chase.svg"
                      alt="743.33"
                      width={68}
                      height={68}
                      className="-mx-2"
                    />

                    <div>
                      <h1 className="text-white mx-[13px] text-[15px] tracking-[0.1px]">
                        Chase
                      </h1>
                    </div>
                    <div>
                      <Image
                        src="/icons/Three dots.svg"
                        alt="Three dots"
                        height={19}
                        width={19}
                        className="mx-[60px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="mt-[10px]">
                      <Image
                        src="/icons/Money2.svg"
                        alt="1112.32"
                        width={140}
                        height={140}
                      />
                    </div>
                    <RoundedRectangle
                      sx={{
                        backgroundColor: "#252525",
                      }}
                      className="flex items-center mt-5 pl-2"
                    >
                      <div className="flex flex-row items-center">
                        <Image
                          src="/icons/PinkCircleSaving.svg"
                          alt="Pink Circle Saving"
                          width={7}
                          height={7}
                        />
                        <div className="text-[#838383] font-light text-[10px] pl-[8px]">
                          <h2>Saving</h2>
                        </div>
                      </div>
                    </RoundedRectangle>
                  </div>
                </BBPInside>
              </div>
              <BBPRow
                className="w-full h-[82px] mt-1 flex"
                sx={{
                  backgroundColor: "#181818",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="flex flex-row">
                  <Image
                    src="/icons/IshaanChadha.svg"
                    alt="Ishaan Chadha"
                    width={100}
                    height={100}
                    className="-mx-6"
                  />
                  <div className="flex flex-col text-left text-white mx-2 justify-center">
                    <h1 className="font-normal text-[16px] text-nowrap">
                      Ishaan Chadha
                    </h1>
                    <p className="text-[#a1a1a1] font-light text-[11px]">
                      Paying back dinner
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <h2 className="text-[#5CC264] font-normal text-[18px] ml-[217px] text-nowrap">
                      +£10.23
                    </h2>
                  </div>
                </div>
              </BBPRow>
              <BBPRow
                className="w-full h-[82px] mt-1 flex"
                sx={{
                  backgroundColor: "#181818",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="flex flex-row">
                  <Image
                    src="/icons/JeremyBoateng.svg"
                    alt="Jeremy Boateng"
                    width={100}
                    height={100}
                    className="-mx-6"
                  />
                  <div className="flex flex-col text-left text-white mx-2 justify-center">
                    <h1 className="font-normal text-[16px] text-nowrap">
                      Jeremy Boateng
                    </h1>
                    <p className="text-[#a1a1a1] font-light text-[11px] text-nowrap">
                      Thanks for the drive man!
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <h2 className="text-[#5CC264] font-normal text-[18px] ml-[197px] text-nowrap">
                      +£84.00
                    </h2>
                  </div>
                </div>
              </BBPRow>
            </div>
          </BlackBoxPaper>

          {/* Content 1 */}

          <div className="my-24 flex flex-col gap-[23vh] mx-[200px]">
            <div className="mt-[150px]">
              <Image
                src="/icons/Pen.svg"
                alt="Pen"
                width={60}
                height={60}
                className="mb-[220px] relative -ml-[3px]"
              />
              <h1 className="text-white font-semibold text-[28px] my-[-215px] text-nowrap">
                Great Design
              </h1>
              <p className="text-white font-[15px] absolute mt-[215px] text-nowrap">
                Stay up to date with the latest <br />
                features, enhancements, and fixes
              </p>
            </div>
            {/* Content 2 */}

            <div className="mb-[500px]">
              <Image
                src="/icons/Globe.svg"
                alt="Pen"
                width={60}
                height={60}
                className="mb-[220px] relative -ml-[3px]"
              />

              <h1 className="text-white font-semibold text-[28px] my-[-215px] text-nowrap">
                Transfer from Anywhere
              </h1>
              <p className="text-white font-[15px] absolute mt-[215px]">
                Send money from anywhere <br /> to anyone
              </p>
            </div>
          </div>
          {/* Content 3 */}

          <div className="flex flex-col gap-[23vh] -mx-[150px]">
            <div className="-mt-[280px]">
              <Image
                src="/icons/EasyToUse.svg"
                alt="Pen"
                width={60}
                height={60}
                className="mb-[220px] relative -ml-[3px]"
              />
              <h1 className="text-white font-semibold text-[28px] my-[-215px] text-nowrap">
                Easy to use
              </h1>
              <p className="text-white font-[15px] absolute mt-[215px]">
                Effortlessly integrate our Banking <br /> app with your current
                bank flow
              </p>
            </div>

            {/* Content 4 */}
            <div>
              <Image
                src="/icons/Streamlined.svg"
                alt="Pen"
                width={60}
                height={60}
                className="mb-[220px] relative -ml-[3px]"
              />
              <h1 className="text-white font-semibold text-[28px] my-[-215px] text-nowrap">
                Streamlined
              </h1>
              <p className="text-white font-[15px] absolute mt-[215px]">
                Gain valuable insights and make <br /> data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h1 className="flex justify-center items-center font-semibold text-[34px] my-[80px]">
            Don't take our word for it - Have a look!
          </h1>

          <p className="text-[20px] text-gray-500 tracking-wide flex items-center justify-center text-center -mt-[80px]">
            We're always happy to showcase what our customers have to say about
            us. Here are <br /> only a few testimonials that we have gathered.
          </p>
        </div>
        <div className="mt-16 flex flex-row gap-5 items-center justify-center">
          <RoundedReview
            variant="outlined"
            className="relative overflow-hidden gradient-border"
          >
            <div className="flex flex-row gap-[4px] pl-7 pt-8">
              <Image
                src="/icons/FilledStar.svg"
                alt="Filled Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/FilledStar.svg"
                alt="Filled Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/FilledStar.svg"
                alt="Filled Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/FilledStar.svg"
                alt="Filled Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/FilledStar.svg"
                alt="Filled Star"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p className="text-left text-[20px] ml-7 mt-8">
                "It fits our needs perfectly. It is <br /> definitely worth the
                investment. <br /> Your company is outstanding."
              </p>
            </div>
            <div className="flex flex-row ml-7 mt-10">
              <Image
                src="/icons/EllaJones.svg"
                alt="Ella Jones"
                width={52}
                height={52}
                className=""
              />
              <div className="flex flex-col text-center items-start justify-start ml-2">
                <p className="text-[18px] tracking-wide">Ella Jones</p>
                <p className="text-gray-400 text-[18px] mb-1">
                  Head of Accountancy
                </p>
              </div>
            </div>
          </RoundedReview>

          <RoundedReview variant="outlined">
            <div className="flex flex-row gap-[4px] pl-7 pt-8">
              <Image
                src="/icons/FilledStar.svg"
                alt="Filled Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/FilledStar.svg"
                alt="Filled Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/FilledStar.svg"
                alt="Filled Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/FilledStar.svg"
                alt="Filled Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/GrayedStar.svg"
                alt="Filled Star"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p className="text-left text-[20px] ml-7 mt-8">
                "I felt super safe when using this <br /> application. It's
                beautiful UI <br />
                allows me to easily navigate."
              </p>
            </div>
            <div className="flex flex-row ml-7 mt-10">
              <Image
                src="/icons/SylviaCP.svg"
                alt="Sylvia Campbell-Platt"
                width={52}
                height={52}
                className=""
              />
              <div className="flex flex-col text-center items-start justify-start ml-2">
                <p className="text-[18px] tracking-wide">
                  Sylvia Campbell-Platt
                </p>
                <p className="text-gray-400 text-[18px] mb-1  ">UI/UX</p>
              </div>
            </div>
          </RoundedReview>
          <RoundedReview variant="outlined">
            <div className="flex flex-row gap-[4px] pl-7 pt-8">
              <Image
                src="/icons/FilledStar.svg"
                alt="Filled Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/FilledStar.svg"
                alt="Filled Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/FilledStar.svg"
                alt="Filled Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/FilledStar.svg"
                alt="Filled Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/FilledStar.svg"
                alt="Filled Star"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p className="text-left text-[20px] ml-7 mt-8">
                "I felt that this app made my <br /> workflow easier. Everything{" "}
                <br /> became simpler for me. Thanks!"
              </p>
            </div>
            <div className="flex flex-row ml-7 mt-10">
              <Image
                src="/icons/EliFanum.svg"
                alt="Eli Fanum"
                width={52}
                height={52}
                className=""
              />
              <div className="flex flex-col text-center items-start justify-start ml-2">
                <p className="text-[18px] tracking-wide">Eli Fanum</p>
                <p className="text-gray-400 text-[18px] mb-1  ">Banker</p>
              </div>
            </div>
          </RoundedReview>
          <RoundedReview variant="outlined">
            <div className="flex flex-row gap-[4px] pl-7 pt-8">
              <Image
                src="/icons/FilledStar.svg"
                alt="Filled Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/FilledStar.svg"
                alt="Filled Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/FilledStar.svg"
                alt="Filled Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/FilledStar.svg"
                alt="Filled Star"
                width={24}
                height={24}
              />
              <Image
                src="/icons/GrayedStar.svg"
                alt="Filled Star"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p className="text-left text-[20px] ml-7 mt-8">
                "As a Uni Student, I need to <br /> manage my expenses. Horizon{" "}
                <br />
                helped me to do this with ease."
              </p>
            </div>
            <div className="flex flex-row ml-7 mt-10">
              <Image
                src="/icons/AliceQueen.svg"
                alt="Alice Queen"
                width={52}
                height={52}
                className=""
              />
              <div className="flex flex-col text-center items-start justify-start ml-2">
                <p className="text-[18px] tracking-wide">Alice Queen</p>
                <p className="text-gray-400 text-[18px] mb-1">Uni Student</p>
              </div>
            </div>
          </RoundedReview>
        </div>

        <div className="flex flex-row justify-center items-center mt-[100px] pb-[100px]">
          <Image
            src="/icons/Sponsors.svg"
            alt="Sponsors"
            width={1500}
            height={1500}
          />
        </div>
      </section>
      <section className="bg-[#FAFAFC] min-h-[515px] border-t border-[#dedede] stroke-4 mt-[100px] border-b">
        <div className="flex flex-col gap-1 items-center justify-center pt-[150px]">
          <p className="text-blue-600 font-bold">1% OF THE INDUSTRY</p>
          <h1 className="text-[40px] font-semibold">
            Welcome to your new digital reality
          </h1>
          <p className="text-gray-500 tracking-wide text-[17px]">
            Let us help you from feeling disappointed to feeling excellent with
            the <br /> best in the game. Sign up with Horizon and find your new
            feel.
          </p>
          <Button className="bg-[#388EFF] text-white py-[24px] text-[16px] w-[350px] mt-6">
            <Link href={"/sign-up"}>Open a new Horizon</Link>
            <Image
              src="/icons/RightArrow.svg"
              alt="Right Arrow"
              width={38}
              height={38}
            />
          </Button>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
