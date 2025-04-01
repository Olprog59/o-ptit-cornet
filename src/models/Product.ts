import type { Category } from './Category'
import type { Photo } from './Photo'

export interface Product {
  Id: number
  titre: string
  description: string
  category: Category
  photo: Photo[]
  actif: boolean
  aujourdhui: boolean
  nouveaute: boolean
  prix: number
}
