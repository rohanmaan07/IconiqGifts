import React, { useState } from "react";
import { FiMail, FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ navigate, onOpenModal }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const navLinks = [
    { name: "Employee & Client Gifting", to: "gifting" },
    {
      name: "Gift by Category",
      to: "category",
      dropdown: [
        { name: "For Employees", to: "cat-employees" },
        { name: "For Clients", to: "cat-clients" },
        { name: "Premium Gifts", to: "cat-premium" },
      ],
    },
    {
      name: "Occasion",
      to: "occasion",
      dropdown: [
        { name: "Work Anniversary", to: "occ-anniversary" },
        { name: "Holidays", to: "occ-holidays" },
        { name: "Festivals", to: "occ-festivals" },
      ],
    },
    { name: "Contact Us", to: "contact" },
    { name: "About Us", to: "about" },
  ];

  const actionItems = [
    { text: "Download Catalogue", type: "catalogue" },
    { text: "Request a call back", type: "callback" },
    {
      text: "yashsharma46655@gmail.com",
      href: "mailto:yashsharma46655@gmail.com",
      isEmail: true,
    },
  ];

  const handleMobileDropdownToggle = (dropdownName) => {
    setOpenMobileDropdown(
      openMobileDropdown === dropdownName ? null : dropdownName
    );
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 border-b border-gray-200">
          <a href="#" onClick={() => navigate("home")} className="flex-shrink-0">
            <img
              src="/IconiqGifts.png"
              alt="IconiqGifts Logo"
              className="h-10 w-auto"
            />
          </a>

          <div className="hidden md:flex items-center space-x-4">
            {actionItems.map((item) =>
              item.isEmail ? (
                <a
                  key={item.text}
                  href={item.href}
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-teal-600"
                >
                  <FiMail className="mr-2" /> {item.text}
                </a>
              ) : (
                <button
                  key={item.text}
                  onClick={() => onOpenModal(item.type)}
                  className="text-sm font-medium text-gray-700 border border-gray-400 rounded-md px-4 py-2 transition-colors duration-300 hover:bg-teal-600 hover:text-white"
                >
                  {item.text}
                </button>
              )
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-500 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-start h-16">
          <div className="flex items-baseline space-x-6">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href="#"
                  onClick={() => navigate(link.to)}
                  className="flex items-center text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium"
                >
                  {link.name}
                  {link.dropdown && <FiChevronDown className="w-4 h-4 ml-1" />}
                </a>
                {link.dropdown && openDropdown === link.name && (
                  <div className="absolute left-0 top-full pt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href="#"
                        onClick={() => {
                          navigate(item.to);
                          setOpenDropdown(null);
                        }}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <div key={link.name}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  link.dropdown
                    ? handleMobileDropdownToggle(link.name)
                    : (navigate(link.to), setMobileMenuOpen(false));
                }}
                className="flex justify-between items-center text-gray-700 hover:bg-teal-50 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
                {link.dropdown && (
                  <FiChevronDown
                    className={`transition-transform ${
                      openMobileDropdown === link.name && "rotate-180"
                    }`}
                  />
                )}
              </a>
              {link.dropdown && openMobileDropdown === link.name && (
                <div className="pl-4 mt-1 space-y-1">
                  {link.dropdown.map((item) => (
                    <a
                      key={item.name}
                      href="#"
                      onClick={() => {
                        navigate(item.to);
                        setMobileMenuOpen(false);
                      }}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 mt-4 border-t border-gray-200">
            <div className="flex flex-col items-start space-y-3 px-3">
              {actionItems.map((item) =>
                item.isEmail ? (
                  <a
                    key={item.text}
                    href={item.href}
                    className="flex items-center justify-center w-full text-sm font-medium text-gray-700 hover:text-teal-600"
                  >
                    <FiMail className="mr-2" /> {item.text}
                  </a>
                ) : (
                  <button
                    key={item.text}
                    onClick={() => {
                      onOpenModal(item.type);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-center text-sm font-medium text-gray-700 border border-gray-400 rounded-md px-4 py-2 hover:bg-gray-100"
                  >
                    {item.text}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;