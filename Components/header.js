import Image from "next/image";
import darkLogo from "../public/img/Thrift_Logo_Dark.svg";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import Container from "./container";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full bg-transparent">
      <Container>
        <div className="flex items-center h-[90px] justify-between">
          <div className="h-6">
            <Image alt="" src={darkLogo} className="h-100 bg-cover d-inline" />
          </div>
          <div>
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
          <div className="flex gap-4">
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
        </div>
      </Container>
    </div>
  );
}
