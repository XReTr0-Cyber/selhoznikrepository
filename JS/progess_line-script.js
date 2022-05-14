var body = document.body,
html = document.documentElement;


let height_value, innerHeight;
const progress_line = document.querySelector('.progress_line')  


window.addEventListener('scroll', SearchWidth)


function SearchWidth(){
  height_value = document.body.scrollHeight;
  innerHeight = window.innerHeight;
  progress_line.style.width = (pageYOffset * 100) / (height_value - innerHeight) + '%';
}