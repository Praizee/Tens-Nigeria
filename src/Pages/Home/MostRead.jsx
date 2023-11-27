import { MostReadContent } from './content'

const MostRead = () => {

    // date
    const currentDate = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric' };

    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    // end of date

    return (
        <section>
            <div>
                <p className='font-semibold underline uppercase'>
                    Most Read
                </p>
                <p>
                    For {formattedDate}
                </p>

                {/* <div className='mt-6'>
                    <ol className="list-decimal pl-4 space-y-6">
                        {MostReadContent.map((item, index) => (
                            <li key={index} className=''>
                                <a href={item.link} className="text-sm link underline">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ol>
                </div> */}

                <div className='mt-6 text-black font-semibold'>
                    <ol className="pl-4 space-y-6">
                        {MostReadContent.map((item, index) => (
                            <li key={index} className='relative'>
                                {/* Custom styles for the order (number) */}
                                <div className="absolute left-[-2rem] top-1/4 transform -translate-y-1/2">
                                    <div className="text-red-600 text-sm ml-4 border border-red-500 rounded-full w-6 h-6 flex items-center justify-center">
                                        {index + 1}
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="ml-10">
                                    <a href={item.link} className="text-sm link underline">
                                        {item.title}
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>

            </div>
        </section>
    )
}

export default MostRead