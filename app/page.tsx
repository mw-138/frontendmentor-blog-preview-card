import Image from "next/image";
import Link from "next/link";
import AvatarImage from "@/public/images/image-avatar.webp";
import { ReactNode } from "react";

function Illustration(): ReactNode {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="336"
      height="201"
      fill="none"
      viewBox="0 0 336 201"
      className="rounded-xl"
    >
      <g clip-path="url(#a)">
        <path fill="#F4D04E" d="M0 .5h336v200H0z" />
        <rect
          width="139"
          height="95"
          x="87.996"
          y="77.729"
          fill="#fff"
          rx="47.5"
          transform="rotate(-45 87.996 77.729)"
        />
        <rect
          width="139"
          height="95"
          x="54.055"
          y="77.729"
          fill="#111"
          rx="47.5"
          transform="rotate(-45 54.055 77.729)"
        />
        <path
          fill="#111"
          d="M234.864 209.036 451.4-7.5l67.175 67.175-216.536 216.536z"
        />
        <rect
          width="139"
          height="95"
          x="20.114"
          y="77.729"
          fill="#fff"
          rx="47.5"
          transform="rotate(-45 20.114 77.729)"
        />
        <rect
          width="204.19"
          height="270.554"
          fill="#111"
          rx="102.095"
          transform="scale(-1 1) rotate(45 -103.887 14.564)"
        />
        <path
          stroke="#fff"
          stroke-width="3"
          d="m6.69-357.5 135.583 135.727c12.481 12.494 12.481 32.737 0 45.231L-45.544 11.475c-12.481 12.494-12.481 32.737 0 45.23L107.088 209.5"
        />
        <path
          stroke="#111"
          stroke-width="3"
          d="M69.965 71.719v23.334h23.334M136.079 52.273V28.94h-23.334M102.845 38.838v46.67M210.364-37.5l60.873 60.873c12.497 12.496 12.497 32.758 0 45.254l-77.745 77.746c-12.497 12.496-12.497 32.758 0 45.254l69.872 69.873"
        />
        <path
          stroke="#111"
          stroke-width="3"
          d="m253.339 149.574-12.144 12.145 14.256 14.257v12.672h12.673l13.729 13.729 12.145-12.145M278.685 124.228l-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145M304.031 98.883l-12.145 12.144 14.257 14.257v12.673h12.673l13.729 13.729 12.144-12.145M329.376 73.537l-12.145 12.145 14.257 14.257v12.672h12.673l13.729 13.729 12.145-12.144"
        />
        <path
          stroke="#fff"
          stroke-width="5"
          d="m354.722 48.191-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145"
        />
        <mask
          id="b"
          width="285"
          height="285"
          x="234"
          y="-8"
          maskUnits="userSpaceOnUse"
        >
          <path
            fill="#111"
            d="M234.864 209.036 451.4-7.5l67.175 67.175-216.536 216.536z"
          />
        </mask>
        <g stroke="#fff" mask="url(#b)">
          <path
            stroke-width="3"
            d="m253.339 149.574-12.144 12.145 14.256 14.257v12.672h12.673l13.729 13.729 12.145-12.145M278.685 124.228l-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145M304.031 98.883l-12.145 12.144 14.257 14.257v12.673h12.673l13.729 13.729 12.144-12.145M329.376 73.537l-12.145 12.145 14.257 14.257v12.672h12.673l13.729 13.729 12.145-12.145"
          />
          <path
            stroke-width="5"
            d="m354.722 48.191-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145"
          />
        </g>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 .5h336v200H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen items-center flex-col gap-4 justify-center bg-yellow">
      <article className="bg-white w-[370px] rounded-2xl flex flex-col p-4 gap-4 border border-gray-950 shadow-gray-950 shadow-solid">
        <Illustration />
        <section className="flex flex-col gap-4">
          <a
            href="#"
            className="bg-yellow text-gray-950 w-fit px-4 py-2 rounded-md font-[800]"
          >
            Learning
          </a>
          <p className="text-gray-950 font-[500]">Published 21 Dec 2023</p>
          <h1 className="text-gray-950 hover:text-yellow text-[22px] font-[800] tracking-normal leading-[120%]">
            <Link href="#">HTML & CSS foundations</Link>
          </h1>
          <p className="text-gray-500 text-[16px] font-[500] tracking-[0.2px] leading-[140%]">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
          <a
            href="#"
            className="text-gray-950 flex items-center gap-3 font-[800]"
          >
            <span>
              <Image src={AvatarImage} width={30} height={30} alt="avatar" />
            </span>
            Greg Hooper
          </a>
        </section>
      </article>
      <footer className="text-[11px] text-center text-gray-950">
        Challenge by{" "}
        <Link
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </Link>
        . Coded by{" "}
        <Link
          href="https://www.frontendmentor.io/profile/mw-138"
          target="_blank"
        >
          mw-138
        </Link>
        .
      </footer>
    </main>
  );
}
