import React from "react";
import { motion as m } from "framer-motion";
import YouTube, { YouTubeProps } from "react-youtube";
import { Modal } from "@/components";

export default function Movies() {
  const videoId = "6JnN1DmbqoU"; // Replace with your YouTube video ID

  const opts: YouTubeProps["opts"] = {
    height: "360",
    width: "640",
    playerVars: {
      origin: "https://youtube.com",

      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const onReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <m.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      className="mt-20"
    >
      <Modal>
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
      </Modal>
    </m.div>
  );
}
