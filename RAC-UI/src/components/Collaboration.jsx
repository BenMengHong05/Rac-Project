import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";

function Collaboration() {
  const variants = ["solid"];
  const Collaborations = [
    {
      image: "/src/assets/Images/1.png",
      title: "វិទ្យាស្ថានខុងជឺនៃរាជបណ្ឌិត្យសភាកម្ពុជា",
    },
    {
      image: "/src/assets/Images/2.png",
      title: "វិទ្យាស្ថានទំនាក់ទំនងអន្តរជាតិកម្ពុជា",
    },
    {
      image: "/src/assets/Images/3.png",
      title: "វិទ្យាស្ថានជីវសាស្រ្ត វេជ្ជសាស្រ្ត និងកសិកម្ម",
    },
    {
      image: "/src/assets/Images/5.jpg",
      title: "វិទ្យាស្ថានមនុស្សសាស្រ្តនិងវិទ្យាសាស្រ្តសង្គម",
    },
    { image: "/src/assets/Images/6.jpg", title: "វិទ្យាស្ថានភាសាជាតិ" },
    {
      image: "/src/assets/Images/8.jpg",
      title: "ផ្នែកបណ្តុះបណ្តាលនិងស្រាវជ្រាវ នៃរាជបណ្ឌិត្យសភាកម្ពុជា",
    },
    { image: "/src/assets/Images/9.png", title: "ក្រុមប្រឹក្សាជាតិភាសាខ្មែរ" },
    {
      image: "/src/assets/Images/10.png",
      title: "ឧទ្យានរាជបណ្ឌិត្យសភាកម្ពុជា",
    },
    { image: "/src/assets/Images/11.png", title: "វិទ្យាស្ថានសិក្សាចិន" },
    {
      image: "/src/assets/Images/12.png",
      title: "វិទ្យាស្ថានគរុកោសល្យភាសាចិនក្នុងតំបន់",
    },
    {
      image: "/src/assets/Images/13.png",
      title: "វិទ្យាស្ថានគរុកោសល្យភាសាចិនក្នុងតំបន់",
    },
    {
      image: "/src/assets/Images/14.png",
      title: "វិទ្យាស្ថានវិទ្យាសាស្រ្ត និងបច្ចេកវិទ្យា",
    },
  ];

  const Tests = [
    {
      image: "/src/assets/Images/Collaboration-1.png",
      title: "វិទ្យាស្ថានខុងជឺនៃរាជបណ្ឌិត្យសភាកម្ពុជា",
    },
    {
      image: "/src/assets/Images/Collaboration-2.jpg",
      title: "វិទ្យាស្ថានទំនាក់ទំនងអន្តរជាតិកម្ពុជា",
    },
    {
      image: "/src/assets/Images/Collaboration-3.png",
      title: "វិទ្យាស្ថានជីវសាស្រ្ត វេជ្ជសាស្រ្ត និងកសិកម្ម",
    },
    {
      image: "/src/assets/Images/Collaboration-4.jpg",
      title: "វិទ្យាស្ថានមនុស្សសាស្រ្តនិងវិទ្យាសាស្រ្តសង្គម",
    },
    {
      image: "/src/assets/Images/Collaboration-5.png",
      title: "វិទ្យាស្ថានភាសាជាតិ",
    },
    {
      image: "/src/assets/Images/Collaboration-6.png",
      title: "ផ្នែកបណ្តុះបណ្តាលនិងស្រាវជ្រាវ នៃរាជបណ្ឌិត្យសភាកម្ពុជា",
    },
    {
      image: "/src/assets/Images/Collaboration-7.png",
      title: "ក្រុមប្រឹក្សាជាតិភាសាខ្មែរ",
    },
    {
      image: "/src/assets/Images/Collaboration-8.png",
      title: "ឧទ្យានរាជបណ្ឌិត្យសភាកម្ពុជា",
    },
  ];
  return (
    <>
      <section className="container mt-10 mx-auto px-5 lg:px-0">
        <div className="flex items-center gap-2 justify-start">
          {variants.map((variant) => (
            <Breadcrumbs key={variant} variant={variant}>
              <BreadcrumbItem className="title text-center  px-5">
                <h4 className="text-lg title ">វិទ្យាស្ថាន និង ឧបសម្ព័ន្ធ</h4>
              </BreadcrumbItem>
            </Breadcrumbs>
          ))}
          <div className="border-t-2  border-t-lime-600 w-full"></div>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 items-center justify-center  mt-10 gap-10">
          {Collaborations.map((CollaborationItems, index) => (
            <div className="flex flex-col items-center text-center justify-center  gap-5">
              <h6 className="title text-[0.9rem]">{CollaborationItems.title}</h6>
              <Image
                alt="HeroUI hero Image"
                src={CollaborationItems.image}
                width={100}
                height={100}
                className="rounded-full  object-cover"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="container mt-10 mx-auto px-5 lg:px-0">
        <div className="flex items-center gap-2 justify-start">
          {variants.map((variant) => (
            <Breadcrumbs key={variant} variant={variant}>
              <BreadcrumbItem className="title text-center  px-5">
                <h4 className="text-lg title">ដៃគូសហការ</h4>
              </BreadcrumbItem>
            </Breadcrumbs>
          ))}
          <div className="border-t-2  border-t-lime-600 w-full"></div>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 items-center justify-center  mt-10 gap-10">
          {Tests.map((TestItems, index) => (
            <div className="flex flex-col items-center text-center justify-center   gap-5">
              <h6 className="title text-[0.9rem]">{TestItems.title}</h6>
              <Image
                alt="HeroUI hero Image"
                src={TestItems.image}
                width={100}
                height={100}
                className="rounded-none object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Collaboration;
