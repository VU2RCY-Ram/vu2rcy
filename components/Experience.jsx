import Link from "next/link";

const Experience = () => {
  const linkClass =
    "landing-link font-medium border-b border-transparent hover:border-current transition-colors duration-300";

  return (
    <section className="landing-panel overflow-hidden">
      <div className="p-5 sm:p-6 md:p-8">
        <h2 className="landing-h2 mb-4 text-left text-base sm:text-lg md:text-xl">Explore</h2>
        <p className="landing-body text-sm sm:text-base md:text-lg w-full">
          As an eager ham radio operator, I love sharing my experiences. Whether
          setting up my shack or experimenting with homebrew equipment, each
          moment is an adventure. Check my latest{" "}
          <Link href="/work" title="Vu2rcy's Involvement: Latest Projects in Radio">
            <span className={`${linkClass} text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300`}>
              Work
            </span>
          </Link>{" "}
          on exciting radio projects or explore my meticulously crafted{" "}
          <Link href="/shack" title="Vu2rcy's Ham Shack: Where Magic Happens">
            <span className={`${linkClass} text-emerald-600 dark:text-[#39ff14] hover:text-emerald-700 dark:hover:text-[#00ff41]`}>
              Shack setup
            </span>
          </Link>
          . Dive into the world of creativity with{" "}
          <Link href="/homebrew" title="Vu2rcy's Handcrafted gear">
            <span className={`${linkClass} text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300`}>
              Homebrew projects
            </span>
          </Link>
          , showcasing the joy of building radio equipment from scratch. Explore{" "}
          <Link href="/products" title="Vu2rcy's Handcrafted Products">
            <span className={`${linkClass} text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300`}>
              Personalized accessories
            </span>
          </Link>{" "}
          designed to enhance your ham radio experience. Learn more{" "}
          <Link href="/about" title="VU2RCY: Discover the Story Behind the Call">
            <span className={`${linkClass} text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300`}>
              About
            </span>
          </Link>{" "}
          my journey, passion, and dedication to ham radio. Join me in
          celebrating recognition and achievements in the radio community.
          Discover{" "}
          <Link href="/awards" title="vu2rcy's Awards Recognition Achievements">
            <span className={`${linkClass} text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300`}>
              Awards
            </span>
          </Link>{" "}
          marking milestones in my ham radio endeavors.
        </p>
      </div>
    </section>
  );
};

export default Experience;
