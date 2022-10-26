import Link from "next/link"
import DarkModeToggleButton from "./dark-mode-toggle-button"

export default function Header() {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z" clipRule="evenodd" />
                        </svg>

                        <span className="ml-3 text-xl">Portfolio</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="https://open.kakao.com/o/sSNTV7Je">
                        <a  className="mr-5 hover:text-gray-900" >연락하기</a>
                        </Link>
                        {/* <a className="mr-5 hover:text-gray-900">Second Link</a>
                        <a className="mr-5 hover:text-gray-900">Third Link</a>
                        <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
                    </nav>
                    <DarkModeToggleButton />
                </div>
            </header>
        </>
    )
}