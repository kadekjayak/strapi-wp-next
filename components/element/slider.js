import { useEffect } from 'react';
import {getImgProps} from '../../helpers/utilities';
import {createRef} from 'react';

export default function Slider( props ){

    let elementRef = createRef();

    /*
    useEffect(()=> {
        let activeSlide = document.querySelector('.slide.translate-x-0');
        activeSlide.classList.remove('translate-x-0');
        activeSlide.classList.add('-translate-x-full');

        let nextSlide = activeSlide.nextElementSibling;
        nextSlide.classList.remove('translate-x-full');
        nextSlide.classList.add('translate-x-0');
    });
    */

    return (
        <div className="relative" ref={elementRef}>
            {props.items.map((media) => {
                return (
                    <div key={'slider-item-' + media.id} className="absolute inset-0 w-screen h-screen text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-0 slide">
                        <img {...getImgProps(media.content)} />
                    </div>
                )
            })}
        </div>
    )
}
