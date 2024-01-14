export function SuccessAlert() {
    return (
        <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 transition-opacity duration-500 opacity-100" role="alert">
            <span className="font-medium">Success alert!</span> Your submission has been sent.
        </div>
    )
    
}

export function ErrorAlert() {
    return (
        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 transition-opacity duration-500 opacity-100" role="alert">
            <span className="font-medium">Danger alert!</span> Change a few things up and try submitting again.
        </div>
    )
    
}