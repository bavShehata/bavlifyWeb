// Parallax scrolling
window.addEventListener('scroll', (e) => {
  const target = document.querySelectorAll('.scroll');
  target.forEach((item) => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * item.dataset.rate;
    if (item.dataset.dir == 'v')
      item.style.transform = `translate3d(0px, ${rate}px, 0)`;
    else item.style.transform = `translate3d(${rate}px, 0px, 0)`;
  });

  const text = document.querySelectorAll('section p');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = '1';
      } else {
        entry.target.style.transform = 'translateY(100px)';
        entry.target.style.opacity = '0';
      }
    });
  });
  text.forEach((item) => {
    observer.observe(item);
  });
});
