export default function Text( props ){
    return (
        <div class="relative" ref={elementRef}>
            {props.items.map((media) => {
                return (
                    <div class="absolute inset-0 w-screen h-screen text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-0 slide">
                        <img {...getImgProps(media.content)} />
                    </div>
                )
            })}
        </div>
    )
}
