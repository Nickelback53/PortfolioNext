import React, { PropsWithChildren } from "react";
import Image from "next/image";

interface ModalDefaultType {

    project: any;
    //ModalVisibleId: string;
    setModalVisibleId: (a: string) => void;
}


export default function Modal({ project, setModalVisibleId }: PropsWithChildren<ModalDefaultType>) {
    //console.log('project',project)

    const onCloseHandler = () => {
        setModalVisibleId("")
    }

    const title = project.properties.이름.title[0].plain_text;
    const description = project.properties.DescriptionAll.rich_text[0].plain_text;
    const github = project.properties.Github.url;
    const url = project.properties.URL.url;
    const img = project.cover.external?.url || project.cover.file.url;
    const tags = project.properties.태그.multi_select;
    const startDate = project.properties.WorkPeriod.date.start;
    const endDate = project.properties.WorkPeriod.date.end;


    return (
        <>
            <div className="fixed inset-0 z-10 overflow-y-auto ">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={() => onCloseHandler()}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-lg p-4 mx-auto bg-white dark:bg-slate-800 rounded-md shadow-lg">
                        <div className="mt-3 ">

                            <div className="mt-2 text-center ">
                                <div className="detail-card" >
                                    <Image
                                        className="rounded-xl"
                                        src={img}
                                        alt="cover image"
                                        width="80%"
                                        height="50%"
                                        layout="responsive"
                                        objectFit="cover"
                                        quality={100}
                                    />
                                    <div className="p-4 flex flex-col">
                                        <h1 className="text-2xl font-bold">{title}</h1>
                                        <h3 className="mt-4 text-xl">{description}</h3>
                                        {/* <a href={github}>깃허브 바로가기</a>
                                        <a href={url}>URL 바로가기</a>
                                        <h3>{startDate} ~ {endDate}</h3> */}

                                        <div className="flex items-start mt-2">
                                            {
                                                tags.map((tag: any) => <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={tag.id}>{tag.name}</h1>)
                                            }
                                        </div>

                                    </div>
                                </div>

                                {/* <h4 className="text-lg font-medium text-gray-800">
                                   {title}
                                </h4>
                                <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                                    {description}
                                </p>
                                <div className="items-center gap-2 mt-3 sm:flex">
                                    <button
                                        className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                        onClick={() => onCloseHandler()}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                        onClick={() => onCloseHandler()}
                                    >
                                        Cancel
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="fixed inset-5 z-10 overflow-y-auto">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={() => onClickToggleModal()}
                ></div>
                <div className="detail-card" onClick={() => onClickToggleModal()}>
                    <Image
                        className="rounded-t-xl"
                        src={img}
                        alt="cover image"
                        width="100%"
                        height="60%"
                        layout="responsive"
                        objectFit="cover"
                        quality={100}
                    />
                    <div className="p-4 flex flex-col">
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <h3 className="mt-4 text-xl">{description}</h3>
                        <a href={github}>깃허브 바로가기</a>
                        <a href={url}>URL 바로가기</a>
                        <h3>{startDate} ~ {endDate}</h3>

                        <div className="flex items-start mt-2">
                            {
                                tags.map((tag: any) => <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={tag.id}>{tag.name}</h1>)
                            }
                        </div>
                       
                    </div>
                </div>
            </div> */}
        </>
    );
}