type RecordItem = {
  tags: string[]
  notes: string
  type: string
  amount: number
  creatAt?: Date
}
type Tag = {
  id: string
  name: string
}
interface Window{
  tagList:Tag[]
}