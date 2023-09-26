import { useState, useEffect } from "react";
import TMBD_API, { TMDB_IMAGE_PATH } from "@/lib/axios";
import { LogoSize } from "@/interfaces/movie";
import { motion as m, AnimatePresence } from "framer-motion";

export default function Providers() {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    TMBD_API.get("/watch/providers/movie").then((response: any) => {
      setProviders(response.results);
      // console.log(response)
    });
  }, []);

  console.log(providers);

  return (
    <m.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
    >
      <div className="container mx-auto my-20">
        <div className="flex flex-wrap gap-2">
          {providers.map((provider: any) => (
            <img
              src={`${TMDB_IMAGE_PATH}/${LogoSize.W45}/${provider.logo_path}`}
              alt={provider.provider_name}
              key={provider.provider_id}
              className="aspect-square object-cover object-center"
            />
          ))}
        </div>
      </div>
    </m.div>
  );
}
