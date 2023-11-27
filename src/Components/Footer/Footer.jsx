

const Footer = () => {

    // date for copyright
    const theDate = new Date().getFullYear();
    // end of date

    return (
        <div>
            <footer className="bg-gray-100 text-[#374151] pb-6 laptop:px-12 tablet:px-8 px-4 bottom-0">
                <div className="">
                    <div className="laptop:flex">
                        <div className="">
                            <p className="text-sm">
                                Copyright © {theDate} Entrepreneur Media,
                                LLC All rights reserved. Entrepreneur® <br className="hidden laptop:block" />
                                and its related marks are registered
                                trademarks of Entrepreneur Media LLC
                            </p>

                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer