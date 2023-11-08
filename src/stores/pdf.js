import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePageStore = defineStore('pdf', () => {
  const filename = ref(null)
  const pworker = ref(null)
  const worker_initialized = ref(false)
  const worker_progress = ref(false)
  const worker_image_process = ref(false)

  const filesize = ref(0)
  const nodata = ref(true)

  const pages = ref({ pages: [] })
  const totalpages = computed(() => pages.value.pages.length)
  const workerOn = computed(() => pworker === undefined)

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

  return { worker_image_process, worker_progress, worker_initialized, nodata, selectedPages, clearPages, addPage, workerOn, pworker, filename, filesize, pages, totalpages, setFileName, setFileSize, setWorker }
})
