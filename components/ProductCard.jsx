import Image from "next/image";
import { useRouter } from "next/router";
import { HiOutlineCube } from "react-icons/hi2";

export default function ProductCard({ product }) {
  const router = useRouter();
  const { title, description, image, toUrl } = product;
  const fullUrl = toUrl ? `/products${toUrl}` : null;
  const isClickable = !!fullUrl;

  const handleClick = () => {
    if (fullUrl) router.push(fullUrl);
  };

  return (
    <div
      onClick={handleClick}
      className={`landing-panel flex flex-col overflow-hidden transition-all duration-300 max-w-md ${
        isClickable
          ? "cursor-pointer hover:border-amber-500/40 dark:hover:border-[#39ff14]/40 hover:shadow-lg dark:hover:shadow-[0_0_16px_rgba(57,255,20,0.12)]"
          : "cursor-default"
      }`}
    >
      {/* Image or placeholder */}
      <div className="relative w-full aspect-video bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <HiOutlineCube className="w-12 h-12 text-slate-400 dark:text-slate-500" />
        )}
        {isClickable && (
          <span className="absolute bottom-2 right-2 text-xs font-console px-2 py-0.5 rounded bg-amber-500/20 dark:bg-[#39ff14]/20 text-amber-700 dark:text-[#39ff14]">
            View details →
          </span>
        )}
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h2 className="landing-h2 text-lg md:text-xl mb-2">{title}</h2>
        <p className="landing-body text-sm sm:text-base text-justify line-clamp-3 sm:line-clamp-4 min-h-0">
          {description}
        </p>
      </div>
    </div>
  );
}
