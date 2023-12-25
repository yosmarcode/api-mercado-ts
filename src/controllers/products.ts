
export type Results = {
  id: string;
  condition: string;
  title: string;
  thumbnail: string;
  category_id: string;
  price: number;
  currency_id: string;
  active: string;
  seller_address: {
    city: {
      id: string;
      name: string;
    };
  };
}[];

export interface IResponse {
  success: boolean;
  data: any;
  message: string
} 

