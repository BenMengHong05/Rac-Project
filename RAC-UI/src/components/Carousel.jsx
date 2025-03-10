import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import { Card, CardHeader, CardBody, Image, Button } from "@heroui/react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Imageswipper1 from "../assets/Images/14carousel.jpg";
import Imageswipper2 from "../assets/Images/17carousel.jpg";
import Imageswipper3 from "../assets/Images/19carousel.jpg";

function Carousel() {
  const variants = ["solid"];
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { isOpen1, onOpen1, onOpenChange1 } = useDisclosure();
  return (
    <>
      <section className="container mx-auto pb-10 mt-10 px-5 lg:px-0">
        <div className="grid grid-cols-none lg:grid-cols-12">
          <div className="col-start-1 col-end-9 hidden lg:block">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  src={Imageswipper1}
                  alt=""
                  className="object-cover h-[69vh] w-[100rem] rounded-none "
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={Imageswipper2}
                  alt=""
                  className="object-cover h-[69vh] w-[100rem] rounded-none  "
                />
              </SwiperSlide>
              
              <SwiperSlide>
                <Image
                  src={Imageswipper3}
                  alt=""
                  className="object-cover h-[69vh] w-[100rem] rounded-none "
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={Imageswipper1}
                  alt=""
                  className="object-cover h-[69vh] w-[100rem] rounded-none"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={Imageswipper1}
                  alt=""
                  className="object-cover h-[69vh] w-[100rem] rounded-none"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={Imageswipper1}
                  alt=""
                  className="object-cover h-[69vh] w-[100rem] rounded-none "
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={Imageswipper1}
                  alt=""
                  className="object-cover h-[69vh] w-[100rem] rounded-none"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-start-9 col-end-13 px-10">
            <div className="flex items-center  gap-2 justify-start">
              {variants.map((variant) => (
                <Breadcrumbs key={variant} variant={variant}>
                  <BreadcrumbItem className="title text-center  px-5">
                    <h4 className="text-lg title">វីដេអូ</h4>
                  </BreadcrumbItem>
                </Breadcrumbs>
              ))}
              <div className="border-t-2  border-t-lime-600 w-full"></div>
            </div>
            <div className="grid  lg:grid-rows-2 gap-5 mt-5">
              <Button
                onPress={onOpen}
                className="h-[30vh] transition-none transform-none   w-full m-0 p-0"
              >
                <Card
                  isFooterBlurred
                  className="border-none relative shadow-none flex cursor-pointer items-center justify-center"
                  id="playVideo"
                  radius="lg"
                >
                  <Image
                    alt="Woman listing to music"
                    className="aspect-3/2 object-cover w-[100vh] h-[30vh]"
                    src="https://panel.racmanagementsystem.academy/royal-academy/listing/videos/large/92.jpg"
                  />
                  <MdOutlinePlayCircleOutline
                    className="text-5xl absolute z-50 text-white "
                    id="iconPlay"
                  />
                </Card>
              </Button>
              <Modal isOpen={isOpen} size="4xl" onOpenChange={onOpenChange}>
                <ModalContent className="py-5">
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">
                        Video
                      </ModalHeader>
                      <ModalBody>
                        <iframe
                          width="full"
                          height="415"
                          src="https://www.youtube.com/embed/6h7C_VYGV3w?si=Yng4n4VZxtpNx5lv"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen
                        ></iframe>
                      </ModalBody>
                    </>
                  )}
                </ModalContent>
              </Modal>
              <Button
                onPress={onOpen1}
                className="h-[30vh] transition-none transform-none   w-full m-0 p-0"
              >
                <Card
                  isFooterBlurred
                  className="border-none relative shadow-none flex cursor-pointer items-center justify-center"
                  id="playVideo"
                  radius="lg"
                >
                  <Image
                    alt="Woman listing to music"
                    className="aspect-3/2 object-cover w-[100vh] h-[30vh]"
                    src="https://panel.racmanagementsystem.academy/royal-academy/listing/videos/large/90.jpg"
                  />
                  <MdOutlinePlayCircleOutline
                    className="text-5xl absolute z-50 text-white "
                    id="iconPlay"
                  />
                </Card>
              </Button>
              <Modal isOpen={isOpen1} size="4xl" onOpenChange={onOpenChange1}>
                <ModalContent className="py-5">
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">
                        Video
                      </ModalHeader>
                      <ModalBody>
                        <iframe
                          width="full"
                          height="415"
                          src="https://www.youtube.com/embed/UkILe14VCnM?si=OdQNDPU2r8x-DDzz"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen
                        ></iframe>
                      </ModalBody>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Carousel;
