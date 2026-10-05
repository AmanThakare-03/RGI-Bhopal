// import React, { useEffect, useState } from "react";

// import {
//   FiSearch,
//   FiChevronDown,
//   FiChevronRight,
//   FiMenu,
//   FiX,
//   FiArrowRight,
//   FiHome,
//   FiPhone,
//   FiBriefcase,
//   FiBookOpen,
//   FiUsers,
// } from "react-icons/fi";

// import {
//   MdApartment,
//   MdSportsSoccer,
//   MdTheaterComedy,
//   MdSchool,
// } from "react-icons/md";

// const Header = () => {
//   // ==============================
//   // STATES
//   // ==============================

//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(null);

//   // ==============================
//   // STICKY HEADER
//   // ==============================

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // ==============================
//   // MENU DATA
//   // ==============================

//   const menuData = {
//     about: {
//       title: "About Us",
//       icon: <MdApartment />,
//       links: [
//         "Overview",
//         "Vision & Mission",
//         "Chairman's Message",
//         "Director's Message",
//         "Our Journey",
//         "Approvals & Affiliations",
//         "Why Choose RGI",
//         "Awards & Recognitions",
//       ],
//     },

//     campuses: {
//       title: "Campuses",
//       icon: <MdSchool />,
//       links: [
//         "Radharaman Engineering College",
//         "Radharaman Institute of Technology & Science",
//         "Radharaman Institute of Pharmaceutical Sciences",
//         "Radharaman Institute of Research & Technology",
//         "Radharaman College of Management",
//         "Radharaman Polytechnic College",
//       ],
//     },

//     academics: {
//       title: "Academics",
//       icon: <FiBookOpen />,
//       links: [
//         "Engineering",
//         "Pharmacy",
//         "Management",
//         "Computer Applications",
//         "Polytechnic",
//         "Diploma",
//         "M.Tech",
//         "Ph.D",
//       ],
//     },

//     admission: {
//       title: "Admission",
//       icon: <FiUsers />,
//       links: [
//         "Admission Process",
//         "Eligibility Criteria",
//         "Important Dates",
//         "Fee Structure",
//         "Scholarships",
//         "Required Documents",
//         "Apply Online",
//         "FAQs",
//       ],
//     },

//     placement: {
//       title: "Placement",
//       icon: <FiBriefcase />,
//       links: [
//         "Placement Overview",
//         "Our Recruiters",
//         "Placement Statistics",
//         "Training & Development",
//         "Placement Process",
//         "Internship Opportunities",
//         "Alumni Success Stories",
//       ],
//     },

//     sports: {
//       title: "Sports",
//       icon: <MdSportsSoccer />,
//       links: [
//         "Sports Facilities",
//         "Sports Events",
//         "Inter University Sports",
//         "Achievements",
//         "Gallery",
//       ],
//     },

//     cultural: {
//       title: "Cultural",
//       icon: <MdTheaterComedy />,
//       links: [
//         "Cultural Activities",
//         "Events & Festivals",
//         "Student Clubs",
//         "Gallery",
//       ],
//     },

//     contact: {
//       title: "Contact",
//       icon: <FiPhone />,
//       links: [
//         "Contact Us",
//         "Location Map",
//         "Enquiry Form",
//       ],
//     },
//   };

//   // ==============================
//   // DESKTOP DROPDOWNS
//   // ==============================

//   const desktopDropdowns = [
//     "about",
//     "campuses",
//     "academics",
//     "admission",
//   ];

//   // ==============================
//   // DROPDOWN FUNCTION
//   // ==============================

//   const handleDropdown = (name) => {
//     setActiveDropdown(
//       activeDropdown === name ? null : name
//     );
//   };

//   // ==============================
//   // MOBILE ACCORDION
//   // ==============================

//   const handleMobileDropdown = (name) => {
//     setMobileOpen(
//       mobileOpen === name ? null : name
//     );
//   };

//   // ==============================
//   // CLOSE MOBILE MENU
//   // ==============================

//   const closeMobileMenu = () => {
//     setMobileMenu(false);
//     setMobileOpen(null);
//   };

//   return (
//     <>
//       {/* =====================================================
//           HEADER
//       ===================================================== */}

//       <header
//         className={`
//           fixed
//           top-0
//           left-0
//           w-full
//           z-[999]
//           transition-all
//           duration-500

//           ${
//             scrolled
//               ? "bg-white shadow-xl"
//               : "bg-[#06122f]/95"
//           }
//         `}
//       >

//         <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8">

//           {/* =================================================
//               HEADER INNER
//           ================================================= */}

//           <div className="h-[80px] lg:h-[88px] flex items-center justify-between">

//             {/* =================================================
//                 LOGO
//             ================================================= */}

//             <a
//               href="/"
//               className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
//               onClick={closeMobileMenu}
//             >

//               {/* LOGO IMAGE */}

//               <div className="w-[48px] h-[55px] sm:w-[55px] sm:h-[60px]">

//                 <img
//                   src="/images/rgi-logo.png"
//                   alt="RGI Logo"
//                   className="w-full h-full object-contain"
//                 />

//               </div>

//               {/* RGI TEXT */}

//               <div className="flex items-center gap-2 sm:gap-3">

//                 <span
//                   className={`
//                     text-[32px]
//                     sm:text-[38px]
//                     lg:text-[48px]
//                     leading-none
//                     font-black
//                     tracking-tight

//                     ${
//                       scrolled
//                         ? "text-[#07142f]"
//                         : "text-[#e5a51c]"
//                     }
//                   `}
//                 >
//                   RGI
//                 </span>

//                 <div
//                   className={`
//                     hidden
//                     md:block
//                     text-[11px]
//                     lg:text-[14px]
//                     leading-[1.25]
//                     font-bold
//                     uppercase
//                     whitespace-nowrap

//                     ${
//                       scrolled
//                         ? "text-[#07142f]"
//                         : "text-white"
//                     }
//                   `}
//                 >
//                   RADHARAMAN GROUP
//                   <br />
//                   OF INSTITUTES
//                 </div>

//               </div>

//             </a>

//             {/* =================================================
//                 DESKTOP NAVIGATION
//             ================================================= */}

//             <nav className="hidden xl:flex items-center">

//               {/* HOME */}

//               <a
//                 href="/"
//                 className={`
//                   relative
//                   px-4
//                   py-8
//                   text-[15px]
//                   font-semibold
//                   transition-all
//                   duration-300

//                   ${
//                     scrolled
//                       ? "text-[#07142f]"
//                       : "text-white"
//                   }

//                   hover:text-[#e5a51c]

//                   after:absolute
//                   after:left-4
//                   after:right-4
//                   after:bottom-[12px]
//                   after:h-[2px]
//                   after:bg-[#e5a51c]
//                 `}
//               >
//                 Home
//               </a>

//               {/* =================================================
//                   DROPDOWN NAV ITEMS
//               ================================================= */}

//               {desktopDropdowns.map((item) => (

//                 <div
//                   key={item}
//                   className="relative"
//                   onMouseEnter={() =>
//                     setActiveDropdown(item)
//                   }
//                 >

//                   <button
//                     onClick={() =>
//                       handleDropdown(item)
//                     }
//                     className={`
//                       flex
//                       items-center
//                       gap-1
//                       px-4
//                       py-8
//                       text-[15px]
//                       font-semibold
//                       transition-all
//                       duration-300

//                       ${
//                         scrolled
//                           ? "text-[#07142f]"
//                           : "text-white"
//                       }

//                       hover:text-[#e5a51c]
//                     `}
//                   >

//                     {menuData[item].title}

//                     <FiChevronDown
//                       size={17}
//                       className={`
//                         transition-transform
//                         duration-300

//                         ${
//                           activeDropdown === item
//                             ? "rotate-180"
//                             : ""
//                         }
//                       `}
//                     />

//                   </button>

//                 </div>

//               ))}

//               {/* PLACEMENT */}

//               <a
//                 href="#placement"
//                 className={`
//                   px-4
//                   text-[15px]
//                   font-semibold
//                   transition-all

//                   ${
//                     scrolled
//                       ? "text-[#07142f]"
//                       : "text-white"
//                   }

//                   hover:text-[#e5a51c]
//                 `}
//               >
//                 Placement
//               </a>

//               {/* SPORTS */}

//               <a
//                 href="#sports"
//                 className={`
//                   px-4
//                   text-[15px]
//                   font-semibold
//                   transition-all

//                   ${
//                     scrolled
//                       ? "text-[#07142f]"
//                       : "text-white"
//                   }

//                   hover:text-[#e5a51c]
//                 `}
//               >
//                 Sports
//               </a>

//               {/* CULTURAL */}

//               <a
//                 href="#cultural"
//                 className={`
//                   px-4
//                   text-[15px]
//                   font-semibold
//                   transition-all

//                   ${
//                     scrolled
//                       ? "text-[#07142f]"
//                       : "text-white"
//                   }

//                   hover:text-[#e5a51c]
//                 `}
//               >
//                 Cultural
//               </a>

//               {/* CONTACT */}

//               <a
//                 href="#contact"
//                 className={`
//                   px-4
//                   text-[15px]
//                   font-semibold
//                   transition-all

//                   ${
//                     scrolled
//                       ? "text-[#07142f]"
//                       : "text-white"
//                   }

//                   hover:text-[#e5a51c]
//                 `}
//               >
//                 Contact
//               </a>

//               {/* =================================================
//                   SEARCH BUTTON
//               ================================================= */}

//               <button
//                 type="button"
//                 className={`
//                   ml-3
//                   w-[43px]
//                   h-[43px]
//                   rounded-full
//                   border
//                   flex
//                   items-center
//                   justify-center
//                   transition-all
//                   duration-300

//                   ${
//                     scrolled
//                       ? "border-gray-300 text-[#07142f]"
//                       : "border-white/60 text-white"
//                   }

//                   hover:border-[#e5a51c]
//                   hover:text-[#e5a51c]
//                 `}
//               >
//                 <FiSearch size={21} />
//               </button>

//               {/* =================================================
//                   APPLY NOW
//               ================================================= */}

//               <a
//                 href="#admission"
//                 className="
//                   ml-4
//                   flex
//                   items-center
//                   gap-3
//                   bg-[#e5a51c]
//                   hover:bg-[#c88d0d]
//                   text-white
//                   px-5
//                   py-3
//                   rounded-md
//                   font-bold
//                   text-[14px]
//                   transition-all
//                   duration-300
//                   shadow-md
//                   whitespace-nowrap
//                 "
//               >

//                 Apply Now

//                 <FiArrowRight size={20} />

//               </a>

//             </nav>

//             {/* =================================================
//                 MOBILE RIGHT SIDE
//             ================================================= */}

//             <div className="xl:hidden flex items-center gap-2 sm:gap-3">

//               {/* SEARCH */}

//               <button
//                 type="button"
//                 className={`
//                   w-[40px]
//                   h-[40px]
//                   rounded-full
//                   flex
//                   items-center
//                   justify-center
//                   border

//                   ${
//                     scrolled
//                       ? "border-gray-300 text-[#07142f]"
//                       : "border-white/60 text-white"
//                   }
//                 `}
//               >
//                 <FiSearch size={20} />
//               </button>

//               {/* APPLY */}

//               <a
//                 href="#admission"
//                 className="
//                   hidden
//                   sm:flex
//                   items-center
//                   gap-2
//                   bg-[#e5a51c]
//                   hover:bg-[#c88d0d]
//                   text-white
//                   px-4
//                   py-2.5
//                   rounded-md
//                   text-sm
//                   font-bold
//                 "
//               >
//                 Apply Now
//                 <FiArrowRight />
//               </a>

//               {/* MENU BUTTON */}

//               <button
//                 type="button"
//                 onClick={() =>
//                   setMobileMenu(!mobileMenu)
//                 }
//                 className={`
//                   w-[42px]
//                   h-[42px]
//                   flex
//                   items-center
//                   justify-center

//                   ${
//                     scrolled
//                       ? "text-[#07142f]"
//                       : "text-white"
//                   }
//                 `}
//               >

//                 {mobileMenu ? (
//                   <FiX size={30} />
//                 ) : (
//                   <FiMenu size={30} />
//                 )}

//               </button>

//             </div>

//           </div>

//         </div>

//       </header>


//       {/* =====================================================
//           DESKTOP MEGA MENU
//       ===================================================== */}

//       {activeDropdown && (

//         <div
//           className="
//             hidden
//             xl:block
//             fixed
//             top-[88px]
//             left-0
//             right-0
//             z-[998]
//             bg-[#06122f]
//             shadow-2xl
//             border-t
//             border-[#e5a51c]/30
//           "
//           onMouseLeave={() =>
//             setActiveDropdown(null)
//           }
//         >

//           <div className="max-w-[1550px] mx-auto px-8 py-8">

//             <div className="grid grid-cols-12 gap-6">

//               {/* LEFT TITLE */}

//               <div className="col-span-3">

//                 <div className="
//                   h-full
//                   rounded-xl
//                   bg-gradient-to-br
//                   from-[#0d2348]
//                   to-[#06122f]
//                   border
//                   border-white/10
//                   p-7
//                 ">

//                   <div className="
//                     text-[#e5a51c]
//                     text-4xl
//                     mb-5
//                   ">
//                     {menuData[activeDropdown].icon}
//                   </div>

//                   <h2 className="
//                     text-white
//                     text-2xl
//                     font-bold
//                     mb-4
//                   ">
//                     {menuData[activeDropdown].title}
//                   </h2>

//                   <div className="
//                     w-14
//                     h-[3px]
//                     bg-[#e5a51c]
//                     mb-5
//                   " />

//                   <p className="
//                     text-white/60
//                     text-sm
//                     leading-6
//                   ">
//                     Explore Radharaman Group
//                     of Institutes and discover
//                     our academic programs,
//                     facilities and opportunities.
//                   </p>

//                 </div>

//               </div>


//               {/* RIGHT LINKS */}

//               <div className="col-span-9">

//                 <div className="
//                   grid
//                   grid-cols-2
//                   lg:grid-cols-3
//                   gap-x-8
//                   gap-y-2
//                 ">

//                   {menuData[activeDropdown].links.map(
//                     (link, index) => (

//                       <a
//                         href="#"
//                         key={index}
//                         className="
//                           group
//                           flex
//                           items-center
//                           justify-between
//                           gap-3
//                           py-3
//                           px-3
//                           rounded-md
//                           text-white/85
//                           text-sm
//                           border-b
//                           border-white/5
//                           hover:bg-white/5
//                           hover:text-[#e5a51c]
//                           transition-all
//                         "
//                       >

//                         <span>
//                           {link}
//                         </span>

//                         <FiChevronRight
//                           size={16}
//                           className="
//                             opacity-0
//                             group-hover:opacity-100
//                             group-hover:translate-x-1
//                             transition-all
//                             text-[#e5a51c]
//                           "
//                         />

//                       </a>

//                     )
//                   )}

//                 </div>

//                 {/* VIEW ALL */}

//                 <a
//                   href="#"
//                   className="
//                     inline-flex
//                     items-center
//                     gap-2
//                     mt-6
//                     text-[#e5a51c]
//                     font-bold
//                     text-sm
//                     hover:gap-3
//                     transition-all
//                   "
//                 >
//                   View All
//                   <FiArrowRight />
//                 </a>

//               </div>

//             </div>

//           </div>

//         </div>

//       )}


//       {/* =====================================================
//           MOBILE MENU
//       ===================================================== */}

//       {mobileMenu && (

//         <div
//           className="
//             xl:hidden
//             fixed
//             top-[80px]
//             left-0
//             right-0
//             bottom-0
//             z-[998]
//             bg-[#06122f]
//             overflow-y-auto
//           "
//         >

//           <div className="px-5 py-6">

//             {/* MOBILE APPLY */}

//             <a
//               href="#admission"
//               onClick={closeMobileMenu}
//               className="
//                 flex
//                 items-center
//                 justify-center
//                 gap-3
//                 w-full
//                 bg-[#e5a51c]
//                 hover:bg-[#c88d0d]
//                 text-white
//                 py-3.5
//                 rounded-md
//                 font-bold
//                 mb-5
//               "
//             >
//               Apply Now
//               <FiArrowRight />
//             </a>


//             {/* HOME */}

//             <a
//               href="/"
//               onClick={closeMobileMenu}
//               className="
//                 flex
//                 items-center
//                 justify-between
//                 py-4
//                 border-b
//                 border-white/10
//                 text-white
//                 font-semibold
//                 hover:text-[#e5a51c]
//               "
//             >

//               <span className="flex items-center gap-4">

//                 <FiHome
//                   className="text-[#e5a51c]"
//                   size={21}
//                 />

//                 Home

//               </span>

//               <FiChevronRight />

//             </a>


//             {/* MOBILE ABOUT */}

//             <MobileSection
//               data={menuData.about}
//               open={mobileOpen === "about"}
//               onClick={() =>
//                 handleMobileDropdown("about")
//               }
//             />


//             {/* MOBILE CAMPUSES */}

//             <MobileSection
//               data={menuData.campuses}
//               open={mobileOpen === "campuses"}
//               onClick={() =>
//                 handleMobileDropdown("campuses")
//               }
//             />


//             {/* MOBILE ACADEMICS */}

//             <MobileSection
//               data={menuData.academics}
//               open={mobileOpen === "academics"}
//               onClick={() =>
//                 handleMobileDropdown("academics")
//               }
//             />


//             {/* MOBILE ADMISSION */}

//             <MobileSection
//               data={menuData.admission}
//               open={mobileOpen === "admission"}
//               onClick={() =>
//                 handleMobileDropdown("admission")
//               }
//             />


//             {/* MOBILE PLACEMENT */}

//             <MobileSection
//               data={menuData.placement}
//               open={mobileOpen === "placement"}
//               onClick={() =>
//                 handleMobileDropdown("placement")
//               }
//             />


//             {/* MOBILE SPORTS */}

//             <MobileSection
//               data={menuData.sports}
//               open={mobileOpen === "sports"}
//               onClick={() =>
//                 handleMobileDropdown("sports")
//               }
//             />


//             {/* MOBILE CULTURAL */}

//             <MobileSection
//               data={menuData.cultural}
//               open={mobileOpen === "cultural"}
//               onClick={() =>
//                 handleMobileDropdown("cultural")
//               }
//             />


//             {/* MOBILE CONTACT */}

//             <MobileSection
//               data={menuData.contact}
//               open={mobileOpen === "contact"}
//               onClick={() =>
//                 handleMobileDropdown("contact")
//               }
//             />

//           </div>

//         </div>

//       )}

//       {/* HEADER SPACE */}

//       <div className="h-[80px] lg:h-[88px]" />

//     </>
//   );
// };


// // ============================================================
// // MOBILE SECTION COMPONENT
// // ============================================================

// const MobileSection = ({
//   data,
//   open,
//   onClick,
// }) => {

//   return (

//     <div className="border-b border-white/10">

//       {/* TITLE */}

//       <button
//         type="button"
//         onClick={onClick}
//         className="
//           w-full
//           flex
//           items-center
//           justify-between
//           py-4
//           text-white
//           font-semibold
//           text-left
//         "
//       >

//         <span className="flex items-center gap-4">

//           <span className="
//             text-[#e5a51c]
//             text-[21px]
//           ">
//             {data.icon}
//           </span>

//           {data.title}

//         </span>

//         <FiChevronDown
//           size={19}
//           className={`
//             transition-transform
//             duration-300

//             ${
//               open
//                 ? "rotate-180 text-[#e5a51c]"
//                 : ""
//             }
//           `}
//         />

//       </button>


//       {/* LINKS */}

//       <div
//         className={`
//           overflow-hidden
//           transition-all
//           duration-300

//           ${
//             open
//               ? "max-h-[700px] pb-3"
//               : "max-h-0"
//           }
//         `}
//       >

//         {data.links.map(
//           (link, index) => (

//             <a
//               href="#"
//               key={index}
//               className="
//                 flex
//                 items-center
//                 gap-3
//                 py-2.5
//                 pl-10
//                 text-sm
//                 text-white/70
//                 hover:text-[#e5a51c]
//                 transition-colors
//               "
//             >

//               <FiChevronRight
//                 size={14}
//                 className="text-[#e5a51c]"
//               />

//               {link}

//             </a>

//           )
//         )}

//       </div>

//     </div>

//   );
// };

// export default Header;