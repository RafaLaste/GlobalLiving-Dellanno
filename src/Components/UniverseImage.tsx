import { Reveal } from './Reveal';

const UniverseImage: React.FC = () => {
    return (
        <section>
            <img src={`/content/display/b0dda63c84ca2ced8ad684a9c77b2e02.jpg`} />

            <div className="py-20 xl:py-40 bg-black">

                <div className="container max-w-small">
                    <Reveal direction="bottom" className="max-md:hidden">
                        <h2 className="text-white text-2xl md:text-3xl font-bold uppercase text-center md:tracking-wide mb-3">Entrar em uma loja Dell Anno é mergulhar</h2>
                    </Reveal>
                    <Reveal direction="bottom" delay={2} className="max-md:hidden">
                        <h2 className="text-white text-2xl md:text-3xl font-bold uppercase text-center md:tracking-wide">No Universo Dell Anno.</h2>
                    </Reveal>

                    <Reveal direction="bottom" className="md:hidden">
                        <h2 className="text-white text-2xl md:text-3xl uppercase text-center md:tracking-wide">Entrar em uma loja</h2>
                    </Reveal>
                    <Reveal direction="bottom" delay={2} className="md:hidden">
                        <h2 className="text-white text-2xl md:text-3xl uppercase text-center md:tracking-wide">Dell Anno é mergulhar</h2>
                    </Reveal>
                    <Reveal direction="bottom" delay={4} className="md:hidden">
                        <h2 className="text-white text-2xl md:text-3xl uppercase text-center md:tracking-wide">No Universo Dell Anno.</h2>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default UniverseImage;