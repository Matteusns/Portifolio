import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mxauto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pb-24 xl:pt-8">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Desenvolvedor de Software</span>
            <h1 className="h1">
              Hello! I'm <br />{" "}
              <span className="text-accent">Mateus Sousa</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Apaixonado por tecnologia e desenvolvimento de software, sempre
              buscando criar soluções inovadoras e eficientes.
            </p>
            {/* socials and buttons */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href={"/assets/Curriculo.pdf"} target="_blank">
                <Button variant="outline" size="lg">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:trasition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-9 xl:mb-0">
            <Photo />
          </div>
        </div>
        <div>
          <Stats />
        </div>
      </div>
    </section>
  );
}
