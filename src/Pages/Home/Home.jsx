import { motion } from "framer-motion";
import Articles from './Articles'
import Leadership from './Leadership'
import MostRead from './MostRead'
import Latest from './Latest'
import Links from './Links'
import Newsletter from './Newsletter'

// Define animation configuration
const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const HomePage = () => {
    return (
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1.5 }}
        >
            <section className='bg-gray-100 text-black pt-[5.5rem] pb-4'>
                {/* py-10 laptop:px-10 tablet:px-5 px-4 */}
                <div className="bg-[#4F46E5] px-4 py-3 text-white">
                    <p className="text-center text-sm font-medium">
                        🎁 Get All Content for 50% Off 🎁
                    </p>
                </div>

                <div className="laptop:px-12 pt-4 tablet:px-5 px-4">
                    <div className="laptop:flex gap-8">
                        <div className='mb-10 flex-1'>
                            <Articles />
                        </div>
                        <div className='mb-10 flex-1'>
                            <Leadership />
                        </div>
                        <div className='mb-10 flex-1'>
                            <MostRead />
                        </div>
                    </div>
                    <div className='border-y-2 py-4'>
                        <Latest />
                    </div>
                    <div className='py-10 border-b-2'>
                        <Links />
                    </div>
                    <div className='py-10 border-b-2'>
                        <Newsletter />
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default HomePage