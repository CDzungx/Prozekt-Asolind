import { motion } from 'framer-motion';
import { $hasClickedStartButton } from '@components/DebugStore';
import { Client, HydrationProvider } from 'react-hydration-provider';

function redirect() {
   setTimeout(function () {
      window.location.href = '/vietnam';
   }, 100);
   localStorage.setItem('hasClickedStartButton', 'true');
   $hasClickedStartButton.set('true');
}

const AnimatedStartBtn = () => {
   return (
      <>
         <HydrationProvider>
            <Client>
               <div id="landingButton" className="invisible mt-6 flex items-center justify-center">
                  <motion.div
                     whileHover={{ scale: 1.2 }}
                     whileTap={{ scale: 0.9 }}
                     onTap={redirect}
                     transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                     <div className="hover rounded-box inline-flex cursor-pointer items-center gap-3 border-2 border-[#000000] bg-base-200 fill-black px-5 py-3 text-gray-950 invert transition-colors hover:border-[#ffffff] hover:bg-transparent hover:fill-white hover:text-white focus:outline-none focus:ring active:opacity-75 dark:fill-white dark:text-gray-50 dark:hover:fill-black dark:hover:text-black">
                        <span className="select-none text-4xl font-bold lg:text-5xl">Get Started</span>
                        <div className="box-border h-16 w-16 place-content-center p-2">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                              <path d="m224.49 136.49l-72 72a12 12 0 0 1-17-17L187 140H40a12 12 0 0 1 0-24h147l-51.49-51.52a12 12 0 0 1 17-17l72 72a12 12 0 0 1-.02 17.01Z" />
                           </svg>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </Client>
         </HydrationProvider>
      </>
   );
};
export default AnimatedStartBtn;
