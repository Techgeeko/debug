"use client";

import { useRouter } from "next/navigation";

export default function Logo() {
    const router = useRouter();

    return (
        <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => router.push('/')}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="150" viewBox="0 0 150 150">
            <g id="logo" transform="translate(-9045 -4352)">
                <rect id="Rectangle_20" data-name="Rectangle 20" width="150" height="150" rx="5" transform="translate(9045 4352)" fill="#0056d2"/>
                <g id="Group_20" data-name="Group 20">
                <path id="Union_1" data-name="Union 1" d="M7,80l6.632-11.533A35.509,35.509,0,0,1,48.673,7.525L53,0,64.56,20.105A35.468,35.468,0,0,1,67.777,25.7L99,80Z" transform="translate(9087 4387)" fill="#fff"/>
                </g>
            </g>
            </svg>
            <p className="font-bold text-white text-sm sm:text-base md:text-lg">
                Quick Quote
            </p>
        </div>
    );
}
