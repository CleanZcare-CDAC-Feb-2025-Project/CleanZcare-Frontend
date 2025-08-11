import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

// interface DrawerProps {
//   isOpen: boolean;
//   onClose: () => void;
//   size?: "sm" | "md" | "lg";
//   overlayClassName?: string;
//   containerClassName?: string;
//   className?: string;
//   children: React.ReactNode;
// }

export default function Drawer({
  isOpen,
  onClose,
  size = "md",
  overlayClassName = "",
  containerClassName = "",
  className = "",
  children,
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}  >
      <Dialog as="div" className={`relative z-50`} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={`fixed inset-0 bg-black/25 ${overlayClassName}`} />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel
                  className={`w-screen ${
                    size === "sm"
                      ? "max-w-sm"
                      : size === "md"
                      ? "max-w-md"
                      : "max-w-lg"
                  } transform overflow-hidden bg-white p-0 text-left align-middle shadow-xl transition-all ${containerClassName} ${className}`}
                >
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
