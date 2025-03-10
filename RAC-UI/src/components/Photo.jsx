import React from "react";
import { Card, CardFooter, Image, Button } from "@heroui/react";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

function Photo() {
  const variants = ["solid"];
  return (
    <section className="container mx-auto px-5 mt-10 lg:px-0">
      <div className="flex items-center gap-2 justify-start">
        {variants.map((variant) => (
          <Breadcrumbs key={variant} variant={variant}>
            <BreadcrumbItem className="title text-center  px-5">
              <h4 className="text-lg title">កម្រងរូបភាព</h4>
            </BreadcrumbItem>
          </Breadcrumbs>
        ))}
        <div className="border-t-2  border-t-lime-600 w-full"></div>
      </div>
      <div className="grid grid-cols-none lg:grid-cols-4 mt-10 gap-10">
        <Card isFooterBlurred className="border-none" radius="lg">
          <Image
            alt="Woman listing to music"
            className="aspect-3/2 object-cover w-[100vh] h-[30vh]"
            src="https://panel.racmanagementsystem.academy/photoPost/29-07-2024_1722277092-photo_2024-07-09_16-42-09.jpg"
          />
          <CardFooter className="justify-center before:bg-white/10  border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-[0.8rem] text-white/100 title text-center  ">
              <span>រូបភាពថ្នាក់ដឹកនាំ</span>
            </p>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="border-none" radius="lg">
          <Image
            alt="Woman listing to music"
            className="aspect-3/2 object-cover w-[100vh] h-[30vh]"
            src="https://panel.racmanagementsystem.academy/royal-academy/listing/photos/large/363.jpg"
          />
          <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-[0.8rem] text-white/100 title text-center ">
              <span>
                ជំនួបពិភាក្សាស្ដីពីការសិក្សាតាមប្រព័ន្ធអនឡាន
                រវាងរាជបណ្ឌិត្យសភាកម្ពុជា និង ក្រុមហ៊ុនChinese Road ថ្ងៃទី៣
                ខែតុលា ឆ្នាំ២០១៨
              </span>
            </p>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="border-none" radius="lg">
          <Image
            alt="Woman listing to music"
            className="aspect-3/2 object-cover w-[100vh] h-[30vh]"
            src="https://panel.racmanagementsystem.academy/royal-academy/listing/photos/large/351.jpg"
          />
          <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-[0.8rem] text-white/100 title text-center ">
              <span>ប្រជុំ Rac Media ១ តុលា ២០១៨</span>
            </p>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="border-none" radius="lg">
          <Image
            alt="Woman listing to music"
            className="aspect-3/2 object-cover w-[100vh] h-[30vh]"
            src="https://panel.racmanagementsystem.academy/royal-academy/listing/photos/large/337.jpg"
          />
          <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-[0.8rem] text-white/100 title text-center ">
              <span>
                ប្រជុំជាមួយវិទ្យាស្ថានវិទ្យាសាស្រ្តនិងបច្ចេកវិទ្យា ថ្ងៃទី២៨
                ខែកញ្ញា ឆ្នាំ២០១៨
              </span>
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
export default Photo;
