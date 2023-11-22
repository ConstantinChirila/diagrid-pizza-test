import { PropsWithChildren } from "react";

export function CustomCheckbox({
  name,
  value,
  onChange,
  children,
}: PropsWithChildren<{
  name: string;
  value: boolean;
  onChange: (name: string, value: boolean) => void;
}>) {
  return (
    <div
      className="flex gap-2 items-center text-2xl cursor-pointer py-3"
      style={{
        width: "fit-content",
      }}
      onClick={() => onChange(name, !value)}
    >
      <div className="w-12 h-12 border-6 border-inputBorder rounded-full mr-2 cursor-pointer flex justify-center items-center bg-white transition ease-in-out duration-500 hover:border-fuchsia-300 hover:scale-[1.2] hover:drop-shadow-md">
        {value && (
          <svg
            width="26"
            height="20"
            viewBox="0 0 26 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 10L10 16L22 4"
              stroke="#6D53C9"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      {children}
    </div>
  );
}
