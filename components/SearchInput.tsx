"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SearchInput = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("topic") || "";

  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    setTimeout(() => {
      let newUrl = "";
      if (searchQuery) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "topic",
          value: searchQuery,
        });
      } else {
        if (pathname === "/companions") {
          newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["topic"],
          });
        }
      }

      router.push(newUrl, { scroll: false });
    }, 1000);
  }, [pathname, searchQuery, router, searchParams]);

  return (
    <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
      <Image src={"/icons/search.svg"} alt="search" width={15} height={15} />
      <input type="text" className="outline-none" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
    </div>
  );
};

export default SearchInput;
