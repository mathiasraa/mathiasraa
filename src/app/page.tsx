import {
  AnimatedBlock,
  Cursor,
  EducationBlock,
  ExpertiseBlock,
  LinksBlock,
  TitleBlock,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen p-5 sm:p-20 pb-20 font-[family-name:var(--font-geist-sans)] selection:bg-[#73AC4Caa] bg-[#ededed]">
      <Cursor />
      <main className="flex flex-col">
        <AnimatedBlock index={0}>
          <TitleBlock />
        </AnimatedBlock>
        <AnimatedBlock index={1}>
          <ExpertiseBlock />
        </AnimatedBlock>
        <AnimatedBlock index={2}>
          <EducationBlock />
        </AnimatedBlock>
        <AnimatedBlock
          index={3}
          className="flex items-end fixed sm:relative h-full sm:h-auto top-0"
        >
          <LinksBlock />
        </AnimatedBlock>
      </main>
    </div>
  );
}
