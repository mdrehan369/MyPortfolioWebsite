
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";

const projects = [
    {
        id: 5,
        title: "Firewall and Proxy Server",
        description: "Engineered a Python-based firewall and proxy server, enhancing network security by filtering and monitoring incoming and outgoing traffic.",
        techStack: ["Python", "Networking", "Socket Programming"],
        demoLink: "", // Add if available
        repoLink: "https://github.com/mdrehan369/FirewallandProxyServer",
    },
    {
        id: 2,
        title: "Byte Nexus",
        description: "Built a fully functional blogging platform with Markdown support and user authentication, enhancing content creation and management.",
        techStack: ["Next.js", "Express", "PostgreSQL", "Tailwind CSS"],
        demoLink: "", // Add if available
        repoLink: "https://github.com/mdrehan369/ByteNexus",
    },
    {
        id: 3,
        title: "Chirp",
        description: "Created a Django-based microblogging platform, allowing users to post, like, and comment on short messages, fostering community engagement.",
        techStack: ["Django", "Python", "Bootstrap"],
        demoLink: "", // Add if available
        repoLink: "https://github.com/mdrehan369/Chirp",
    },
    {
        id: 4,
        title: "Pixellytic",
        description: "Developed a Python application utilizing machine learning to identify and extract specific images from datasets, streamlining image processing workflows.",
        techStack: ["Python", "Machine Learning", "OpenCV"],
        demoLink: "", // Add if available
        repoLink: "https://github.com/mdrehan369/Pixellytic",
    }
];


export default function Projects() {
    return (
        <Container>
            <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col items-center">
                <Heading text="Projects" />
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map(({ id, title, description, techStack, repoLink }) => (
                        <div
                            key={id}
                            className="bg-[#2a2a42] rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-[#ff004f] transition-shadow duration-300"
                        >
                            <div>
                                <h3 className="text-xl font-semibold text-gray-100 mb-2">{title}</h3>
                                <p className="text-gray-300 mb-4">{description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs bg-[#ff004f]/20 text-[#ff004f] px-3 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 mt-auto">
                                {repoLink && (
                                    <a
                                        href={repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#ff004f] hover:text-[#e60047] font-semibold transition-colors"
                                    >
                                        Code
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Container>
    )
}
