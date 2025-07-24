import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
const placeholderTexts = [" AC Service ", " Kitchen Service", " Facial"];
const trandingServices = [
  "Salon",
  "Professional bathroom cleaning",
  "Electricians",
  "Carpenters",
  "Professional kitchen cleaning",
  "Full home cleaning",
  "Massage for Men",
  "Washing machine repair",
  "Air cooler repair",
  "Ro Repair",
];
export default function SearchInput() {
  const [category, SetCategory] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const typingSpeed = 150; // ms per character
  const pauseAfterTyping = 1000; // ms pause before next string

  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    let intervalId;
    let timeoutId;

    const startTyping = () => {
      setCurrentText("");
      const currentFullText = placeholderTexts[textIndex];

      intervalId = setInterval(() => {
        setCurrentText((prev) => prev + currentFullText.charAt(charIndex));
        charIndex++;

        if (charIndex > currentFullText.length) {
          clearInterval(intervalId);
          timeoutId = setTimeout(() => {
            const nextIndex = (textIndex + 1) % placeholderTexts.length;
            setTextIndex(nextIndex);
          }, pauseAfterTyping);
        }
      }, typingSpeed);
    };

    startTyping();

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [textIndex, placeholderTexts]);

  return (
    <div className="flex items-center bg-white border-0 rounded-lg">
      <input
        type="search"
        id="default-search"
        defaultValue={category}
        className="w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-0"
        placeholder={"Search for " + currentText}
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
      />

      {showDropdown && (
        <div className="absolute top-16 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-70">
          <ul className="py-2 text-sm text-gray-700">
            {trandingServices &&
              trandingServices.map((service, index) => (
                <li key={index}>
                  <span className="px-4 py-2 text-left hover:bg-gray-100 block cursor-pointer" >
                    <span className="flex items-center text-xs font-medium gap-2 border border-gray-200 px-2.5 py-0.5 rounded-sm" onClick={()=> {SetCategory(service),console.log(service);
                    }}>
                      <ArrowTrendingUpIcon className="h-5" />
                      {service}
                    </span>
                  </span>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
