import { HiOutlineX } from "react-icons/hi";
import useOutside from "../hooks/useOutside";

export default function Modal({ open, onClose, title, children, isDarkMode }) {
  const ref = useOutside(onClose);

  return (
    open && (
      <div
        className={`fixed top-0 left-0 w-full h-full z-50 backdrop-blur-sm `}
      >
        <div
          ref={ref}
          className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            rounded-lg p-4 shadow-lg transition-all duration-500 ease-out 
            w-[calc(100vw-1rem)] md:max-w-lg max-h-[calc(100vh-2rem)] 
            overflow-y-auto ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
        >
          <div className="flex items-center justify-between border-b border-gray-200/95 pb-2 mb-6">
            <p className="text-secondary-700 font-bold text-base">{title}</p>
            <button onClick={onClose}>
              <HiOutlineX className="w-5 h-5 text-secondary-500" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}
