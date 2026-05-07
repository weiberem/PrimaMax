export type ChatMessage = { role: "user" | "assistant"; content: string };

export type InvoiceItem = {
  description: string;
  hours: number;
  rate: number;
  total: number;
};

export type InvoiceCustomer = {
  name: string;
  address: string;
  city: string;
  zip: string;
};

export type Invoice = {
  invoice_number: string;
  date: string;
  due_date: string;
  customer: InvoiceCustomer;
  items: InvoiceItem[];
  subtotal: number;
  total: number;
  notes: string;
};

export type InvoiceConfig = {
  phone: string;
  iban: string;
  twint: string;
  mwstExempt: boolean;
};
