/**
 * Global application constants
 */

export const APP_LOGIN_URL = "https://app.getyourclientsb2b.com/login";
export const APP_BASE_URL = "https://app.getyourclientsb2b.com";
export const MARKETING_BASE_URL = "https://getyourclientsb2b.com";

// Official Company Contact Emails
export const CONTACT_EMAILS = {
  admin: "admin@getyourclientsb2b.com",
  kishore: "kishore@getyourclientsb2b.com",
  sales: "sales@getyourclientsb2b.com",
  support: "support@getyourclientsb2b.com",
} as const;

export const ADMIN_EMAIL = CONTACT_EMAILS.admin;
export const FOUNDER_EMAIL = CONTACT_EMAILS.kishore;
export const SALES_EMAIL = CONTACT_EMAILS.sales;
export const SUPPORT_EMAIL = CONTACT_EMAILS.support;
