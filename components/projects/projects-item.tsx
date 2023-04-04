import Image from "next/image";
import { PropsWithChildren, SetStateAction, useCallback, useState } from "react";
import Modal from "../Modal";

interface ModalDefaultType {

    data: any;
}

export default function ProjectItem({  data }: PropsWithChildren<ModalDefaultType>) {
    //console.log(data);

    const project = data;
    const title = project.properties.이름.title[0].plain_text;
    const databaseId = project.parent.database_id;
    const description = project.properties.Description.rich_text[0].plain_text;
    const github = project.properties.Github.url;
    const gitUrl = project.properties.URL.url;
    //const img = project.cover.external?.url || project.cover.file.url;
    const img = project.cover.file?.url || project.cover.external.url ;
    const tags = project.properties.태그.multi_select;
    const startDate = project.properties.WorkPeriod.date.start;
    const endDate = project.properties.WorkPeriod.date.end;

    const calculatedPeriod = (start: string, end: string) => {

    }
    const [modalVisibleId, setModalVisibleId] = useState("");

    const onModalHandler = (id: SetStateAction<string>) => {
        setModalVisibleId(id)
    }


    return (
        <div>
            <div className="project-card" >
                <Image
                    className="rounded-t-xl cursor-pointer"
                    src={img}
                    alt="cover image"
                    width="100%"
                    height="60%"
                    layout="responsive"
                    objectFit="cover"
                    quality={100}
                    onClick={() => onModalHandler(project.id)}
                />
                {/* <img src={img}></img> */}
                <div className="p-4 flex flex-col">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <h3 className="mt-4 text-xl">{description}</h3>
                    <a href={github} >깃허브 바로가기</a>
                    <a href={gitUrl} >URL 바로가기</a>
                    <h3>{startDate} ~ {endDate}</h3>

                    <div className="flex items-start mt-2">
                        {
                            tags.map((tag: any) => <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={tag.id}>{tag.name}</h1>)
                        }
                    </div>

                </div>
            </div>
            {modalVisibleId === project.id ? <Modal  project={project}  setModalVisibleId={setModalVisibleId}/>
                : null}
        </div>
    )
}