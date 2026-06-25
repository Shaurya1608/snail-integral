import Link from 'next/link';
import AnimatedText from '../AnimatedText';

const pillars = [
  {
    id: 'strategy-consulting',
    title: 'Strategy and Consulting',
    intro: 'Every successful communication effort begins with a clear strategy. Our consulting practice helps businesses define their brand, understand their market, and build the strategic foundation on which all communication is built. We work at the intersection of business thinking and communication expertise, giving our clients both the rationale and the direction for every recommendation we make.',
    bg: 'bg-[#f9fbf7]',
    services: [
      {
        title: 'Brand Consulting and Marketing',
        tagline: 'Building brands that earn trust and sustain growth.',
        desc: 'A brand is not a logo or a tagline. It is the sum of every experience, every message, and every interaction your audience has with your business. At Snail Integral, we approach brand consulting as a strategic discipline rooted in business reality. We begin every engagement with a thorough brand audit that examines your current positioning, your audience perceptions, your competitive landscape, and the gaps between where your brand is today and where it needs to be.\n\nFrom that foundation, we develop brand positioning frameworks, messaging architectures, and identity systems that give your business a coherent, compelling, and differentiated presence in the market. Whether you are building a brand from scratch, repositioning an existing brand, or managing a brand across multiple product lines and geographies, our team brings the strategic rigour and creative sensibility needed to do it well.\n\nWe work with agriculture companies, corporate enterprises, technology startups, and FMCG brands, and we understand that effective brand strategy looks different in each of those contexts. What stays consistent is our commitment to building brands that are authentic to what the business actually delivers, and compelling to the audiences that business needs to reach.',
        idealFor: 'Businesses planning a rebrand or market repositioning, new product or company launches, organizations seeking to unify brand communication across multiple markets, and companies that have grown faster than their brand identity has kept up with.',
      },
      {
        title: 'Business Consulting',
        tagline: 'Turning strategic clarity into operational advantage.',
        desc: 'Growth rarely fails because of a lack of ambition. It fails because of unclear strategy, misaligned resources, or an inability to translate good ideas into executable plans. Our business consulting practice works with organizations to bring discipline and clarity to the decisions that shape long-term performance.\n\nWe help clients assess their current market position, identify the most valuable growth opportunities, and build strategic roadmaps that connect high-level business objectives to ground-level execution. Our work covers market entry strategy, business model evaluation, competitive positioning, operational efficiency, and organizational communication alignment.\n\nWhat distinguishes our consulting approach is the integration of communication strategy within every business recommendation. We understand that even the best business strategy fails without the communication to align internal teams, engage external stakeholders, and build market confidence. Our consultants bring both business strategy expertise and communication thinking to every engagement, which means clients receive advice that is both strategically sound and practically actionable.',
        idealFor: 'Businesses entering new markets or launching new product categories, organizations going through leadership transitions or structural changes, companies seeking to improve profitability through operational and strategic focus, and enterprises planning significant market expansion within India or internationally.',
      },
      {
        title: 'Market Research',
        tagline: 'Decisions informed by evidence, not assumption.',
        desc: 'The quality of any strategy is only as good as the quality of the intelligence it is built on. Our market research practice provides clients with the audience insights, competitive data, and market analysis needed to make decisions with confidence rather than intuition.\n\nWe conduct primary and secondary research tailored to the specific questions our clients need answered. This includes consumer and farmer behavior studies, brand perception surveys, competitive landscape mapping, market sizing and opportunity assessments, and stakeholder sentiment analysis. Our research teams have experience working across both urban and rural India, which is a critical capability given how differently markets behave across the country\'s geographic and demographic spectrum.\n\nResearch at Snail Integral is not delivered as a standalone report and forgotten. It is integrated into the strategic and creative work that follows it, ensuring that every campaign, every brand decision, and every communication channel choice is grounded in what the audience actually thinks, needs, and responds to.',
        idealFor: 'Organizations launching new products or entering unfamiliar markets, brands seeking to understand how they are perceived relative to competitors, businesses making significant investment decisions that require market validation, and agencies or internal teams that need research support for ongoing client work.',
      },
    ],
  },
  {
    id: 'digital-technology',
    title: 'Digital and Technology',
    intro: 'Digital is no longer a separate channel. It is the primary environment in which brands are discovered, evaluated, and chosen. Our digital and technology practice helps clients build a coherent, high-performing digital presence that works as hard as the rest of their business. We combine technical expertise with strategic thinking to deliver digital solutions that generate real business outcomes rather than just online activity.',
    bg: 'bg-[#f9fbf7]',
    services: [
      {
        title: 'Digital and Social Media Management',
        tagline: 'Building digital presence that converts attention into action.',
        desc: 'Social media and digital platforms have fundamentally changed how brands communicate with their audiences. The challenge for most businesses is not the absence of digital activity but the absence of digital strategy. Posting content without a clear audience understanding, platform rationale, and performance framework produces noise rather than results.\n\nAt Snail Integral, we build digital and social media programs that begin with strategy and are sustained by consistent creative execution and rigorous performance management. We develop platform-specific content strategies tailored to where your audience actually spends their time and what kind of content earns their attention in each environment. Our social media management covers content planning, copy and creative production, community management, influencer identification and collaboration, and ongoing performance analysis.\n\nWe manage digital and social programs for clients across agriculture, corporate, FMCG, and government sectors. Each sector has a distinct digital audience with distinct expectations, and our programs reflect that understanding rather than applying a generic template across every client.',
        idealFor: 'Brands building or rebuilding their social media presence, organizations seeking to improve digital engagement and community growth, businesses that need professional content creation and platform management, and companies looking to integrate social media into a broader digital marketing strategy.',
      },
      {
        title: 'Website, Apps and Software Development',
        tagline: 'Digital infrastructure that grows with your business.',
        desc: 'Your website is the single most visited piece of communication your business owns. It is where prospects come to evaluate you, where partners come to understand you, and where your brand either earns or loses credibility in the first few seconds of a visit. A website that is slow, unclear, or visually inconsistent with your brand positioning is not a neutral presence. It is an active liability.\n\nSnail Integral builds websites, mobile applications, and software tools that are designed around user experience from the ground up. We combine clean visual design with fast technical performance, intuitive navigation architecture, and content structured for both human readability and search engine visibility. Our development team works across WordPress, custom CMS platforms, and bespoke web and mobile application development depending on the complexity and scale of the client\'s requirement.\n\nBeyond the initial build, we offer ongoing maintenance, performance monitoring, and iterative improvement to ensure that the digital infrastructure we build continues to serve the business as it evolves. We also develop custom agricultural software tools, cooperative management platforms, and enterprise communication portals for clients in specialized sectors.',
        idealFor: 'Businesses launching new corporate websites or e-commerce platforms, organizations that need mobile applications for internal operations or customer engagement, companies with outdated digital infrastructure that no longer reflects their brand or capabilities, and agricultural organizations requiring specialized digital tools for farmer engagement or supply chain management.',
      },
      {
        title: 'Performance Marketing Execution',
        tagline: 'Every rupee spent tracked, optimized, and justified.',
        desc: 'Performance marketing is the discipline of driving measurable business outcomes through paid digital channels. At its best, it is a precision instrument that puts the right message in front of the right audience at the right moment and tracks exactly what happens next. At its worst, without strategic oversight and continuous optimization, it is an expensive exercise in generating impressions that never convert.\n\nOur performance marketing practice covers search engine marketing through Google Ads, social media advertising across Meta, LinkedIn, and YouTube, programmatic display advertising, and shopping campaigns for e-commerce clients. We manage the full campaign lifecycle from audience research and creative briefing through to bid management, landing page optimization, and conversion tracking.\n\nEvery campaign we run is built around defined business objectives with agreed KPIs before a single rupee of budget is committed. We report on the metrics that matter to your business, which means conversions, qualified leads, cost per acquisition, and return on ad spend rather than vanity metrics that look impressive but do not reflect actual business impact.',
        idealFor: 'Businesses seeking immediate and measurable returns from digital advertising, e-commerce brands looking to improve customer acquisition efficiency, B2B organizations using LinkedIn and search advertising for lead generation, and companies that have run digital campaigns before without clear visibility into what the spending actually produced.',
      },
    ],
  },
  {
    id: 'content-creative',
    title: 'Content and Creative',
    intro: 'Content is the currency of modern communication. It is how brands earn attention, build credibility, and stay relevant between campaigns. Our content and creative practice produces work that is strategically grounded, creatively compelling, and built for the specific platform and audience it is designed to reach. We do not separate creative from strategy because the most effective creative is always rooted in a clear strategic brief.',
    bg: 'bg-[#f9fbf7]',
    services: [
      {
        title: 'Video Production — TVC, 2D and 3D Animation, AVs',
        tagline: 'Visual storytelling that earns attention and builds recall.',
        desc: 'Video is the most powerful communication format available to brands today. It combines image, sound, motion, and narrative in a way that no other medium can replicate, and it is the format that audiences consistently engage with most deeply across television, digital platforms, and in-person events.\n\nAt Snail Integral, we produce television commercials, corporate films, product demonstration videos, 2D and 3D animations, documentary-style brand films, and audio-visual content for events and exhibitions. Our production process begins with a creative brief that is derived directly from the brand strategy, ensuring that the visual output serves a communication objective rather than simply looking good.\n\nWe have produced video content for agriculture companies explaining complex agri-input products to farming audiences in formats that are accessible and persuasive. We have produced corporate films for enterprises communicating their scale and capabilities to institutional clients. We have produced animated explainers for technology companies making sophisticated products understandable to non-technical buyers. The format changes with the audience and objective. The standard of storytelling and production does not.',
        idealFor: 'Product and service launches requiring high-impact visual communication, corporate events needing branded audio-visual content, agriculture companies communicating product benefits and demonstration results to farmer audiences, technology businesses explaining complex offerings through animation, and brands investing in television or digital video advertising.',
      },
      {
        title: 'Content Creation and Design',
        tagline: 'Content that earns its place in your audience\'s attention.',
        desc: 'Most content produced by businesses fails not because of bad writing or poor design but because it was created without a clear understanding of who it is for, what it is trying to achieve, and why anyone would choose to spend time with it. Effective content begins with audience insight and ends with a specific action or shift in understanding.\n\nOur content and design team produces written content, visual design, infographics, branded collateral, and digital assets that are built on a clear strategic foundation. We develop content strategies that define what content will be created, where it will be published, how it connects to the broader communication objectives, and how its performance will be measured.\n\nWritten content services include thought leadership articles, website copywriting, sales collateral, annual reports, case studies, and newsletters. Design services include brand identity development, marketing collateral design, digital creative assets, packaging design, and exhibition materials. We also produce bilingual and regional language content for clients whose audiences span both urban and rural India.',
        idealFor: 'Organizations that need consistent, high-quality content across multiple platforms and formats, businesses building thought leadership positioning through published writing, companies redesigning their brand identity or marketing materials, and organizations that need content in regional languages alongside English.',
      },
      {
        title: 'Influencer and Referral Marketing',
        tagline: 'Trust travels faster through people than through advertising.',
        desc: 'The most credible recommendation any brand can receive is one that comes from a trusted individual rather than the brand itself. Influencer and referral marketing harnesses this reality by connecting brands with individuals whose audiences trust and respect their perspective, whether that is a celebrity with national reach, a sector expert with a dedicated professional following, or a local opinion leader with deep community trust in a rural geography.\n\nAt Snail Integral, we manage influencer partnerships across scales and sectors. For agricultural clients, this includes agronomists, progressive farmers with regional influence, and Krishi Vigyan Kendra-affiliated experts who carry genuine credibility with farming communities. For corporate and consumer brands, this includes sector-specific professionals, content creators, and public figures whose audiences align with the brand\'s target customer profile.\n\nWe handle every aspect of influencer engagement from identification and evaluation through to brief development, content review, campaign management, and performance reporting. We are rigorous about authenticity in influencer selection because an influencer whose values or audience profile does not genuinely align with the brand will produce content that audiences see through, regardless of their follower count.',
        idealFor: 'Agriculture companies seeking credible third-party endorsement for new products in farming communities, consumer brands building awareness through trusted content creators, corporate organizations partnering with industry figures for thought leadership amplification, and businesses exploring referral program design and execution as a customer acquisition strategy.',
      },
    ],
  },
  {
    id: 'communication-activations',
    title: 'Communication and Activations',
    intro: 'Communication that creates real impact goes beyond what is written or designed. It includes managing how an organization is perceived in the media, how it shows up in person at events and activations, and who speaks on its behalf in the marketplace. Our communication and activations practice covers the full range of earned, owned, and experiential communication that builds brand reputation and stakeholder trust.',
    bg: 'bg-[#f9fbf7]',
    services: [
      {
        title: 'Public Relations and Media Communication',
        tagline: 'Building reputation through stories that deserve to be told.',
        desc: 'Public relations is often misunderstood as the management of press releases and media lists. At its best, it is the discipline of helping an organization understand what it stands for and then communicating that with consistency and credibility through every channel available, particularly the channels that audiences trust most because they are not controlled by the brand.\n\nOur PR practice works across mainstream business media, agricultural trade publications, digital news platforms, and broadcast channels. We develop PR strategies that are integrated with the broader brand communication plan, ensuring that what is being said in a press release, a spokesperson interview, or a thought leadership article is consistent with what the brand communicates across every other touchpoint.\n\nWe have extensive experience managing PR for agriculture sector clients, where the media landscape includes a combination of national agricultural publications, regional farm media in multiple languages, and an increasingly significant digital agri-media ecosystem. We also manage corporate PR for enterprises navigating complex stakeholder environments including listed companies, organizations communicating with institutional investors, and businesses managing public perception through periods of significant change.\n\nCrisis communication is also a core part of our PR practice. When organizations face reputational challenges, the quality of their communication response is often the defining factor in whether they recover quickly or suffer lasting damage. We provide crisis communication planning, spokesperson preparation, and real-time communication management for clients facing sensitive situations.',
        idealFor: 'Organizations seeking consistent media coverage in target publications, businesses building thought leadership positioning for senior leadership, listed companies managing investor and public communications, agricultural organizations communicating product performance and regulatory compliance to trade media, and businesses preparing for or managing reputational challenges.',
      },
      {
        title: 'Event Management and Brand Activations',
        tagline: 'Every event is an opportunity to deepen a relationship.',
        desc: 'Events create a category of connection that no other communication format replicates. They bring audiences into direct contact with a brand, create shared experiences that generate memory and association, and provide a context in which relationships are built rather than merely maintained.\n\nSnail Integral has designed and delivered events across a wide spectrum of formats and scales. We have organized industry summits drawing hundreds of senior professionals from across agriculture and corporate sectors. We have managed product launches for agriculture input companies demonstrating new products to farmer audiences in rural settings. We have produced corporate conferences, investor days, dealer conventions, award ceremonies, and exhibition presences for clients across multiple sectors.\n\nOur event management practice covers the full scope of delivery from initial concept and theme development through to venue selection and design, speaker programming, logistics management, on-site production, and post-event communication. We manage both in-person and hybrid event formats and have the network of suppliers, venues, and production partners across India to execute at scale in multiple geographies simultaneously.\n\nWhat distinguishes our approach to events is the communication thinking that sits behind the logistical execution. Every event we produce is designed around a clear communication objective, and every element of the event experience, from how guests are welcomed to how the keynote is structured to how the event is covered in media, is designed to reinforce that objective.',
        idealFor: 'Organizations launching new products or business units to trade or consumer audiences, companies hosting annual conferences, dealer meets, or investor events, agricultural businesses organizing farmer field days and product demonstration events, brands seeking to create meaningful presence at industry exhibitions and trade shows, and organizations recognizing industry excellence through award ceremonies.',
      },
      {
        title: 'Celebrity Management',
        tagline: 'The right voice reaches the right audience faster.',
        desc: 'Celebrity and public figure association remains one of the most effective tools available to brands seeking rapid visibility and credibility transfer in the Indian market. The key word is association. The value of a celebrity partnership is directly proportional to how well the celebrity\'s public persona, audience profile, and personal credibility align with the brand\'s positioning and the audience it is trying to reach.\n\nAt Snail Integral, we approach celebrity management as a strategic discipline rather than a transactional one. We begin every celebrity partnership engagement by defining precisely what the brand needs the association to achieve, then identifying the individuals whose audience, credibility, and brand alignment make them the right fit for that specific objective. We manage the full process from identification and negotiation through to contract management, content brief development, shoot management, and campaign integration.\n\nOur experience spans celebrity partnerships for agriculture sector clients, where we work with respected agricultural scientists, progressive farmer influencers, and public figures who carry genuine credibility with rural audiences. For corporate and consumer brands, we work with a broader spectrum of celebrities and public figures selected for their relevance to the specific target audience and campaign objective.',
        idealFor: 'FMCG and consumer brands seeking rapid awareness through high-profile associations, agriculture companies seeking credible public endorsement for new products, corporate organizations partnering with industry figures for thought leadership amplification, and businesses planning product launches where celebrity association will amplify reach and media coverage.',
      },
    ],
  },
];

export default function ServicePillars() {
  return (
    <>
      {pillars.map((pillar, idx) => (
        <section key={pillar.id} id={pillar.id} className={`${pillar.bg} py-20 md:py-28 border-b border-gray-150/50`}>
          <div className="max-w-[1200px] mx-auto px-6">
            {/* Header */}
            <div className="max-w-4xl mb-16">
              <AnimatedText delay={0.1}>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider mb-4">
                  Pillar {idx + 1}
                </span>
              </AnimatedText>
              <AnimatedText delay={0.2}>
                <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                  {pillar.title}
                </h2>
              </AnimatedText>
              <AnimatedText delay={0.3}>
                <div className="border-l-2 border-primary/30 pl-4">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {pillar.intro}
                  </p>
                </div>
              </AnimatedText>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-12">
              {pillar.services.map((service, sIdx) => (
                <AnimatedText key={sIdx} delay={0.15 * sIdx}>
                  <div className="bg-white border border-gray-150/50 rounded-[2rem] p-8 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_15px_40px_rgba(106,154,56,0.06)] hover:-translate-y-1 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                      {/* Left Column: Title and Tagline */}
                      <div className="lg:w-1/3 shrink-0 flex flex-col justify-start">
                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                          {service.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <p className="text-primary font-bold text-[11px] md:text-xs tracking-wider uppercase">
                            {service.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Right Column: Desc and Ideal For */}
                      <div className="lg:w-2/3 lg:border-l lg:border-gray-150/50 lg:pl-12 flex flex-col justify-between">
                        <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4 mb-8 whitespace-pre-line">
                          {service.desc}
                        </div>

                        <div className="bg-[#fcfdfa] border border-gray-150/30 border-l-4 border-l-primary rounded-xl p-5 mb-8 flex gap-3 items-start">
                          <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          <div>
                            <span className="text-xs font-bold text-primary uppercase tracking-[0.1em] block mb-1.5">
                              Ideal For:
                            </span>
                            <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                              {service.idealFor}
                            </p>
                          </div>
                        </div>

                        <div>
                          <Link 
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs md:text-sm font-bold rounded-full border border-gray-200 text-gray-800 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-300 group"
                          >
                            Enquire or Learn More
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform text-gray-400 group-hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedText>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
