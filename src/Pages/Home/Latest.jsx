import { FaChevronRight } from "react-icons/fa6";
import { LatestContent, CategoryContent } from "./content"

const Latest = () => {
    return (
        <section className="text-[#545454]">
            <div>
                <span className='flex justify-between'>
                    <h1 className='uppercase text-[1.5rem] font-bold'>
                        Latest
                    </h1>
                    <span className='flex gap-4'>
                        <p className="pt-2">
                            See all
                        </p>
                        <button className="bg-[#FDE047] rounded-full p-2">
                            <FaChevronRight />
                        </button>
                    </span>
                </span>

                <div className="laptop:flex mt-6 space-y-8 laptop:space-y-0 gap-8">
                    <div className="flex-1 space-y-6">
                        {LatestContent.map((item, index) => (
                            <div key={index}
                                className="flex gap-4">
                                <img src={item.image} className="w-min h-min" alt="" />
                                <a href=""
                                    className="link link-hover">
                                    {item.title}
                                </a>
                            </div>
                        ))}
                    </div>

                    {CategoryContent.map((item, index) => (
                        <div key={index}
                            className="flex-1 space-y-2">
                            <img src={item.image} className="w-full" alt="" />
                            <p className="font-semibold">
                                {item.category}
                            </p>
                            <h2 className="text-[#1E1E1E] font-bold text-xl">
                                {item.title}
                            </h2>
                            <p className="text-sm">
                                {item.description}
                            </p>
                            <span className="flex gap-4">
                                <img src={item.writerImage} className="" alt="" />
                                <p className="pt-3">
                                    {item.writer}
                                </p>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Latest