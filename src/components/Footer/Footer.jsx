import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white px-3">
      <section className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 gap-8 py-10">
          {/* Column 1 */}
          <div>
            <h1 className="text-xl sm:text-3xl font-bold mb-3">
              Be Ready To Grow
            </h1>
            <p>
              get exclusive <b>update</b> straight to your inbox
            </p>

            <div className="flex items-center gap-2 mt-4">
              <input
                type="text"
                className="flex-1 py-2 px-3 bg-gray-800 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Email"
              />
              <button className="primary-button whitespace-nowrap">Ok</button>
            </div>
          </div>

          {/* Column 2 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:col-span-2">
            {/* Links 1 */}
            <div>
              <h1 className="text-xl font-bold mb-3">Important Links</h1>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Login</a>
                </li>
              </ul>
            </div>

            {/* Links 2 */}
            <div>
              <h1 className="text-xl font-bold mb-3">Links</h1>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Login</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h1 className="text-xl font-bold mb-3">Contact Us</h1>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <HiLocationMarker />
                  <p>Habla, Lebanon</p>
                </div>
                <div className="flex items-center gap-2">
                  <MdMessage />
                  <p>caher7@gmail.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <MdCall />
                  <p>+961 76 343016</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div sm:block>
          <div className="flex justify-between items-center py-6 border-t-2 border-gray-400">
            <span className="text-sm text-gray-400">
              copyright &copy; 2026 by TCJ
            </span>
            <div className="flex items-center justify-center gap-4 pb-4">
              <a href="">
                <FaInstagram className="text-4xl" />
              </a>
              <a href="">
                <FaFacebook className="text-4xl" />
              </a>
              <a href="">
                <FaLinkedin className="text-4xl" />
              </a>
            </div>
            <span className="text-sm text-gray-400">
              <ul className="flex gap-3">
                <li>Privacy Policy</li>
                <li>terms & conditions</li>
              </ul>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
