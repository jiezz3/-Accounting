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
  createTag:(name:string)=>void
  removeTag:(id:string)=>boolean
  updateTag:(id:string,name:string)=> 'success' | 'not_found' | 'duplicated'
}