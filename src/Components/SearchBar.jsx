import { useState } from "react";

function SearchBar({ search }) {
  const [isFocused, setFocusHandler] = useState(false);

  return (
    <>
      <div
        className={
          isFocused
            ? "w-full hidden bg-white rounded-full py-1 pl-6 pr-1 sm:flex justify-between ring-3 ring-[#EA4C89]/20"
            : "w-full hidden bg-neutral-100 rounded-full py-1 pl-6 pr-1 sm:flex justify-between"
        }
      >
        <input
          type="text"
          placeholder={search}
          className="outline-0 w-[90%] cursor-auto"
          onFocus={() => setFocusHandler(true)}
          onBlur={() => setFocusHandler(false)}
        />
        <button className="bg-[#EA4C89] w-10 h-10 flex items-center justify-center rounded-full">
          <svg
            width="20"
            height="20"
            fill="white"
            class="aa-SubmitIcon"
            viewBox="0 0 24 24"
          >
            <path d="M16.041 15.856a1 1 0 0 0-.186.186A6.97 6.97 0 0 1 11 18c-1.933 0-3.682-.782-4.95-2.05S4 12.933 4 11s.782-3.682 2.05-4.95S9.067 4 11 4s3.682.782 4.95 2.05S18 9.067 18 11a6.97 6.97 0 0 1-1.959 4.856m5.666 4.437-3.675-3.675A8.97 8.97 0 0 0 20 11c0-2.485-1.008-4.736-2.636-6.364S13.485 2 11 2 6.264 3.008 4.636 4.636 2 8.515 2 11s1.008 4.736 2.636 6.364S8.515 20 11 20a8.97 8.97 0 0 0 5.618-1.968l3.675 3.675a.999.999 0 1 0 1.414-1.414" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default SearchBar;
