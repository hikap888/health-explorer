export enum JobType {
  PartTime = 'PART_TIME',
  FullTime = 'FULL_TIME',
  Traveler = 'TRAVELER'
}

export interface JobItem {
  title: string
  jobType: JobType
  payRate: [number, number]
  address: string
}

export interface JobPostItem {
  jobs: JobItem[]
  hospitalName: string
}
