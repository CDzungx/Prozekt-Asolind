/** @jsxImportSource solid-js */
import { createSignal, onCleanup } from 'solid-js';

var now = new Date();
const ngayQuocKhanh = new Date(now.getFullYear(), 9 - 1, 2); // September 2nd (Ngay Quoc Khanh)
const ngayThongNhat = new Date(now.getFullYear(), 4 - 1, 30); // April 30th (Ngay Thong Nhat)

function getCountdownValue() {
   const currentDate = Date.now();

   let targetDate = ngayThongNhat;
   if (currentDate >= targetDate) {
      targetDate = ngayQuocKhanh;
   }
   if (currentDate >= targetDate) {
      targetDate = new Date(targetDate.getFullYear() + 1, targetDate.getMonth(), targetDate.getDate()).getTime();
   }

   const distance = targetDate - currentDate;
   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

   return {
      seconds,
      minutes,
      hours,
      days,
   };
}

const CountdownSolid = () => {
   const [countdownValue, setCountdownValue] = createSignal(getCountdownValue());

   onCleanup(() => {
      clearInterval(interval);
   });

   const interval = setInterval(() => {
      setCountdownValue(getCountdownValue());
   }, 1000);

   return (
      <>
         <div class="flex h-screen items-center justify-center">
            <div class="grid auto-cols-max grid-flow-col gap-5 text-center">
               <div class="flex flex-col">
                  <span class="countdown font-mono text-5xl">
                     {countdownValue().days >= 100 ? (
                        countdownValue().days
                     ) : (
                        <span style={{ '--value': countdownValue().days }}></span>
                     )}
                  </span>
                  days
               </div>
               <div class="flex flex-col">
                  <span class="countdown font-mono text-5xl">
                     <span style={{ '--value': countdownValue().hours }}></span>
                  </span>
                  hours
               </div>
               <div class="flex flex-col">
                  <span class="countdown font-mono text-5xl">
                     <span style={{ '--value': countdownValue().minutes }}></span>
                  </span>
                  min
               </div>
               <div class="flex flex-col">
                  <span class="countdown font-mono text-5xl">
                     <span style={{ '--value': countdownValue().seconds }}></span>
                  </span>
                  sec
               </div>
            </div>
         </div>
      </>
   );
};

export default CountdownSolid;
