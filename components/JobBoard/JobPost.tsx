import { JobPostItem } from "../../core/types";

interface Props {
  jobPost: JobPostItem
}

export default function JobPost({ jobPost }: Props) {
  return <div className="mb-4">
    <div className="flex font-sm items-center">
      <div className="bg-gray-400 rounded-md text-white font-bold w-10 py-2 mr-3 text-center">BU</div>
      <div>{jobPost.jobCount} jobs for {jobPost.hospitalName}</div>
    </div>
  </div>
}