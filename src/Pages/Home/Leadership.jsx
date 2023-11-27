import LeadershipImg from '../../assets/Leadership.png'
import { FaArrowRight } from "react-icons/fa6";

const Leadership = () => {
    return (
        <section className='text-[#545454]'>
            <div className='space-y-2'>
                <div className='relative'>
                    <button className='absolute bottom-0 right-0 bg-[#4F46E5] py-2 px-4 w-max rounded-xl rounded-bl-none'>
                        <FaArrowRight className='bg-[#4F46E5] w-8 h-8 text-white' />
                    </button>
                    <img src={LeadershipImg} className='w-full' alt='Leadership' />
                </div>

                <p className=''>
                    LEADERSHIP
                </p>
                <h1 className='text-[#1E1E1E] font-black text-[1.5rem]'>
                    How I Trained My Intuition to Make
                    Decisions Quickly — and Raised $70 Million
                </h1>
                <p className='text-black font-semibold'>
                    "It was a powerful forum for me to discover my potential," Andrew Blackmon says.
                </p>
                <span className='tablet:flex gap-4'>
                    <p className='bg-[#374151] rounded-full p-2 w-max text-white'>
                        E <span className='text-[#FDE047]'>+</span>
                    </p>
                    <p className='py-2'>
                        BY ANDREW BLACKMON
                    </p>
                </span>
            </div>
        </section>
    )
}

export default Leadership