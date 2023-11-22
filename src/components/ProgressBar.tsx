export function ProgressBar({ percentage = 0 }: { percentage?: number }) {
  return (
    <div className="rounded-full bg-[#D3BE6D] h-10 p-[10px]">
      <div
        className="rounded-full bg-[#C100B4] h-5"
        style={{
          minWidth: "1.6rem",
          width: `${percentage}%`,
          transition: "width 1s ease-in-out",
        }}
      ></div>
    </div>
  );
}
