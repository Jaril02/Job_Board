import { Link, useLocation } from "react-router-dom"

const NavLinks=()=>{
    const links=[
        {name:"Find Job",url:"find-jobs"},
        {name:"Post Job",url:"post-jobs"},
        {name:"Find Talents",url:"find-talents"},
        {name:"About us",url:"abouts-us"},
    ]
    const location= useLocation();
    return <div className="flex gap-10 text-white h-full items-center">
        {
        links.map((link,index)=><div className=
        {`${location.pathname==="/"+link.url? "text-jblue-700 text-jblue-700":"board-transparent"} 
        border-t-[3px] h-full flex items-center`}>
        <Link key={index} to = {`/${link.url}`} >{link.name}</Link></div>)
        }
 </div>
}
export default NavLinks