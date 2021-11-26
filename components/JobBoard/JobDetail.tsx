import { useState } from 'react';
import { JobPostItem } from "../../core/types";
import { JobItem } from "../../core/types";

interface Props {
  jobItem: JobItem
}

export default function JobDetail({ jobItem }: Props) {
  const [expanded, setExpanded] = useState(false);
  return <div>
    <div className="md:flex justify-between item-center border-t border-gray-400 mt-2 px-2 cursor-pointer" onClick={() => setExpanded(v => !v)}>
      <div>
        <div className="font-bold">{jobItem.title}</div>
        <div>{jobItem.jobType} | ${jobItem.payRate[0]} - ${jobItem.payRate[1]}
          | {jobItem.address} </div>
      </div>
      <div>{jobItem.dateInfo}</div>
    </div>
    {expanded && <>
      <div className="mt-4 lg:flex flex-row px-2">
        <div className="w-full lg:w-3/4">
          <div className="flex">
            <div className="font-bold w-full md:w-1/2">Department:</div>
            <div className="w-full md:w-1/2">{jobItem.department}</div>
          </div>
          <div className="flex">
            <div className="font-bold w-full md:w-1/2">Hours / Shifts:</div>
            <div className="w-full md:w-1/2">{jobItem.Shift}</div>
          </div>
          <div className="flex">
            <div className="font-bold w-full md:w-1/2">Summary</div>
            <div className="w-full md:w-1/2">{jobItem.summary}</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="md:flex md:flex-row space-x-4 lg:flex lg:flex-col">
            <button className="bg-blue-400 focus:online-none rounded-lg text-white px-4 py-2">job post</button>
            <button className="border border-blue-400 focus:online-none rounded-lg text-blue-400 px-4 py-2 lg:mt-2">save job</button>
          </div>
        </div>
      </div>
    </>}
  </div>

}