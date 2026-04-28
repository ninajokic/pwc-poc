const headerTemplate = `
<header>
  <div class="header-inner">
    <div style="display:flex; align-items:center; gap:14px;">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/PwC_2025_Logo.svg/3840px-PwC_2025_Logo.svg.png" width="100" alt="PwC logo">
      <div style="font-weight:700; letter-spacing:0.2px;">Internal Management Hub</div>
    </div>
    <input
      type="search"
      placeholder="Search"
      aria-label="Search site"
      style="margin-left:auto; margin-right:24px; padding:10px 14px; border:1px solid #ddd; border-radius:20px; min-width:320px; font:inherit;"
    >
    <nav class="top-nav">
      <a href="index.html">Home</a>
      <div class="nav-dropdown">
        <a href="discover.html">Discover</a>
        <div class="dropdown-menu">
          <a href="#">Client 360</a>
          <a href="#">Industry Playbooks</a>
          <a href="#">Solution Kits</a>
        </div>
      </div>
      <div class="nav-dropdown">
        <a href="prepare.html">Prepare</a>
        <div class="dropdown-menu">
          <a href="#">Meeting Prep Kits</a>
          <a href="#">Persona Guides & Messaging</a>
          <a href="#">Discovery & Workshop Kits</a>
        </div>
      </div>
      <a href="deliver-learn.html">Deliver & Learn</a>
      <a href="trust-builder.html">Trust Builder</a>
    </nav>
  </div>
</header>
`;

const footerTemplate = ``;

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('site-header').innerHTML = headerTemplate;
  if (!document.getElementById('shared-nav-styles')) {
    const styleEl = document.createElement('style');
    styleEl.id = 'shared-nav-styles';
    styleEl.textContent = `
      .top-nav { display: flex; align-items: center; }
      .nav-dropdown { position: relative; display: inline-block; }
      .nav-dropdown .dropdown-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 25px;
        min-width: 190px;
        background: white;
        border: 1px solid #eee;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        padding: 8px 0;
        z-index: 50;
      }
      .nav-dropdown .dropdown-menu a {
        display: block;
        margin: 0;
        padding: 10px 14px;
        white-space: nowrap;
      }
      .nav-dropdown .dropdown-menu a:hover { background: #f5f5f5; }
      .nav-dropdown:hover .dropdown-menu { display: block; }
    `;
    document.head.appendChild(styleEl);
  }
  const footerMount = document.getElementById('site-footer');
  if (footerMount) footerMount.remove();
  if (footerTemplate) document.body.insertAdjacentHTML('beforeend', footerTemplate);
  document.body.style.paddingBottom = '0';
});

