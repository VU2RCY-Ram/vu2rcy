const Blob = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Phosphor-green signal orb */}
      <div
        className="absolute top-[20rem] -right-16 md:top-32 md:right-[10%] lg:top-24 lg:right-[15%] w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full opacity-40 dark:opacity-50"
        style={{
          background: "radial-gradient(circle at center, rgba(57, 255, 20, 0.25), transparent 60%)",
          filter: "blur(40px)",
        }}
      />
      {/* Amber warm glow */}
      <div
        className="absolute top-[28rem] right-[5%] md:top-48 md:right-[25%] lg:top-64 lg:right-[30%] w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full opacity-35 dark:opacity-40"
        style={{
          background: "radial-gradient(circle at center, rgba(251, 191, 36, 0.2), transparent 55%)",
          filter: "blur(35px)",
        }}
      />
      {/* Signal blue accent */}
      <div
        className="absolute top-[22rem] right-[20%] md:top-36 md:right-[35%] lg:top-40 lg:right-[40%] w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 rounded-full opacity-30 dark:opacity-35"
        style={{
          background: "radial-gradient(circle at center, rgba(0, 212, 255, 0.18), transparent 50%)",
          filter: "blur(30px)",
        }}
      />
    </div>
  );
};

export default Blob;
