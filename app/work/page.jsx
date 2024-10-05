"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const services = [
  {
    title: "Portifólio",
    image: "/assets/work/portifolio.png",
    description:
      "Um portfólio a fim de demonstrar não apenas os projetos que já desenvolvi, mas também minha capacidade de criar uma experiência de usuário atrativa e funcional.",
    repo: "",
    tags: [
      { name: "Next.js", color: "bg-green-600" },
      { name: "JavaScript", color: "bg-yellow-500" },
      { name: "Tailwind", color: "bg-cyan-500" },
    ],
  },
  {
    title: "Aplicativo de Entregas",
    image: "/assets/work/AppCondutor.png",
    description:
      "Aplicativo em React Native para uma empresa, com a finalidade de gerenciar Ordens de Serviço.\nO aplicativo permite receber novas solicitações de serviço e acompanhar o progresso, atualizando os status necessários ao longo do processo, proporcionando mais eficiência e controle no gerenciamento dos serviços.",
    repo: "",
    tags: [
      { name: "React Native", color: "bg-green-600" },
      { name: "Expo", color: "bg-blue-600" },
      { name: "Redux", color: "bg-blue-800" },
      { name: "Navigation", color: "bg-blue-900" },
      { name: "JavaScript", color: "bg-yellow-500" },
    ],
  },
];

export default () => {
  function getLines(description){
    const linhas = description.split("\n");
    return linhas.map((linha, index) => (
      <p key={index} className="text-justify">
        {linha}
      </p>
    ))
  }

  return (
    <section className="min-h-[80vh] flex flex-col justify-center pt-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="min-h-[570px]">
                {/* image */}
                <div className="mb-2">
                  <Image
                    src={service.image}
                    className="w-auto"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                  />
                </div>
                {/* content */}
                <div className="flex-1 flex flex-col justify-center gap-4 group">
                  {/* title */}
                  <h3 className="h3">{service.title}</h3>
                  {/* badges */}
                  <div className="flex gap-2 flex-wrap">
                    {service.tags.map((badge, index) => {
                      return (
                        <Badge key={index} className={`${badge.color}`}>
                          {badge.name}
                        </Badge>
                      );
                    })}
                  </div>
                  {/* description */}
                  <ScrollArea className="h-[190px]">
                    <p className="font-light">{getLines(service.description)}</p>
                  </ScrollArea>
                  {/* border */}
                  <div className="border-b border-white/20 w-full"></div>
                  {/* buttons */}
                  <div className="flex justify-between">
                    <Link href={service.repo}>
                      <Button>
                        <FaPlusCircle className="mr-2" />
                        Ver mais
                      </Button>
                    </Link>
                    <Link href={"/"}>
                      <Button>
                        <FaGithub className="mr-2" /> Repositório
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
