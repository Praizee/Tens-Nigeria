import SideHustle from '../../assets/SideHustle.png'
import SponsoredContent from '../../assets/SponsoredContent.png'
import SiliconValleyBank from '../../assets/SiliconValleyBank.png'

const Articles = () => {
    return (
        <section className='space-y-8 text-[#545454]'>
            <div className=' space-y-1'>
                <img src={SideHustle} className='w-full' alt='side-hustle' />
                <p className='font-semibold text-black'>
                    SIDE HUSTLE
                </p>
                <p>
                    A Simple, Leisure-Focused Side Hustle Earns
                    This Couple a Lucrative Extra Income Stream:
                    'Our First Year We Made $84,000.'
                </p>
                <span className='tablet:flex gap-4'>
                    <p className='bg-[#374151] rounded-full p-2 w-max text-white'>
                        E <span className='text-[#FDE047]'>+</span>
                    </p>
                    <p className='py-2'>
                        BY AMANDA BREEN
                    </p>
                </span>
            </div>

            <div className='space-y-1'>
                <img src={SponsoredContent} className='w-full' alt='sponsored-content' />
                <p className='font-semibold text-[#545454] underline'>
                    SPONSORED CONTENT
                </p>
                <p>
                    Striking a Balance – What's the Right
                    Amount of Venture Debt for Your Startup?
                </p>
                <span className='tablet:flex gap-4'>
                    <img src={SiliconValleyBank} className='w-max' alt='Silicon Valley Bank' />
                    <p className='pt-4'>
                        BY SILICON VALLEY BANK
                    </p>
                </span>
            </div>
        </section>

    )
}

export default Articles