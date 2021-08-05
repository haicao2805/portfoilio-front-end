import React from 'react';

function Icon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" height="32" fill="none" viewBox="0 0 32 32">
            <path fill="url(#pattern0)" d="M0 0H32V32H0z"></path>
            <defs>
                <pattern id="pattern0" width="1" height="1" patternContentUnits="objectBoundingBox">
                    <use transform="scale(.00781)" xlinkHref="#image0"></use>
                </pattern>
                <image
                    id="image0"
                    width="128"
                    height="128"
                    xlinkHref="data:image/png;base64,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"
                ></image>
            </defs>
        </svg>
    );
}

export default Icon;