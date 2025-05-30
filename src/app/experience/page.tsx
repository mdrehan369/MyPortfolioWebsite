
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
        description: "During my internship at Dehix Org, I contributed to the development and maintenance of web applications by working on both front-end and back-end components. I gained hands-on experience with technologies such as Next JS, Fastify, AWS.",
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
        description: "As a freelance developer for Samaira Fashion, I independently managed the end-to-end development of their web platform. I crafted seamless, user-friendly interfaces and implemented backend solutions to support smooth e-commerce operations.",
        duration: "3 Months",
        type: "Freelancing",
        org: "Samaira Fashion",
        techstack: ["Next JS", "Tailwind CSS", "Express JS", "Mongoose"]
    }
]
export default function Experience() {
    return (
        <Container className="flex flex-col items-center justify-start gap-0">
            <Heading text="Experience" />
            <div className="flex items-center justify-between w-[90%]">
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
                            <div className="w-full flex items-center justify-center flex-wrap">
                                {
                                    techstack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs bg-[#ff004f]/20 text-[#ff004f] px-3 py-1 m-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </Container>
    )
}
