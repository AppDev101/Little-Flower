"use client";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { footerData } from "./data";

function Footer() {
  return (
    <section className="@container flex flex-col items-center justify-center gap-10 bg-taupe-800 pt-13 pb-10 text-white min-[1205px]:flex-row min-[1205px]:justify-center min-[1205px]:gap-[clamp(60px,5vw,150px)]">
      <h1 className="hidden text-2xl font-bold min-[600px]:block">
        Little Flower
      </h1>

      <div className="order-2 flex flex-col min-[600px]:flex-row min-[600px]:gap-x-10 min-[1205px]:gap-[clamp(60px,5vw,150px)]">
        {footerData.map(({ name, links }) => {
          return (
            <div
              key={name}
              className="flex flex-col flex-wrap min-[600px]:items-center min-[600px]:gap-y-2"
            >
              <h2
                data-value={name}
                className="hidden text-xs font-medium text-nowrap min-[600px]:block"
              >
                {name}
              </h2>

              <ul
                data-name={name}
                className="flex items-center text-[clamp(12px,2.7cqi,16px)] text-nowrap min-[600px]:flex-col min-[600px]:gap-y-1.25 min-[600px]:text-xs [&:not([data-name=PRIVACY])]:hidden min-[600px]:[&:not([data-name=PRIVACY])]:flex"
              >
                {links.map(({ name }, index) => {
                  return (
                    <li
                      key={name}
                      className={`${index > 0 && "border-l-2 min-[600px]:border-none"} px-5 min-[600px]:px-0`}
                    >
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="order-1 space-y-3 min-[600px]:order-last">
        <h2 className="hidden text-sm font-semibold text-nowrap min-[600px]:block min-[600px]:text-center min-[600px]:text-base">
          SOCIAL MEDIA
        </h2>

        <ul className="flex justify-center gap-[clamp(50px,17cqi,100px)] text-[clamp(24px,7cqi,48px)] min-[600px]:gap-7 min-[600px]:text-2xl">
          <li>
            <FaXTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
