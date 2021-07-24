type Tag={
  id:string
  name:string
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success'|'duplicated'
  save: () => void
}
const tagListModel: TagListModel = {
  data:[],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    return this.data;
  },
  save() {
    window.localStorage.setItem('tagList', JSON.stringify(this.data));
  },
  create(name) {
    const names=this.data.map(item=>item.name)
    if(names.indexOf(name)>=0){return 'duplicated'}
    else{this.data.push({id: name, name: name})
      this.save();
      return 'success'}

  }
};
export default tagListModel;