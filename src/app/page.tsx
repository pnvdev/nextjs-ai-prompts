import parse from "@/utils/parse";

type PromptData = {
  act: string;
  prompt: string;
};

export default async function Home() {
  const res = await fetch(process.env.NEXT_PUBLIC_SHEET || "", {
    cache: "no-store",
  });
  const promts = await res.text();

  // Add a type guard to ensure valid data is returned
  let data: PromptData[] = [];

  try {
    data = (await parse(promts)) as PromptData[];
  } catch (error) {
    console.error("Failed to parse data:", error);
  }

  const randomKey = Math.floor(Math.random() * data.length);

  return (
    <main className="container m-auto flex min-h-screen flex-col items-center justify-start p-32 max-[640px]:p-10 font-mono">
      <h1 className="mb-20 max-[640px]:mb-10 text-7xl max-[640px]:text-6xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white text-center">
        AI Prompts
      </h1>
      <p className="mb-16 max-[640px]:mb-10 text-2xl font-normal text-gray-500 lg:text-4xl dark:text-gray-400 text-center">
        {data[randomKey]?.act || "No activity available"}
      </p>
      <p className="mb-6 text-xl font-normal text-gray-500 dark:text-gray-400 text-justify">
        {data[randomKey]?.prompt || "No prompt available"}
      </p>
    </main>
  );
}
