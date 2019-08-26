import { Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../Utils/axiosWithAuth'
import Quote from './Quote'

// const QuoteList = props =>{
//     const [quote, setQuote] = useState([])
    
//     useEffect(() => {
//       axiosWithAuth()
//           .get("URL GOES HERE")
//           .then(response => {
//               const info = response.data; //check this after data url is rcvd
//             setQuote(info);
//           })
//           .catch(error => {
//             console.log('Server Error', error);
//           });
      
//     }, [])


// return(


//     //     ///////////
//     //     // <container>
//     //     {/* {info.map(quote=>{
//     //         return(
//     //             <Quote
//     //             line={quote.line} //these will need to be changed when data is rcvd
//     //             url={quote.url}
        
//     //             />
//     //         );
//     //     })}
//     //         </container> */}
//     // )
// };

// export default QuoteList;



