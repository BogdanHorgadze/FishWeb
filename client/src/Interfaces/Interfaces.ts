export interface product {
  id: string;
  _id: string
  cloth?: string
  composition?: string
  density?: string
  descr? : string
  img?: string
  impregnation?: string
  lining?: string
  name: string
  count: string | number
  price: string
  resistance?: string
  size: string
  vapor?: string
  selectedSize: Array<String>
}