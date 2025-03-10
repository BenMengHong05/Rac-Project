
import React from "react";
import { useState } from "react";
import { Card, CardFooter, CardBody, Image, Button } from "@heroui/react";
import { Chip } from "@heroui/chip";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { Listbox, ListboxItem } from "@heroui/react";
function Footer() {
  const Items = [
    {
      Contact: [
        { title: "ទូរសព្ទ /ទូរសារ :" },
        { title: "សារអេទ្បិចត្រូនិក​ : info@rac.gov.kh" },
        { title: "អាសយដ្ឋាន : មហាវិថីសហព័ន្ធរុស្សី សង្កាត់អូរ" },
        { title: "បែកក្អម ខណ្ឌសែនសុខ រាជធានីភ្នំពេញ" },
        { title: "ព្រះរាជាណាចក្រកម្ពុជា" },
        { title: "Tel/Fax: (855) 23 890 180;" },
        { title: "www.rac.gov.kh;" },
        { title: "E-mail: info@rac.gov.kh;" },
        { title: "P.O.Box 531 Phnom Penh, Cambodia." },
      ],
    },
    {
      Content: [
        { title: "   (Rac application)" },
        { title: "ទំព័រដើម" },
        { title: "ព័ត៌មាន" },
        { title: "សង្ខេបអំពីរ.ប.ស.ក." },
        { title: "កិច្ចការស្រាវជ្រាវ" },
        { title: "ព្រឹត្តិបត្រវិទ្យាសាស្ត្រ" },
        { title: "លទ្ទកម្ម" },
      ],
    },
    {
      Collaborative: [
        {
          title:
            "Bangladesh Institute of International and strategic studies, Bangladesh",
        },
        { title: "Busan University of Foreign Studies, South Korea" },
        { title: "Can Tho University, Vietnam" },
        { title: "Changwon National University, South Korea" },
        { title: "Chinese Academy of Social Sciences, China" },
        {
          title:
            "China Institute of Contemporary International relations, China",
        },
        { title: "Confucius Center, China" },
        { title: "Hankuk University of Foreign Studies, South Korea" },
      ],
    },
    {
      Socialmedia: [{ title: "facebook" }, { title: "  youtube" }],
    },
  ];
  const [active, setActive] = useState(false);
  return (
    <footer className="bg-lime-700/90 mt-10 px-5 lg:px-0 relative">
      
      <section className="container  mx-auto  lg:grid pb-10 lg:grid-cols-12">
        <div className="lg:col-start-1 lg:col-end-4 mt-10 ">
          <div className="flex items-center gap-2 justify-start px-5">
            <Breadcrumbs className="">
              <BreadcrumbItem className="title bg-none shadow-none text-center">
                <h4 className="text-lg bg-none shadow-none text-white moul">
                  ទំនាក់ទំនង
                </h4>
              </BreadcrumbItem>
            </Breadcrumbs>
            <div className="border-t-2  border-t-red-600/50 w-full"></div>
          </div>
          {Items.map((NewItem, index) => (
            <ul key={index} className="px-5">
              {NewItem.Contact &&
                NewItem.Contact.map((ItemsContact, subindex) => (
                  <li
                    key={subindex}
                    className="text-white title mt-2 transition-all cursor-pointer duration-300"
                  >
                    {ItemsContact.title}
                  </li>
                ))}
            </ul>
          ))}
        </div>
        <div className="lg:col-start-4 lg:col-end-7 mt-10">
          <div className="flex items-center gap-2 justify-start px-5">
            <Breadcrumbs className="">
              <BreadcrumbItem className="title bg-none shadow-none text-center ">
                <h4 className="text-lg bg-none shadow-none moul text-white">
                  មាតិកា
                </h4>
              </BreadcrumbItem>
            </Breadcrumbs>
            <div className="border-t-2  border-t-red-600/50 w-full"></div>
          </div>
          {Items.map((NewItem, index) => (
            <ul key={index} className="px-5">
              {NewItem.Content &&
                NewItem.Content.map((ItemsContent, subindex) => (
                  <li
                    key={subindex}
                    className="text-white title mt-2  transition-all cursor-pointer duration-300"
                  >
                    {ItemsContent.title}
                  </li>
                ))}
            </ul>
          ))}
        </div>
        <div className="lg:col-start-7 hidden justify-center   lg:flex lg:col-end-9">
          <div className="absolute hidden lg:block bg-white/10 w-[0.5px] h-full"></div>
        </div>
        <div className="lg:col-start-9   lg:mt-10 col-end-13">
          <div>
            <div className="flex items-center gap-2 justify-start px-5">
              <Breadcrumbs className="">
                <BreadcrumbItem className="title bg-none shadow-none text-center">
                  <h4 className="text-lg bg-none shadow-none moul text-white">
                    ដៃគូសហការ
                  </h4>
                </BreadcrumbItem>
              </Breadcrumbs>
              <div className="border-t-2  border-t-red-600/50 w-full"></div>
            </div>
            {Items.map((NewItem, index) => (
              <ul key={index} className="px-5">
                {NewItem.Collaborative &&
                  NewItem.Collaborative.map((ItemsCollaborative, subindex) => (
                    <li
                      key={subindex}
                      className="text-white title mt-2 hover:text-white transition-all cursor-pointer duration-300"
                    >
                      {ItemsCollaborative.title}
                    </li>
                  ))}
              </ul>
            ))}
          </div>
          <div className="mt-5">
            <div className="flex items-center gap-2 justify-start px-5">
              <Breadcrumbs className="">
                <BreadcrumbItem className="title bg-none shadow-none text-center">
                  <h4 className="text-lg bg-none text-white shadow-none moul ">
                    បណ្ដាញសង្គម
                  </h4>
                </BreadcrumbItem>
              </Breadcrumbs>
              <div className="border-t-2  border-t-red-600/50 w-full"></div>
            </div>
            {Items.map((NewItem, index) => (
              <ul key={index} className="px-5">
                {NewItem.Socialmedia &&
                  NewItem.Socialmedia.map((ItemsSocialmedia, subindex) => (
                    <li
                      key={subindex}
                      className="text-white title mt-2 hover:text-white transition-all cursor-pointer duration-300"
                    >
                      {ItemsSocialmedia.title}
                    </li>
                  ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="border-t-[0.5px] hidden lg:block border-t-white/10"></div>
        <div className="content  container mx-auto  py-10 gap-2  rounded-full flex-col  lg:flex-row  flex  items-center justify-between">
          <Chip className="text-white bg-white/0 rounded-full py-4 px-2 title text-[1rem]">
            <span className="">@២០២៥​-រក្សាសិទ្ធិគ្រប់យ៉ាងដោយ​​ រាជបណ្ឌិត្យសភាកម្ពុជា​</span>
          </Chip>
          <Chip className="text-white bg-white/0  rounded-full py-4 px-2 title text-[1rem]">
            <span className="">អភិវឌ្ឍដោយ ការិយាល័យឌីជីថល នៃរាជបណ្ឌិត្យសភាកម្ពុជា</span>
          </Chip>
        </div>
      </section>
    </footer>
  );
}
export default Footer;
