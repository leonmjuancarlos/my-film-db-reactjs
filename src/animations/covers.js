export default function putCovers() {
  const covers = document.getElementsByClassName('cover')
  const cardsInfo = document.getElementsByClassName('card-info')

  if (covers.length === cardsInfo.length) {
    for (let i = 0; i < covers.length; i++) {
      // let width = covers[i].clientWidth;
      const height = covers[i].clientHeight

      cardsInfo[i].style.height = `${height}px`
    }
  }
}
