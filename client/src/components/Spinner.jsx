
export default function Spinner() {
    return (
        <div className="fixed top-0 right-0 h-screen w-screen bg-dark-blue z-50 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-200"></div>
        </div>
    )
}
