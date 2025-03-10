import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

function News() {
  const variants = ["solid"];
  return (
    <section className="container mx-auto px-5 pb-10  items-start  lg:px-0 grid grid-cols-none lg:grid-cols-12 ">
      <div className="lg:col-start-1 lg:col-end-9 ">
        <div className="flex items-center gap-2  justify-start">
          {variants.map((variant) => (
            <Breadcrumbs key={variant} variant={variant}>
              <BreadcrumbItem className="title text-center  px-5">
                <h4 className="text-lg title">ព័ត៌មានថ្មីៗ</h4>
              </BreadcrumbItem>
            </Breadcrumbs>
          ))}
          <div className="border-t-2  border-t-lime-600 w-full"></div>
        </div>
        <div className="gap-10  mt-10">
          <Card
            isFooterBlurred
            className="border-none py-5 gap-5 px-5 grid grid-cols-none lg:grid-cols-2 items-center"
            radius="lg"
          >
            <div className="h-full ">
              <Image
                alt="Woman listing to music"
                className="aspect-3/2 object-cover w-[100vh] "
                src="https://panel.racmanagementsystem.academy/imageposts/01-02-2025_1738388254-679db31ec68aa"
              />
            </div>
            <div className="h-full">
              <CardFooter className="justify-stat flex-col    h-full before:bg-white/10 border-white/20 border-1 overflow-hidden py-5  before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-none ml-1 z-10">
                <h1 className="title text-[1.2rem]">
                  បណ្ឌិត យង់ ពៅ៖ ទំនាក់ទំនងកម្ពុជា-សហរដ្ឋអាម៉េរិក
                  ជាទំនាក់ទំនងមានភាពចាស់ទុំយូរអង្វែង
                  តែត្រូវបង្កើនភាពយោគយល់និងទំនុកចិត្តគ្នាបន្ថែមទៀត
                  ដើម្បីលើកកម្ពស់ទំនាក់ទំនងនិងកិច្ចសហប្រតិបត្តិការ
                </h1>
                <p className="mt-3 description  text-[1rem]">
                  ទំនាក់ទំនងការទូតផ្លូវការរវាងព្រះរាជាណាចក្រកម្ពុជានិងសហរដ្ឋអាម៉េរិក
                  ដែលមានអាយុកាល ៧៥ឆ្នាំកន្លងទៅហើយនេះ ត្រូវបានលោកបណ្ឌិត យង់ ពៅ
                  អ្នកជំនាញវិទ្យាសាស្ត្រនយោបាយ ចាត់ទុកថា
                  ជាទំនាក់ទំនងដែលមានភាពចាស់ទុំនិងយូរអង្វែងមួយនៅក្នុងប្រវត្តិសាស្ត្រនៃប្រទេសទាំងពីរ។
                  លោកបណ្ឌិត បានបន្តថា ទំនាក់ទំនងទ្វេភាគីនេះ
                  តែងតែវិវត្តពីសម័យកាលមួយទៅសម័យកាលមួយ
                  នៅតែរក្សាទំនាក់ទំនងរវាងគ្នាអស់រយៈពេល ៧៥ឆ្នាំកន្លងមកហើយ។
                </p>
                <div className="mt-5 description w-full text-[0.9rem]">
                  ថ្ងៃពុធ, 22 មករា 2025 ម៉ោង 10:07 AM
                </div>
              </CardFooter>
            </div>
          </Card>
        </div>
        <div className="grid grid-cols-none lg:grid-cols-2 gap-10 mt-10">
          <div className="shadow-small p-5 rounded-2xl">
            <div isFooterBlurred className="border-none" radius="lg">
              <Image
                alt="Woman listing to music"
                className="aspect-3/2 object-cover w-[100vh] h-[30vh]"
                src="https://panel.racmanagementsystem.academy/imageposts/31-01-2025_1738316271-679c99ef2c425"
              />
            </div>
            <div className="title mt-2">
              <h1 className="text-[1.1rem]">
                បណ្ឌិត យង់ ពៅ៖ អគ្គលេខាធិការដ្ឋាន
                ជាអង្គភាពផ្ដល់សេវាកម្មជួរមុខរបស់រាជបណ្ឌិត្យសភាកម្ពុជា
                មន្ត្រីទាំងអស់ត្រូវតែបំពេញការងារប្រកបដោយទំនួលខុសត្រូវ
                និងគោរពបទបញ្ជាផ្ទៃក្នុងឱ្យបានម៉ឺងម៉ាត់
              </h1>
              <div className="mt-5 text-[0.9rem]">
                ថ្ងៃពុធ, 22 មករា 2025 ម៉ោង 10:07 AM
              </div>
            </div>
          </div>
          <div className="shadow-small p-5 rounded-2xl">
            <div isFooterBlurred className="border-none" radius="lg">
              <Image
                alt="Woman listing to music"
                className="aspect-3/2 object-cover w-[100vh] h-[30vh]"
                src="https://panel.racmanagementsystem.academy/imageposts/23-01-2025_1737608406-6791ccd6e4273"
              />
            </div>
            <div className="title mt-2">
              <h1 className="text-[1.1rem]">
                បណ្ឌិត យង់ ពៅ៖ អគ្គលេខាធិការដ្ឋាន
                ជាអង្គភាពផ្ដល់សេវាកម្មជួរមុខរបស់រាជបណ្ឌិត្យសភាកម្ពុជា
                មន្ត្រីទាំងអស់ត្រូវតែបំពេញការងារប្រកបដោយទំនួលខុសត្រូវ
                និងគោរពបទបញ្ជាផ្ទៃក្នុងឱ្យបានម៉ឺងម៉ាត់
              </h1>
              <div className="mt-5 text-[0.9rem]">
                ថ្ងៃពុធ, 22 មករា 2025 ម៉ោង 10:07 AM
              </div>
            </div>
          </div>
          <div className="shadow-small p-5 rounded-2xl">
            <div isFooterBlurred className="border-none" radius="lg">
              <Image
                alt="Woman listing to music"
                className="aspect-3/2 object-cover w-[100vh] h-[30vh]"
                src="https://panel.racmanagementsystem.academy/imageposts/23-01-2025_1737603995-6791bb9bd77c3"
              />
            </div>
            <div className="title mt-2">
              <h1 className="text-[1.1rem]">
                បណ្ឌិត យង់ ពៅ៖ អគ្គលេខាធិការដ្ឋាន
                ជាអង្គភាពផ្ដល់សេវាកម្មជួរមុខរបស់រាជបណ្ឌិត្យសភាកម្ពុជា
                មន្ត្រីទាំងអស់ត្រូវតែបំពេញការងារប្រកបដោយទំនួលខុសត្រូវ
                និងគោរពបទបញ្ជាផ្ទៃក្នុងឱ្យបានម៉ឺងម៉ាត់
              </h1>
              <div className="mt-5 text-[0.9rem]">
                ថ្ងៃពុធ, 22 មករា 2025 ម៉ោង 10:07 AM
              </div>
            </div>
          </div>
          <div className="shadow-small p-5 rounded-2xl">
            <div isFooterBlurred className="border-none" radius="lg">
              <Image
                alt="Woman listing to music"
                className="aspect-3/2 object-cover w-[100vh] h-[30vh]"
                src="https://panel.racmanagementsystem.academy/imageposts/22-01-2025_1737515561-679062296298e"
              />
            </div>
            <div className="title mt-2">
              <h1 className="text-[1.1rem]">
                បណ្ឌិត យង់ ពៅ៖ អគ្គលេខាធិការដ្ឋាន
                ជាអង្គភាពផ្ដល់សេវាកម្មជួរមុខរបស់រាជបណ្ឌិត្យសភាកម្ពុជា
                មន្ត្រីទាំងអស់ត្រូវតែបំពេញការងារប្រកបដោយទំនួលខុសត្រូវ
                និងគោរពបទបញ្ជាផ្ទៃក្នុងឱ្យបានម៉ឺងម៉ាត់
              </h1>
              <div className="mt-5 text-[0.9rem]">
                ថ្ងៃពុធ, 22 មករា 2025 ម៉ោង 10:07 AM
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-start-9 px-10  lg:col-end-13">
        <div className="flex items-center  gap-2 justify-start">
          {variants.map((variant) => (
            <Breadcrumbs key={variant} variant={variant}>
              <BreadcrumbItem className="title text-center  px-5">
                <h4 className="text-lg title">ព័ត៌មានសំខាន់ៗ</h4>
              </BreadcrumbItem>
            </Breadcrumbs>
          ))}
          <div className="border-t-2  border-t-lime-600 w-full"></div>
        </div>
        <div className=" gap-10 flex flex-col mt-10">
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-0 h- m-0 p-0 flex-col !items-start">
              <div className="p-2 w-full bg-lime-700/50">
                <h4 className="text-white title font-medium text-[1rem]">
                  សហប្រតិបត្តិការ ដើម្បីជនរួមជាតិ
                </h4>
              </div>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://panel.racmanagementsystem.academy/royal-academy/blog/image/large/16.jpg"
            />
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-0 h- m-0 p-0 flex-col !items-start">
              <div className="p-2 w-full bg-lime-700/50">
                <h4 className="text-white title font-medium text-[1rem]">
                  ពិធីដាំដើមឈើនៅឧទ្យានរាជបណ្ឌិត្យសភាកម្ពុជា តេជោសែនប្ញស្សីត្រឹប
                  ស្រុកឆែប ខេត្តព្រះវិហារ
                </h4>
              </div>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://panel.racmanagementsystem.academy/royal-academy/blog/image/large/17.jpg"
            />
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-0 h- m-0 p-0 flex-col !items-start">
              <div className="p-2 w-full bg-lime-700/50">
                <h4 className="text-white title font-medium text-[1rem]">
                  «អាគារឥន្ទ្រទេវី»
                  ចំណងដៃពីថ្មីសម្រាប់វិស័យបណ្តុះបណ្តាលនិងស្រាវជ្រាវនៅរាជបណ្ឌិត្យសភាកម្ពុជា
                  !
                </h4>
              </div>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://panel.racmanagementsystem.academy/royal-academy/blog/image/large/18.jpg"
            />
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-0 h- m-0 p-0 flex-col !items-start">
              <div className="p-2 w-full bg-lime-700/50">
                <h4 className="text-white title font-medium text-[1rem]">
                  «កិច្ចសហប្រតិបត្តិការលើវិស័យស្រាវជ្រាវនិងអប់រំ»
                </h4>
              </div>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://panel.racmanagementsystem.academy/royal-academy/blog/image/large/21.jpg"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}

export default News;
