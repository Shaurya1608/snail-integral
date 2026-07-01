import AnimatedText from '../AnimatedText';
import Image from 'next/image';

export default function SnailShowPodcast() {
  const platforms = ["Spotify", "Apple Podcasts", "YouTube", "Google Podcasts", "Amazon Music"];
  
  const listeners = [
    "Senior professionals in agribusiness and agriculture input companies",
    "Researchers and academics working in agricultural sciences",
    "Policymakers and government officials with agriculture responsibility",
    "Agricultural entrepreneurs and startup founders",
    "Communication and marketing professionals working in the sector",
    "Farmers and representative organizations seeking informed perspectives"
  ];

  return (
    <section id="snail-show-podcast" className="w-full bg-[#f9fbf7] text-gray-900 py-16 md:py-24 px-6 md:px-8 overflow-hidden relative border-t border-b border-gray-150/30">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mb-12">
          <AnimatedText delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              Initiative 04
            </div>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <div className="flex justify-center mb-5">
              <Image
                src="/initiatives/Snail Show Podcast Logo-01.png"
                alt="The Snail Show Podcast Logo"
                width={180}
                height={80}
                className="object-contain"
              />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
              The Snail Show Podcast
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.3}>
            <p className="text-primary font-medium text-base md:text-lg tracking-wide mb-6">
              Conversations with the people driving change in agriculture and business.
            </p>
          </AnimatedText>
          
          {/* Episode Info Badges */}
          <AnimatedText delay={0.35}>
            <div className="flex flex-wrap justify-center gap-2 text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-8">
              <span className="bg-white border border-gray-200 px-3.5 py-1.5 rounded-full text-gray-600 shadow-sm">40 - 60 Mins / Episode</span>
              <span className="bg-white border border-gray-200 px-3.5 py-1.5 rounded-full text-gray-600 shadow-sm">Recorded in Noida Studio</span>
              <span className="bg-primary/10 text-primary border border-primary/20 px-3.5 py-1.5 rounded-full">Available Globally</span>
            </div>
          </AnimatedText>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left: Podcast Cover Art / Video Link */}
          <div className="hidden lg:flex lg:col-span-5 justify-center">
            <AnimatedText delay={0.2} direction="left" className="w-full max-w-[360px] -translate-y-24 lg:-translate-y-6 flex flex-col gap-4">
              <a 
                href="https://www.youtube.com/@thesnailshowpodcast"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[2/3] w-full rounded-2xl overflow-hidden shadow-2xl group border border-gray-250 bg-[#141414]"
              >
                {/* Background Podcast Image */}
                <Image 
                  src="/others/image.png" 
                  alt="The Snail Show Podcast on YouTube" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 group-hover:via-black/35 transition-all duration-300" />

                {/* Pulsing YouTube Play Button Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10 p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-red-600 group-hover:bg-red-700 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
                    {/* YouTube Play Triangle Icon */}
                    <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white uppercase tracking-widest block drop-shadow-md">
                      Watch on YouTube
                    </span>
                    <span className="text-[10px] text-white/70 font-semibold tracking-wider uppercase mt-1 block drop-shadow-md">
                      @thesnailshowpodcast
                    </span>
                  </div>
                </div>
              </a>

              {/* Subtitle Badge below the card */}
              <div className="flex justify-between items-center bg-white border border-gray-200 rounded-xl p-3 text-[10px] text-gray-700 font-bold tracking-wider shadow-sm">
                <span>THE SNAIL SHOW</span>
                <span className="text-red-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                  SUBSCRIBE
                </span>
              </div>
            </AnimatedText>
          </div>

          {/* Right: Text content */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex flex-col gap-5 text-gray-600 text-sm md:text-base leading-relaxed mb-8 font-normal">
              <AnimatedText delay={0.2}>
                <p>
                  The most valuable knowledge in any industry lives inside the people who have spent years building, failing, learning, and succeeding within it. It rarely makes it into formal publications or conference presentations in its most honest and useful form. Long-form conversation is the format that comes closest to accessing that knowledge directly, because it creates the space for guests to think out loud, to contradict themselves, to revise their positions, and to share the kind of nuanced, experience-based insight that a panel discussion or a press release never captures.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.25}>
                <p>
                  The Snail Show Podcast was built around that premise. Each episode is a focused, extended conversation with a leader, practitioner, researcher, entrepreneur, or policymaker who has something genuinely worth hearing. The conversation ranges across whatever territory the guest's experience makes most valuable, whether that is the challenge of scaling an agri-tech business in India's complex rural market, the experience of developing and registering a new biological product, the communication lessons learned from running a large-scale farmer outreach program, or the broader question of where Indian agriculture is heading and what needs to happen to get there.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.3}>
                <p>
                  The podcast is produced to a professional audio standard from Snail Integral's Noida studio, with remote recording capability that allows the team to bring in guests from across India and beyond without compromising on sound quality. Episodes are available on all major streaming platforms and are promoted across Snail Integral's digital channels and industry networks.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.35}>
                <p>
                  The Snail Show Podcast has built a listener community of professionals who share an interest in agriculture, business, and communication. It is a resource for practitioners who want to learn from peers, for observers who want to understand the sector more deeply, and for anyone who believes that the conversation around India's agriculture needs more honest, informed, and sustained attention than it currently receives.
                </p>
              </AnimatedText>
            </div>
          </div>

        </div>

        {/* Centered Who Listens Card & CTA */}
        <div className="max-w-4xl mx-auto mt-16 flex flex-col items-center w-full px-4">
          <AnimatedText delay={0.4} className="w-full">
            <div className="bg-white border border-gray-150 rounded-2xl p-6 mb-10 shadow-sm w-full">
              <h4 className="font-serif text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider border-b border-gray-100 pb-2">
                Who Listens
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {listeners.map((item, i) => (
                  <li key={i} className="flex gap-2 items-start text-xs text-gray-500 leading-relaxed">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.45}>
            <a 
              href="https://www.youtube.com/@thesnailshowpodcast"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-xl bg-primary text-white hover:bg-primary-hover shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
            >
              Watch & Listen on YouTube
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </AnimatedText>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes soundwave {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
        .animate-soundwave {
          animation: soundwave 1.2s ease-in-out infinite;
          transform-origin: bottom;
        }
      `}} />
    </section>
  );
}
