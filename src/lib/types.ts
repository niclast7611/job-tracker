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
  id: string;
  date_posted: string;
  date_created: string;
  title: string;
  organization: string;
  organization_url: string;
  date_validthrough: string;
  locations_raw?: JobLocation[];
  location_type: string | null;
  location_requirements_raw: string | null;
  salary_raw?: JobSalary;
  employment_type: string | null;
  url: string;
  source_type: string;
  source: string;
  source_domain: string;
  organization_logo: string;
  cities_derived: string[];
  regions_derived: string[];
  countries_derived: string[];
  locations_derived: string[];
  timezones_derived: string[];
  lats_derived: number[];
  lngs_derived: number[];
  remote_derived: boolean;
}

export interface JobSalary {
    "@type": string;
    currency: string;
    value?: {
      "@type": string;
      value: string;
      unitText: string;
      minValue:number
      maxValue:number
    };
  }

  export interface JobLocation{
    address: {
      addressCountry: string;
      "@type": string;
      postalCode: string;
      addressLocality: string;
      addressRegion: string;
    };
    "@type": string;
  }