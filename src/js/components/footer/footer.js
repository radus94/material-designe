import footerTemplate from '../../templates/footer.hbs';

const footerContainer = document.getElementById('footer-hbs');

const firstLinks = [
  {
    url: '#',
    label: 'Link 1',
  },
  {
    url: '#',
    label: 'Link 2',
  },
  {
    url: '#',
    label: 'Link 3',
  },
  {
    url: '#',
    label: 'Link 4',
  },
];

const secondLinks = [
  {
    url: '#',
    label: 'Link 1',
  },
  {
    url: '#',
    label: 'Link 2',
  },
  {
    url: '#',
    label: 'Link 3',
  },
  {
    url: '#',
    label: 'Link 4',
  },
];

const thirdLinks = [
  {
    url: '#',
    label: 'Link 1',
  },
  {
    url: '#',
    label: 'Link 2',
  },
  {
    url: '#',
    label: 'Link 3',
  },
  {
    url: '#',
    label: 'Link 4',
  },
];

const socialLinks = [
  {
    btn: 'btn-fb',
    icon: 'fa-facebook',
  },
  {
    btn: 'btn-tw',
    icon: 'fa-twitter',
  },
  {
    btn: 'btn-gplus',
    icon: 'fa-google-plus',
  },
  {
    btn: 'btn-li',
    icon: 'fa-linkedin',
  },
  {
    btn: 'btn-dribbble',
    icon: 'fa-dribbble',
  },
];

if (footerContainer) {
  footerContainer.innerHTML = footerTemplate({
    firstLinks, secondLinks, thirdLinks, socialLinks,
  });
}
