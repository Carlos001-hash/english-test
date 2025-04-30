"use client"

import { EngText, textId, bubble, ShowBubble} from "./data/text";
import { motion } from "framer-motion";
import { useState } from "react";


export default function PageOne() {
  const [id, setId] = useState(1);
  const [numBub, setNumBub] = useState(0)


  const handleBubble = () => {

    setNumBub(numBub + 1); 
  };


  return (
      <div className="w-full h-screen">
        <motion.div
          animate={{ x: [0, 200, 0], width: ["40%", "50%", "40%", "50%", "40%"] }}
          transition={{  duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "20px" }}
          className=" border-2 border-gray-50/40 w-1/3 h-1/4  -z-20 bg-gray-300 blur-xs rounded-full "
        />

        <motion.div
          animate={{ x: [100, 50, 100], width: ["40%", "50%", "40%", "50%", "40%"] }}
          transition={{  duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "300px", bottom: "300px" }}
          className=" border-2 border-gray-50/40 w-1/3 h-1/4  -z-20 bg-gray-300 blur-xs rounded-full "
        />
        
        <motion.div
          animate={{ x: [0, 200, 0], width: ["40%", "50%", "40%", "50%", "40%"] }}
          transition={{  duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{  position: "absolute", bottom: "30px" }}
          className=" border-2 border-gray-50/40 w-1/3 h-1/4  -z-20 bg-gray-300 blur-xs rounded-full  "
        />

        {textId.filter(item => item.id === id).map((text) => (
          <EngText key={text.id} text={text}/>
        ))}

        <div className="w-12 h-12 bg-gray-50/65 hover:bg-white border-2 border-blue-300 fixed left-1 bottom-4 rounded-full overflow-hidden">
          <button onClick={handleBubble} className="w-full h-full flex items-center justify-center ">+</button>
        </div>

        {bubble.map((bub, index) => (
        <ShowBubble key={bub.one.length + index * 8 + numBub} bubble={bub} />
        ))}

        <div className="w-20 h-12 bg-gray-50/65 hover:bg-white border-2 border-blue-300 fixed right-1 bottom-4 rounded-full overflow-hidden">
          <button onClick={() => {setId(id + 1); console.log(id)}}  className="w-full h-full flex items-center justify-center">Next</button>
        </div>
            
      </div>
  )
}
