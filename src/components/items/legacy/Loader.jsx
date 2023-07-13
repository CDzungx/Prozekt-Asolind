import '@components/css/load.css';
import { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
/*
Tobe added:
Progress round w percentage
+ Motion Animation
+ Make wave interactive
*/

const Loader = () => {
   const [showLoader, setShowLoader] = useState(true);

   useEffect(() => {
      const timeout = setTimeout(() => {
         setShowLoader(false);
      }, 1500);

      return () => clearTimeout(timeout);
   }, []);

   useEffect(() => {
      if (showLoader === false) {
         const timeout = setTimeout(() => {
            setShowLoader(null);
         }, 500); // Delay before returning null after fade-out animation
         return () => clearTimeout(timeout);
      }
   }, [showLoader]);

   if (showLoader === null) {
      return null;
   }

   return (
      <>
         <div className={`bg ${showLoader ? '' : 'fadeOut'}`}>
            <div className="grid h-[100dvh] w-screen justify-items-center">
               <div className="coffee self-end">
                  <div></div>
                  <div></div>
                  <div></div>
               </div>
               <div className="loadingText pt-5 text-lg font-extrabold">Loading</div>
            </div>
         </div>
         {showLoader === false && (
            <HelmetProvider>
               <Helmet>
                  <script>document.getElementById('content').classList.remove('hidden');</script>
               </Helmet>
            </HelmetProvider>
         )}
      </>
   );
};

export default Loader;
