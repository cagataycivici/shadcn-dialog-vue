export default {
    root: "grid w-full max-w-lg gap-4 border dark:border-gray-500/40 bg-white dark:bg-black p-6 shadow-lg duration-200 sm:rounded-lg md:w-full sm:max-w-[425px]",
    headerTitle:
        "text-lg font-semibold leading-none tracking-tight text-black dark:text-white",
    header: "flex items-center justify-between",
    headerIcons: "relative",
    closeButton:
        "rounded-sm opacity-70 text-black dark:text-white ring-offset-background rounded-lg transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring ring-offset-background ring-gray-400 dark:ring-gray-50 disabled:pointer-events-none h-4 w-4 flex items-center justify-center",
    closeButtonIcon: "w-3 h-3",
    mask: "backdrop-blur-sm",
    transition: {
        enterFromClass: "opacity-0 scale-75",
        enterActiveClass: "transition-all duration-200 ease-out",
        leaveActiveClass: "transition-all duration-200 ease-out",
        leaveToClass: "opacity-0 scale-75",
    },
};
