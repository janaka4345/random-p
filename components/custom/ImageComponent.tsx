import Image from "next/image"

const ImageComponent = () => {
    return (
        <div>
            <h1>ImageComponent</h1>
            <Image className="object-cover w-auto h-auto" src={'/image.png'} alt="image" width={200} height={200} sizes="(min-width: 2760px) 16.67vw, (min-width: 1220px) 18.29vw, (min-width: 800px) 27.75vw, (min-width: 760px) calc(-1025vw + 8212px), (min-width: 340px) calc(97vw - 182px), 134px" />
        </div>
    )
}
export default ImageComponent