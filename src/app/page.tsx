import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { TextHighlight } from "@/components/TextHighlight";
import Image from "next/image";

export default function Home() {
    return (
        <Container className="flex items-center justify-center">
            <div className="flex items-center justify-center gap-[10vw]">
                <div className="flex flex-col items-start h-full justify-center gap-2 w-[30vw]">
                    <div className="flex items-start h-full justify-center gap-5 mb-2">
                        <div className="w-[10px] h-[110px] rounded-md bg-[#ff004f]"></div>
                        <div>
                            <h3>Hello there, I am</h3>
                            <h1 className="text-6xl font-bold">MD <TextHighlight text="Rehan" /></h1>
                            <h2 className="text-xl font-medium">Full Stack <TextHighlight text="Developer" /></h2>
                        </div>
                    </div>
                    <p>Welcome to my corner of Web! I’m MD Rehan, a Full Stack Web Developer with a flair for crafting digital experiences that are both functional and beautiful. With a love for all things JavaScript, I dive deep into both the front-end and back-end to build seamless web applications.
                    </p>
                    <div className="my-4">
                        <Button><a href={"/docs/MdRehanResume.pdf"} target="__blank" rel={"noopener noreferrer"}>Download Resume</a></Button>
                    </div>
                </div>
                <Image width={400} height={400} alt="" src={"/images/face.png"} />
            </div>
        </Container>
    )
}
