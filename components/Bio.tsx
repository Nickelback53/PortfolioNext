export default function Bio() {

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-2" id="introduce">Introduce</h2>
                        <p className="leading-relaxed text-base">   &nbsp; OLAP 회사에서 1년간 3번의 큰 프로젝트로 실무 경험을 쌓았으며 WAS 수정 작업과 ETL 작업을 솔루션에 맞추는 query 작성 업무를 맡았습니다. 현재는 전문 웹 개발자가 되기위해 준비를 하게되었습니다.<br /><br />
                            &nbsp; 웹 개발자를 선택한 이유는 하드웨어의 발달로 예전엔 힘들었던 부분들이 전부 웹으로 구현이 가능해지기 때문이였습니다. Electron 과 같은 프레임워크로 게임,  동영상 시청 등 거의 모든 앱 개발이 가능해졌고 또한, 가장 발전이 빠른 분야라 생각했기 때문입니다. 그만큼 공부할 양도 많아지지만 웹은 바로 결과물이 나오기에 무언가를 만든다는 성취감이 있어 좋았습니다.<br /><br />
                            &nbsp; 저는 인프런, Nomadcoder, 생활코딩, 코딩애플의 유튜브 강의를 통해 독학 하였습니다. 필요에 따라 유료 강의를 신청하여 React, Node, Typescript등을 빠르고 자세하게 공부하고 습득하였습니다. 현재 풀 스택 개발자를 지향하고, 계속해서 새로운 것을 공부하며 그것을 적용 할 수 있는 PUBG 전적 웹페이지, 물류 관리 ERP 어플을 개발하고 있습니다. 많은 관심 부탁드립니다. 감사합니다.</p>

                    </div>
                </div>
                <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-2" id="employment">Employment</h2>
                        <h3 className="text-gray-900 text-md font-medium mb-2 underline ">야인소프트</h3>
                        <h3 className="text-gray-500 text-md font-medium mb-2  ">2020-12~ 2022-01</h3>
                        <div className="leading-relaxed text-base">
                            <ul>
                                <li><p>고려대학교 Datawarehouse 사업 참여</p></li>
                                <li><p>철도청 고장/수리 통계화 사업 참여</p></li>
                                <li><p>인사혁신처 BI모델 교체 사업 참여</p></li>
                            </ul>

                        </div>

                    </div>
                    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>

                </div>

            </div>
        </section>
    )
}