type RecordItem = {
  tags: Tag[]
  notes: string
  type: string
  amount: number
  creatAt?: string
}
type Tag = {
  id: string
  name: string
}
type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag
}

