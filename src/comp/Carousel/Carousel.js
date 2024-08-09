import { Swiper, SwiperSlide } from "swiper/react";
// import "../Carousel/carousel.css";

import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

//import images
import img1 from "./Guests/kiran1.jpg";
import img2 from "./Guests/AbhiNiyu.jpeg";
import img3 from "./Guests/Abhishek singh.jpeg";
import img4 from "./Guests/anthony1.jpg";
import img5 from "./Guests/Atul rane.jpeg";
import img6 from "./Guests/DInesh1.jpg";
import img7 from "./Guests/HC Verma.jpeg";
import img8 from "./Guests/John Mather.jpeg";
import img9 from "./Guests/Nitin Gadkari.jpeg";
import img10 from "./Guests/Sandeep Jain.jpeg";
import img11 from "./Guests/sunita1.jpg";
import img12 from "./Guests/abdul kalam.jpg";
import img13 from "./Guests/arsh goyal.jpeg";
import img14 from "./Guests/Vijay_Bhatkar.jpeg";
import img15 from "./Guests/Vijendr Chauhan.jpeg";
import img16 from "./Guests/tanu jain.jpeg";

const Carousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow]}
      effect="coverflow"
      grabCursor="true"
      centeredSlides="true"
      loop={true}
      coverflowEffect={{
        rotate: 15,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      }}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      spaceBetween={50}
      slidesPerView={1}
      initialSlide={5}
      // resistance={false}
      // runCallbacksOnInit={false}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        400: {
          slidesPerView: 2,
        },
        639: {
          slidesPerView: 3,
        },
        865: {
          slidesPerView: 4,
        },
        1000: {
          slidesPerView: 5,
        },
        1500: {
          slidesPerView: 6,
        },
        1700: {
          slidesPerView: 7,
        },
      }}
    >
      <div class="flex justify-center items-center min-h-screen bg-white font-sans text-base text-black m-0 p-10">
        <div class="w-full py-50">
          {/* <!-- Additional required wrapper --> */}
          <div class="swiper-wrapper ">
            {/* <!-- Slides --> */}
            <div class="justify-center items-center">
              <div class="w-96 h-96 overflow-hidden">
                <SwiperSlide>
                  <Card className="w-80">
                    <CardHeader floated={false} className="h-80">
                      <img
                        src={img12}
                        alt=""
                        className="relative w-full h-full z-10 rounded-xl"
                      />
                    </CardHeader>
                    <CardBody className="text-center">
                      <Typography variant="h4" color="blue" className="mb-2">
                        Dr. APJ Abdul Kalam
                      </Typography>
                      <Typography color="black" className="font-medium">
                        Former President of India
                      </Typography>
                    </CardBody>
                  </Card>
                </SwiperSlide>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="picture">
                <SwiperSlide>
                  <Card className="w-80">
                    <CardHeader floated={false} className="h-72">
                      <img
                        src={img1}
                        alt=""
                        className="relative w-full h-full z-10 rounded-xl"
                      />
                    </CardHeader>
                    <CardBody className="text-center">
                      <Typography variant="h4" color="blue" className="mb-2">
                        A K Kiran Kumar
                      </Typography>
                      <Typography color="black" className="font-medium">
                        Former Chairman of ISRO
                      </Typography>
                    </CardBody>
                  </Card>
                </SwiperSlide>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="picture">
                <SwiperSlide>
                  <Card className="w-80">
                    <CardHeader floated={false} className="h-72">
                      <img
                        src={img2}
                        alt=""
                        className="relative w-full h-full z-10 rounded-xl"
                      />
                    </CardHeader>
                    <CardBody className="text-center">
                      <Typography variant="h4" color="blue" className="mb-2">
                        Abhi & Niyu
                      </Typography>
                      <Typography color="black" className="font-medium">
                        Youtube Content Creator
                      </Typography>
                    </CardBody>
                  </Card>
                </SwiperSlide>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="picture">
                <SwiperSlide>
                  <Card className="w-80">
                    <CardHeader floated={false} className="h-72">
                      <img
                        src={img3}
                        alt=""
                        className="relative w-full h-full z-10 rounded-xl"
                      />
                    </CardHeader>
                    <CardBody className="text-center">
                      <Typography variant="h4" color="blue" className="mb-2">
                        Abhishek Singh
                      </Typography>
                      <Typography color="black" className="font-medium">
                        IAS Officer
                      </Typography>
                    </CardBody>
                  </Card>
                </SwiperSlide>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="picture">
                <SwiperSlide>
                  <Card className="w-80">
                    <CardHeader floated={false} className="h-72">
                      <img
                        src={img4}
                        alt=""
                        className="relative w-full h-full z-10 rounded-xl"
                      />
                    </CardHeader>
                    <CardBody className="text-center">
                      <Typography variant="h4" color="blue" className="mb-2">
                        Anthony Leggett
                      </Typography>
                      <Typography color="black" className="font-medium">
                        Theoretical Physicist
                      </Typography>
                    </CardBody>
                  </Card>
                </SwiperSlide>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="picture">
                <SwiperSlide>
                  <Card className="w-80">
                    <CardHeader floated={false} className="h-72">
                      <img
                        src={img5}
                        alt=""
                        className="relative w-full h-full z-10 rounded-xl"
                      />
                    </CardHeader>
                    <CardBody className="text-center">
                      <Typography variant="h4" color="blue" className="mb-2">
                        Atul Rane
                      </Typography>
                      <Typography color="black" className="font-medium">
                        CEO & MD Brahmos Aerospace
                      </Typography>
                    </CardBody>
                  </Card>
                </SwiperSlide>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="picture">
                <SwiperSlide>
                  <Card className="w-80">
                    <CardHeader floated={false} className="h-72">
                      <img
                        src={img6}
                        alt=""
                        className="relative w-full h-full z-10 rounded-xl"
                      />
                    </CardHeader>
                    <CardBody className="text-center">
                      <Typography variant="h4" color="blue" className="mb-2">
                        Dinesh Keskar
                      </Typography>
                      <Typography color="black" className="font-medium">
                        Senior VP, Boeing
                      </Typography>
                    </CardBody>
                  </Card>
                </SwiperSlide>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="picture">
                <SwiperSlide>
                  <Card className="w-80">
                    <CardHeader floated={false} className="h-72">
                      <img
                        src={img7}
                        alt=""
                        className="relative w-full h-full z-10 rounded-xl"
                      />
                    </CardHeader>
                    <CardBody className="text-center">
                      <Typography variant="h4" color="blue" className="mb-2">
                        H.C. Verma
                      </Typography>
                      <Typography color="black" className="font-medium">
                        Indian Physicist
                      </Typography>
                    </CardBody>
                  </Card>
                </SwiperSlide>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="picture">
                <SwiperSlide>
                  <Card className="w-80">
                    <CardHeader floated={false} className="h-72">
                      <img
                        src={img8}
                        alt=""
                        className="relative w-full h-full z-10 rounded-xl"
                      />
                    </CardHeader>
                    <CardBody className="text-center">
                      <Typography variant="h4" color="blue" className="mb-2">
                        John Mather
                      </Typography>
                      <Typography color="black" className="font-medium">
                        Astrophysicist and Cosmologist
                      </Typography>
                    </CardBody>
                  </Card>
                </SwiperSlide>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="picture">
                <SwiperSlide>
                  <Card className="w-80">
                    <CardHeader floated={false} className="h-72">
                      <img
                        src={img9}
                        alt=""
                        className="relative w-full h-full z-10 rounded-xl"
                      />
                    </CardHeader>
                    <CardBody className="text-center">
                      <Typography variant="h4" color="blue" className="mb-2">
                        Nitin Gadkari
                      </Typography>
                      <Typography color="black" className="font-medium">
                        Cabinet Minister
                      </Typography>
                    </CardBody>
                  </Card>
                </SwiperSlide>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="picture">
                <SwiperSlide>
                  <Card className="w-80">
                    <CardHeader floated={false} className="h-72">
                      <img
                        src={img10}
                        alt=""
                        className="relative w-full h-full z-10 rounded-xl"
                      />
                    </CardHeader>
                    <CardBody className="text-center">
                      <Typography variant="h4" color="blue" className="mb-2">
                        Sandeep Jain
                      </Typography>
                      <Typography color="black" className="font-medium">
                        Founder & CEO, GFG
                      </Typography>
                    </CardBody>
                  </Card>
                </SwiperSlide>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="picture">
                <SwiperSlide>
                  <Card className="w-80">
                    <CardHeader floated={false} className="h-72">
                      <img
                        src={img11}
                        alt=""
                        className="relative w-full h-full z-10 rounded-xl"
                      />
                    </CardHeader>
                    <CardBody className="text-center">
                      <Typography variant="h4" color="blue" className="mb-2">
                        Sunita Williams
                      </Typography>
                      <Typography color="black" className="font-medium">
                        American astronaut
                      </Typography>
                    </CardBody>
                  </Card>
                </SwiperSlide>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="picture">
                <SwiperSlide>
                  <Card className="w-80">
                    <CardHeader floated={false} className="h-72">
                      <img
                        src={img13}
                        alt=""
                        className="relative w-full h-full z-10 rounded-xl"
                      />
                    </CardHeader>
                    <CardBody className="text-center">
                      <Typography variant="h4" color="blue" className="mb-2">
                        Arsh Goyal
                      </Typography>
                      <Typography color="black" className="font-medium">
                        Senior SDE, Samsung
                      </Typography>
                    </CardBody>
                  </Card>
                </SwiperSlide>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="picture">
                <SwiperSlide>
                  <Card className="w-80">
                    <CardHeader floated={false} className="h-72">
                      <img
                        src={img14}
                        alt=""
                        className="relative w-full h-full z-10 rounded-xl"
                      />
                    </CardHeader>
                    <CardBody className="text-center">
                      <Typography variant="h4" color="blue" className="mb-2">
                        Vijay Bhatkar
                      </Typography>
                      <Typography color="black" className="font-medium">
                        Architect of PARAM Supercomputer
                      </Typography>
                    </CardBody>
                  </Card>
                </SwiperSlide>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="picture">
                <SwiperSlide>
                  <Card className="w-80">
                    <CardHeader floated={false} className="h-72">
                      <img
                        src={img15}
                        alt=""
                        className="relative w-full h-full z-10 rounded-xl"
                      />
                    </CardHeader>
                    <CardBody className="text-center">
                      <Typography variant="h4" color="blue" className="mb-2">
                        Vijendra Chauhan
                      </Typography>
                      <Typography color="black" className="font-medium">
                        Interview Head, Drishti IAS
                      </Typography>
                    </CardBody>
                  </Card>
                </SwiperSlide>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="picture">
                <SwiperSlide>
                  <Card className="w-80">
                    <CardHeader floated={false} className="h-72">
                      <img
                        src={img16}
                        alt=""
                        className="relative w-full h-full z-10 rounded-xl"
                      />
                    </CardHeader>
                    <CardBody className="text-center">
                      <Typography variant="h4" color="blue" className="mb-2">
                        Tanu Jain
                      </Typography>
                      <Typography color="black" className="font-medium">
                        Ex-Civil Servant
                      </Typography>
                    </CardBody>
                  </Card>
                </SwiperSlide>
              </div>
            </div>
          </div>
          {/* If we need pagination */}
          <div class="swiper-pagination"></div>
          {/* If we need navigation buttons  */}
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          {/* <!-- If we need scrollbar --> */}
          <div class="swiper-scrollbar"></div>
        </div>
      </div>
      ...
    </Swiper>
  );
};

export default Carousel;
