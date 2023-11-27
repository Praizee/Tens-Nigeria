import React from 'react'

const Newsletter = () => {
    return (
        <section className='text-[#545454]'>
            <div className='laptop:flex space-y-6 laptop:space-y-0 gap-12'>
                <div className='flex-1 space-y-4'>
                    <h2 className='text-xl font-semibold text-[#1E1E1E]'>
                        Sign up for our free Daily newsletter
                    </h2>
                    <p>
                        We'll be in your inbox every morning
                        Monday-Saturday with all the day’s top business news,
                        inspiring stories, best advice and exclusive reporting
                        from Entrepreneur.
                    </p>
                </div>
                <form className='flex-1 space-y-4'>
                    <span className='flex gap-4'>
                        <input
                            type="email"
                            id="email"
                            required
                            placeholder="Email Address"
                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                        />
                        <button className="px-6 btn py-2 text-[#1E1E1E] font-semibold bg-[#FDE047] border rounded-lg hover:bg-transparent hover:border-[#FDE047]">
                            Subscribe
                        </button>
                    </span>
                    <p className=''>
                        I understand that the data I am submitting will be used to provide me with the above-described products and/or services and communications in connection therewith. <br />
                        Read our <a className='link underline font-semibold'>privacy policy</a> for more information.
                    </p>
                </form>
            </div>
        </section>
    )
}

export default Newsletter