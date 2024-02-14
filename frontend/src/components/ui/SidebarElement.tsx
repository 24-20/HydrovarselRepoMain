import React, { ReactNode, useEffect } from 'react'
import {motion, useCycle} from 'framer-motion'
const SidebarElement = (props:{children:ReactNode, alertId:number}) => {
    const [open, cycleOpen] = useCycle(false, true);
    const itemVariants = {
        closed: {
          opacity: 0
        },
        open: { opacity: 1 }
      };

    const sideVariants = {
        closed: {
            
            transition: {
            staggerChildren: 0.2,
            staggerDirection: -1,
            }
        },
        open: {
            transition: {
            staggerChildren: 0.2,
            staggerDirection: 1,
            transition: { delay: 0.2, duration: 0.2 }
            }
            
        }
    };
    useEffect(()=>console.log(open),[open])
  return (
    <motion.div 
        whileHover={{
            scale: 1,
            height:'fit-content',
            backgroundColor:'red',
            transition: { duration: 0.5 }
            }}
        onHoverStart={()=>cycleOpen()}
        onHoverEnd={()=>cycleOpen()}
        className='ml-[10px] p-2 flex gap-2 flex-col min-h-10'
    >
        {
            props.children
        }
        {
            open &&
            <motion.div
                initial="closed"
                animate="open"
                variants={sideVariants}
                >
                
                <motion.h5 variants={itemVariants}>1</motion.h5>
                <motion.h5 variants={itemVariants}>2</motion.h5>
                <motion.h5 variants={itemVariants}>3</motion.h5>
            </motion.div>
        }
    </motion.div>
  )
}

export default SidebarElement