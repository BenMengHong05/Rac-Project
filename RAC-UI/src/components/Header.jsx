import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
import NavImage from "../assets/Images/rac_logo.png";
export const AcmeLogo = () => {
  return <img src={NavImage} alt="" className="w-20" />;
};
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "ទំព័រដើម",
    "ព័ត៌មាន",
    "អំពី រ.ប.ស.ក.",
    "សមាជិកនៃរ.ប.ស.ក.",
    "ស្រាវជ្រាវ និង បណ្តុះបណ្តាល",
    "ព្រឹត្តិបត្រវិទ្យាសាស្ត្រ",
    "បណ្ណាល័យ",
    "លទ្ទកម្ម",
  ];
  return (
    <>
      <header className="flex justify-center  bg-lime-600">
        <nav className="mx-auto  items-center   grid px-5 2xl:px-0 min-h-[12vh] container   grid-cols-12 w-full z-50">
          <div className="logo inline-flex items-center col-start-1 col-end-4   gap-2">
            <AcmeLogo />
            <div className="hidden lg:block">
              <h1 className="logo-text text-sm  lg:text-lg text-orange-700  2xl:text-2xl text-nowrap nav-links">
                រាជបណ្ឌិត្យសភាកម្ពុជា
              </h1>
              <p className="font-semibold mb-2 text-white    text-nowrap">
                Royal Academy of Cambodia
              </p>
            </div>
          </div>
          <div className="inline-flex items-center  justify-end  col-start-4 col-end-13  gap-4">
            <ul className="title font-bold  hidden lg:inline-flex gap-5 text-nowrap ">
              {menuItems.map((item, index) => (
                <li className="text-white " key={`${item}-${index}`}>
                  <Link
                    href="#"
                    className={`
                    ${
                      index === 0
                        ? "hidden text-lg lg:block text-white "
                        : "block"
                    },
                    ${
                      index === 1
                        ? "hidden text-lg lg:block text-white"
                        : "block"
                    },
                    ${
                      index === 2
                        ? "hidden text-lg lg:block text-white"
                        : "block"
                    },
                    ${
                      index === 3
                        ? "hidden text-lg lg:block text-white"
                        : "block"
                    },
                    ${
                      index === 4
                        ? "hidden text-lg xl:block text-white"
                        : "block"
                    },
                    ${
                      index === 5
                        ? "hidden text-lg 2xl:block text-white"
                        : "block"
                    },
                    ${
                      index === 6
                        ? "hidden text-lg 2xl:block text-white"
                        : "block"
                    },
                    ${
                      index === 7
                        ? "hidden text-lg 2xl:block text-white"
                        : "block"
                    },
                  `}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="block 2xl:hidden ">
              <Navbar
                className=" mx-auto bg-lime-600 bg-none "
                style={{ backgroundColor: "none" }}
              >
                <NavbarContent className="bg-none">
                  <NavbarMenuToggle
                    className="text-white "
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  />
                  <NavbarMenu className="title mt-10 pt-10 bg-lime-700">
                    {menuItems.map((item, index) => (
                      <NavbarMenuItem
                        className="text-white  "
                        key={`${item}-${index}`}
                      >
                        <Link
                          className={`
                            ${
                              index === 0
                                ? "block lg:hidden text-lg text-white"
                                : "block"
                            },
                            ${
                              index === 1
                                ? "block lg:hidden text-lg text-white"
                                : "block"
                            },
                            ${
                              index === 2
                                ? "block lg:hidden text-lg text-white"
                                : "block"
                            },
                            ${
                              index === 3
                                ? "block lg:hidden text-lg text-white"
                                : "block"
                            },
                            ${
                              index === 4
                                ? "block xl:hidden text-lg text-white"
                                : "block"
                            },
                            ${
                              index === 5
                                ? "block 2xl:hidden text-lg text-white"
                                : "block"
                            },
                            ${
                              index === 6
                                ? "block 2xl:hidden text-lg text-white"
                                : "block"
                            },
                            ${
                              index === 7
                                ? "block 2xl:hidden text-lg text-white"
                                : "block"
                            },
                          `}
                          href="#"
                        >
                          {item}
                        </Link>
                      </NavbarMenuItem>
                    ))}
                  </NavbarMenu>
                </NavbarContent>
              </Navbar>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
