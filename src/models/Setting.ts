import type { Photo } from './Photo'

export interface Setting {
  Id: string
  titre: string
  description_courte: string
  description: string
  adresse: string
  telephone: string
  photo: Photo[]
}
