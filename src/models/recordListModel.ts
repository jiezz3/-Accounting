const recordListModel={
  data:[] as RecordItem[],
  fetch(){
    this.data=JSON.parse(window.localStorage.getItem('recordList')||'[]')
    return this.data
  },
  save(){
    window.localStorage.setItem('recordList',
      JSON.stringify(this.data))
  },
}
export default recordListModel