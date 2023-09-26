import { Navbar } from "@/components";
import { Outlet } from "react-router-dom";
import { motion as m } from "framer-motion";

export default function RootLayout() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
    >
      <header className="absolute top-0 left-0 right-0 z-10">
        <Navbar />
      </header>
      <main className="overflow-hidden">
        <Outlet />
      </main>
    </m.div>
  );
}
