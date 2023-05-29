import React, { Component } from 'react'
import ExamplePdf from '../file1.pdf'

// const downloadFile = () => {

//     // const onButtonClick = () => {
//     // // using Java Script method to get PDF file
//     //     fetch(ExamplePdf).then(response => {
//     //         response.blob().then(blob => {
//     //             // Creating new object of PDF file
//     //             const fileURL = window.URL.createObjectURL(blob);
//     //             // Setting various property values
//     //             let alink = document.createElement('a');
//     //             alink.href = fileURL;
//     //             alink.download = ExamplePdf;
//     //             alink.click();
//     //         })
//     //     })
//     // }
//     // return (        
//     //     <div>                
//     //         <button onClick={onButtonClick}>
//     //             Download PDF
//     //         </button>
//     //     </div>
    
//     // );
    
// }


export default function fileDownload() {
    
    return (
      <div>
        <h2>bobbyhadz.com</h2>
  
        <a
          href={ExamplePdf}
          download="Референт-лист СЭТ"
          target="_blank"
          rel="noreferrer"
        >
          <button>Download .pdf file</button>
        </a>
      </div>
    );
};

