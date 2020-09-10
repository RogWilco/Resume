import $ from 'jquery'

const getTagClass = e =>
  (e.target.className.match(/(^|\s)(tag\-[^\s]*)/) || [, , ''])[2]

$('.tag').hover(
  e => {
    $(`.${getTagClass(e)}`).addClass('hover')
  },
  e => {
    $(`.${getTagClass(e)}`).removeClass('hover')
  }
)

$('.tag').click(e => {
  $(`.${getTagClass(e)}`).toggleClass('active')
})
