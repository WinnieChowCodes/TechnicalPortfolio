/*JSON object keys definitions:
- projectID: The ID of the project
- projectTitle: The title of the project
- projectDescShort: The project description; a short version
- projectSkills: An array of technical skills used during the project
- projectDescLong: The project description; the longer version
- projectMedia: An array of relevant media (pictures/videos) related to the project
- projectDate: The date when the project occured
*/

import WhatsApp from "./project_content/WhatsApp";

let projectsJSON = [
    {projectID : 0, projectTitle: "WhatsThat App", projectDescShort: "A clone of the popular app WhatsApp I made during my final year of Uni.", projectSkills: ["React Native"], projectDescLong: <WhatsApp/>},
    {projectID : 1, projectTitle: "Pokédex", projectDescShort: "A simple pokémon inspired website displaying pokémon data utilising the pokéAPI.", projectSkills: ["React", "HTML","CSS", "JS"],projectDescLong: "..."},
    {projectID : 2, projectTitle: "Films API", projectDescShort: "A simple API displaying Film data in XML, JSON and String format.", projectSkills: ["Java Servlets"],projectDescLong: "nnn"},
    {projectID : 3, projectTitle: "SQL Detective", projectDescShort: "A Simple web game designed to teach SQL using gamification principles", projectSkills: ["HTML", "CSS", "JavaScript", "GitHub Pages"], projectDescLong: "What"},
    {projectID : 4, projectTitle: "Online Dictionary", projectDescShort: "A quick and simple dictionary Website made for the GreatUniHack in 2022", projectSkills: ["Velvo Wix"],projectDescLong: "App"}
]

export default projectsJSON;