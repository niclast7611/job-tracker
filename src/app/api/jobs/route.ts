import { jobs } from "@/lib/jobs";
import { NextRequest, NextResponse } from "next/server";

/*
THESE ARE THE QUERY PARAMS FOR THIS API
 - title_filter (optional) String
Search on the job title. You can search like you search on Google, see the documentation for more info.

- location_filter (optional) String
Filter on location. Please do not search on abbreviations like US, UK, NYC. Instead, search on full names like United States, New York, United Kingdom.
You may filter on more than one location in a single API call using the OR parameter. For example: Dubai OR Netherlands OR Belgium

- description_filter (optional) String
Filter on the job description. You can search like you search on Google, see the documentation for more info.

- organization_filter (optional) String
Filter on the job's company name. Only allows for exact matches.
You can search on more than one company with a comma delimited list without spaces!. For example: organization_filter:NVIDIA,Walmart
Warning, this filter does not work for company names using parenthesis ( )
Please send us an email at remco@fantastic.jobs to receive a list of all companies in this API

- description_type (optional) String
Description Type. Leave empty to return data without job description. Option 1: 'text' Option 2: 'html'

- remote (optional) Boolean
Set to 'true' to include remote jobs only. Set to 'false' to include jobs that are not remote. Leave empty to include both remote and non remote jobs

- source (optional) String
Filter on source. You can only select one source per call. Your options are: ashby, bamboohr, breezy, eightfold, greenhouse, lever.co, oraclecloud, paylocity, phenompeople, recruitee, smartrecruiters, successfactors, teamtailor, workable, workday, Apple, zoho, pinpoint, paycom, join.com, jobvite, icims, dayforce, jazzhr

- offset (optional) String
Offset allows you to paginate results. For example, if you want to retrieve 30 jobs from our api you can send 3 requests with offset 0, 10, and 20.

- date_filter (optional) String
You can use this filter to return only the most recent jobs, instead of all jobs from the last 7 days. This filter is a greater than filter. For example, if today's date is 2025-01-03 and you wish to only return jobs posted in 2025, you can filter on '2025-01-01'.
To include time, use the following syntax: '2025-01-01T14:00:00'
Please keep in mind that the jobs posted date/time is UTC and there's a 1 to 2 hour delay before jobs appear on this API.

- advanced_title_filter (optional) String
Advanced Title filter which enables more features like parenthesis, 'AND', and prefix searching. Can Not be used in combination with regular title_filter.Phrares (two words or more) always need to be single quoted or use the operator <->Instead of using natural language like 'OR' you need to use operators like:
& (AND)
| (OR)
! (NOT)
<-> (FOLLOWED BY)
' ' (FOLLOWED BY alternative, does not work with 6. Prefix Wildcard)
:* (Prefix Wildcard)
For example: (AI | 'Machine Learning' | 'Robotics') & ! Marketing
Will return all jobs with ai, or machine learning, or robotics in the title except titles with marketing
Project <-> Manag:*
Will return jobs like Project Manager or Project Management
Please send us a message if you're getting errors

- include_ai (optional) Boolean
BETA Feature We're now extracting useful insights from the job description with AI. Please see the docs for all the included fields. Set to true to include all AI fields Please note that we're currently including about 99.5% of all jobs. Do you see a repeated mistake in the output? Please report here

- ai_employment_type_filter (optional) String
BETA Feature. Filter on a specific job type as identified by our AI, the options are: FULL_TIME/PART_TIME/CONTRACTOR/TEMPORARY/INTERN/VOLUNTEER/PER_DIEM/OTHER To filter on more than one job type, please delimit by comma, like such: FULL_TIME, PART_TIME

- ai_work_arrangement_filter (optional) String
BETA Feature. Filter on a specific work arrangement identified by our AI, This is a more granular version of the 'remote' filter, which is quite broad the options are:
On-site (Job is on site only, no working from home available)
Hybrid (Job is in the office with one or more days remote)
Remote OK (Job is fully remote, but an office is available)
Remote Solely (Job is fully remote, and no office is available)
To filter on more than one job type, please delimit by comma with no space, like such: Hybrid,Remote OK,Remote Solely

- ai_experience_level_filter (optional) String
BETA Feature. Filter on a certain required experience level as identified by our AI, the options are:
0-2/2-5/5-10/10+
To filter on more than one job type, please delimit by comma with no space, like such: 0-2,2-5

- ai_visa_sponsorship_filter (optional) Boolean
BETA Feature.Filter on jobs that mention Visa sponsorship within the job description.
*/


const url = process.env.JOB_SEARCH_API_URL || ''
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.RAPID_API_KEY || '',
        'x-rapidapi-host': process.env.RAPID_API_HOST || '',
    }
};

export async function GET(request: NextRequest) {
  try {
  //   const response = await fetch(url, options);
	// const result = await response.text();
	// console.log(result);
  // TODO:REMOVE PLACEHOLDER DATA ONCE I UPGRADE THE API SUBSCRIPTION
  const result = jobs;
    
    return NextResponse.json({
        message: 'Success',
        data: result,
    });
  } catch (error) {
    console.error('Error creating presigned URL:', error);
    return NextResponse.json(
      { error: 'Error creating upload URL' },
      { status: 500 }
    );
  }
}