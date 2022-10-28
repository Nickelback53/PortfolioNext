import { useCallback, useState } from "react";

import ProjectItem from "./projects/projects-item";


export default function Project(result: any) {
    //console.log(result)
    const projects = result.result;



    //console.log(`proejcts: ${projects}`);
    // const projectNames = projects.map((project: any)=>
    //     //project.properties
    //     project.properties.이름.title[0].plain_text

    // )
    //console.log(`projectNames: ${projectNames}`)

    return (

        <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10" >
            <h2 className="text-4xl font-bold sm:text-6xl" id="project">
                총 프로젝트:
                <span className="pl-4 text-blue-500">
                    {projects.length}
                </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 p-12 m-4 gap-8 ">
                {
                    projects.map((project: any = {}) => {
                        return (
                            <ProjectItem key={project.id} data={project}  />
                        
                        )
                    })
                }
            </div>



        </div>

    )
}

