// SenshiGuard Platform Dashboard - Interactive Scripts
document.addEventListener('DOMContentLoaded', () => {
  // 1. Add Site Modal Toggle
  const addSiteBtn = document.getElementById('btn-add-site');
  const addSiteModal = document.getElementById('modal-add-site');
  const closeSiteModal = document.getElementById('btn-close-modal');
  const formAddSite = document.getElementById('form-add-site');

  if (addSiteBtn && addSiteModal) {
    addSiteBtn.addEventListener('click', () => {
      addSiteModal.classList.add('active');
    });
  }

  if (closeSiteModal && addSiteModal) {
    closeSiteModal.addEventListener('click', () => {
      addSiteModal.classList.remove('active');
    });
  }

  if (formAddSite) {
    formAddSite.addEventListener('submit', (e) => {
      e.preventDefault();
      const siteUrl = document.getElementById('input-site-url').value;
      alert(`Site ${siteUrl} registered! Generated Pairing API Key: senshi_live_${Math.random().toString(36).substring(2, 15)}`);
      addSiteModal.classList.remove('active');
    });
  }

  // 2. 1-Click Scan Simulator
  const scanButtons = document.querySelectorAll('.btn-scan-site');
  scanButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const siteId = btn.getAttribute('data-site');
      btn.disabled = true;
      btn.innerHTML = '⚡ Scanning...';
      
      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = '✓ Scan Complete';
        btn.style.background = 'rgba(16, 185, 129, 0.2)';
        btn.style.borderColor = '#10B981';
        btn.style.color = '#34D399';
      }, 2000);
    });
  });

  // 3. 1-Click Clean Simulator
  const cleanButtons = document.querySelectorAll('.btn-clean-site');
  const diffModal = document.getElementById('modal-clean-diff');
  const closeDiffModal = document.getElementById('btn-close-diff');
  const applyCleanBtn = document.getElementById('btn-apply-clean');

  cleanButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (diffModal) {
        diffModal.classList.add('active');
      }
    });
  });

  if (closeDiffModal && diffModal) {
    closeDiffModal.addEventListener('click', () => {
      diffModal.classList.remove('active');
    });
  }

  if (applyCleanBtn && diffModal) {
    applyCleanBtn.addEventListener('click', () => {
      applyCleanBtn.disabled = true;
      applyCleanBtn.innerHTML = '⚡ Applying Surgical Diff...';
      setTimeout(() => {
        alert('Threat sanitized successfully! 0 breaking changes to plugin files.');
        diffModal.classList.remove('active');
        applyCleanBtn.disabled = false;
        applyCleanBtn.innerHTML = 'Apply Surgical Clean';
      }, 1200);
    });
  }

  // 4. Live Table Search Filter
  const searchInput = document.getElementById('search-sites-input');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      const rows = document.querySelectorAll('.data-table tbody tr');
      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }
});
