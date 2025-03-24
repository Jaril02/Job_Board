import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const JoBoard=()=>{
    return(
        <div className="flex items-center px-20">
            <div className=" flex flex-col w-[45%] gap-3">
                <div className="text-6xl font-bold text-jwhite-50 [&>span]:text-blue-700 leading-tight">Find your <span>dream job</span> with us </div>
                <div className="text-lg text-white">Good life begins  with a good company. Start explore thousand  of jobs in one place</div>
                
                <div className=" flex gap-3 mt-5">
                <TextInput className="bg-jblack-500 rounded-lg p-1 px-2 text-jwhite-50 [&_input]:!text-jwhite-50" placeholder="Developer" label="Job Title" variant="unstyled"/>
                <TextInput className="bg-jblack-500 rounded-lg p-1 px-2 text-jwhite-50 [&_input]:!text-jwhite-50" placeholder="Full time"label="Job Type" variant="Unstyled"/>
                <div className="flex items-center justify-center h-full w-20 bg-jblue-800 rounded-lg text-jwhite-200 hover:bg-jblue-900 cursor-pointer">
                    <IconSearch stroke={2.00} className="h-[85%] w-[85%] p-2"/>
                </div>
                </div>
            </div>
            <div className="w-[65%] flex items-center justify-center">
                <div className="w-[30rem]">
                    <img src="/img.png" alt="girl" style={{marginLeft:'10rem'}} />
                    <div className="absolute w-fit right-[1%] top-[36%] border-jblue-600 border rounded-xl p-3 backdrop-blur-md">
                        <div className="text-center mb-1 text-sm text-jwhite-50 font-mono">10K+ Got job</div>
                    <Avatar.Group spacing="sm">
                    <Avatar src="avt1.png" radius="xl" />
                    <Avatar src="avt2.png" radius="xl" />
                    <Avatar src="avt3.png" radius="xl" />
                    <Avatar radius="xl">+5K</Avatar>
                    </Avatar.Group>
                    </div>
                    <div className="absolute flex flex-col border p-2 gap-3 rounded-lg top-[50%] right-[28%] backdrop-blur-md border-jblue-600">
                        <div className="flex gap-2 items-center ">
                            <div className=" h-11 w-11 p-1 bg-jwhite-700 rounded-xl  ">
                                <img src="/google.png" alt="#" />
                            </div>
                            <div >
                                <div className="text-jwhite-200">Software Engineer</div>
                                <div className="text-jwhite-200 text-xs">New York</div>
                            </div>
                            <div>
                                <div> </div>
                            </div>
                        </div>
                        <div className="flex gap-2 text-sm justify-between text-jwhite-200 font-light">
                            <span>1 day ago</span>
                            <span>120 Applicants</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default JoBoard;