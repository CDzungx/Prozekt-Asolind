/** @jsxImportSource solid-js */
import { createSignal, onCleanup, Component, Show } from 'solid-js';
import { Motion, Presence } from '@motionone/solid';
import '@components/css/load.css';

const LoaderSolid: Component = () => {
   const [showLoader, setShowLoader] = createSignal(true);

   onCleanup(() => {
      clearTimeout(timeout);
   });

   let timeout = setTimeout(() => {
      setShowLoader(false);
   }, 1500);

   if (!showLoader()) {
      timeout = setTimeout(() => {
         setShowLoader(null);
      }, 500);
   }

   return (
      <>
         <Presence>
            <Show when={showLoader()}>
               <Motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.3 }}>
                  <div class={`bg ${showLoader() ? '' : 'fadeOut'}`}>
                     <div class="grid h-[100dvh] w-screen justify-items-center">
                        <div class="coffee self-end">
                           <div></div>
                           <div></div>
                           <div></div>
                        </div>
                        <div class="loadingText pt-5 text-lg font-extrabold">Loading</div>
                     </div>
                  </div>
               </Motion.div>
            </Show>
         </Presence>
      </>
   );
};

export default LoaderSolid;
