import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";

export default function About() {
    return (
        <Container>
            <div className="flex flex-col items-center justify-start gap-6">
                <Heading text="About" />
                <div>
                    <section className="max-w-4xl mx-auto px-6 py-12">
                        <h2 className="text-4xl font-bold mb-6 text-center text-white">👋 Hello, World!</h2>
                        <p className="text-lg mb-8 text-gray-300 text-center">
                            I&apos;m <span className="font-semibold text-white">MD Rehan</span>, a passionate{' '}
                            <span className="text-[#ff004f]">Full Stack Web Developer</span> from Kolkata, India.
                            I specialize in crafting seamless, user-centric web experiences, diving deep into both
                            front-end and back-end technologies to build functional and beautiful digital solutions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-[#ff004f]">🛠️ Skills &amp; Expertise</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                    <li><strong>Front-End:</strong> React.js, Next.js, HTML5, CSS3, Sass, Tailwind CSS</li>
                                    <li><strong>Back-End:</strong> Node.js, Express.js, RESTful APIs, MongoDB, PostgreSQL</li>
                                    <li><strong>DevOps &amp; Tools:</strong> Git, Docker, Jenkins, AWS, Firebase, TypeScript</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-[#ff004f]">🚀 Current Endeavors</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                    <li>Contributing to open source and building innovative apps</li>
                                    <li>Developing full-stack projects like e-commerce and blogs</li>
                                    <li>Constantly learning new tools, frameworks, and best practices</li>
                                </ul>
                            </div>
                        </div>

                    </section>

                </div>
            </div>
        </Container>
    )
}
