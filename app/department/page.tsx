import AnimatedEntrance from "../../components/AnimatedEntrance";
import { ANIMATION_PRESETS } from "../../utils/constants/animations";
import TabContentSystem from "../components/TabContentSystem";
import { FaUsers, FaGavel, FaHandshake, FaBook, FaFileAlt, FaBalanceScale } from "react-icons/fa";
import HeroSection from "../../components/HeroSection";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";

export default function Department() {
    return (
        <AnimatedEntrance {...ANIMATION_PRESETS.SECTION_FADE_IN}>
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <HeroSection {...HERO_CONFIGS.DEPARTMENT} />

                {/* Main Content */}
                <div className="px-4 sm:px-6 lg:px-20 py-12">
                    <TabContentSystem 
                        sidebarTitle="Ministry Departments"
                        tabs={[
                            {
                                id: "public-prosecution",
                                label: "Public Prosecution",
                                icon: <FaGavel className="mr-2" />,
                                content: {
                                    title: "Department of Public Prosecution",
                                    imageSrc: "/photos/public-prosecution - Ministry of Justice.jpg",
                                    imageAlt: "Public Prosecution",
                                    description: "The Department of Public Prosecution leads the prosecution of criminal cases on behalf of the state. We offer legal guidance to law enforcement agencies and ensure that justice is served in accordance with due process. Our team of experienced prosecutors works diligently to uphold the rule of law, protect the rights of victims, and ensure fair trials for all parties involved in criminal proceedings."
                                }
                            },
                            {
                                id: "civil-litigation",
                                label: "Civil Litigation",
                                icon: <FaBook className="mr-2" />,
                                content: {
                                    title: "Department of Civil Litigation",
                                    imageSrc: "/photos/civil-litigation - Ministry of Justice.jpg",
                                    imageAlt: "Civil Litigation",
                                    description: "The Department of Civil Litigation defends the state government in civil and constitutional matters. Our team handles a wide range of disputes, including those involving contracts, land, and torts. We protect the legal interests of the government in court, provide legal opinions on civil matters, and represent the state in all civil proceedings to ensure the government's position is effectively advocated."
                                }
                            },
                            {
                                id: "legal-drafting",
                                label: "Legal Drafting",
                                icon: <FaFileAlt className="mr-2" />,
                                content: {
                                    title: "Department of Legal Drafting",
                                    imageSrc: "/photos/legal-drafting - Ministry of Justice.webp",
                                    imageAlt: "Legal Drafting",
                                    description: "The Department of Legal Drafting is responsible for preparing and vetting executive bills, legal documents, and legislative instruments for the state. We ensure clarity, precision, and alignment of all legal texts with constitutional standards. Our work supports the legislative process and ensures that all legal instruments are drafted to the highest professional standards, reflecting the policy objectives of the state government."
                                }
                            },
                            {
                                id: "citizens-rights",
                                label: "Citizens' Rights",
                                icon: <FaUsers className="mr-2" />,
                                content: {
                                    title: "Department of Citizens' Rights",
                                    imageSrc: "/photos/citizens-rights - Ministry of Justice.jpeg",
                                    imageAlt: "Citizens' Rights",
                                    description: "The Department of Citizens' Rights provides access to justice for vulnerable and indigent members of society. We handle public complaints, investigate human rights violations, and provide legal aid interventions across the state. Our mission is to ensure that every citizen, regardless of their economic status, has access to legal representation and that their fundamental rights are protected under the law."
                                }
                            },
                            {
                                id: "law-reform",
                                label: "Law Reform",
                                icon: <FaBalanceScale className="mr-2" />,
                                content: {
                                    title: "Department of Law Reform",
                                    imageSrc: "/photos/law-reform - Ministry of Justice.png",
                                    imageAlt: "Law Reform",
                                    description: "The Department of Law Reform analyzes existing laws and recommends timely updates and reforms to reflect evolving legal, social, and economic realities. We collaborate with stakeholders on legislative modernization, review outdated statutes, and propose new legislation to address emerging legal challenges. Our work ensures that Imo State's legal framework remains relevant, effective, and responsive to the needs of its citizens."
                                }
                            },
                            {
                                id: "judicial-services",
                                label: "Judicial Services",
                                icon: <FaHandshake className="mr-2" />,
                                content: {
                                    title: "Department of Judicial Services Coordination",
                                    imageSrc: "/photos/judicial-services - Ministry of Justice.jpg",
                                    imageAlt: "Judicial Services",
                                    description: "The Department of Judicial Services Coordination serves as the operational link between the Ministry and the judiciary. We coordinate programs, monitor compliance, and facilitate institutional synergy across justice delivery platforms. Our work ensures smooth collaboration between different arms of the justice system, supports judicial officers, and helps maintain the independence and effectiveness of the judiciary in Imo State."
                                }
                            }
                        ]}
                    />
                </div>
            </div>
        </AnimatedEntrance>
    );
}
