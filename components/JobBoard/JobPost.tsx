import { useState } from "react";
import { JobPostItem } from "../../core/types";
import JobDetail from "./JobDetail";

interface Props {
  jobPost: JobPostItem
}

export default function JobPost({ jobPost }: Props) {
  const [expanded, setExpanded] = useState(false);
  return <div className="mb-4">
    <div className="flex font-sm items-center cursor-pointer" onClick={() => setExpanded(v => !v)}>
      <div className="bg-gray-400 rounded-md text-white font-bold w-10 py-2 mr-3 text-center">{jobPost.symbol}</div>
      <div>{jobPost.hospitalName.length} jobs for {jobPost.hospitalName}</div>
    </div>
    {expanded && <><div>
      {jobPost.jobs.map(jobitem => <JobDetail jobItem={jobitem} />)}
    </div>
    </>}
  </div>

}


{/* {jobPost.jobs.map((item:any)=>{
        return(
          <div className = "md:flex justify-between item-center border-t-2 border-gray-500 mt-2 px-2">
            <div>
              <div className="font-bold">{jobPost.jobs[0].title}</div>
              <div>{jobPost.jobs[0].jobType} | ${jobPost.jobs[0].payRate[0]} - ${jobPost.jobs[0].payRate[1]}
                  | {jobPost.jobs[0].address} </div>
            </div>
            <div>{jobPost.jobs[0].dateInfo}</div>
          </div>
        )
      })} */}
