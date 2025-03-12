import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../features/Context/DarkmodeContext";

export default function DarkMode() {

    const { isDarkMode, toggleDarkMode } = useDarkMode()
    return (
        <button onClick={toggleDarkMode}>
            {isDarkMode ? (
                <HiOutlineSun className="w-5 h-5 text-primary-900" />
            ) : (
                <HiOutlineMoon className="w-5 h-5 text-primary-900" />
            )
            }
        </button>
    )
}