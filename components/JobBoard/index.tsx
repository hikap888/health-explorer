import { useEffect, useState } from 'react';
import SortBar from './SortBar';
import JobPost from './JobPost';
import handler from '../../pages/api/jobs'
import { JobPostItem } from '../../core/types';

function Sum1(a: number, b: number) { return a + b; }
const Sum2 = (a: number, b: number) => { return a + b; }

export default function JobBoard() {
  const [jobPosts, setJobPosts] = useState<JobPostItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3000/api/jobs')
      .then(res => res.json())
      .then(data => {
        setIsLoading(false);
        setJobPosts(data);
      })
      .catch(() => {
        setIsLoading(false);
      })
  }, []);

  return <div className="ml-0 lg:ml-4 mb-4 w-full bg-white">
    <SortBar />
    {!isLoading ? <div className="w-full px-4 pt-8 cursor-point">
      {jobPosts.map(jobPost => <JobPost jobPost={jobPost} />)}
    </div> : <div>Loading...</div>}
  </div>
}