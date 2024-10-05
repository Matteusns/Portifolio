"use client";

import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { LuFileBadge2 } from "react-icons/lu";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiExpo,
  SiSass,
  SiCsharp,
  SiDotnet,
  SiJquery,
  SiVuedotjs,
  SiMysql,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import IconSkill from "@/components/IconSkill";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import ExperienceDialog from "@/components/ExperienceDialog";

const about = {
  title: "Sobre mim",
  description:
    "Olá, meu nome é Mateus. Iniciei minha jornada na programação aos 17 anos, cursando o ensino médio integrado ao técnico em Informática pela ETEC. Desde então, desenvolvi uma grande paixão pela programação.",
  info: [
    {
      fildName: "Name",
      fildeValue: "Mateus Nascimento de Sousa",
    },
    {
      fildName: "Telefone",
      fildeValue: "(+55) 11 94784-0462 ",
    },
    {
      fildName: "Email",
      fildeValue: "mateusnsousa77@gmail.com",
    },
    {
      fildName: "Endereço",
      fildeValue: "Vila Formosa - São Paulo/SP",
    },
    {
      fildName: "Nacionalidade",
      fildeValue: "Brasil",
    },
    {
      fildName: "Idiomas",
      fildeValue: "Português, Inglês (Fluente)",
    },
    {
      fildName: "Idade",
      fildeValue: `${calcularIdade("1999-03-14")} Anos (14/03/1999)`,
    },
  ],
};

const experiences = {
  icon: "/assets/resume/badge.svg",
  title: "Experiências",
  description:
    "Atualmente, atuo no desenvolvimento e manutenção de sistemas front-end e back-end utilizando .NET e jQuery. Criei e mantenho um aplicativo em React Native para a empresa, além de oferecer suporte contínuo. Estou desenvolvendo uma nova interface para o sistema atual da empresa, utilizando React.js com Next.js.",
  items: [
    {
      company: "Bluemap",
      position: "Desenvolvedor Full Stack",
      duration: "2022 - Atual",
      description:
        "Me dediquei a aprofundar meus conhecimentos em nas linguagens front end em particular o React e em C#, .NET visando otimizar o desempenho dos códigos. Dediquei-me ativamente tanto ao desenvolvimento do front-end quanto do backend, trabalhando extensivamente com chamadas de APIs, tanto internas quanto externas." +
        "\nNo decorrer desse período, busquei aprimorar minha expertise em React Native, desenvolvendo o principal aplicativo da empresa e dando manutenção nos aplicativos já existentes feitos com java."+
        "\nConcentrei-me em integrar e utilizar APIs de mapeamento e roteirização, contribuindo para aprimorar a experiência do usuário e a funcionalidade dos produtos, ao lidar com sistemas de geolocalização e direcionamento de rotas.",
    },
    {
      company: "Bluemap",
      position: "Desenvolvedor Web",
      duration: "2021 - 2022",
      description: "São Paulo Busquei capacitação em C# e React JS por meio de cursos na Udemy e Alura para ampliar minha contribuição em projetos. Com essas habilidades expandidas, pude criar soluções mais integradas e eficientes para desafios técnicos, oferecendo uma perspectiva abrangente tanto no desenvolvimento visual quanto nos processos internos de sistemas, resultando em entregas mais sólidas para a empresa."
    },
    {
      company: "Bluemap",
      position: "Desenvolvedor web (Junior)",
      duration: "2019 – 2021",
      description: "Recém-saído do tecnólogo comecei a trabalhar como desenvolvedor web na empresa Bluemap, São Paulo. Comecei minha trajetória em programação com sólidos conhecimentos em HTML, CSS e JavaScript. Diante das demandas da empresa, busquei aprimoramento em jQuery para atender às necessidades específicas do frontend."
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Formação Acadêmica",
  description: "",
  items: [
    {
      company: "UNICID",
      degree: "Analise e Desenvolvimento de Sistemas",
      duration: "2024",
    },
    {
      company: "ETEC de Vila Formosa",
      degree: "Técnologo de Informática Integrado ao Ensino Médio",
      duration: "2018",
    },
    {
      company: "Colégio Drummond (Tatuapé)",
      degree: "Ensino Fundamental",
      duration: "2015",
    },
    {
      company: "Cultura Inglesa",
      degree: "Inglês",
      duration: "2015",
    },
  ],
};

const courses = {
  icon: "/assets/resume/cap.svg",
  title: "Cursos",
  description:"",
  items: [
    {
      company: "Udemy",
      degree: "React.js",
      certificado: "/assets/resume/certificados/reactNative.pdf",
    },
    {
      company: "Udemy",
      degree: "jQuery",
      certificado: "/assets/resume/certificados/jQuery.pdf",
    },
    {
      company: "Udemy",
      degree: "React Native",
      certificado: "/assets/resume/certificados/reactNative.pdf",
    },
    {
      company: "Udemy",
      degree: "Vue.js",
      certificado: "/assets/resume/certificados/VueJs.pdf",
    },
  ],
};

const skills = {
  title: "Skills",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5", category: "base", level: 4 },
    { icon: <FaCss3 />, name: "CSS3", category: "base", level: 4 },
    { icon: <FaJs />, name: "JavaScript", category: "base", level: 4 },
    { icon: <SiJquery />, name: "JQuery", category: "framework", level: 4 },
    { icon: <FaReact />, name: "React.js", category: "framework", level: 4 },
    { icon: <SiNextdotjs />, name: "Next.js", category: "framework", level: 3 },
    {
      icon: <FaReact />,
      name: "React Native",
      category: "framework",
      level: 4,
    },
    { icon: <SiExpo />, name: "Expo", category: "framework", level: 4 },
    { icon: <SiRedux />, name: "Redux", category: "framework", level: 4 },
    { icon: <SiVuedotjs />, name: "Vue.js", category: "framework", level: 2 },
    { icon: <SiTailwindcss />, name: "Tailwind", category: "style", level: 3 },
    { icon: <SiSass />, name: "Sass", category: "style", level: 3 },
    { icon: <SiCsharp />, name: "C#", category: "back", level: 3 },
    { icon: <SiDotnet />, name: ".NET", category: "back", level: 3 },
    { icon: <SiMysql />, name: "SQL", category: "back", level: 1 },
  ],
};

function calcularIdade(dataNascimento) {
  let nascimento = new Date(dataNascimento);
  let hoje = new Date();

  let idade = hoje.getFullYear() - nascimento.getFullYear();

  let mes = hoje.getMonth() - nascimento.getMonth();
  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }

  return idade;
}

const Resume = () => {
  const [filter, setFilter] = useState("categoria");

  function drawSkill(category) {
    return (
      <ul className="flex gap-4 flex-wrap">
        {skills.skillList.map((skill, index) => {
          if (skill.category == category) {
            return (
              <li key={index}>
                <IconSkill icon={skill.icon} name={skill.name} />
              </li>
            );
          }
        })}
      </ul>
    );
  }
  function drawSkillLevel(level) {
    return (
      <ul className="flex gap-4 flex-wrap">
        {skills.skillList.map((skill, index) => {
          if (skill.level == level) {
            return (
              <li key={index}>
                <IconSkill icon={skill.icon} name={skill.name} />
              </li>
            );
          }
        })}
      </ul>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">Sobre Mim</TabsTrigger>
            <TabsTrigger value="experience">Experiências</TabsTrigger>
            <TabsTrigger value="education">Formação Acadêmica</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="courses">Cursos</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* Sobre mim */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                </div>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex flex-col">
                        <span className="text-white/60">{item.fildName}</span>
                        <span className="text-white">{item.fildeValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* Experiencias */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experiences.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experiences.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experiences.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div>
                            <span className="w-[6px] h-[6px] rounded-full"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                          <ExperienceDialog experiencia={item} />
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Educação */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div>
                            <span className="w-[6px] h-[6px] rounded-full"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex text-center justify-between xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <Select onValueChange={(val) => setFilter(val)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Filtro" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="categoria">Categoria</SelectItem>
                      <SelectItem value="level">Level</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <ScrollArea className="h-[580px]">
                  <div className="flex flex-col gap-5">
                    <div>
                      <h4>{filter == "categoria" ? "Base" : "Avançado"}</h4>
                      {filter == "categoria"
                        ? drawSkill("base")
                        : drawSkillLevel(4)}
                    </div>
                    <div>
                      <h4>{filter == "categoria" ? "Frameworks" : "Bom"}</h4>
                      {filter == "categoria"
                        ? drawSkill("framework")
                        : drawSkillLevel(3)}
                    </div>
                    <div>
                      <h4>
                        {filter == "categoria" ? "Estilo" : "Intermediario"}
                      </h4>
                      {filter == "categoria"
                        ? drawSkill("style")
                        : drawSkillLevel(2)}
                    </div>
                    <div>
                      <h4>{filter == "categoria" ? "Back-End" : "Regular"}</h4>
                      {filter == "categoria"
                        ? drawSkill("back")
                        : drawSkillLevel(1)}
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Cursos */}
            <TabsContent value="courses" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{courses.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {courses.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {courses.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] min-h-[200px] p-10 rounded-xl "
                        >
                          <div className="flex flex-col justify-center items-start gap-1 mb-2">
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px]text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <div>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </div>
                          <div className="flex justify-center">
                            {item.certificado && (
                              <Link href={item.certificado} target="_blank">
                                <Button className="text-base">
                                  <LuFileBadge2 className="mr-1" /> Certificado
                                </Button>
                              </Link>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
