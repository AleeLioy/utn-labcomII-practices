function changeProductImage(){
    let color = document.getElementById('selec-color');
    let img = document.getElementById('imagen');
    color.addEventListener('change', function(){
        opcion = color.value;
        switch (opcion) {
            case 'grafito':
             img.src = "https://cdn-ipoint.waugi.com.ar/22618-large_default/iphone-13-pro-max-512gb-graphite.jpg"
              break;
            case 'sierra':
              img.src = "https://www.mink.com.ar/qloud/ryr/fotos/22241-0.jpg"
              break;
            case 'silver':
              img.src = "https://front.dev.malditohard.com.ar/img/migration/APPLE--IPHONE-13-PRO-MAX-256GB-SILVER.webp"
              break;
            case 'gold':
              img.src = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-13-pro-gold-2023?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1679072986854"
              break;
            default:
             img.src = "https://smartfix.com.ar/wp-content/uploads/2022/02/Colores-5.png"
        }
    })

  
}