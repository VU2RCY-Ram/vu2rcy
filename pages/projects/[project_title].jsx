import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import projectsData from "@/projectsData";

export default function ProjectDetail() {
  const router = useRouter();
  const { project_title } = router.query;
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  if (!router.isReady) {
    return null;
  }

  const project = projectsData.find((item) => item.slug === project_title);
  const visibleSections = (project?.sections || []).filter((section) =>
    section?.content?.trim()
  );

  if (!project) {
    return (
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 mx-auto max-w-[75rem]">
        <main className="min-h-screen pt-28">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            Project not found
          </h1>
          <div className="mt-6 text-center">
            <Link
              href="/projects"
              className="inline-flex rounded-xl px-5 py-2.5 font-semibold bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              Back to Projects
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 mx-auto max-w-[75rem]">
      <Head>
        <title>{project.title} - Projects</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="min-h-screen pt-24 pb-16">
        <div className="mb-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm md:text-base font-semibold bg-purple-600 text-white hover:bg-purple-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Back
          </Link>
        </div>
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <section className="mt-5 md:mt-6 max-w-3xl mx-auto">
          <h1 className="font-deca text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.length > 0 ? (
              project.tags.map((tag) => (
                <span
                  key={`${project.slug}-detail-${tag}`}
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

          {visibleSections.length > 0 && (
            <article className="mt-8 space-y-8 text-gray-700 dark:text-gray-300">
              {visibleSections.map((section) => (
                <section key={`${project.slug}-${section.title}`}>
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm md:text-base lg:text-lg leading-7">
                    {section.content}
                  </p>
                </section>
              ))}
            </article>
          )}

          <footer className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
              Links
            </h2>
            <div className="mt-3 flex flex-wrap gap-3">
              {project.links.length > 0 ? (
                project.links.map((link) => (
                  <a
                    key={`${project.slug}-${link.label}`}
                    href={link.url}
                    className="inline-flex rounded-xl px-4 py-2 text-sm md:text-base font-semibold bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))
              ) : (
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                  Links will be added soon.
                </p>
              )}
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
