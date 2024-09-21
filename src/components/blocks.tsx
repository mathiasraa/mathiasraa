import { cn } from "@/utils/cn";

const AREAS_OF_EXPERTISE = ["Data Science", "Design", "Software"];
const LINKS = [
  { name: "GitHub", url: "https://github.com/mathiasraa/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/mathiasraa/" },
  { name: "Email", url: "mailto:mskogenraa@gmail.com" },
];

export const TitleBlock: React.FC = () => (
  <h1 className="font-serif text-4xl tracking-tighter font-semibold text-left">
    Mathias Raa
  </h1>
);

export const ExpertiseBlock: React.FC = () => (
  <div className="flex flex-col sm:flex-row sm:space-x-2 mt-3 sm:mt-0">
    {AREAS_OF_EXPERTISE.map((area, i) => (
      <div className={cn("flex items-center")} key={area}>
        <h2 className="font-serif tracking-tight text-2xl sm:text-2xl font-medium text-gray-600">
          {i !== 0 && <span className="text-gray-300 mr-2 ">\</span>}
          {area}
        </h2>
      </div>
    ))}
  </div>
);

export const EducationBlock: React.FC = () => {
  const SM_WIDTH = "w-[45px] sm:w-[50px]";
  const LG_WIDTH = "w-[200px]";

  return (
    <div className="flex flex-col text-gray-500 mt-10">
      <p>Currently studying:</p>
      <div className="flex">
        <div className={SM_WIDTH}>
          <p>M.Sc.</p>
        </div>
        <div className={cn(LG_WIDTH, `italic`)}>
          <p>Industrial Economics & Technology Management</p>
        </div>
      </div>
      <p>@</p>

      <div className={cn(LG_WIDTH, `italic`)}>
        <p>Norwegian University of Science & Technology,</p>
      </div>
      <div className="flex">
        <div className={SM_WIDTH} />
        <div className={cn(LG_WIDTH)}>
          <p>Trondheim, Norway</p>
        </div>
      </div>
    </div>
  );
};

export const LinksBlock: React.FC = () => (
  <div className="flex flex-col mt-10 bottom-0 mb-4 sm:relative">
    <p className="text-gray-500">Some links:</p>

    {LINKS.map(({ name, url }, i) => (
      <a
        href={url}
        className="flex flex-row space-x-3 hover:translate-x-3 group tranform transition-transform w-min hover:bg-black px-2 -ml-2 pt-1"
        key={name}
      >
        <h2 className="text-2xl text-gray-500 group-hover:text-white font-bold">
          &#9758;
        </h2>
        <p className="text-lg text-gray-600 group-hover:text-white">{name}</p>
      </a>
    ))}
  </div>
);
