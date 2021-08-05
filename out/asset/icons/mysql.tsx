import React from 'react';

function Icon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32" height="32" fill="none" viewBox="0 0 32 32">
            <path fill="url(#pattern2)" d="M0 0H32V32H0z"></path>
            <defs>
                <pattern id="pattern2" width="1" height="1" patternContentUnits="objectBoundingBox">
                    <use transform="scale(.00781)" xlinkHref="#image2"></use>
                </pattern>
                <image
                    id="image2"
                    width="128"
                    height="128"
                    xlinkHref="data:image/png;base64,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"
                ></image>
            </defs>
        </svg>
    );
}

export default Icon;
