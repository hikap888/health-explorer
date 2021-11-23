export default function SortBar() {
  return <div className="mt-8 ml-4 mr-8 flex justify-between text-sm">
    <div>
      <span className="font-bold p-1">120</span>
      <span>job postings</span>
    </div>
    <div className="hidden lg:block space-x-6 flex justify-between">
      <span className="text-gray-400">sort by</span>
      <button className=" focus:outline-none relative bg-gray-500">Location</button>
      <button className=" focus:outline-none relative">Role</button>
      <button className=" focus:outline-none relative">Department</button>
      <button className=" focus:outline-none relative">Eduaction</button>
      <button className=" focus:outline-none relative">Experience</button>
    </div>
  </div>

}