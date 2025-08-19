import HeroSection from "../../components/HeroSection";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";

export default function Services() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.SERVICES} />

            {/* Main Services Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Legal & Judicial Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Explore our comprehensive range of legal services designed to uphold justice, protect rights, and ensure the rule of law in Imo State.
                        </p>
                    </AnimatedEntrance>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Service 1 - Public Prosecution */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3 1h6v2H5V6zm0 3h6v1H5V9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Public Prosecution
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Professional legal representation in criminal cases on behalf of the state. We ensure that justice is served through fair and effective prosecution while upholding the rule of law and protecting citizens&rsquo; rights.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Criminal case prosecution
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Legal guidance to law enforcement
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Justice administration
                                    </li>
                                </ul>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 2 - Civil Litigation */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Civil Litigation
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Expert legal representation for the state government in civil matters. We handle contract disputes, land cases, and constitutional matters to protect the state&rsquo;s legal interests.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Government contract disputes
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Land and property cases
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Constitutional matters
                                    </li>
                                </ul>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 3 - Legal Drafting */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[2]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385V4.804zM11 4.804A7.968 7.968 0 0114.5 4c1.255 0 2.443.29 3.5.804v10A7.969 7.969 0 0014.5 14c-1.669 0-3.218.51-4.5 1.385V4.804z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Legal Drafting
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Expert preparation and review of legal documents, executive bills, and legislative instruments to ensure clarity, precision, and compliance with constitutional standards.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Drafting of executive bills
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Legal document preparation
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Legislative compliance review
                                    </li>
                                </ul>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 4 - Citizens' Rights */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Citizens&rsquo; Rights Protection
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Dedicated to protecting and promoting the rights of all citizens, with special focus on vulnerable and indigent members of society.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Human rights protection
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Legal aid services
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Public complaints handling
                                </li>
                            </ul>
                        </div>

                        {/* Service 5 - Law Reform */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Law Reform
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Continuous review and modernization of existing laws to ensure they remain relevant, effective, and aligned with current social and economic realities.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Legislative review and analysis
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Policy development
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Legal research and recommendations
                                </li>
                            </ul>
                        </div>

                        {/* Service 6 - Judicial Services Coordination */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Judicial Services Coordination
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Facilitating seamless operations between the Ministry and the judiciary to ensure efficient and effective justice delivery across all levels.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Inter-agency coordination
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Judicial programs management
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Service optimization
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
