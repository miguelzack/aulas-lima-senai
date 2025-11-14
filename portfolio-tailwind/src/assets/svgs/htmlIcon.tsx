import * as React from "react";
import type { SVGProps } from "react";

const HtmlIco = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#clip0_2044_42)">
            <mask
                id="mask0_2044_42"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="50"
                height="50"
            >
                <path d="M0 0H50V50H0V0Z" fill="white" />
            </mask>

            <g mask="url(#mask0_2044_42)">
                <path
                    d="M10.5833 0H12.8375V2.22708H14.9V0H17.1541V6.74167H14.9V4.48542H12.8375V6.74167H10.5854L10.5833 0ZM20.1166 2.23542H18.1333V0H24.3562V2.23542H22.3708V6.74167H20.1166V2.23542ZM25.3437 0H27.6937L29.1396 2.36875L30.5833 0H32.9333V6.74167H30.6896V3.4L29.1396 5.79792H29.1L27.5479 3.40208V6.74167H25.3437V0ZM34.0541 0H36.3104V4.51458H39.4771V6.74375H34.0541V0Z"
                    fill="white"
                />

                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.5125 45.9833L6.25 9.82703H43.75L39.4854 45.9791L24.9792 49.9999L10.5125 45.9833ZM19.1312 26.1916L18.7271 21.6499H35.6958L36.0917 17.2166H13.8833L15.0792 30.627H30.4479L29.9333 36.377L24.9875 37.7145H24.9833L20.0458 36.3812L19.7292 32.8458H15.275L15.8958 39.8083L24.9792 42.3291L34.0771 39.8083L35.1854 27.3833L35.2937 26.1937L19.1312 26.1916Z"
                    fill="white"
                />
            </g>
        </g>

        <defs>
            <clipPath id="clip0_2044_42">
                <rect width="50" height="50" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

export default HtmlIco;
