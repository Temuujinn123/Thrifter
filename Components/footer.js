import Container from "./container";
import LogoWhite from "../public/img/logo-white.webp";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="py-14 bg-[#e66328] text-white">
      <Container>
        <div className="flex justify-between px-10">
          <div>
            <div className="mb-2">
              <Image src={LogoWhite} alt="" width="240px" height="42px" />
            </div>
            <p className="mb-2 font-medium tracking-[.025em] leading-[1.6]">
              Join the Circular Fashion Revolution.
            </p>
          </div>
          <div className="flex justify-around w-full">
            <div>
              <h1 className="text-[21px] leading-[25px] tracking-[.5px] font-bold mb-6">
                ABOUT
              </h1>
              <ul>
                <li className="py-1">
                  <a href="" className="text-[13px] leading-[16px] font-medium">
                    About us
                  </a>
                </li>
                <li className="py-1">
                  <a href="" className="text-[13px] leading-[16px] font-medium">
                    Our story
                  </a>
                </li>
                <li className="py-1">
                  <a href="" className="text-[13px] leading-[16px] font-medium">
                    For charities
                  </a>
                </li>
                <li className="py-1">
                  <a href="" className="text-[13px] leading-[16px] font-medium">
                    For retailers
                  </a>
                </li>
                <li className="py-1">
                  <a href="" className="text-[13px] leading-[16px] font-medium">
                    Help
                  </a>
                </li>
                <li className="py-1">
                  <a href="" className="text-[13px] leading-[16px] font-medium">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-[21px] leading-[25px] tracking-[.5px] font-bold mb-6">
                MORE INFO
              </h1>
              <ul>
                <li className="py-1">
                  <a href="" className="text-[13px] leading-[16px] font-medium">
                    Return an item
                  </a>
                </li>
                <li className="py-1">
                  <a href="" className="text-[13px] leading-[16px] font-medium">
                    Return a ThriftBag
                  </a>
                </li>
                <li className="py-1">
                  <a href="" className="text-[13px] leading-[16px] font-medium">
                    Refund Policy
                  </a>
                </li>
                <li className="py-1">
                  <a href="" className="text-[13px] leading-[16px] font-medium">
                    Privacy
                  </a>
                </li>
                <li className="py-1">
                  <a href="" className="text-[13px] leading-[16px] font-medium">
                    Terms of Service
                  </a>
                </li>
                <li className="py-1">
                  <a href="" className="text-[13px] leading-[16px] font-medium">
                    Shipping Policy
                  </a>
                </li>
                <li className="py-1">
                  <a href="" className="text-[13px] leading-[16px] font-medium">
                    Billing Ts&Cs
                  </a>
                </li>
                <li className="py-1">
                  <a href="" className="text-[13px] leading-[16px] font-medium">
                    Refund policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-[21px] leading-[25px] tracking-[.5px] font-bold mb-6">
                Shop
              </h1>
              <ul>
                <li className="py-1">
                  <a href="" className="text-[13px] leading-[16px] font-medium">
                    Re-sell
                  </a>
                </li>
                <li className="py-1">
                  <a href="" className="text-[13px] leading-[16px] font-medium">
                    Women
                  </a>
                </li>
                <li className="py-1">
                  <a href="" className="text-[13px] leading-[16px] font-medium">
                    Men
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-[15px] leading-[21px] font-medium">
              © Thrifter Inc. All Rights Reserved
            </h3>
          </div>
        </div>
      </Container>
    </div>
  );
};
