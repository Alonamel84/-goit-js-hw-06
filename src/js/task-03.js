const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const markup = images.map(item => {
  return `<li> <img src = "${item.url}"  alt= "${item.alt}"> </li>;`;
});
const summMarkup = markup.join(' ');

const list = document.querySelector('.gallery');
list.insertAdjacentHTML('beforeend', summMarkup);
document.querySelector('.gallery').style.display = 'flex';
document.querySelector('.gallery').style.flexWrap = 'wrap';
document.querySelector('.gallery').style.listStyle = 'none';
document.querySelector('.gallery').style.alignItems = 'center';
document.querySelector('.gallery').style.justifyContent = 'space-between';
document.querySelectorAll('.gallery li').forEach(item => (item.style.marginBottom = '20px'));
document.querySelectorAll('.gallery img').forEach(item => {
  item.style.display = 'block';
  item.style.width = '500px';
  item.style.height = '300px';
});
