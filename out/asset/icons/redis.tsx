import React from 'react';

function Icon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" height="32" fill="none" viewBox="0 0 32 32">
            <path fill="url(#pattern4)" d="M0 0H32V32H0z"></path>
            <defs>
                <pattern id="pattern4" width="1" height="1" patternContentUnits="objectBoundingBox">
                    <use transform="scale(.00781)" xlinkHref="#image4"></use>
                </pattern>
                <image
                    id="image4"
                    width="128"
                    height="128"
                    xlinkHref="data:image/png;base64,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"
                ></image>
            </defs>
        </svg>
    );
}

export default Icon;