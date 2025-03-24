import { IconSpeakerphone } from "@tabler/icons-react"
import { Carousel } from '@mantine/carousel';
import {jobCategory} from '../Data/Data'
const JobCatergory=()=>{
return <div className="mt-20 pb-5 ">
        <div className=" text-4xl text-center font-semibold text-jwhite-100 mb-3">Browser <span className=" text-jblue-700"> Job</span> Category</div>
    <div className="text-lg mx-auto text-jwhite-300 text-center w-1/2">Explore the diverse job opportunities tailored to your skills. Start your career journey today</div>
    <div className="text-jwhite-200">
    <Carousel height={250} slideSize="25%" slideGap="sm" loop align="center">
      {
          jobCategory.map((category,index)=><Carousel.Slide>
            <div className="flex flex-col items-center w-full gap-y-4">

          <div className="p-2 bg-jblue-600 rounded-full text-jwhite-200">
              <IconSpeakerphone stroke={1.5} className="  h-10 w-10 p6"/>
          </div>
          <div className="text-jwhite-100">{category.title}</div>
          <div className="text-jwhite-100">{category.description}</div>
          <div className="text-jblue-600 text-2xl font-semibold ">{category.jobsAvailable} job passed</div>
          </div>
            </Carousel.Slide>)
}  
    </Carousel>
    </div>
    </div>
}
export default JobCatergory