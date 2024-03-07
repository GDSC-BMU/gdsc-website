import React, { useEffect, useState } from "react";
import assets from "../assets/assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const velocity = 85;

    const shuffleElement = document.querySelectorAll(".shuffle");

    shuffleElement.forEach((item) => {
      item.setAttribute("data-text", item.textContent);
    });

    const shuffle = (o) => {
      for (
        let j, x, i = o.length;
        i;
        j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
      );
      return o;
    };

    const shuffleText = (element, originalText) => {
      const elementTextArray = [];
      let randomText = [];

      for (let i = 0; i < originalText.length; i++) {
        elementTextArray.push(originalText.charAt(i));
      }

      const repeatShuffle = (times, index) => {
        if (index === times) {
          element.textContent = originalText;
          return;
        }

        setTimeout(() => {
          randomText = shuffle(elementTextArray);
          for (let i = 0; i < index; i++) {
            randomText[i] = originalText[i];
          }
          randomText = randomText.join("");
          element.textContent = randomText;
          index++;
          repeatShuffle(times, index);
        }, velocity);
      };
      repeatShuffle(element.textContent.length, 0);
    };

    shuffleElement.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        shuffleText(item, item.getAttribute("data-text"));
      });
    });

    return () => {
      shuffleElement.forEach((item) => {
        item.removeEventListener("mouseenter", () => {
          shuffleText(item, item.getAttribute("data-text"));
        });
      });
    };
  }, []);

  return (
    <>
      <nav className="bg-white p-6">
        <div className="flex items-center justify-between flex-wrap">
          <div className="grid grid-flow-col">
            <div className=" flex-shrink-0 h-7 ">
              <img src={assets.navbrimg2} alt="Logo" className="h-10 w-auto" />
            </div>
            <div className="flex-shrink-0 h-7 ml-4 ">
              <img src={assets.navbarimg3} alt="Logo" className="h-10 w-auto hidden sm:block md:block" />
            </div>
          </div>
          <div className="block lg:hidden">
            <button
              // className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-red-600 hover:border-red-600"
              onClick={() => setToggle(!toggle)}
            >
              <svg
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-current transform rotate-180"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z"
                    fill="#000000"
                  ></path>
                  <path
                    d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z"
                    fill="#000000"
                  ></path>
                  <path
                    d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 
20.4475 22.5523 19.9998 22 19.9998H5Z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
          <div
            className={`lg:flex ${
              toggle
                ? "fixed top-0 left-0 flex-row flex justify-center items-center w-[100vw] bg-[#000000ff] h-[100vh] py-4"
                : "hidden"
            } lg:items-center`}
          >
            {toggle && (
              <button
                className="absolute top-0 right-0 mr-4 mt-4 text-white hover:text-red-600"
                onClick={() => setToggle(false)}
              >
                <svg
                  className="h-5 w-5 fill-current "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path
                    fill-rule="evenodd"
                    d="M11.414 10l4.293-4.293a1 1 0 10-1.414-1.414L10 8.586 5.707 4.293a1 1 0 10-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 101.414 1.414L10 11.414l4.293 4.293a1 1 0 001.414-1.414L11.414 10z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            )}
            <ul
              className={`${
    toggle
      ? "flex-col justify-center text-start gap-8 md:gap-8"
      : "flex-row"
  } flex justify-center items-center gap-4 md:gap-16 lg:mr-5 ${
    toggle ? "text-white" : "text-black"
  } ${
    toggle ? "text-[2rem]" : "text-lg"
  } lg:text-[1.15rem]`}
>
              <li>
                <a href="#" className="hover:text-red-600 shuffle">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 shuffle">
                  TEAM
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600 shuffle">
                  JOIN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
