const image = document.getElementById( 'productImg' );
const btn = document.getElementsByClassName( 'btn' );

btn[0].addEventListener( 'click', function(){
    image.src = 'https://cdn.glitch.global/71b52568-f61b-49cb-92d1-327ec066a966/Screenshot%202024-12-04%2010.23.36%20AM.png?v=1733336809485';
    for( bt of btn ){
        bt.classList.remove( 'active' );
    }
    this.classList.add( 'active' );
} );
btn[1].addEventListener( 'click', function(){
    image.src = 'https://cdn.glitch.me/71b52568-f61b-49cb-92d1-327ec066a966/6446053-hd_1080_1920_25fps-ezgif.com-video-to-gif-converter.gif?v=1733282656586';
    for( bt of btn ){
        bt.classList.remove( 'active' );
    }
    this.classList.add( 'active' );
} );
btn[2].addEventListener( 'click', function(){
    image.src = 'https://cdn.glitch.global/71b52568-f61b-49cb-92d1-327ec066a966/Glow%20Recipe%20Moisturizer.jfif?v=1733337311357';
    for( bt of btn ){
        bt.classList.remove( 'active' );
    }
    this.classList.add( 'active' );
} );


// const productContainers = [...document.querySelectorAll('.product-container')];
// const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
// const preBtn = [...document.querySelectorAll('.pre-btn')];

// productContainers.forEach((item,i)=> {
//   let containerDimensions = item.gretBoundingClientRect();
//   let containerWidth = containerDimensions.width;
  
//   nxtBtn[i].addEventListener('click', () => {
//     item.scrollLeft += containerWidth;
//   })
  
//    preBtn[i].addEventListener('click', () => {
//     item.scrollLeft += containerWidth;
//   })
// })



