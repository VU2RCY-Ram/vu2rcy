const CategoryCard = () => {
  const tags = [
    "Radio Tech",
    "Antenna Design",
    "DXpeditions",
    "Propagation",
    "QRP Operations",
    "Digital Modes",
    "Contesting",
  ];

  return (
    <div className="flex flex-wrap select-none gap-2 justify-center mt-6 mb-6">
      {tags.map((tag) => (
        <span
          key={tag}
          className="font-console text-[0.65rem] md:text-xs px-3 py-1.5 rounded-lg bg-amber-500/10 dark:bg-[#39ff14]/10 text-amber-700 dark:text-[#39ff14] border border-amber-500/20 dark:border-[#39ff14]/25 whitespace-nowrap font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default CategoryCard;
