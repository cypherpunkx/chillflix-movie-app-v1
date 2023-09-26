import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TMDB_API, { TMDB_IMAGE_PATH } from "@/lib/axios";
import {
  MovieApiResponse,
  Movie,
  BackdropSize,
  PosterSize,
} from "@/interfaces/movie";
import { Mousewheel, Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MdOutlineSubtitles } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { motion as m } from "framer-motion";

function Hero() {
  const [trending, setTrending] = useState<Movie[]>([]);
  const [anime, setAnime] = useState(0);

  useEffect(() => {
    TMDB_API.get("/trending/movie/day", {
      params: {
        language: "id",
      },
    }).then((response: any) => setTrending(response.results));
  }, []);

  return (
    <div className="relative w-full h-screen">
      <Swiper
        direction="vertical"
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        navigation={false}
        modules={[Mousewheel, Autoplay, Pagination, Navigation]}
        onSlideChange={() => {
          console.log("slide change");
        }}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full h-full"
      >
        {trending.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              src={`${TMDB_IMAGE_PATH}/${BackdropSize.W1280}/${movie.backdrop_path}`}
              alt=""
              className="w-full h-full aspect-auto object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm">
              <div className="grid place-content-center h-full w-full mx-auto">
                <m.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-around gap-8 p-44"
                >
                  <img
                    src={`${TMDB_IMAGE_PATH}/${PosterSize.W342}/${movie.poster_path}`}
                    alt={movie.original_title || movie.title}
                    className="w-auto h-auto aspect-auto object-cover object-center rounded-lg"
                  />
                  <div className="space-y-4 p-12">
                    <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                      {movie.original_title || movie.title}
                    </h1>
                    <div className="space-x-4 flex items-center text-gray-100">
                      <h2 className="flex items-center gap-2 text-2xl uppercase font-thin">
                        <MdOutlineSubtitles className="text-green-600" />
                        <span>{movie.original_language}</span>
                      </h2>
                      <h2 className="flex items-center gap-2 text-2xl uppercase font-thin">
                        <AiFillStar className="text-yellow-600" />
                        <span>{movie.vote_average}</span>
                      </h2>
                      <h2 className="flex items-center gap-2 text-2xl uppercase font-thin">
                        <BsFillCalendarDateFill className="text-blue-600" />
                        <span>{movie.release_date}</span>
                      </h2>
                    </div>
                    <p>{movie.overview}</p>
                    <button className="py-2 px-4 rounded bg-purple-600">
                      Watch Movie
                    </button>
                  </div>
                </m.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
