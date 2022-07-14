import { CgClose } from "react-icons/cg";
import Head from "next/head";
import Link from "next/link";
import Container from "../Components/container";
import Header from "../Components/header";
import Image from "next/image";

export default function WishList() {
  return (
    <>
      <Head>
        <title>Wishlist - Thrift</title>
      </Head>
      <Header className="shadow-sm" noExtraNav />
      <div className="mt-0 md:mt-[70px]"></div>
      <main>
        <div className="pt-16 pb-5 bg-[#f2e7e2]">
          <Container>
            <div className="py-4 border-b border-[#c4c4c4]">
              <h1 className="text-[#434655] block text-[20px] tracking-[.1em] font-bold leading-[1.4em] text-left">
                My Wishlist
              </h1>
            </div>

            {/* If wishlist is not empty [s] */}
            <div className="mt-[21px]">
              <div className="max-w-[900px] mx-auto w-full flex flex-wrap">
                <Link href="/">
                  <a className="wishlist-card flex flex-col justify-between cursor-pointer bg-white relative w-[28.8%] rounded-xl">
                    <span className="absolute right-2 top-2 w-[25px] h-[25px] flex justify-center items-center text-[grey] hover:text-black transition-[.3s] z-10">
                      <CgClose />
                    </span>
                    <div className="h-[180px] rounded-xl overflow-hidden wishlist-img-container">
                      <Image
                        src="https://cdn.shopify.com/s/files/1/1754/6207/products/19286-129163-02.jpg?v=1652494075"
                        alt=""
                        width="100%"
                        height="180px"
                        layout="fill"
                        className="z-0 rounded-xl"
                      />
                    </div>
                    <div className="relative z-10 bg-white rounded-b-xl">
                      <div className="mx-[15px] mt-[15px]">
                        <h1 className="font-[500] text-[14px] leading-[18px] text-center tracking-[.02em] text-[#262e39]">
                          Richard James Men`s Two Piece Suit
                        </h1>
                      </div>
                      <div className="text-[#333] font-bold text-[18px] flex items-center justify-center flex-wrap pt-[5px] px-[15px]">
                        <span className="inline-block font-[500] text-[14px] leading-[18px] text-center tracking-[.02em] text-[#262e39]">
                          $170.00
                        </span>
                      </div>
                      <div className="pt-[40px] px-[15px] pb-[15px] w-full rounded-b-xl">
                        <button className="w-full p-[6px] uppercase text-center bg-[#d76a3b] font-bold h-[47px] text-[12px] md:text-[16px] rounded-md text-white">
                          Add to card
                        </button>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            {/* If wishlist is not empty [s] */}

            {/* If wishlist is empty [s] */}
            <div className="p-[30px] flex flex-col justify-center items-center">
              <h3 className="my-[25px] text-[#434655] font-bold text-[18px] leading-[50px] ">
                Love It? Add To My Wishlist
              </h3>
              <p className="font-medium text-[14px] leading-[1.5em] tracking-[.05em] text-[#828282] max-w-[650px]">
                My Wishlist allows you to keep track of all of your favourites
                and shopping activity whether you`re on your computer or mobile.
                If you have previously created a wishlist, sign in to your
                Thrift+ account to access your wishlist.
              </p>
              <Link href="/">
                <a className="font-bold text-[14px] leading-[1rem] my-[35px] px-[30px] py-[13px] cursor-pointer bg-[#e66328] rounded-sm text-white">
                  Continue shopping
                </a>
              </Link>
            </div>
            {/* If wishlist is empty [e] */}
          </Container>
        </div>
      </main>
    </>
  );
}
