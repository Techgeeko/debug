'use client';

import { Search } from "lucide-react";
import { useSearchParams, usePathname, useRouter  } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // Pages where the search bar should be active
  const activePages = ["/bots"];

  // Check if the current pathname is an active page
  const isActivePage = activePages.some((page) => pathname?.startsWith(page));

  // Debounced search handler
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams.toString());

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  // Render nothing if not on an active page
  if (!isActivePage) {
    return null;
  }

  return (
    <div className="relative flex-1 max-w-lg">
      {/* Move the search icon to the right side */}
      <input
        type="text"
        placeholder="Search here..."
        className="w-full pr-10 pl-4 py-2 bg-gray-100 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query") || ""}
      />
      <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
    </div>
  );
}
