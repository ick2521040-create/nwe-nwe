const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const mapSearchItems = [
  { label: '鎌ヶ谷市 梨 直売所', query: '鎌ヶ谷市 梨 直売所' },
  { label: '鎌ヶ谷市 農産物直売所', query: '鎌ヶ谷市 農産物直売所' },
  { label: '鎌ヶ谷市 果物直売所', query: '鎌ヶ谷市 果物直売所' },
  { label: '鎌ヶ谷市 産直市場', query: '鎌ヶ谷市 産直市場' },
  { label: '鎌ヶ谷市 ふるさと市', query: '鎌ヶ谷市 ふるさと市' }
];

const mapList = document.getElementById('map-list');
const showMapButton = document.getElementById('show-map-list');
const mapListWrapper = document.getElementById('map-list-wrapper');

if (mapList && showMapButton && mapListWrapper) {
  mapList.innerHTML = mapSearchItems
    .map(
      (item) => `
        <li>
          <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.query)}" target="_blank" rel="noopener noreferrer">
            <span>${item.label}</span>
            <span>MAP</span>
          </a>
        </li>
      `
    )
    .join('');

  showMapButton.addEventListener('click', () => {
    mapListWrapper.classList.toggle('hidden');
  });
}

