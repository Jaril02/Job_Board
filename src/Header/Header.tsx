import {    IconBell, IconLayoutBoard, IconSettings } from "@tabler/icons-react"
import { Avatar,Indicator, } from '@mantine/core';
import NavLinks from "./NavLinks";

const Header =()=>{
    return <div className="w-full bg-jblack px-6 text-jwhite-50 h-16 flex justify-between items-center">
         <div className="flex items-center">
            <IconLayoutBoard className="h-12 w-11 text-jblue-800" />
            <div className="text-2xl font-semibold text-jblue-800">GUILD BOARD</div>
         </div>
         {NavLinks()}
         <div className="flex gap-4 items-center">
           
            <div className="flex items-center gap-2">
               <div >profile </div>
               <Avatar src="Avatar.png" alt="it's me" />
               <div className="bg-jblack-600 p-1.5 rounded-full">
               <Indicator color="jblue.6" processing offset={5} size={9}>
                   <IconBell/>
                   </Indicator>
               </div>
               <div className="bg-jblack-600 p-1.5 rounded-full">
                  <IconSettings/>
              </div>
               
            </div>

         </div>
    </div>
}
export default Header