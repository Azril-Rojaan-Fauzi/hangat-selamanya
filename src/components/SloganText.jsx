import { motion } from "motion/react";

const SloganText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      exit={{
        opacity: 0,
        y: 50,
        transition: { duration: 0.4, delay: 0.5 },
      }}
      className="col-span-1 flex h-80 flex-col items-center justify-center gap-5 md:h-full"
    >
      <h2 className="text-center text-3xl font-bold">Hangat Selamanya</h2>
      <p className="px-3 text-center text-xs/7 font-light md:max-w-xs lg:max-w-md lg:text-[11px]/8 xl:text-xs/8">
        Mengabadikan setiap cerita - dari yang besar hingga kecil dan sederhana
        - agar hangatnya terus menjadi bagian dari mereka,selamanya
      </p>
    </motion.div>
  );
};

export default SloganText;
