import { ImageGalleryList } from '../Data/ImageGalleryList'
import { ImageHighlightList } from '../Data/ImageHighlightList'

import DefaultLayout from '../Layouts/DefaultLayout';

import MainVideo from '../Components/MainVideo';
import ShowroomVideo from '../Components/ShowroomVideo';
import Welcome from '../Components/Welcome';
import Gallery from '../Components/Gallery';
import Highlights from '../Components/Highlights';
import AnotherImage from '../Components/AnotherImage';
import Stores from '../Components/Stores';

const Page: React.FC = () => {
    const generalImages = ImageGalleryList.filter(img => img.storeId === 0)
    const generalHighlights = ImageHighlightList.filter(img => img.storeId === 0)

    return (
        <DefaultLayout>
            <MainVideo />

            <ShowroomVideo />

            <Welcome />

            <img src={`/content/display/07aa51406be467f21e3766848ba16d20.jpg`} />

            <Gallery images={generalImages} withBackground={true} />

            <Highlights images={generalHighlights} />

            <AnotherImage />

            <img src={`/content/display/b0dda63c84ca2ced8ad684a9c77b2e02.jpg`} />

            <Stores />
        </DefaultLayout>
    );
};

export default Page;