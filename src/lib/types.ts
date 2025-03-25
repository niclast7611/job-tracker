export interface PresignedUrlResponse {
  url: string;
  fields: Record<string, string>;
}

// Define type for resume object
export interface Resume {
  id?: string;
  title?: string;
  fileName?: string;
  fileUrl?: string;
  fileType?: string;
  fileSize?: number;
  isBase?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Job {
  id: number;
  job_title: string;
  url: string;
  date_posted: string;
  has_blurred_data: boolean;
  company: string;
  final_url: string;
  source_url: string;
  location: string;
  short_location: string;
  long_location: string;
  state_code: string;
  latitude: number | null;
  longitude: number | null;
  postal_code: string | null;
  remote: boolean;
  hybrid: boolean;
  salary_string: string;
  min_annual_salary: number | null;
  min_annual_salary_usd: number | null;
  max_annual_salary: number | null;
  max_annual_salary_usd: number | null;
  avg_annual_salary_usd: number | null;
  salary_currency: string | null;
  countries: string[];
  country: string | null;
  cities: string[];
  continents: string[];
  seniority: string;
  country_codes: string[];
  country_code: string;
  discovered_at: string;
  company_domain: string;
  hiring_team: any[];
  reposted: boolean;
  date_reposted: string | null;
  employment_statuses: string[];
  easy_apply: boolean;
  description: string;
  company_object: CompanyObject;
  normalized_title: string | null;
  manager_roles: any[];
  matching_phrases: any[];
  matching_words: any[];
}

export interface CompanyObject {
  name: string;
  domain: string;
  industry: string;
  country: string;
  country_code: string;
  employee_count: number;
  logo: string;
  num_jobs: number;
  num_technologies: number;
  url: string;
  industry_id: number;
  linkedin_url: string;
  num_jobs_last_30_days: number;
  num_jobs_found: number | null;
  yc_batch: string | null;
  apollo_id: string | null;
  linkedin_id: string;
  url_source: string | null;
  is_recruiting_agency: boolean;
  id: string;
  founded_year: number | null;
  annual_revenue_usd: number | null;
  annual_revenue_usd_readable: string | null;
  total_funding_usd: number | null;
  last_funding_round_date: string | null;
  last_funding_round_amount_readable: string | null;
  employee_count_range: string | null;
  long_description: string;
  seo_description: string;
  city: string | null;
  postal_code: string | null;
  company_keywords: string[];
  alexa_ranking: number | null;
  publicly_traded_symbol: string | null;
  publicly_traded_exchange: string | null;
  investors: string[] | null;
  funding_stage: string | null;
  has_blurred_data: boolean;
  possible_domains: string[];
  technology_slugs: string[];
  technology_names: string[];
}