import Header from "../Header/Header";
import Companies from "../LandingPage/Companies";
import JoBoard from "../LandingPage/JoBoard";
import JobCategory from "../LandingPage/JobCategory";
import Working from "../LandingPage/Working";

const HomePage=()=>{
return (
    <div className="min-h-[100vh] bg-jblack-800   00 font-['poppins']">
       <Header/>    
       <JoBoard/>
       <Companies/>
       <JobCategory/>
       <Working/>
    </div>
    
)
}
export default HomePage