import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import projectsData from "@/projectsData";

export default function Projects() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="px-1 sm:px-2 md:px-3 lg:mb-2 lg:px-3 mx-auto max-w-[90%]">
      <Head>
        <title>Projects - VU2RCY</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="max-w-screen">
        <div className="pt-24 container mx-auto p-4">
          <h1 className="text-center selection:text-black/40 dark:selection:text-white/40 font-deca bg-gradient-to-tr from-purple-200 via-purple-400 to-purple-800 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Projects
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-center text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300">
            Explore my ham radio project builds. Tap any project to view details.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
            {projectsData.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={`group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  currentTheme === "dark"
                    ? "bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border-slate-700"
                    : "bg-gradient-to-br from-white via-purple-50 to-cyan-50 border-purple-300 shadow-sm"
                }`}
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-5">
                  <h2 className="font-deca text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.length > 0 ? (
                      project.tags.map((tag) => (
                        <span
                          key={`${project.slug}-${tag}`}
                          className="text-xs md:text-sm px-2.5 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-200"
                        >
                          {tag}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs md:text-sm px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                        No tags
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
