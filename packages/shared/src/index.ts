export type SupportedLanguageCode = "en" | "hi" | "ta";

export interface UserProfile {
  id: string;
  phone?: string;
  preferredLanguage: SupportedLanguageCode;
  createdAt: string;
}

export interface Scheme {
  id: string;
  title: string;
  description: string;
  languageCodes: SupportedLanguageCode[];
  eligibility: string;
  category: "healthcare" | "finance" | "education" | "other";
  sourceType: "government" | "ngo";
  url?: string;
  createdAt: string;
  updatedAt: string;
}

export interface QueryLogEntry {
  id: string;
  userId?: string;
  language: SupportedLanguageCode;
  queryText: string;
  responseLatencyMs: number;
  createdAt: string;
}

