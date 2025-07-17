"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Jr Software Developer",
    company: "Virtual Coders",
    period: "Dec 2024 - Present",
    location: "Ahmedabad",
    description:
      "Working on various live web projects using React.js and Next.js technologies. Gained hands-on experience in building modern and responsive web applications with dynamic features using React.js hooks, Context API, and Next.js API routes.",
  },
  {
    title: "Jr Software Developer",
    company: "WebCodeGenie Technology",
    period: "Oct 2024 - Nov 2024",
    location: "Ahmedabad",
    description:
      "Worked on live web projects including Bryan's CRM and Lead Expert as a React Developer. Developed various features in Bryan's CRM and gained deep knowledge in ReactJs with scalable CRM modules.",
  },
  {
    title: "Intern Software Developer",
    company: "WebCodeGenie Technology",
    period: "Apr 2024 - Sep 2024",
    location: "Ahmedabad",
    description:
      "Gained deep understanding of Javascript and its frameworks. Developed various projects to expand knowledge in ReactJs and implemented Tailwind CSS, Bootstrap, Material UI, and Chakra UI for user-friendly interfaces.",
  },
  {
    title: "BE - Computer Engineering",
    company: "Government Engineering College, Patan",
    period: "2020 - 2024",
    location: "Patan, Gujarat",
    description:
      "Completed Bachelor of Engineering in Computer Engineering with CGPA 8.56. Built strong foundation in programming, data structures, algorithms, and software development principles.",
  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-slate-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 transition-all duration-300 hover:border-emerald-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-slate-400 mb-2">
                  {experience.company} | {experience.location}
                </div>
                <div className="text-emerald-400 text-sm mb-4">{experience.period}</div>
                <p className="text-slate-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
