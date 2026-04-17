export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.className = 'before-after-wrapper';

  rows.forEach((row, idx) => {
    const cols = [...row.children];
    const pair = document.createElement('div');
    pair.className = 'before-after-pair';
    pair.dataset.index = idx;

    if (cols.length >= 2) {
      const beforeCol = cols[0];
      const afterCol = cols[1];

      const beforeDiv = document.createElement('div');
      beforeDiv.className = 'before-after-before';
      const beforeLabel = document.createElement('span');
      beforeLabel.className = 'before-after-label';
      beforeLabel.textContent = beforeCol.querySelector('p')?.textContent?.trim() || 'Voor';
      const beforeImg = beforeCol.querySelector('picture') || beforeCol.querySelector('img');
      if (beforeImg) beforeDiv.append(beforeImg);
      beforeDiv.append(beforeLabel);

      const afterDiv = document.createElement('div');
      afterDiv.className = 'before-after-after';
      const afterLabel = document.createElement('span');
      afterLabel.className = 'before-after-label';
      afterLabel.textContent = afterCol.querySelector('p')?.textContent?.trim() || 'Na';
      const afterImg = afterCol.querySelector('picture') || afterCol.querySelector('img');
      if (afterImg) afterDiv.append(afterImg);
      afterDiv.append(afterLabel);

      pair.append(beforeDiv, afterDiv);
    }

    wrapper.append(pair);
  });

  // Add navigation dots if multiple pairs
  if (rows.length > 1) {
    const nav = document.createElement('div');
    nav.className = 'before-after-nav';
    rows.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = 'before-after-dot';
      dot.setAttribute('type', 'button');
      dot.setAttribute('aria-label', `Show comparison ${idx + 1}`);
      if (idx === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        wrapper.querySelectorAll('.before-after-pair').forEach((p, i) => {
          p.style.display = i === idx ? 'flex' : 'none';
        });
        nav.querySelectorAll('.before-after-dot').forEach((d, i) => {
          d.classList.toggle('active', i === idx);
        });
      });
      nav.append(dot);
    });
    block.append(nav);

    // Hide all but first pair
    wrapper.querySelectorAll('.before-after-pair').forEach((p, i) => {
      if (i > 0) p.style.display = 'none';
    });
  }

  block.prepend(wrapper);
}
