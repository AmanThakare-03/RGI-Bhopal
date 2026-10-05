import React from "react";
import aboutVideo from "./assets/rgi-video-1.mp4";
import academic1 from "./assets/card-images/academic-1.jpg";
import academic2 from "./assets/card-images/academic-2.jpg";
import academic3 from "./assets/card-images/academic-3.jpg";
import academic4 from "./assets/card-images/academic-4.jpg";
import academic5 from "./assets/card-images/academic-5.jpg";
import academic6 from "./assets/card-images/academic-6.jpg";
import campus1 from "./assets/card-images/campus-1.jpg";
import campus2 from "./assets/card-images/campus-2.jpg";
import campus3 from "./assets/card-images/campus-3.jpg";
import campus4 from "./assets/card-images/campus-4.jpg";
import campus5 from "./assets/card-images/campus-5.jpg";
import campus6 from "./assets/card-images/campus-6.jpg";

import ritsImage from "./assets/clg-images/rits-clg-clean.jpg";
import recImage from "./assets/clg-images/rec-clg-clean.jpg";
import rcpImage from "./assets/clg-images/rcp-clg-clean.jpg";
import ripsImage from "./assets/clg-images/rips-clg-clean.jpg";
import rinImage from "./assets/clg-images/rin-clg-clean.jpg";
import ramchImage from "./assets/clg-images/ramch-clg-clean.jpg";

export default function Home() {
  return (
    <div className="m-0 min-h-screen bg-white font-[Arial,Helvetica,sans-serif] leading-[1.65] text-[#1b2636]">

      {/* TOP BAR */}
      <div className="bg-[#082c55] text-[13px] text-white">
        <div className="mx-auto flex min-h-[39px] max-w-[1180px] flex-wrap items-center justify-between gap-[18px] px-6 max-[600px]:px-[18px] max-[600px]:py-2">
          <span>Admission Enquiry: admission@radharamanbhopal.com</span>
          <span>Toll Free: 18002700660 &nbsp; | &nbsp; Bhopal, Madhya Pradesh</span>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow-[0_2px_12px_#00000010]">
        <div className="mx-auto flex min-h-[82px] max-w-[1180px] items-center gap-[25px] px-6 max-[600px]:min-h-[70px]">
          <a href="#" className="text-[30px] font-black leading-none text-[#123d6c]">
            RGI
            <small className="mt-1 block text-[10px] tracking-[1.5px] text-[#777]">
              RADHARAMAN GROUP OF INSTITUTES
            </small>
          </a>

          <nav className="ml-auto flex items-center gap-[22px] text-[14px] font-bold max-[900px]:hidden">
            <a href="#about" className="hover:text-[#d58d19]">The RGI</a>
            <a href="#institutes" className="hover:text-[#d58d19]">Institutes</a>
            <a href="#courses" className="hover:text-[#d58d19]">Courses</a>
            <a href="#placements" className="hover:text-[#d58d19]">T&amp;P Cell</a>
            <a href="#facilities" className="hover:text-[#d58d19]">Campus</a>
            <a href="#contact" className="hover:text-[#d58d19]">Contact</a>
            <a href="#admission" className="rounded-[4px] bg-[#e69b22] px-4 py-[11px] text-white">
              Admission 2026
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative grid min-h-[600px] items-center overflow-hidden text-white max-[900px]:min-h-[520px] max-[600px]:min-h-[570px]"
        style={{
          background:
            "linear-gradient(90deg,rgba(3,31,66,.95),rgba(4,50,95,.74),rgba(4,50,95,.25)),linear-gradient(135deg,#0c3564,#1d6ca5)",
        }}
      >
        <div className="pointer-events-none absolute bottom-[-120px] right-[-20px] text-[330px] font-black text-white/[0.035]">
          RGI
        </div>

        <div className="relative z-[2] mx-auto w-full max-w-[1180px] px-6">
          <div className="max-w-[790px]">
            <span className="inline-block border-l-4 border-[#f0a62d] pl-3 text-[13px] font-extrabold uppercase tracking-[2px]">
              Radharaman Group of Institutes • Bhopal
            </span>

            <h1 className="my-[18px] text-[clamp(42px,7vw,76px)] font-bold leading-[1.02] max-[600px]:text-[45px]">
              Build Your Future With RGI
            </h1>

            <p className="max-w-[700px] text-[19px] text-[#e7eef6]">
              A multidisciplinary education group bringing engineering, management,
              pharmacy, nursing and Ayurveda learning together in Bhopal.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#courses" className="rounded-[4px] bg-[#e69b22] px-[22px] py-[13px] font-extrabold text-white">
                Explore Courses
              </a>
              <a href="#admission" className="rounded-[4px] border border-white px-[22px] py-[13px] font-extrabold text-white">
                Admission Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="relative z-[5] mt-[-48px] max-[600px]:mt-0">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="grid grid-cols-4 bg-white shadow-[0_15px_40px_#09284b24] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
            <div className="border-r border-[#e6ebf0] p-[25px] text-center max-[600px]:border-b max-[600px]:border-r-0">
              <b className="block text-[30px] text-[#0b3b70]">2003</b>
              <span className="text-[13px] text-[#687487]">Academic journey began</span>
            </div>

            <div className="border-r border-[#e6ebf0] p-[25px] text-center max-[600px]:border-b max-[600px]:border-r-0">
              <b className="block text-[30px] text-[#0b3b70]">6</b>
              <span className="text-[13px] text-[#687487]">Institutional identities</span>
            </div>

            <div className="border-r border-[#e6ebf0] p-[25px] text-center max-[600px]:border-b max-[600px]:border-r-0">
              <b className="block text-[30px] text-[#0b3b70]">41 LPA</b>
              <span className="text-[13px] text-[#687487]">Published 2025 highest package*</span>
            </div>

            <div className="p-[25px] text-center">
              <b className="block text-[30px] text-[#0b3b70]">168</b>
              <span className="text-[13px] text-[#687487]">Companies stated on RGI site*</span>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-[78px]">
        <div className="mx-auto grid max-w-[1180px] grid-cols-[1.05fr_.95fr] items-center gap-[55px] px-6 max-[900px]:grid-cols-1">
          <div>
            <span className="text-[12px] font-extrabold uppercase tracking-[2px] text-[#d68d19]">
              About RGI
            </span>

            <h2 className="mb-4 mt-[10px] text-[clamp(30px,4vw,45px)] font-bold leading-[1.15] text-[#0a315d]">
              Professional education with a multidisciplinary campus ecosystem.
            </h2>

            <p className="max-w-[760px] text-[17px] text-[#647083]">
              Radharaman Group of Institutes traces its academic journey to 2003,
              beginning with Radharaman Institute of Technology &amp; Science.
              The group now represents professional education across multiple disciplines.
            </p>

            <p className="my-4">
              Students can explore technical education, management, pharmacy, nursing
              and Ayurveda through the group's institutions, supported by campus resources
              and a dedicated training and placement ecosystem.
            </p>

            <a href="#institutes" className="font-extrabold text-[#0b5796]">
              Explore the group →
            </a>
          </div>

          <div className="relative min-h-[400px] overflow-visible rounded-[3px] bg-[#0a3c72] max-[600px]:min-h-[280px]">
            <video
              className="absolute inset-0 h-full w-full rounded-[3px] object-cover"
              src={aboutVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[3px] bg-gradient-to-t from-[#062b52]/35 via-transparent to-[#0a315d]/10" />
            <div className="absolute bottom-7 right-[-18px] z-10 bg-[#e59a22] px-[26px] py-5 text-[22px] font-black text-white max-[600px]:right-[-8px]">
              Since 2003
            </div>
          </div>
        </div>
      </section>

      {/* INSTITUTES */}
      <section id="institutes" className="bg-[#f4f7fa] py-[78px]">
        <div className="mx-auto max-w-[1180px] px-6">
          <span className="text-[12px] font-extrabold uppercase tracking-[2px] text-[#d68d19]">
            Our Institutions
          </span>

          <h2 className="mb-4 mt-[10px] text-[clamp(30px,4vw,45px)] font-bold leading-[1.15] text-[#0a315d]">
            One group. Multiple professional pathways.
          </h2>

          <p className="max-w-[760px] text-[17px] text-[#647083]">
            Explore the principal institutions represented on RGI's public group website.
          </p>

          <div className="mt-[35px] grid grid-cols-3 gap-[22px] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
            {[
              ["01", "RITS", "Radharaman Institute of Technology & Science — engineering, technology and management-oriented education.", ritsImage],
              ["02", "REC", "Radharaman Engineering College — engineering, postgraduate, diploma and management education.", recImage],
              ["03", "RCP", "Radharaman College of Pharmacy — professional pharmacy education.", rcpImage],
              ["04", "RIPS", "Radharaman Institute of Pharmaceutical Sciences — pharmacy programs and laboratory learning.", ripsImage],
              ["05", "RIN", "Radharaman Institute of Nursing — nursing education including B.Sc. Nursing and GNM as listed by RGI.", rinImage],
              ["06", "RAMCRH", "Radharaman Ayurveda Medical College Research Hospital — Ayurveda education and clinical learning.", ramchImage],
            ].map(([number, title, text, image]) => (
              <article
                key={number}
                className="relative flex min-h-[250px] flex-col justify-end overflow-hidden rounded-[4px] bg-cover bg-center p-7 text-white shadow-[0_10px_28px_#0b315d1a] transition duration-200 hover:-translate-y-1 hover:shadow-[0_14px_30px_#0b315d30]"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#061d38]/95 via-[#082f59]/65 to-[#082f59]/10" />
                <div className="relative z-10">
                  <span className="font-black text-[#f5bd58]">{number}</span>
                  <h3 className="my-2 text-[21px] font-bold text-white">{title}</h3>
                  <p className="text-white/95">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="py-[78px]">
        <div className="mx-auto max-w-[1180px] px-6">
          <span className="text-[12px] font-extrabold uppercase tracking-[2px] text-[#d68d19]">
            Academic Programs
          </span>

          <h2 className="mb-4 mt-[10px] text-[clamp(30px,4vw,45px)] font-bold leading-[1.15] text-[#0a315d]">
            Choose the direction that matches your ambition.
          </h2>

          <p className="max-w-[760px] text-[17px] text-[#647083]">
            RGI's academic portfolio spans technical, management, healthcare
            and pharmaceutical education.
          </p>

          <div className="mt-[34px] grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
            {[
              ["TECHNOLOGY", "B.Tech / Engineering", "Core and computing-oriented engineering disciplines.", academic1],
              ["TECHNICAL", "Diploma & M.Tech", "Technical diploma and postgraduate engineering pathways.", academic1],
              ["MANAGEMENT", "MBA", "Management and professional business education.", academic2],
              ["PHARMACY", "D.Pharm / B.Pharm / M.Pharm", "Diploma, undergraduate and postgraduate pharmacy study.", academic3],
              ["HEALTHCARE", "Nursing", "B.Sc. Nursing and GNM pathways shown by the group.", academic4],
              ["AYURVEDA", "BAMS", "Ayurveda education through the group's medical college and hospital.", academic5],
              ["CAREER", "Training & Placement", "Career preparation, recruitment activities and corporate interaction.", academic2],
              ["CAMPUS", "Student Development", "Events, sports, professional activities and student support.", academic6],
            ].map(([type, title, text, image]) => (
              <article
                key={title}
                className="relative flex min-h-[235px] overflow-hidden rounded-[3px] bg-cover bg-center p-[25px] text-white shadow-[0_10px_28px_#0b315d1a]"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#061d38]/95 via-[#082f59]/65 to-[#082f59]/10" />
                <div className="relative z-10 mt-auto">
                  <small className="font-extrabold text-[#f5bd58]">{type}</small>
                  <h3 className="my-[5px] text-[20px] font-bold text-white">{title}</h3>
                  <p className="text-white/95">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING & PLACEMENT */}
      <section id="placements" className="bg-[#092f59] py-[78px] text-white">
        <div className="mx-auto grid max-w-[1180px] grid-cols-2 items-center gap-[55px] px-6 max-[900px]:grid-cols-1">
          <div>
            <span className="text-[12px] font-extrabold uppercase tracking-[2px] text-[#d68d19]">
              Training &amp; Placement
            </span>

            <h2 className="mb-4 mt-[10px] text-[clamp(30px,4vw,45px)] font-bold leading-[1.15] text-white">
              Connecting learning with career opportunities.
            </h2>

            <p className="max-w-[760px] text-[17px] text-[#d5e1ed]">
              RGI's placement ecosystem includes training, placement activities,
              corporate interaction, year-wise company information and recruitment support.
            </p>

            <div className="mt-7">
              <a href="#contact" className="inline-block rounded-[4px] bg-[#e69b22] px-[22px] py-[13px] font-extrabold">
                Placement Helpdesk
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[15px] max-[600px]:grid-cols-1">
            {[
              ["41 LPA", "Highest package published for 2025*"],
              ["168", "Companies stated as having conducted campus drives*"],
              ["36 LPA", "Highest package displayed for 2023*"],
              ["4.0 LPA", "Average package displayed for 2023*"],
            ].map(([number, text]) => (
              <div key={text} className="border border-white/[0.11] bg-white/[0.047] p-7">
                <b className="block text-[34px] text-[#f1a72e]">{number}</b>
                <span className="text-[13px] text-[#d8e2ed]">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section id="facilities" className="bg-[#f4f7fa] py-[78px]">
        <div className="mx-auto max-w-[1180px] px-6">
          <span className="text-[12px] font-extrabold uppercase tracking-[2px] text-[#d68d19]">
            Campus Life
          </span>

          <h2 className="mb-4 mt-[10px] text-[clamp(30px,4vw,45px)] font-bold leading-[1.15] text-[#0a315d]">
            Resources beyond the classroom.
          </h2>

          <div className="mt-[30px] grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
            {[
              ["Library", "Reading, reference and academic learning resources.", campus1],
              ["Hostel", "Residential support information for eligible students.", campus5],
              ["Transport", "Campus connectivity and student transportation support.", campus1],
              ["Computer Center", "Computing and digital infrastructure for academic work.", campus4],
              ["Sports", "Physical activities, participation and campus competitions.", campus2],
              ["Seminar Facilities", "Spaces for workshops, lectures and academic programs.", campus3],
              ["Student Activities", "Events, social activities, alumni and entrepreneurship.", campus3],
              ["Anti-Ragging", "Student safety, dignity and responsible campus conduct.", campus6],
            ].map(([title, text, image]) => (
              <article
                key={title}
                className="relative flex min-h-[220px] overflow-hidden border-t-[3px] border-[#e49a23] bg-cover bg-center p-[22px] text-white shadow-[0_8px_25px_#0b315d18]"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#061d38]/95 via-[#082f59]/62 to-[#082f59]/12" />
                <div className="relative z-10 mt-auto">
                  <h3 className="mb-2 text-[18px] font-bold text-white">{title}</h3>
                  <p className="text-white/95">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSION */}
      <section id="admission" className="bg-[#e69b22] py-[78px] text-white">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-[35px] px-6 max-[600px]:flex-col max-[600px]:items-start">
          <div>
            <small>ADMISSION ASSISTANCE</small>
            <h2 className="m-0 text-[34px] font-bold">
              Start your RGI admission enquiry.
            </h2>
            <p>
              Common toll-free: 18002700660 &nbsp; • &nbsp;
              admission@radharamanbhopal.com
            </p>
          </div>

          <a href="mailto:admission@radharamanbhopal.com" className="rounded-[4px] bg-[#082e59] px-[22px] py-[13px] font-extrabold">
            Enquire Now
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#061d38] pb-[25px] pt-[58px] text-[#c9d6e3]">
        <div className="mx-auto max-w-[1180px] px-6">
          <div className="grid grid-cols-[2fr_1fr_1fr_1.3fr] gap-[35px] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
            <div>
              <h3 className="mb-3 text-[18px] font-bold text-white">
                Radharaman Group of Institutes
              </h3>
              <p>Bhadbhada Road, Ratibad, Bhopal (M.P.) - 462046</p>
              <p className="mt-3">
                Toll Free: 18002700660
                <br />
                Admission: admission@radharamanbhopal.com
                <br />
                Info: info@radharamanbhopal.com
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-[18px] font-bold text-white">Institutes</h3>
              {["RITS", "REC", "RCP", "RIPS", "RIN"].map((item) => (
                <a key={item} href="#institutes" className="my-2 block text-[#c9d6e3]">
                  {item}
                </a>
              ))}
            </div>

            <div>
              <h3 className="mb-3 text-[18px] font-bold text-white">Academics</h3>
              {["Engineering", "MBA", "Pharmacy", "Nursing", "Ayurveda"].map((item) => (
                <a key={item} href="#courses" className="my-2 block text-[#c9d6e3]">
                  {item}
                </a>
              ))}
            </div>

            <div>
              <h3 className="mb-3 text-[18px] font-bold text-white">Quick Links</h3>
              <a href="#placements" className="my-2 block text-[#c9d6e3]">Training &amp; Placement</a>
              <a href="#facilities" className="my-2 block text-[#c9d6e3]">Campus Facilities</a>
              <a href="#admission" className="my-2 block text-[#c9d6e3]">Admissions</a>
              <a href="#contact" className="my-2 block text-[#c9d6e3]">Contact</a>
            </div>
          </div>

          <div className="mt-[35px] border-t border-white/[0.094] pt-5 text-[13px]">
            RGI Bhopal home-page concept • *Placement/company figures are
            year/context-specific published figures and should be reverified
            before production publishing.
          </div>
        </div>
      </footer>
    </div>
  );
}
