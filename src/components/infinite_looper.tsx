import React, {useRef, useState, useCallback, useEffect}  from 'react'

export default function InfiniteLooper({
  speed,
  direction,
  children,
}: {
  speed: number;
  direction: "right" | "left";
  children: React.ReactNode;
}) {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  function resetAnimation() {
    if (innerRef?.current) {
      innerRef.current.setAttribute("data-animate", "false");

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "true");
        }
      }, 50);
    }
  }

  const setupInstances = useCallback(() => {
      if (!innerRef?.current || !outerRef?.current) return;
      
      const { width } = innerRef.current.getBoundingClientRect();

      const { width: parentWidth } = outerRef.current.getBoundingClientRect();

      const instanceWidth = width / innerRef.current.children.length;

      if (width < parentWidth + instanceWidth) {
          setLooperInstances(looperInstances + Math.ceil(parentWidth / width));
      }
      resetAnimation();
    }, [looperInstances]);



  useEffect(() => {
      setupInstances();
  }, []);

  return (
    <div className="looper" ref={outerRef}>
      <div className="looper__innerList" ref={innerRef}>
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className="looper__listInstance"
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}


// const InfiniteLooper = function InfiniteLooper({
//   speed,
//   direction,
//   children,
// }: {
//   speed: number;
//   direction: "right" | "left";
//   children: React.ReactNode;
// }) {
//   const [looperInstances, setLooperInstances] = useState(1);
//   const outerRef = useRef<HTMLDivElement>(null);
//   const innerRef = useRef<HTMLDivElement>(null);

//   function resetAnimation() {
//     if (innerRef?.current) {
//       innerRef.current.setAttribute("data-animate", "false");

//       setTimeout(() => {
//         if (innerRef?.current) {
//           innerRef.current.setAttribute("data-animate", "true");
//         }
//       }, 10);
//     }
//   }

//   const setupInstances = useCallback(() => {
//     if (!innerRef?.current || !outerRef?.current) return;

//     const { width } = innerRef.current.getBoundingClientRect();

//     const { width: parentWidth } = outerRef.current.getBoundingClientRect();

//     const widthDeficit = parentWidth - width;

//     const instanceWidth = width / innerRef.current.children.length;

//     if (widthDeficit) {
//       setLooperInstances(
//         looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1
//       );
//     }

//     resetAnimation();
//   }, [looperInstances]);
    
 
//   useEffect(() => setupInstances(), [setupInstances]);

//   useEffect(() => {
//     window.addEventListener("resize", setupInstances);

//     return () => {
//       window.removeEventListener("resize", setupInstances);
//     };
//   }, [looperInstances, setupInstances]);

//   return (
//     <div className="looper" ref={outerRef}>
//       <div className="looper__innerList" ref={innerRef} data-animate="true">
//         {[...Array(looperInstances)].map((_, ind) => (
//           <div
//             key={ind}
//             className="looper__listInstance"
//             style={{
//               animationDuration: `${speed}s`,
//               animationDirection: direction === "right" ? "reverse" : "normal",
//             }}
//           >
//             {children}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// const App = () => (
//   <div className="app">
//     <p className="description">
//       Just throw some content into the component and set the speed and
//       direction.
//     </p>

//     <InfiniteLooper speed="4" direction="right">
//       <div className="contentBlock contentBlock--one">
//         Place the stuff you want to loop
//       </div>
//       <div className="contentBlock contentBlock--one">right here</div>
//     </InfiniteLooper>

//     <InfiniteLooper direction="right" speed="0.4">
//       <div className="contentBlock contentBlock--two">
//         <i>faster 🚀</i>
//       </div>
//     </InfiniteLooper>
//   </div>
// );

// export default InfiniteLooper