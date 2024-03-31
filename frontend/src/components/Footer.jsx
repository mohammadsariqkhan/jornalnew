
function Footer(){
    return (
        <>
            <footer className="bg-[#023047] mt-3">
                <div className="flex justify-evenly ">
                    <div className="">
                        <div className=" text-white p-4 font-bold">
                            <div className="text-2xl">Discover content</div>
                            <div className="cursor-pointer text-base mt-3 mb-3 underline ">
                                <a href="https://link.springer.com/journals/a/1">
                                    Journals A-Z
                                </a>
                            </div>
                            <div className="text-base mb-3 underline">
                                <a href="https://link.springer.com/books/a/1">Books A-Z</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="text-white p-4 font-bold">
                            <div className="text-2xl">Publish with us</div>
                            <div className="text-base mt-3 mb-3 underline">
                                <a href="https://www.springernature.com/gp/authors">
                                    Publish your research
                                </a>
                            </div>
                            <div className="text-base mb-3 underline">
                                <a href="https://www.springernature.com/gp/open-research/about/the-fundamentals-of-open-access-and-open-research">
                                    Open access publishing
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className=" text-white p-4 font-bold">
                            <div className="text-2xl">Products and services</div>
                            <div className="text-base mt-3 mb-3 underline">
                                <a href="https://www.springernature.com/gp/products">
                                    Our products
                                </a>
                            </div>
                            <div className="text-base mb-3 underline">
                                <a href="https://www.springernature.com/gp/librarians">
                                    Librarians
                                </a>
                            </div>
                            <div className="text-base mb-3 underline">
                                <a href="https://www.springernature.com/gp/societies">
                                    Societies
                                </a>
                            </div>
                            <div className="text-base mb-3 underline">
                                <a href="https://www.springernature.com/gp/partners">
                                    Partners and advertisers
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className=" text-white p-4 font-bold">
                            <div className="text-2xl">Our imprints</div>
                            <div className="text-base mt-3 mb-3 underline">
                                <a href="https://www.springer.com/in">Springer</a>
                            </div>
                            <div className="text-base mb-3 underline">
                                <a href="https://www.nature.com/">Nature Portfolio</a>
                            </div>
                            <div className="text-base mb-3 underline">
                                <a href="https://www.biomedcentral.com/">BMC</a>
                            </div>
                            <div className="text-base mb-3 underline">
                                <a href="https://www.palgrave.com/in">Palgrave Macmillan</a>
                            </div>
                            <div className="text-base mb-3 underline">
                                <a href="https://www.apress.com/in">Apress</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white h-[2px] flex flex-row ml-[74px] mr-16"></div>

                <div className="flex justify-evenly text-white font-bold text-base mt-4">
                    <div classname="underline cursor-pointer">
                        <a href="#">Your privacy choices/Manage cookies</a>
                    </div>
                    <div className="underline cursor-pointer">
                        <a href="https://www.springernature.com/gp/legal/ccpa">
                            Your US state privacy rights
                        </a>
                    </div>
                    <div className="underline cursor-pointer">
                        <a href="https://www.springernature.com/gp/info/accessibility">
                            Accessibility statement
                        </a>
                    </div>

                    <div className="underline cursor-pointer">
                        <a href="https://link.springer.com/termsandconditions">
                            Terms and conditions
                        </a>
                    </div>
                    <div className="underline cursor-pointer">
                        <a href="https://link.springer.com/privacystatement">
                            Privacy policy
                        </a>
                    </div>
                    <div className="underline cursor-pointer">
                        <a href="https://support.springernature.com/en/support/home">
                            Help and support
                        </a>
                    </div>
                </div>

                <div className="mt-10 ml-16 flex flex-col font-bold">
                    <div className="text-white text-xl p-2">106.207.225.55</div>
                    <div className="text-white text-xl p-2 ">Not affiliated</div>
                    <div className="text-white text-3xl mt-2 ">Springer Nature</div>
                    <div className="text-white">© 2024 Springer Nature</div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
