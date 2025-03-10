import React from "react";
import {
  Card,
  CardFooter,
  CardHeader,
  CardBody,
  Image,
  Button,
} from "@heroui/react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { BsEye } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";

function Announcement() {
  const variants = ["solid"];
  const Announcements = [
    {
      title:
        "សេចក្ដីជូនដំណឹង ស្តីពី ការអញ្ជើញចូលរួមដេញថ្លៃ ការផ្គត់ផ្គង់ប្រេងឥន្ធនៈប្រចាំឆ្នាំ២០២៤ សម្រាប់ជរាជបណ្ឌិត្យសភាកម្ពុជា ចាប់ពីថ្ងៃទី១៨ មេសា ឆ្នាំ២០២៤។",
      data: "ថ្ងៃចន្ទ, 08 មេសា 2024 ម៉ោង 02:35 PM",
    },
    {
      title:
        "សេចក្ដីជូនដំណឹង ស្តីពីការ ចូលរួមដេញថ្លៃ ផ្គត់ផ្គង់សម្ភារៈអេឡិចត្រូនិកសម្រាប់រាជបណ្ឌិត្យសភាកម្ពុជា ចាប់ពីថ្ងៃទី៥ មិថុនា ឆ្នាំ២០២៣។​*កាលបរិច្ឆេទឈប់ទទួល",
      data: "ថ្ងៃសុក្រ, 02 មិថុនា 2023 ម៉ោង 09:21 PM",
    },
    {
      title:
        "វគ្គថ្មី! បណ្តុះបណ្តាលបច្ចេកទេសនិងវិជ្ជាជីវៈ ជំនាញចុងភៅនៅរាជបណ្ឌិត្យសភាកម្ពុជា ចាប់ពីថ្ងៃទី៤ និង ទី៦ ខែកុម្ភៈ ឆ្នាំ២០២៣ តទៅ!",
      data: "ថ្ងៃអង្គារ, 31 មករា 2023 ម៉ោង 10:35 AM",
    },
    {
      title:
        "សេចក្ដីជូនដំណឹងពីការរៀបចំដេញថ្លៃផ្គត់ផ្គង់គ្រឿងអេឡិចត្រូនិក នៅរាជបណ្ឌិត្យសភាកម្ពុជា។ កាលបរិច្ឆេទឈប់ទទួលពាក្យដេញថ្លៃ៖ ថ្ងៃទី១៣ ខែតុលា ឆ្នាំ២០២២ វេលា",
      data: "ថ្ងៃពុធ, 14 កញ្ញា 2022 ម៉ោង 02:59 PM",
    },
    {
      title:
        "សេចក្ដីជូនដំណឹងពីការរៀបចំទទួលពាក្យដេញថ្លៃផ្គត់ផ្គង់សម្ភារៈសង្ហារឹម នៅរាជបណ្ឌិត្យសភាកម្ពុជា កាលបរិច្ឆេទឈប់ទទួលពាក្យដេញថ្លៃ៖ ថ្ងៃទី១៣ ខែតុលា ឆ្នាំ២០២២",
      data: "ថ្ងៃពុធ, 14 កញ្ញា 2022 ម៉ោង 02:58 PM",
    },
    {
      title:
        "វគ្គសិក្សាថ្មី សម្រាប់ឆ្នាំសិក្សាថ្មី ឆ្នាំ២០២២-២០២៣ ! សម្រាប់ថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់ និងថ្នាក់បណ្ឌិត នៅរាជបណ្ឌិត្យសភាកម្ពុជា ចាប់ផ្តើមទទួលចុះឈ្មោ",
      data: "ថ្ងៃចន្ទ, 22 សីហា 2022 ម៉ោង 03:11 PM",
    },
  ];
  return (
    <section className="container mx-auto px-5 mt-10 lg:px-0">
      <div className="flex items-center gap-2 justify-start">
        {variants.map((variant) => (
          <Breadcrumbs key={variant} variant={variant}>
            <BreadcrumbItem className="title text-center  px-5">
              <h4 className="text-lg title">សេចក្តីប្រកាស</h4>
            </BreadcrumbItem>
          </Breadcrumbs>
        ))}
        <div className="border-t-2  border-t-lime-600 w-full"></div>
      </div>
      <div className="grid grid-cols-none lg:grid-cols-12 mt-10 gap-10">
        <div className="lg:col-start-1 lg:col-end-4 ">
          <Card
            isFooterBlurred
            className="border-none flex flex-col  h-full "
            radius="lg"
          >
            <Image
              alt="Woman listing to music"
              className="aspect-3/2 object-cover rounded-none w-[100vh] h-[40vh]"
              src="https://panel.racmanagementsystem.academy/LeaderMessages/thumbnail/09-07-2024_1720502321.JPG"
            />
            <div className="title text-xl p-4 font-medium">
              <CardHeader className="m-0 p-0">បណ្ឌិតសភាចារ្យ សុខ ទូច</CardHeader>
              <CardBody className="m-0 p-0 text-lg">Not yet available</CardBody>
            </div>
          </Card>
        </div>
        <div className="lg:col-start-4 lg:col-end-13 grid lg:grid-cols-2">
          {Announcements.map((AnnouncementItems, index) => (
            <Card
              key={index}
              isFooterBlurred
              className="border-none shadow-none"
              radius="lg"
            >
              <CardBody className="grid grid-cols-12 items-end">
                <div className="col-start-1 col-end-13 flex flex-col items-start gap-2">
                  <div className="col-start-1 col-end-4  h-full">
                    <div className="grid grid-cols-12 gap-2 ">
                      <div className="col-start-1 col-end-4">
                        <Image
                          alt="Woman  listing to music"
                          className="aspect-3/2  object-cover   h-[15vh] rounded-none "
                          src="https://rac.gov.kh/icon/preview.png"
                        />
                      </div>
                      <h4 className="title col-start-4 col-end-13">{AnnouncementItems.title}</h4>
                    </div>
                  </div>
                  <div className="col-start-4 flex  w-full h-full  text-[1rem] justify-between gap-5 col-end-13">
                    <div className="footer flex items-center text-[0.8rem] gap-1 ">
                      <IoMdTime />
                      {AnnouncementItems.data}
                    </div>
                    <a
                      href=""
                      className="underline footer flex items-center gap-1 text-[0.8rem]"
                    >
                      <BsEye />
                      ចុចមើល
                    </a>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Announcement;
