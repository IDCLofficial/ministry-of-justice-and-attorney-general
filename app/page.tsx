import Image from "next/image";
import StatisticsSection from "../components/StatisticsSection";
import HeroSection from "../components/HeroSection";
import AnimatedEntrance from "../components/AnimatedEntrance";
import { HOME_STATISTICS } from "../utils/constants/statistics";
import { HERO_CONFIGS } from "../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../utils/constants/animations";
import { FaUsers, FaShield, FaGavel } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F8F9]">
      {/* Hero Section */}
      <HeroSection {...HERO_CONFIGS.HOME}>  
        <Link href="/about">
          <button className="bg-white/90 hover:bg-white text-black cursor-pointer px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium active:scale-95 transition-colors">
            Read more
          </button>
        </Link>
      </HeroSection>

      {/* Statistics Section */}
      <StatisticsSection statistics={HOME_STATISTICS} />

      {/* Ministry Overview Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_FADE_UP} className="order-2 lg:order-1">
              <Image
                src="/assets/local-government.png"
                alt="Local government administration and community development"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto hover:shadow-xl transition-shadow duration-300"
              />
            </AnimatedEntrance>
            <div className="grid gap-4 sm:gap-6 md:gap-8 order-1 lg:order-2">
              <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} delay={200}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Overview of the Ministry of Justice & Attorney General
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Welcome to the official website of the Imo State Ministry of Justice and Attorney General. As the legal backbone of governance, we are committed to upholding the rule of law, promoting justice, and safeguarding the rights of all citizens. Established in 1976 alongside the creation of Imo State, our ministry operates through a robust judicial framework that ensures accessible and efficient justice delivery across all local government areas. Through innovation, legal integrity, and digital transformation, we strive to build a justice system that is transparent, accountable, and people-centered.
                </p>
              </AnimatedEntrance>
              <AnimatedEntrance {...ANIMATION_PRESETS.BUTTON_SCALE_UP} delay={600}>
                <Link href="/about">
                  <button className="bg-[#4CAF50]/90 hover:bg-[#4CAF50] cursor-pointer w-fit text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:transform hover:scale-105 transition-all duration-300">
                    Learn more
                  </button>
                </Link>
              </AnimatedEntrance>
            </div>
          </div>
        </div>
      </section>

      {/* Commissioner Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="px-4 sm:px-6 lg:px-20 xl:px-32 w-full">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-center">
            <div className="flex-1 order-2 lg:order-1">
              <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  Welcome from the Honorable Attorney General
                </h2>
              </AnimatedEntrance>
              <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_LEFT} delay={200}>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  &ldquo;On behalf of the Imo State Ministry of Justice, I welcome you to our official website. As the Chief Law Officer of the state, I am committed to ensuring that justice is not only done but is seen to be done in all our courts and legal processes.&rdquo;
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  Our ministry is at the forefront of judicial reforms, digital transformation of court processes, and ensuring access to justice for all citizens. We are working tirelessly to modernize our legal framework, enhance the capacity of our judicial officers, and implement innovative solutions to improve the efficiency of our justice delivery system.
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  I invite you to explore our website to learn more about our services, ongoing projects, and how we are working to uphold the rule of law and protect the rights of all Imo citizens. Together, we can build a justice system that is fair, efficient, and accessible to all.&ldquo;
                </p>
              </AnimatedEntrance>
              {/* <AnimatedEntrance {...ANIMATION_PRESETS.BUTTON_SCALE_UP} delay={600}>
                <button className="bg-[#4CAF50]/90 hover:bg-[#4CAF50] cursor-pointer text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:transform hover:scale-105 transition-all duration-300">
                  Read Full Bio
                </button>
              </AnimatedEntrance> */}
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_FADE_UP}>
                <Image
                  src="/assets/commissioner-humanitarian.png"
                  alt="Chief Kenneth Okafor - Honourable Commissioner for Humanitarian Affairs"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </AnimatedEntrance>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Priorities Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
              Our Key Priorities
            </h2>
          </AnimatedEntrance>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <FaGavel size="1.8em" color="#16a34a" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">Judicial Reforms</h3>
                <p className="text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  Modernizing court procedures, introducing automation, and promoting alternative dispute resolution to enhance access to justice.
                </p>
                <button className="text-green-500 font-medium text-sm hover:text-green-600 transition-colors">Learn More →</button>
              </div>
            </AnimatedEntrance>
            
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <FaShield size="1.8em" color="#16a34a" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">Human Rights Protection</h3>
                <p className="text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  Upholding constitutional safeguards and ensuring equal protection under the law for all citizens of Imo State.
                </p>
                <button className="text-green-500 font-medium text-sm hover:text-green-600 transition-colors">Learn More →</button>
              </div>
            </AnimatedEntrance>
            
            <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[2]}>
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg text-center hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <FaUsers size="1.8em" color="#16a34a" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg md:text-xl">Legal Education</h3>
                <p className="text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  Enhancing public legal awareness and providing continuous training for judicial officers and legal practitioners.
                </p>
                <button className="text-green-500 font-medium text-sm hover:text-green-600 transition-colors">Learn More →</button>
              </div>
            </AnimatedEntrance>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      {/* <LatestNews /> */}

      {/* Humanitarian Partners Section */}
      <section className="py-12 sm:py-16 md:py-20 relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Partners in Justice
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
              We collaborate with leading legal and judicial organizations to enhance justice delivery in Imo State.
            </p>
          </AnimatedEntrance>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
            {[
              { name: 'Nigerian Bar Association', logo: '/assets/partners/nba-logo.png' },
              { name: 'Legal Aid Council', logo: '/assets/partners/legal-aid-logo.png' },
              { name: 'National Judicial Council', logo: '/assets/partners/njc-logo.png' },
              { name: 'International Federation of Women Lawyers', logo: '/assets/partners/fida-logo.png' },
              { name: 'UN Office on Drugs and Crime', logo: '/assets/partners/unodc-logo.png' },
            ].map((partner, index) => (
              <AnimatedEntrance 
                key={partner.name}
                {...ANIMATION_PRESETS.CARD_FADE_UP} 
                delay={STAGGER_DELAYS.FAST[index] || STAGGER_DELAYS.FAST[0]}
                className="flex items-center justify-center"
              >
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full h-full flex items-center justify-center">
                  <div className="relative w-32 h-20">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </AnimatedEntrance>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
