export default function StackLabel({labels}) {
    return (
        <ul className="flex flex-wrap" aria-label="Technologies used">
            {labels.map((label) => (
                <li className="mr-1.5" key={label}>
                    <div className="flex items-center rounded-full bg-sky-600/40 px-3 py-1 text-xs font-medium leading-5 text-white">
                        {label}
                    </div>
                </li>
            ))}
        </ul>
    )
}