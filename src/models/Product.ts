import type { Photo } from './Photo'

export interface Product {
  Id: number
  titre: string
  description: string
  category: string
  photo: Photo[]
  actif: boolean
  aujourdhui: boolean
  nouveaute: boolean
  prix: number
}
