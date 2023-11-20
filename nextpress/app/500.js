export default function Custom500() {
    return (
        <div className="bg-gradient-to-r from-purple-300 to-blue-200">
        <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                <div className="border-t border-gray-200 text-center pt-8">
                    <h1 className="text-7xl font-bold text-red-400">500 </h1>
                    <h1 className="text-4xl font-medium py-8">There was an error while on the server try to refresh your browser</h1>
                    <p className="text-2xl pb-8 px-12 font-medium">500 - Server-side error occurred</p>
                </div>
            </div>
        </div>
    </div>
        )
  }
  