import AnimatedText from '../AnimatedText';

export default function InitiativesIntro() {
  return (
    <section className="w-full bg-[#f9fbf7] py-16 md:py-24 px-6 md:px-8 border-b border-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedText delay={0.1}>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-8">
            Why We Run These Initiatives
          </h2>
        </AnimatedText>
        
        <div className="flex flex-col gap-6 text-gray-600 text-base md:text-lg leading-relaxed font-light">
          <AnimatedText delay={0.2}>
            <p>
              Most agencies define their contribution to an industry by the quality of their client work. We believe that contribution can go further. Over the years, we have built platforms that serve the broader ecosystem, bringing together professionals, policymakers, researchers, farmers, and communicators who share an interest in making India's agriculture and business sectors more visible, more connected, and more capable.
            </p>
          </AnimatedText>
          
          <AnimatedText delay={0.3}>
            <p>
              These initiatives are not marketing exercises for Snail Integral. They exist because the conversations they create, the knowledge they share, and the excellence they recognize have genuine value for the people who participate in them. Every summit we have organized, every podcast episode we have recorded, and every edition of our newsletter we have published has been built around one question: what does this community actually need, and are we the right people to provide it.
            </p>
          </AnimatedText>
          
          <AnimatedText delay={0.4}>
            <p className="font-serif italic text-primary/90 mt-2 font-medium">
              What follows is an overview of each initiative, what it stands for, and who it is built for.
            </p>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}
