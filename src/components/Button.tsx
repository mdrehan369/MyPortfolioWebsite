export function Button({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) {
    return (
        <button onClick={onClick} className="p-3 transition-colors font-medium cursor-pointer rounded-md bg-[#ff004f] text-white hover:text-[#ff004f] hover:bg-transparent border-2 border-[#ff004f]">
            {children}
        </button>
    )
}
