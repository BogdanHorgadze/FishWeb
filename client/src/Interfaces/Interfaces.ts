export interface product {
  id: string;
  _id: String
  cloth?: String
  composition?: String
  density?: String
  descr? : String
  img?: String
  impregnation?: String
  lining?: String
  name: String
  count: String | number
  price: String
  resistance?: String
  size: string
  vapor?: String
  selectedSize: Array<String>
}