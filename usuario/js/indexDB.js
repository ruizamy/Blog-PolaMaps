
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
    let elem = document.querySelectorAll('puntaje');
    elem.forEach(val=>{
      if(val.checked){
        per.calificacion=val.value
        console.log(val.value)
      }else{
        console.log("no esta")
      }
    })
    let artic = document.createElement('article');
    artic.className='nom';

    artic.innerHTML+=`<h5>${arr[0].value}</h5>
    <p>CALIFICACION</p>
    <H3>TITULO DE LA CALIFICACION</H3>
    <p>${arr[1].value}</p>`

    document.querySelector('.extra-opinion').append(artic)

  })
  






  class superHeroe{
    constructor(fuerza,habilidad,edad){
      this.fuerza=fuerza,
      this.habilidad=habilidad,
      this.edad=edad
    }
    

  }