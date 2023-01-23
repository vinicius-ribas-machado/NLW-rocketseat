const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)

const data = {
  run: ['01-01','01-02','01-06','01-099','01-034','01-0243'],
  takepill:['01-02'],
  food:['01-04']
}

nlwSetup.setData(data)
nlwSetup.load()