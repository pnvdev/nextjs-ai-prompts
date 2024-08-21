"use client";

import { useState } from "react";

const CopyClipboard = ({ text }: { text: string }) => {
  const [pressed, setPressed] = useState(false);

  const onCopyPress = () => {
    console.log("onCopyPress");
    navigator.clipboard.writeText(text);

    setPressed(true);
    setTimeout(() => {
      setPressed(false);
    }, 1000);
  };

  return (
    <button
      onClick={onCopyPress}
      className="end-2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2 inline-flex items-center justify-center w-[50px] h-[50px] absolute top-0 right-2"
      disabled={pressed}
    >
      {pressed === false ? (
        <span id="default-icon">
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
          </svg>
        </span>
      ) : (
        <span id="success-icon" className="inline-flex items-center">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
        </span>
      )}
    </button>
  );
};

export default CopyClipboard;
