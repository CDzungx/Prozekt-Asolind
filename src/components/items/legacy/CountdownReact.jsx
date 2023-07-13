import { useState, useEffect } from 'react';
import { HydrationProvider, Client } from 'react-hydration-provider';

var now = new Date();
const ngayQuocKhanh = new Date(now.getFullYear(), 9 - 1, 2); // September 2nd (Ngay Quoc Khanh)
const ngayThongNhat = new Date(now.getFullYear(), 4 - 1, 30); // April 30th (Ngay Thong Nhat)

function getCountdownValue() {
   const currentDate = new Date().getTime();

   let targetDate = ngayThongNhat;
   if (currentDate >= targetDate) {
      targetDate = ngayQuocKhanh;
   }
   if (currentDate >= targetDate) {
      targetDate = ngayThongNhat;
      targetDate.setFullYear(targetDate.getFullYear() + 1);
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

const Countdown = () => {
   const [countdownValue, setCountdownValue] = useState(getCountdownValue());

   useEffect(() => {
      const interval = setInterval(() => {
         setCountdownValue(getCountdownValue());
      }, 1000);
      return () => clearInterval(interval);
   }, []);
   return (
      <HydrationProvider>
         <div className="flex h-screen items-center justify-center">
            <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
               <div className="flex flex-col">
                  <Client>
                     <span className="countdown font-mono text-5xl">
                        {countdownValue.days >= 100 ? (
                           countdownValue.days
                        ) : (
                           <span style={{ '--value': countdownValue.days }}></span>
                        )}
                     </span>
                  </Client>
                  days
               </div>
               <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl">
                     <Client>
                        <span style={{ '--value': countdownValue.hours }}></span>
                     </Client>
                  </span>
                  hours
               </div>
               <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl">
                     <Client>
                        <span style={{ '--value': countdownValue.minutes }}></span>
                     </Client>
                  </span>
                  min
               </div>
               <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl">
                     <Client>
                        <span style={{ '--value': countdownValue.seconds }}></span>
                     </Client>
                  </span>
                  sec
               </div>
            </div>
         </div>
      </HydrationProvider>
   );
};

export default Countdown;
