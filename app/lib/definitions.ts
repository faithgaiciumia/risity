export type Client = {
  id: number;
  user_email: string;
  name: string;
  email: string;
};
export type Invoice = {
  id: string;
  client_email: string;
  invoice_date: string;
  total_amount: number;
  status: string;
  task_title: string;
};
export type Service = {
  id: string;
  name:string;
  description:string;
  price:number;
};
