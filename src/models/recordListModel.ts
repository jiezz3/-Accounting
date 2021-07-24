const recordListModel={
  fetch(){
    return JSON.parse(window.localStorage.getItem('recordList')||'[]')
  },
  save(data:RecordItem[]){
    window.localStorage.setItem('recordList', JSON.stringify(data))
  },
}
export default recordListModel