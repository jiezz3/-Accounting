type RecordItem = {
  tags: string[]
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
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated'
  update: (id: string, name: string) => 'success' | 'not_found' | 'duplicated'
  save: () => void
  remove: (id: string) => boolean
}
interface Window{
  tagList:Tag[]
  findTag:(id:string)=>Tag
  createTag:(name:string)=>void
  removeTag:(id:string)=>boolean
  updateTag:(id:string,name:string)=> 'success' | 'not_found' | 'duplicated'
  recordList:RecordItem[]
  createRecord:(record:RecordItem)=>void
}