import React from "react";
import {
  Breadcrumbs,
  BreadcrumbItem,
  CardHeader,
  CardBody,
} from "@heroui/react";
import { Card, CardFooter, Image, Button } from "@heroui/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import { MdOutlinePlayCircleOutline } from "react-icons/md";

function Video() {
  const variants = ["solid"];
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <section className="container mx-auto px-5 pb-10 mt-10  items-start gap-10 lg:px-0  grid grid-cols-none lg:grid-cols-12 ">
      <div className="lg:col-start-1 lg:col-end-8">
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
        <div className="grid grid-cols-none lg:grid-cols-2 gap-10 mt-10">
          <Button
            onPress={onOpen}
            className="h-full transition-none transform-none   w-full m-0 p-0"
          >
            <Card
              isFooterBlurred
              className="border-none relative shadow-none flex cursor-pointer items-center justify-center"
              id="playVideo"
              radius="lg"
            >
              <Image
                alt="Woman listing to music"
                className="aspect-3/2 object-cover w-[100vh] h-[35vh]"
                src="https://panel.racmanagementsystem.academy/royal-academy/listing/videos/large/92.jpg"
              />
              <MdOutlinePlayCircleOutline
                className="text-5xl absolute z-50 text-white "
                id="iconPlay"
              />
            </Card>
          </Button>
          <Modal isOpen={isOpen} size="3xl" onOpenChange={onOpenChange}>
            <ModalContent className="py-5">
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Video
                  </ModalHeader>
                  <ModalBody >
                  <iframe width="full" height="415" src="https://www.youtube.com/embed/6h7C_VYGV3w?si=Yng4n4VZxtpNx5lv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
          <Button
            onPress={onOpen}
            className="h-full transition-none transform-none   w-full m-0 p-0"
          >
            <Card
              isFooterBlurred
              className="border-none relative shadow-none flex cursor-pointer items-center justify-center"
              id="playVideo"
              radius="lg"
            >
              <Image
                alt="Woman listing to music"
                className="aspect-3/2 object-cover w-[100vh] h-[35vh]"
                src="https://panel.racmanagementsystem.academy/royal-academy/listing/videos/large/90.jpg"
              />
              <MdOutlinePlayCircleOutline
                className="text-5xl absolute z-50 text-white "
                id="iconPlay"
              />
            </Card>
          </Button>
          <Modal isOpen={isOpen} size="3xl" onOpenChange={onOpenChange}>
            <ModalContent className="py-5">
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Video
                  </ModalHeader>
                  <ModalBody >
                  <iframe width="full" height="415" src="https://www.youtube.com/embed/6h7C_VYGV3w?si=Yng4n4VZxtpNx5lv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
    
      <div className="lg:col-start-8 lg:col-end-13 mt-5">
        <Card
          isFooterBlurred
          className="border-none grid grid-cols-none lg:grid-cols-2  lg:h-[41.5vh]"
          radius="lg"
        >
          <Image
            alt="Woman listing to music"
            className="aspect-3/2 object-cover lg:h-[41.5vh]"
            src="https://panel.racmanagementsystem.academy/LeaderMessages/thumbnail/09-07-2024_1720502321.JPG"
          />
          <div className="title text-xl font-medium">
            <CardHeader>បណ្ឌិតសភាចារ្យ សុខ ទូច</CardHeader>
            <CardBody>Not yet available</CardBody>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Video;
