import Image from "next/image";
import { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import darkLogo from "../public/img/Thrift_Logo_Dark.svg";
import Container from "./container";

export default function Header() {
  const [fixed, setFixed] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [extraMenuOpened, setExtraMenuOpened] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if (position > 290) {
      setFixed("stuck");
    }
    if (position < 280) {
      setFixed(null);
    }
    if (position > 300) {
      setFixed("opening");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`top-0 left-0 w-full z-10 header header--${fixed}`}>
        <Container>
          <div className="flex items-center h-[70px] justify-between px-0 md:px-10">
            <div className="h-6">
              <Image
                alt=""
                src={darkLogo}
                height="25"
                width="170"
                className="bg-cover d-inline"
              />
            </div>
            <div className="hidden md:block">
              <ul className="flex">
                <li className="px-5 py-2 text-xl font-bold uppercase cursor-pointer relative nav-list text-[#252d3a]">
                  market
                </li>
                <li className="px-5 py-2 text-xl font-bold uppercase cursor-pointer relative nav-list text-[#252d3a]">
                  sell-cloth
                </li>
                <li className="px-5 py-2 text-xl font-bold uppercase cursor-pointer relative nav-list text-[#252d3a]">
                  about us
                </li>
              </ul>
            </div>
            <div className="">
              <div className="gap-4 hidden md:flex">
                <span className="text-3xl cursor-pointer">
                  <BsFillPersonFill />
                </span>
                <span className="text-3xl cursor-pointer">
                  <AiOutlineSearch />
                </span>
                <span className="text-3xl cursor-pointer">
                  <AiOutlineHeart />
                </span>
              </div>
              <div className="flex gap-2 md:hidden">
                <span className="text-2xl cursor-pointer">
                  <AiOutlineSearch />
                </span>
                <span
                  className="text-2xl cursor-pointer"
                  onClick={() => setMenuOpened(true)}
                >
                  <HiMenuAlt2 />
                </span>
                <span className="text-2xl cursor-pointer">
                  <AiOutlineShoppingCart />
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div
        className={`${
          menuOpened ? "opacity-1 visible" : "opacity-0 invisible"
        } fixed left-0 top-0 w-full h-full bg-[rgba(255,255,255,.5)] z-10 transition-[.3s]`}
        onClick={() => setMenuOpened(false)}
      ></div>
      <div
        className={`${
          menuOpened ? "menu--opened" : "menu"
        } transition-500 w-[350px] max-w-[95%] bg-white h-screen fixed left-0 z-30`}
      >
        <div className="flex flex-col">
          <div className="px-3 h-[70px]">
            <div className="border-b h-full py-2 flex justify-end items-center">
              <span
                className="text-3xl cursor-pointer"
                onClick={() => setMenuOpened(false)}
              >
                <MdClose />
              </span>
            </div>
          </div>
          <div>
            <ul className="flex flex-col">
              <li className="border-b">
                <a className="uppercase block text-[#252d3a] text-[1.1em] tracking-[.2em] p-4">
                  Re-sell
                </a>
              </li>
              <li className="border-b">
                <div className="flex justify-between items-center">
                  <a className="uppercase block w-full text-[#252d3a] text-[1.1em] tracking-[.2em] py-4 pl-4">
                    Women
                  </a>
                  <span
                    className="text-xl cursor-pointer border-l px-4"
                    onClick={() => setExtraMenuOpened(!extraMenuOpened)}
                  >
                    <IoIosArrowDown />
                  </span>
                </div>
                <div
                  className={`${
                    extraMenuOpened ? "extra-menu--open" : "extra-menu"
                  } overflow-hidden relative after:top-0 after:absolute after:h-full after:left-5 after:border-l after:border-black`}
                >
                  <ul>
                    <li>
                      <a className="pl-[35px] font-[400] text-[#252d3a] py-2 pr-[25px] block text-[14px] tracking-[.025em] leading-[1.6]">
                        Women Category
                      </a>
                    </li>
                    <li>
                      <a className="pl-[35px] font-[400] text-[#252d3a] py-2 pr-[25px] block text-[14px] tracking-[.025em] leading-[1.6]">
                        Women Category
                      </a>
                    </li>
                    <li>
                      <a className="pl-[35px] font-[400] text-[#252d3a] py-2 pr-[25px] block text-[14px] tracking-[.025em] leading-[1.6]">
                        Women Category
                      </a>
                    </li>
                    <li>
                      <a className="pl-[35px] font-[400] text-[#252d3a] py-2 pr-[25px] block text-[14px] tracking-[.025em] leading-[1.6]">
                        Women Category
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
