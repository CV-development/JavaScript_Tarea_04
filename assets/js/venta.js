const propiedades_venta = [
  {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    baños: 4,
    costo: "5.000",
    smoke: false,
    pets: false
  },
  {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    baños: 1,
    costo: "1.200",
    smoke: true,
    pets: true
  },
  {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    baños: 3,
    costo: "4.500",
    smoke: false,
    pets: true
  },
  {
    nombre: 'Cabaña rústica con vista a Mordor',
    src: 'https://images.unsplash.com/photo-1589439687092-9f4259323401?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9yZG9yfGVufDB8fDB8fHww',
    descripcion: 'Vista privilegiada a Barad Dur y Morannon, se requiere mucho repelente de arañas',
    ubicacion: '1008, Emyn Muil',
    habitaciones: 1,
    baños: 1,
    costo: "2.500",
    smoke: true,
    pets: false
  },
  {
    nombre: 'Domo submarino, nunca falta el agua',
    src: 'https://images.unsplash.com/photo-1526509348523-2217ac3168e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dW5kZXJzZWF8ZW58MHx8MHx8fDA%3D',
    descripcion: 'Este domo tiene excelente vista, siempre y cuando no haya mucha corriente o una tormenta',
    ubicacion: '425 Costanera, Mejillones',
    habitaciones: 2,
    baños: 1,
    costo: "9.500",
    smoke: false,
    pets: true
  },
  {
    nombre: 'Volcán activo con calor acogedor',
    src: 'https://images.unsplash.com/photo-1619266465172-02a857c3556d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Esta propiedad pertenecía a Elon Musk, antes de que se volviera oficialmente un supervillano',
    ubicacion: 'Krakatoa 001',
    habitaciones: 4,
    baños: 5,
    costo: "14.500",
    smoke: true,
    pets: false
  },
  ]

const cardV = document.querySelector('#rowVentas')  

for (propiedad_venta of propiedades_venta){
  let cardVentaFumar = () => {
    if (propiedad_venta.smoke === true) {
      return " <p class=\"text-success\"><i class=\"fas fa-smoking\"></i> Permitido fumar</p>"
    } else {
      return "<p class=\"text-danger\"> <i class=\"fas fa-smoking-ban\"></i> No se permite fumar</p>"
    }
  }
  let cardVentaMascota = () => {
    if (propiedad_venta.pets === true) {
      return " <p class=\"text-success\"><i class=\"fas fa-paw\"></i> Mascotas permitidas</p>"
    } else {
      return "<p class=\"text-danger\"><i class=\"fa-solid fa-ban\"></i> No se permiten mascotas</p>"
    }
  }
  const template = `
  <div class="col-md-4 mb-4">
    <div class="card">
      <img
      src=${propiedad_venta.src}
      class="card-img-top"
      alt="Imagen del departamento"
      />
      <div class="card-body">
        <h5 class="card-title">${propiedad_venta.nombre}</h5>
        <p class="card-text">${propiedad_venta.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${propiedad_venta.ubicacion}</p>
        <p><i class="fas fa-bed"></i> ${propiedad_venta.habitaciones} | <i class="fas fa-bath"></i> ${propiedad_venta.baños}</p>
        <p><i class="fas fa-dollar-sign"></i>${propiedad_venta.costo}</p>
        ${cardVentaFumar()}
        ${cardVentaMascota()}
      </div>
    </div>
  </div>
  `
  cardV.innerHTML += template
}
  