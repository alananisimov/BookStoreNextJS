export interface MyProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rate: number;
  count: number;
}
export interface auth_key {
  access_token: string;
}
export interface ReviewProps {
  name: string;
  date: string;
  header: string;
  text: string;
  photo_url: string;
  avatar_url: string;
  stars: number;
}
export interface Review {
  review: ReviewProps;
}