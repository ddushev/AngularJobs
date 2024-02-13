import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IJob } from '../../types/job';
import { map } from 'rxjs';
import { IJobData } from '../../types/jobData';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  apiURL = environment.apiURL;
  jobsEndpoint = '/data/jobs';

  constructor(private http: HttpClient) {}

  getJobs() {
    return this.http.get<IJob[]>(`${this.apiURL}${this.jobsEndpoint}`);
  }

  getSingleJob(id: string) {
    return this.http.get<IJob>(`${this.apiURL}${this.jobsEndpoint}/${id}`).pipe(
      map((job) => ({
        ...job,
        qualifications: !Array.isArray(job.qualifications) ? job.qualifications.split('. ') : job.qualifications,
        responsibilities: !Array.isArray(job.responsibilities) ? job.responsibilities.split('. ') : job.responsibilities,
      }))
    );
  }

  createJob(jobData: IJobData) {
    return this.http.post<IJob>(`${this.apiURL}${this.jobsEndpoint}`, jobData);
  }

  editJob(jobData: IJobData) {
    return this.http.put<IJob>(`${this.apiURL}${this.jobsEndpoint}`, jobData);
  }

  deleteJob(id: string) {
    return this.http.delete(`${this.apiURL}${this.jobsEndpoint}/${id}`);
  }
}
