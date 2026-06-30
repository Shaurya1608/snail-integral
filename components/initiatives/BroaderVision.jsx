import AnimatedText from '../AnimatedText';

export default function BroaderVision() {
  return (
    <section className="w-full bg-white py-20 md:py-28 px-6 md:px-8 border-t border-b border-gray-150/30 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        
        <AnimatedText delay={0.1}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-10">
            What These Initiatives Add Up To
          </h2>
        </AnimatedText>

        <div className="flex flex-col gap-8 text-gray-600 text-base md:text-lg leading-relaxed font-light">
          <AnimatedText delay={0.2}>
            <p>
              Taken individually, each of these initiatives serves a distinct purpose and audience. The summit brings practitioners together. The conference advances the dialogue around sustainable agriculture. The book documents the sector's evolution. The podcast deepens the conversation with its most important voices. The newsletter keeps the community informed between those larger touchpoints.
            </p>
          </AnimatedText>
          
          <AnimatedText delay={0.3}>
            <p>
              Together, they represent something that goes beyond any single initiative. They represent Snail Integral's conviction that the agriculture and business communication sector in India is worth investing in not just as a source of clients but as a community that deserves platforms, documentation, and sustained intellectual attention.
            </p>
          </AnimatedText>
          
          <AnimatedText delay={0.4}>
            <p>
              We are not a neutral party in these conversations. We have strong views about where Indian agriculture needs to go, about the role that communication plays in driving adoption and trust, and about what it means to serve this sector responsibly. These initiatives are where those views find expression, and we build them with the same seriousness and commitment that we bring to our client work.
            </p>
          </AnimatedText>
        </div>
        
        {/* Editorial Divider */}
        <AnimatedText delay={0.5}>
          <div className="flex justify-center items-center gap-4 mt-12">
            <div className="w-12 h-[1px] bg-gray-300" />
            <span className="font-serif italic text-primary/80 font-medium">Snail Integral</span>
            <div className="w-12 h-[1px] bg-gray-300" />
          </div>
        </AnimatedText>
      </div>
    </section>
  );
}
