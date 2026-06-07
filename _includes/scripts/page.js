(function () {
  function initMonthlyProblemPreviews() {
    var previews = document.querySelectorAll('.monthly-problem-preview');
    if (!previews.length) {
      return;
    }

    var activePreview = null;
    var pinnedPreview = null;
    var hideTimer;
    var popup = document.createElement('div');
    var popupHeader = document.createElement('div');
    var popupTitle = document.createElement('span');
    var closeButton = document.createElement('button');
    var popupBody = document.createElement('div');
    popup.className = 'monthly-problem-preview-popup';
    popupHeader.className = 'monthly-problem-preview-popup__header';
    popupTitle.className = 'monthly-problem-preview__title';
    closeButton.className = 'monthly-problem-preview-popup__close';
    closeButton.type = 'button';
    closeButton.setAttribute('aria-label', 'Close thumbnails');
    closeButton.textContent = '×';
    popupBody.className = 'monthly-problem-preview-popup__body';
    popupHeader.appendChild(popupTitle);
    popupHeader.appendChild(closeButton);
    popup.appendChild(popupHeader);
    popup.appendChild(popupBody);
    document.body.appendChild(popup);

    function positionPopup(preview) {
      var previewRect = preview.getBoundingClientRect();
      var table = preview.closest('table');
      var tableRect = table ? table.getBoundingClientRect() : previewRect;
      var tableContentRect = previewRect;
      var gap = 12;
      var popupWidth = popup.offsetWidth || 608;
      var popupHeight = popup.offsetHeight || Math.min(window.innerHeight * 0.78, 520);
      if (table) {
        Array.prototype.forEach.call(table.querySelectorAll('th, td'), function (cell) {
          var cellRect = cell.getBoundingClientRect();
          tableContentRect = {
            left: Math.min(tableContentRect.left, cellRect.left),
            right: Math.max(tableContentRect.right, cellRect.right)
          };
        });
      }

      var left = tableContentRect.right + gap;
      if (left + popupWidth > window.innerWidth - gap) {
        left = tableContentRect.left - popupWidth - gap;
      }

      if (window.innerWidth <= 640 || left < gap) {
        popup.style.position = 'absolute';
        popup.style.left = Math.max(gap, tableContentRect.left + window.pageXOffset) + 'px';
        popup.style.top = (tableRect.bottom + window.pageYOffset + gap) + 'px';
        return;
      }

      popup.style.position = 'fixed';
      var top = previewRect.top + (previewRect.height / 2) - (popupHeight / 2);
      top = Math.max(gap, Math.min(top, window.innerHeight - popupHeight - gap));
      popup.style.left = left + 'px';
      popup.style.top = top + 'px';
    }

    function hide() {
      activePreview = null;
      pinnedPreview = null;
      window.clearTimeout(hideTimer);
      popup.classList.remove('is-open');
      popupBody.innerHTML = '';
    }

    function show(preview) {
      var panel = preview.querySelector('.monthly-problem-preview__panel');
      if (!panel) {
        return;
      }

      activePreview = preview;
      var titleEl = panel.querySelector('.monthly-problem-preview__title');
      var imagesEl = panel.querySelector('.monthly-problem-preview__images');
      popupTitle.innerHTML = titleEl ? titleEl.innerHTML : '';
      popupBody.innerHTML = imagesEl ? imagesEl.outerHTML : '';
      popup.classList.add('is-open');
      positionPopup(preview);
    }

    function scheduleHoverHide() {
      if (pinnedPreview) {
        return;
      }
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(function () {
        if (!pinnedPreview) {
          activePreview = null;
          popup.classList.remove('is-open');
          popupBody.innerHTML = '';
        }
      }, 350);
    }

    var isTouching = false;
    var touchEndTimer;
    document.addEventListener('touchstart', function () {
      isTouching = true;
      clearTimeout(touchEndTimer);
    }, { passive: true });
    document.addEventListener('touchend', function () {
      clearTimeout(touchEndTimer);
      touchEndTimer = setTimeout(function () { isTouching = false; }, 500);
    }, { passive: true });

    Array.prototype.forEach.call(previews, function (preview) {
      var panel = preview.querySelector('.monthly-problem-preview__panel');
      var monthLink = preview.querySelector('a');
      if (!panel) {
        return;
      }

      preview.addEventListener('mouseenter', function () {
        if (isTouching || pinnedPreview) return;
        window.clearTimeout(hideTimer);
        show(preview);
      });
      preview.addEventListener('mouseleave', scheduleHoverHide);
      preview.addEventListener('focusin', function () {
        if (isTouching || pinnedPreview) return;
        window.clearTimeout(hideTimer);
        show(preview);
      });
      preview.addEventListener('focusout', scheduleHoverHide);
      monthLink.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        window.clearTimeout(hideTimer);
        pinnedPreview = preview;
        show(preview);
      });
    });

    popup.addEventListener('mouseenter', function () {
      if (!pinnedPreview) {
        window.clearTimeout(hideTimer);
      }
    });
    popup.addEventListener('mouseleave', scheduleHoverHide);
    popup.addEventListener('click', function (event) {
      event.stopPropagation();
    });
    closeButton.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      hide();
    });
    document.addEventListener('click', hide);
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        hide();
      }
    });
    window.addEventListener('scroll', function () {
      if (activePreview && popup.classList.contains('is-open')) {
        positionPopup(activePreview);
      }
    });
    window.addEventListener('resize', function () {
      if (activePreview && popup.classList.contains('is-open')) {
        positionPopup(activePreview);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMonthlyProblemPreviews);
  } else {
    initMonthlyProblemPreviews();
  }
})();
