// ===== FUNCTIONS AUX =====
function getOffsetsWithoutMargins(el, margin = 0) {
  const left = `${el.offsetLeft - margin}px`
  const top = `${el.offsetTop - margin}px`

  return { top, left }
  // equivalent to { top: top, left: left }
}

function toPositionAbsolute(arrHTML) {
  for (let i = arrHTML.length - 1; i >= 0; i--) {
    const offsets = getOffsetsWithoutMargins(arrHTML[i], 32)

    Object.assign(arrHTML[i].style, {
      position: 'absolute',
      ...offsets,
    })
  }
}

// ===========================

export function sidebarAddAnimation() {
  const sidebar = document.getElementsByClassName('sidebar')[0]
  const lastCard = sidebar.lastChild
  if (lastCard) {
    lastCard.style.transition = 'transform .8s'
    lastCard.style.transform = 'scale(1)'
  }
}

export function sidebarRemoveAnimation() {
  const sidebar = document.getElementsByClassName('sidebar')[0]

  const cards = sidebar.getElementsByClassName('card')

  toPositionAbsolute(cards)

  const firstCard = cards[0]

  for (let i = cards.length - 1; i > 0; i--) {
    const offsets = getOffsetsWithoutMargins(cards[i], 32)
    const nextOffsets = getOffsetsWithoutMargins(firstCard, 32)

    offsets.top = parseInt(offsets.top.replace('px', ''), 10)
    offsets.left = parseInt(offsets.left.replace('px', ''), 10)
    nextOffsets.top = parseInt(nextOffsets.top.replace('px', ''), 10)
    nextOffsets.left = parseInt(nextOffsets.left.replace('px', ''), 10)

    Object.assign(cards[i].style, {
      transform: `translateY(-${offsets.top - nextOffsets.top}px)`,
    })
  }
}

// isOpen is a bool
export function toggleSidebar(isOpen) {
  const sidebar = document.querySelectorAll('.sidebar')[0]
  const removeBtn = document.getElementById('sidebar-remove-btn')
  const toggleBtn = document.getElementById('sidebar-toggle-btn')
  const cards = sidebar.querySelectorAll('.card')

  if (isOpen) {
    sidebar.style.transition = 'all .8s'
    sidebar.style.flex = '0 1 0%'
    toggleBtn.style.backgroundColor = '#ff0f0f'
    removeBtn.style.display = 'none'

    cards.forEach((el) => {
      const card = el
      card.style.display = 'none'
    })
  } else {
    sidebar.style.transition = 'all .8s'
    sidebar.style.flex = '1'
    toggleBtn.style.backgroundColor = '#4caf50'
    setTimeout(() => {
      removeBtn.style.display = 'block'
      cards.forEach((el) => {
        const card = el
        card.style.display = 'flex'
      })
    }, 400)
  }
}
