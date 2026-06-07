const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

const modal = $('[data-modal]');
const modalTitle = $('[data-modal-title]');
const modalMeta = $('[data-modal-meta]');
const modalExcerpt = $('[data-modal-excerpt]');
const modalPdf = $('[data-modal-pdf]');
const modalFrame = $('[data-modal-frame]');
const modalSections = $('[data-modal-sections]');

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function renderLearningIndex() {
  const target = $('[data-learning-index]');
  target.innerHTML = '';

  portfolio.modules.forEach((module) => {
    const row = createElement('button', `index-row${module.featured ? ' featured' : ''}`);
    row.type = 'button';
    row.addEventListener('click', () => openModule(module.code));

    row.append(
      createElement('span', 'index-code', `B${module.code}`),
      createElement('span', 'index-title', module.title)
    );
    target.append(row);
  });
}

function renderModules() {
  const target = $('[data-module-list]');
  target.innerHTML = '';

  portfolio.modules.forEach((module) => {
    const card = createElement('article', `module-card${module.featured ? ' featured' : ''}`);

    const top = createElement('div', 'module-topline');
    top.append(
      createElement('span', 'module-number', `BÀI ${module.code}`),
      createElement('span', 'module-focus', module.focus)
    );

    const title = createElement('h3', '', module.title);
    const excerpt = createElement('p', '', module.excerpt);

    const tags = createElement('div', 'module-tags');
    module.tags.forEach((tag) => tags.append(createElement('span', 'module-tag', tag)));

    const actions = createElement('div', 'module-actions');
    const detailButton = createElement('button', 'text-button', 'Xem ghi chú');
    detailButton.type = 'button';
    detailButton.addEventListener('click', () => openModule(module.code));

    const pdfLink = createElement('a', 'text-button', 'Mở PDF');
    pdfLink.href = module.pdf;
    pdfLink.target = '_blank';
    pdfLink.rel = 'noopener';

    actions.append(detailButton, pdfLink);
    card.append(top, title, excerpt, tags, actions);
    target.append(card);
  });
}

function renderOutcomes() {
  const target = $('[data-outcomes]');
  target.innerHTML = '';

  portfolio.outcomes.forEach((outcome) => {
    const card = createElement('article', 'outcome-card');
    card.append(createElement('h3', '', outcome.title), createElement('p', '', outcome.text));
    target.append(card);
  });
}

function openModule(code) {
  const module = portfolio.modules.find((item) => item.code === code);
  if (!module) return;

  modalTitle.textContent = module.title;
  modalMeta.textContent = `BÀI ${module.code} / ${module.sourceFile} / ${module.focus}`;
  modalExcerpt.textContent = module.excerpt;
  modalPdf.href = module.pdf;
  modalFrame.src = module.pdf;

  modalSections.innerHTML = '';
  Object.entries(module.sections).forEach(([heading, text]) => {
    const section = createElement('article', 'note-section');
    section.append(createElement('h3', '', heading), createElement('p', '', text));
    modalSections.append(section);
  });

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  modalFrame.src = '';
  document.body.style.overflow = '';
}

function bindInteractions() {
  $$('[data-close-modal]').forEach((element) => {
    element.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });
}

renderLearningIndex();
renderModules();
renderOutcomes();
bindInteractions();
