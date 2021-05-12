import {getImgProps} from '../../helpers/utilities';

export default function Hero( props ){
    return (
        <div className="element-hero">
            <div className="description" dangerouslySetInnerHTML={props.description}></div>
            <div className="medias">
                {props.medias.map((media) => {
                    return (
                        <img key={'image-' + media.id} {...getImgProps( media ) } />
                    )
                })}
            </div>
        </div>
    )
}
