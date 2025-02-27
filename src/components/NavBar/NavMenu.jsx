import { useEffect, useState } from "react";
import LinksAnimation from "../utils/LinksAnimation";
import MenuToggle from "./MenuToggle";
import CartWidget from "./CartWidget";
import { menuItems } from "../../../data";

const NavMenu = ({ open, openMenu ,toggleMenu , toggle, }) => {
  const openCart = open;
  const toggleCart = toggle;

  const [showContainer, setShowContainer] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    if (openMenu) {
      setShowContainer(true);
      setTimeout(() => {
        setShowLinks(true);
      }, 300);
    } else {
      setShowLinks(false);
      setTimeout(() => {
        setShowContainer(false);
      }, 1000);
    }
  }, [openMenu]);

  const handleClose = () => {
    setShowLinks(false);
    setTimeout(() => {
      toggleMenu();
    }, 200);
  };

  return (
    <div
      className={`fixed z-50 ${
        showContainer ? "top-0" : "top-[-100%]"
      } left-0 h-screen w-full bg-slate-50 transition-all duration-[900ms] ease-[cubic-bezier(0.76, 0, 0.24, 1)]`}
    >
      <nav className="w-full shadow-md">
      <div className="max-w-[1540px] mx-auto px-6 flex justify-between items-center h-16">
        <h2 className="font-playfart text-xl md:text-3xl">Marcos Commerce</h2>
        <div className="flex items-center gap-4 md:gap-8">
          <div className="p-2 rounded-full shadow-md">
            <img src="/heart-line.svg" alt="Corazon" className="w-4 md:w-6" />
          </div>
          <CartWidget open={openCart} toggle={toggleCart} />

          <div className="w-0.5 h-10 bg-black" />
          <MenuToggle imagen={"/close-large-line.svg"} button={handleClose} />
        </div>
        </div>
      </nav>
      <ul className="max-w-[1540px] mx-auto px-6 p-8 flex flex-col gap-7">
        {menuItems.map((item, index) => (
          <LinksAnimation
            key={item}
            open={showLinks}
            text={item}
            delay={index * 150}
            onClick={handleClose}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;

