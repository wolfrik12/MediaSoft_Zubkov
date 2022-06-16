const anchors = document.querySelectorAll('details')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    if(anchor.hasAttribute('open')){
      closed()
      
    }else{
      open()
    }
    function open(){
      anchor.setAttribute('open','')
    }
    function closed(){
      anchor.removeAttribute('open')
    }
    // const blockID = anchor.getAttribute('href').substr(1)
    
    // document.getElementById(blockID).scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start'
    // })
  })
}