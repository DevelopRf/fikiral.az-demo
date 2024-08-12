import { SearchIcon } from "../icon/SearchIcon"

export const SearchBox = ({myRef, myStyle}) => {
    return (
        <div ref={myRef} className={`flex items-center h-[37px] search-visible md:w-80 overflow-hidden gap-x-1 bg-search rounded-md hover:searchShadow focus-within:searchShadow transition-all duration-300 ${myStyle ? myStyle : ""}`}>
            <button className="flex-shrink-0"><SearchIcon /></button>
            <input type="text" placeholder="Axtar" className="outline-none border-none bg-transparent text-sm w-full" />
        </div>
    )
}