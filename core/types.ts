export enum JobType {
  PartTime = 'PART_TIME',
  FullTime = 'FULL_TIME',
  Traveler = 'TRAVELER'
}

export interface JobItem {
  title: string
  jobType: JobType
  payRate: [number, number]
  hours: number
  Shift: string
  address: string
  department: string
  summary: string
  dateInfo: string
}

export interface JobPostItem {
  jobs: JobItem[]
  hospitalName: string
  symbol: string
}
