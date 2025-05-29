export function Heading({ text }: { text: string }) {
    return (
        <h2
            className="text-3xl font-bold text-gray-100 mb-8 inline-block border-b-4"
            style={{ borderColor: "#ff004f" }}
        >
            {text}
        </h2>

    )
}
