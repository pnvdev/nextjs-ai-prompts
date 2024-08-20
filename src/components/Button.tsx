"use client";
import { useRouter } from "next/navigation";

const Button = () => {
  const router = useRouter();
  const handleAnotherPrompt = () => {
    router.refresh();
  };

  return (
    <button
      onClick={() => {
        handleAnotherPrompt();
      }}
      className="bg-transparent bg-white hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
    >
      Give Me Another
    </button>
  );
};

export default Button;
