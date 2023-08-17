type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};
export const Categories = ({ categories, selected, onClick }: Props) => {
  return (
    <section className="text-center p-4">
      <h2 className="font-bold text-lg border-b border-sky-400 mb-1">
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:text-sky-500 ${
              category === selected && "text-sky-300"
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
};
