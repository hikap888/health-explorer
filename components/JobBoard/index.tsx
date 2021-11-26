import SortBar from './SortBar';
import JobPost from './JobPost';
import handler from '../../pages/api/hello'
import { jobPosts } from '../../core/consts';

export default function JobBoard() {
  return <div className="ml-0 lg:ml-4 mb-4 w-full bg-white">
    <SortBar/>
    <div className="w-full px-4 pt-8 cursor-point">
      {jobPosts.map(jobPost => <JobPost jobPost={jobPost}/>)}

    </div>
  </div>
}