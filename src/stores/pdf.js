import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePageStore = defineStore('pdf', () => {
  const pworker = ref(null)
  const filename = ref(null)
  const pages = ref({ pages: [] })
  const totalpages = computed(() => pages.value.pages.length)
  const filesize = ref(0)

  const worker_initialized = ref(false)
  const worker_progress = ref(false)
  const worker_image_process = ref(false)
  const work_flow_state = "LANDING" // "LIST" , "TABLE"

  const selectedPages = computed(() => {
    const _sPages = pages.value.pages.filter((page) => {
      return page.selected
    })
    const _result = _sPages.reduce((accumulator, currentValue) => {
      return accumulator + "," + currentValue.pg
    }, "")
    return _result.replace(/^,/, '');
  })

  function setFileName(name) {
    filename.value = name
  }

  function setFileSize(size) {
    filesize.value = size
  }

  function clearPages() {
    pages.value.pages.length = 0
  }

  function addPage(image, pg) {
    let page = { image: image, pg: pg, selected: true }
    pages.value.pages.push(page);
  }

  function setWorker(worker) {
    pworker.value = worker
  }

  return { work_flow_state, worker_image_process, worker_progress, worker_initialized, selectedPages, clearPages, addPage, pworker, filename, filesize, pages, totalpages, setFileName, setFileSize, setWorker }
})
