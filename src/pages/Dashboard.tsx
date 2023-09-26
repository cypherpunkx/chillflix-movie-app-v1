import { useEffect } from "react";
import { Hero } from "@/components";
import { motion as m, AnimatePresence } from "framer-motion";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import TMDB_API from "@/lib/axios";

export default function Dashboard() {
  return (
    <m.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
    >
      <section id="hero">
        <Hero />
      </section>
    </m.div>
  );
}
