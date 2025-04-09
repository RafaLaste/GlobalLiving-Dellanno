import { Store } from "../Types/Store";

import { ImageGalleryList } from "../Data/ImageGalleryList";
import { ImageHighlightList } from "../Data/ImageHighlightList";

import Gallery from './Gallery';
import Highlights from './Highlights';
import { Reveal } from './Reveal';

type StoreItemProps = {
    item: Store;
};

const StoreItem: React.FC<StoreItemProps> = ({ item }) => {
    const storeImages = ImageGalleryList.filter(img => img.storeId === item.id);
    const storeHighlights = ImageHighlightList.filter(img => img.storeId === item.id);

    return (
        <>
            <div className="flex items-center">
                <Reveal className="w-2/3 max-w-[1145px]" direction="left">
                    <img
                        src={`/content/stores/${item.img}`}
                        alt={`Dell Anno ${item.nome.replace(/<br\s*\/?>/gi, ' ')}`}
                        className=""
                    />
                </Reveal>

                <Reveal className="w-1/3 pr-[15%]" direction="left" delay={4}>
                    <h3
                        className="relative pl-20 pt-10 text-2xl font-semibold uppercase mb-4 before:absolute before:left-0 before:top-0 before:w-1/2 before:h-px before:bg-black"
                        dangerouslySetInnerHTML={{ __html: `Dell Anno<br>${item.nome}` }}
                    />
                </Reveal>
            </div>

            <div className="container max-w-large mt-20">
                <Highlights images={storeHighlights} />
            </div>

            <Gallery images={storeImages} withBackground={false} />
        </>
    );
};

export default StoreItem;