
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { TextHighlight } from "@/components/TextHighlight";

type ExperienceData = {
    title: string,
    description: string,
    type: "Internship" | "Freelancing",
    duration: string,
    org: string,
    techstack: string[]
}

const data: ExperienceData[] = [
    {
        title: "Full Stack Web Developer Intern",
        description: "During my internship at Dehix Org, I contributed to the development and maintenance of web applications by working on both front-end and back-end components. I gained hands-on experience with technologies such as Next JS, Fastify, AWS, collaborated closely with the development team to implement new features, optimize performance, and improve user experience.",
        duration: "4 Months",
        type: "Internship",
        org: "Dehix Org.",
        techstack: ["Next JS", "Shadcn UI", "Tailwind CSS", "Fastify", "Mongoose", "Firebase"]
    },
    {
        title: "Full Stack Web Developer Intern",
        description: "At Suminite Holdings, I actively participated in designing and implementing scalable web solutions by developing both client-side and server-side functionalities. I worked extensively with technologies like Next JS, Express JS, Mongo DB, focusing on building responsive interfaces and robust APIs.",
        duration: "3 Months",
        type: "Internship",
        org: "Suminite Holdings",
        techstack: ["Next JS", "Tailwind CSS", "Express JS", "Mongoose", "Flask"]
    },
    {
        title: "Freelance Developer",
        description: "As a freelance developer for Samaira Fashion, I independently managed the end-to-end development of their web platform. I crafted seamless, user-friendly interfaces and implemented backend solutions to support smooth e-commerce operations. This role honed my skills in client communication, project management, and delivering customized web solutions that align with brand identity and business goals.",
        duration: "3 Months",
        type: "Freelancing",
        org: "Samaira Fashion",
        techstack: ["Next JS", "Tailwind CSS", "Express JS", "Mongoose"]
    }
]
export default function Experience() {
    return (
        <Container className="flex flex-col items-center justify-start gap-6">
                <Heading text="Experience" />
            <div className="flex items-center justify-between w-[85%]">
                {
                    data.map(({ title, description, duration, org, type, techstack }, index) =>
                        <div key={index} className="max-w-md bg-[#2a2a42] hover:shadow-[#ff004f] shadow-lg border-2 duration-500 cursor-pointer border-transparent transition-colors rounded-lg p-6 mb-6 h-[70vh]">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
                                <span
                                    className={`text-xs font-semibold px-3 py-1 rounded-full bg-[#ff004f]`}
                                >
                                    {type}
                                </span>
                            </div>

                            <p className="text-gray-400 text-sm mb-4">
                                <strong className="text-gray-200"><TextHighlight text={org} /></strong> &bull; <em>{duration}</em>
                            </p>

                            <p className="text-gray-300 text-base leading-relaxed">{description}</p>

                            <h4 className="mt-4"><TextHighlight text="Tech Stack Worked On: " /></h4>
                            <ul className="px-8 list-disc marker:text-[#ff004f]">
                                {
                                    techstack.map(tech => <li key={tech} className="text-gray-200">{tech}</li>)
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
        </Container>
    )
}
