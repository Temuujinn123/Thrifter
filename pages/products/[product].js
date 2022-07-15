import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { ClothCardData } from "../../dummyData/clothCard";
import { MySwiper } from "../../Components/swiper";
import Container from "../../Components/container";
import Header from "../../Components/header";
import Button from "../../Components/button";
import { ProductDesc } from "../../Components/productDesc";
import { Footer } from "../../Components/footer";
import Link from "next/link";

const Product = () => {
  const router = useRouter();
  const product = router.query.product;

  const [isHeartCLicked, setIsHeartCLicked] = useState(false);

  return (
    <>
      <Head>
        <title>{product}</title>
      </Head>
      <Header normal extraNavBg="bg-[#F2E7E2] border border-[#dad0cc]" />
      <div className="mt-0 md:mt-[70px]"></div>
      <div className="bg-[#F2E7E2] pt-6 md:pt-0 overflow-hidden">
        <div className="py-[15px] border-b border-[#dad0cc] hidden md:block">
          <Container>
            <nav className="text-[13px] xl:text-[16px] leading-[17px] text-[#262e39] tracking-[.02em] font-bold flex items-center">
              <Link href="/">
                <a className="underline">Home</a>
              </Link>
              <span className="text-2xl mx-[14px]">
                <MdOutlineKeyboardArrowRight />
              </span>
              Suit Jacket
            </nav>
          </Container>
        </div>
        <Container>
          <div className="pt-0 md:pt-[30px]">
            <div className="text-center px-[15px] pb-5 block md:hidden">
              <h1 className="text-[24px] leading-[26px] font-bold text-[#262e39] tracking-[.02em]">
                Balmain
              </h1>
              <h2 className="mt-[6px] text-[24px] leading-[26px] font-medium text-[#262e39] tracking-[.02em]">
                Suit Jacket
              </h2>
            </div>
            <div className="block md:flex">
              <div className="w-full md:w-[53%] relative">
                <MySwiper data={ClothCardData} />
              </div>
              <div className="pt-[30px] px-[15px] md:pt-0 md:pl-[43px] md:pr-0 w-auto md:w-[47%]">
                <div className="text-left pb-5 xl:pb-[29px] hidden md:block">
                  <h1 className="text-[24px] xl:text-[42px] leading-[26px] xl:leading-[51px] font-bold text-[#262e39] tracking-[.02em]">
                    Balmain
                  </h1>
                  <h2 className="mt-[6px] text-[24px] xl:text-[32px] leading-[26px] xl:leading-[39px] font-medium text-[#262e39] tracking-[.02em]">
                    Suit Jacket
                  </h2>
                </div>

                <div className="block xl:flex">
                  <div className="mb-[20px] mr-0 xl:mr-[50px]">
                    <h1 className="text-[#252d3a] text-[1rem] font-[500] md:font-bold mb-0 md:mb-1 tracking-[1.6px] leading-[19px] text-center md:text-left">
                      Size
                    </h1>
                    <p className="text-center md:text-left text-[#969696] text-[14px] font-medium tracking-[1.4px] leading-[18px] capitalize">
                      47 XXX Large
                    </p>
                  </div>
                  <div className="mb-[20px]">
                    <h1 className="text-[#252d3a] text-[1rem] font-[500] md:font-bold mb-0 md:mb-1 tracking-[1.6px] leading-[19px] text-center md:text-left">
                      Condition
                    </h1>
                    <p className="mb-2 text-center md:text-left text-[#969696] text-[14px] font-medium tracking-[1.4px] leading-[18px] capitalize">
                      Good Condition
                    </p>
                    <p className="text-center md:text-left text-[#969696] text-[14px] font-medium tracking-[1.4px] leading-[18px] capitalize">
                      Minor Mark
                    </p>
                  </div>
                </div>
                <div className="mt-[10px] xl:mt-[38px] py-[10px] xl:py-[17px] px-[15px] flex border-t border-b border-[#dad0cc] items-center justify-between md:justify-start">
                  <div className="h-fit">
                    <span className="text-[18px] xl:text-[22px] font-bold leading-[27px] tracking-[.02em] text-[#262e39] text-center">
                      $99.00
                    </span>
                  </div>
                  <div className="ml-5 flex flex-wrap items-center">
                    <Button title="Add to card" long />
                    <div className="text-center">
                      <span
                        className="m-[10px] relative z-10 text-[#d76a3b] text-[35px] text-center inline"
                        onClick={() => setIsHeartCLicked(!isHeartCLicked)}
                      >
                        <AiFillHeart
                          className={`${isHeartCLicked ? "inline" : "hidden"}`}
                        />
                        <AiOutlineHeart
                          className={`${isHeartCLicked ? "hidden" : "inline"}`}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ProductDesc
                title="Description"
                color="Black"
                material="wool · viscose · polyester"
                sku="SKU: 19286-129163-02"
              />
              <ProductDesc
                title="Returns"
                descTop="We provide a 30-day no quibble returns policy."
                descMid="If you are not happy with your item simply return it for a full refund."
                descBot="For more information please see our Refund Policy"
              />
              <ProductDesc
                title="Payment"
                descTop="We accept all major credit and debit cards."
                descMid="All transactions are 100% securely processed via the PayPal site."
                descBot="Thrift+ does not process or store any sensitive payment information."
              />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Product;
