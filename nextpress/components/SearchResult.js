import Link from 'next/link'

const SearchResult = ({searchResults}) => {

   // returning only the first 4 elements for design sake
   const fourMatch = searchResults.slice(0, 4);

    return(
        <div>
            {fourMatch.length > 0 ? (
            <div className="bg-white text-sm dark:bg-gray-800 shadow py-4">
              <div className="px-8 mx-auto max-w-7xl">
                <div className="flex items-center justify-between">
                  <div className="md:block">
                    <div className="flex flex-col items-baseline space-x-4">
                      {fourMatch.map(result => (
                        <Link href={`post-details/${result.id}`} className="underline my-2 text-blue-600" key={result.id}>{result.title}</Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
            : null
            }
        </div>
    )

}

export default SearchResult;