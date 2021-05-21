import {join} from 'path';
console.log( process.env.STRAPI_URL );
export function resolveMediaUrl( url ){
    return process.env.STRAPI_URL + url;
}

/**
 * Get Property for img tag
 *
 *
 * @returns object
 */
 export function getImgProps( media, format = null ){
    let result = {
        alt: media.alternativeText ? media.alternativeText : media.name,
        width: media.width,
        height: media.height,
        src: resolveMediaUrl( media.url )
    }

    if( format && media.formats[ format ] ) {
        let mediaFormat = media.formats[ format ];
        result.width = mediaFormat.width;
        result.height = mediaFormat.height;
        result.src = resolveMediaUrl( mediaFormat.url )
    }

    return result;
}