import { ImageHighlight } from "@/types/ImageHighlight";

import HoverImage from './HoverImage';

type HighLightProps = {
    images: ImageHighlight[];
};

const Highlights: React.FC<HighLightProps> = ({ images }) => {

    return (
        <section>
            <div className="grid grid-cols-2 gap-4">
                {images.map((image, index) => (
                    <HoverImage key={index} src={image.img} alt={`Destaque ${index + 1}`} />
                ))}
            </div>
        </section>
    );
};

export default Highlights;
