export interface Article {
  id: number
  title: string
  body: string
  imge: string
  category: {
    id: number
    name: string
    url_name: string
  }
  date: string
}

export interface LinkInBody {
  wordToLink: string
  url: string
}
