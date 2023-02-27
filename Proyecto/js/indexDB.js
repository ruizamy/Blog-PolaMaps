
class comentario{
  constructor(){
    this.nombre
    this.comentario
    this.calificacion
  }
}

  let per = new comentario();
  document.querySelector('.opini').addEventListener('click',(e)=>{
    e.preventDefault();
    let arr = document.querySelectorAll('.selec');
    per.nombre =arr[0].value
    per.comentario =arr[1].value
    console.log(per)
    let elem = document.querySelector('input[name="estrellas"]:cheked');
    if(elem){
      console.log(elem.value)
    }
  })
  


