import React from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                Ahamed Rashid
              </h1>
              <p className="text-lg text-gray-600 mt-1">
                Software Development Engineer
              </p>
              <div className="flex items-center gap-2 text-gray-600 mt-2">
                <MapPin size={18} className="text-blue-600" />
                <span>Dehiwala, Sri Lanka</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/rashidrzn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rashidrzn8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:rashidrzan8@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-12">
        {/* About Section */}
        <section className="bg-gradient-to-r from-white to-gray-100 rounded-2xl shadow-lg p-8 transition-transform transform hover:scale-105">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">
            About Me
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Passionate Software Development Engineer specializing in data
            engineering and full-stack development. Currently pursuing a BEng
            (Hons) in Software Engineering at Informatics Institute of
            Technology, expected to graduate in February 2026.
          </p>
        </section>

        {/* Skills Section */}
        <section className="bg-gradient-to-r from-white to-gray-100 rounded-2xl shadow-lg p-8 transition-transform transform hover:scale-105">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">
            Skills & Expertise
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "Java", "Kotlin", "SQL", "NoSQL", "PLSQL"].map(
                  (skill) => (
                    <span key={skill} className="skill-tag skill-tag-blue">
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Data Engineering Concepts
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Docker",
                  "SQL",
                  "dbt",
                  "CRON",
                  "Apache Airflow (Basic)",
                  "Airbyte (Basic)",
                ].map((tech) => (
                  <span key={tech} className="skill-tag skill-tag-purple">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Technologies, Frameworks & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Azure Data Factory",
                  "Azure Data Lake Gen2",
                  "Azure Databricks",
                  "Azure Synapse Analytics",
                  "Power BI",
                  "Flask",
                  "AWS (EC2, IAM)",
                  "Spring boot",
                  "PostgreSQL",
                  "MSSQL",
                  "MySQL",
                  "MongoDB",
                  "Firebase",
                  "Git",
                  "GitHub",
                  "Jenkins",
                  "Docker",
                  "Jira",
                ].map((tech) => (
                  <span key={tech} className="skill-tag skill-tag-green">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Software Development Practices
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Agile",
                  "Scrum",
                  "SDLC",
                  "DevOps",
                  "CI/CD",
                  "Unit Testing",
                  "Design patterns",
                  "SOLID principles",
                  "OOP",
                ].map((practice) => (
                  <span key={practice} className="skill-tag skill-tag-orange">
                    {practice}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-gradient-to-r from-white to-gray-100 rounded-2xl shadow-lg p-8 transition-transform transform hover:scale-105">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">
            Professional Experience
          </h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  IFS R&D International (Pvt) Ltd
                </h3>
                <p className="text-gray-600">
                  Intern - Software Development & Engineering
                </p>
              </div>
              <div className="text-gray-600 text-sm bg-blue-100 px-3 py-1 rounded-full">
                Sep 2023 – Dec 2024
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
              <li>
                Delivered customized solutions for IFS customers by performing
                in-depth research, analysis, design, development, and ongoing
                support.
              </li>
              <li>
                Identified and addressed database performance bottlenecks by
                optimizing SQL queries.
              </li>
              <li>
                Demonstrated exceptional collaboration skills by fostering
                communication across teams.
              </li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-gradient-to-r from-white to-gray-100 rounded-2xl shadow-lg p-8 transition-transform transform hover:scale-105">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">
            Projects
          </h2>
          <div className="space-y-6">
            {/* Project 1 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Building an End-to-End Data Pipeline
                  </h3>
                  <p className="text-gray-600">
                    Individual Project - Colombo, Sri Lanka
                  </p>
                </div>
                <div className="text-gray-600 text-sm bg-blue-100 px-3 py-1 rounded-full">
                  Jan 2025 – present
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                <li>
                  Set up containerized environments using Docker to ensure
                  portability and scalability of the project.
                </li>
                <li>
                  Executed SQL queries to manage data in a relational database
                  system.
                </li>
                <li>
                  Implemented dbt to transform raw data into analytics-ready
                  tables.
                </li>
                <li>
                  Scheduled tasks using CRON jobs for reliable execution of
                  pipeline components.
                </li>
                <li>
                  Orchestrated workflows using Apache Airflow to manage complex
                  dependencies and automate data pipelines.
                </li>
                <li>
                  Integrated Airbyte to extract and load data from various
                  sources into the pipeline.
                </li>
              </ul>
              <div className="mt-4 flex gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline"
                >
                  <Github size={18} className="mr-1" />
                  View on GitHub
                </a>
                <span className="text-gray-400">|</span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Docker",
                    "SQL",
                    "dbt",
                    "CRON",
                    "Apache Airflow",
                    "Airbyte",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="skill-tag skill-tag-purple text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Crowd Counting using CNN - Web Application
                  </h3>
                  <p className="text-gray-600">
                    IIT Campus, Sri Lanka Team Lead
                  </p>
                </div>
                <div className="text-gray-600 text-sm bg-blue-100 px-3 py-1 rounded-full">
                  Nov 2023 – May 2024
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                <li>Implemented the CI/CD pipeline with Azure Pipeline.</li>
                <li>
                  Created the Landing, Login, and Register pages and managed
                  authentication for each field.
                </li>
                <li>
                  Trained a large dataset using TensorFlow, achieving a
                  prediction accuracy of 90.07%.
                </li>
              </ul>
              <div className="mt-4 flex gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline"
                >
                  <Github size={18} className="mr-1" />
                  View on GitHub
                </a>
                <span className="text-gray-400">|</span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "Flask",
                    "TensorFlow",
                    "Azure Pipeline",
                    "Azure Deployment",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="skill-tag skill-tag-green text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    End-to-End Azure Data Engineering Project
                  </h3>
                  <p className="text-gray-600">Individual Project</p>
                </div>
                <div className="text-gray-600 text-sm bg-blue-100 px-3 py-1 rounded-full">
                  Jan 2023 – present
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                <li>
                  Successfully designed and implemented a scalable data pipeline
                  architecture on Azure.
                </li>
                <li>
                  Developed real-time data processing solutions using Azure Data
                  Factory and Databricks.
                </li>
                <li>
                  Enhanced data analytics capabilities by integrating Azure
                  Synapse Analytics with Power BI.
                </li>
              </ul>
              <div className="mt-4 flex gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline"
                >
                  <Github size={18} className="mr-1" />
                  View on GitHub
                </a>
                <span className="text-gray-400">|</span>
                <div className="flex flex-wrap gap-2">
                  {["Azure Data Factory", "Azure Databricks", "Power BI"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="skill-tag skill-tag-blue text-xs"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities and Leadership Section */}
        <section className="bg-gradient-to-r from-white to-gray-100 rounded-2xl shadow-lg p-8 transition-transform transform hover:scale-105">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">
            Activities and Leadership
          </h2>
          <div className="space-y-6">
            {/* Football */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Football
                  </h3>
                  <p className="text-gray-600">
                    Team member - Colombo, Sri Lanka
                  </p>
                </div>
                <div className="text-gray-600 text-sm bg-blue-100 px-3 py-1 rounded-full">
                  May 2021 – present
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                <li>
                  Active team member for IIT football outdoor and futsal,
                  champions in football tournament organized by NSBM.
                </li>
                <li>
                  IFS futsal team member, champions inter house futsal
                  tournament- IFS.
                </li>
              </ul>
            </div>

            {/* Muslim Student Association */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Muslim Student Association
                  </h3>
                  <p className="text-gray-600">
                    President - Colombo, Sri Lanka
                  </p>
                </div>
                <div className="text-gray-600 text-sm bg-blue-100 px-3 py-1 rounded-full">
                  May 2022 – May 2023
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                <li>
                  Leader of an organization of 100+ members, hosting religious
                  events, managing a board of executives, and reaching out to
                  the underprivileged community in IIT.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section className="bg-gradient-to-r from-white to-gray-100 rounded-2xl shadow-lg p-8 transition-transform transform hover:scale-105">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">
            References
          </h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Mr. Vidath Amarasekara
                </h3>
                <p className="text-gray-600">Software Engineering Manager</p>
                <p className="text-gray-600">IFS R&D International (Pvt) Ltd</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail size={16} className="text-blue-600" />
                  <a
                    href="mailto:vidath.amarasekara@ifs.com"
                    className="hover:text-blue-600 transition-colors"
                  >
                    vidath.amarasekara@ifs.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone size={16} className="text-blue-600" />
                  <span>+94 71 384 7488</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Ahamed Rashid. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
