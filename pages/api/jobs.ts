// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { JobPostItem, JobItem } from '../../core/types'

const fs = require('fs');
function parseJobs(): Promise<any> {
  return new Promise(function (resolve, reject) {
    const dirPath = 'data/jobs.json';
    fs.readFile(dirPath, function (err: any, data: string) {
      if (err) {
        reject(err);
      };
      resolve(JSON.parse(data));
    })
  });
}

async function sleep(delay: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(null);
    }, delay);
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JobPostItem[]>
) {

  try {
    const data = await parseJobs();

    const result: JobPostItem[] = data.map((rawJobItem: any) => {
      const items = rawJobItem.items;

      const jobs: JobItem[] = items.map((rawJobDetail: any) => {
        return {
          title: rawJobDetail.type,
          jobType: rawJobDetail.job_type,
          payRate: rawJobDetail.salary_range,
          hours: rawJobDetail.hours[0],
          shift: rawJobDetail.work_schedule,
          address: rawJobDetail.address,
          department: rawJobDetail.department.join(''),
          summary: rawJobDetail.discription,
          dateInfo: rawJobDetail.created
        }
      });
      return {
        jobs,
        hospitalName: rawJobItem.name,
        symbol: (rawJobItem.name.substring(0, 2)).toUpperCase()
      }
    }
    );

    await sleep(2000);

    res.status(200).json(result);
  } catch (e) {
    console.log('file read error = ', e);
    res.status(404);
  };
}
  // const count = data.length;
    // const result: JobPostItem[] = [];
    // for (let i = 0; i < count; i++) {
    //   const rawItem = data[i];
    //   const item: JobPostItem = {
    //     jobs: [],
    //     hospitalName: rawItem.name,
    //     symbol: rawItem.name.split(' ').map((w: string) => w[0]).join(''),
    //   };
    //   result.push(item)
    // }
    // const result: JobPostItem[] = rawDataParsed.map((rawJobPostItem: any) => {
  //   return {
  //     jobs: [], // TODO: convert to jobItem array from raw data
  //     hospitalName: rawJobPostItem.hospi, // TODO: update accordingly
  //     symbol: rawDataParsed. // TODO: update accordingly
  //   }
  // });
