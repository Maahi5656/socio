import Link from 'next/link'

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-100 via-[#F0F5F] to-green-200 flex items-center justify-center px-6 pb-10 mt-6">
            <div className="text-center">
                {/* 404 */}
                <h1 className="text-[120px] md:text-[180px] font-extrabold leading-none text-[#05893E] drop-shadow-sm">
                    404
                </h1>

                {/* Message */}
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
                    Page Not Found
                </h2>

                <p className="mt-4 max-w-md mx-auto text-gray-500 text-lg">
                    Oops! The page you’re looking for doesn’t exist or may have
                    been moved.
                </p>

                {/* Button */}
                <Link
                    href="/"
                    className="inline-block mt-8 rounded-lg bg-[#05893E] px-7 py-3 text-white font-semibold shadow-lg shadow-[#05893E] transition-all duration-300 hover:bg-[#05893E] hover:shadow-xl hover:-translate-y-0.5"
                >
                    ← Back to Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound