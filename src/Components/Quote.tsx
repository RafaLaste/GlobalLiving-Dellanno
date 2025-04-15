import { Reveal } from './Reveal';

const Quote: React.FC = () => {
    return (
        <section className="bg-black"
        >   
            <div className="flex flex-col md:flex-row md:gap-10">
                <Reveal className="w-full md:w-1/2 px-10 py-20 py-14 lg:py-20 flex flex-col items-center justify-center" direction="left">
                    <h2 className="max-w-3xl text-xl md:text-base lg:text-xl md:text-2xl text-white text-center !leading-snug sm:!leading-relaxed sm:tracking-wide uppercase text-center mb-5 md:mb-8">
                        “É impossível entrar numa loja Dell Anno e não se sentir num espaço global. Do design a qualidade, tudo reflete uma marca que efetivamente conquistou seu lugar na cena internacional.”
                    </h2>
                    <h4 className="text-lg md:text-xl text-white text-center uppercase">— Pedro Andrade</h4>
                </Reveal>

                <Reveal className="w-full md:w-1/2" direction="right">
                    <img src="/content/display/69900ca5d0083a7406b5bd5f4a47c9f7.jpg" />
                </Reveal>
            </div>
        </section>
    );
};

export default Quote;