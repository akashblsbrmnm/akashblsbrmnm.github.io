(() => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const STORAGE_KEY = "portfolio_contact_count";
  const MAX_MESSAGES = 2;
  const MAX_MESSAGE_LENGTH = 2500;
  const MAX_NAME_LENGTH = 100;
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const statusEl = document.getElementById("contact-status");
  const limitEl = document.getElementById("contact-limit");
  const countEl = document.getElementById("contact-message-count");
  const submitBtn = form.querySelector('[type="submit"]');
  const submitText = form.querySelector(".contact__submit-text");
  const messageField = form.querySelector('[name="message"]');
  const nameField = form.querySelector('[name="name"]');
  const emailField = form.querySelector('[name="email"]');

  const getCount = () => {
    const value = parseInt(sessionStorage.getItem(STORAGE_KEY) || "0", 10);
    return Number.isFinite(value) ? value : 0;
  };

  const remaining = () => MAX_MESSAGES - getCount();

  const setStatus = (text, type = "") => {
    if (!statusEl) return;
    statusEl.textContent = text;
    statusEl.classList.remove("is-success", "is-error");
    if (type) statusEl.classList.add(`is-${type}`);
  };

  const disableForm = () => {
    form.classList.add("is-disabled");
    form.querySelectorAll("input, textarea, button").forEach((el) => {
      el.disabled = true;
    });
  };

  const updateLimitUI = () => {
    const left = remaining();
    if (limitEl) {
      if (left <= 0) {
        limitEl.textContent = "No messages remaining this session.";
      } else {
        limitEl.textContent = `${left} message${left === 1 ? "" : "s"} remaining this session.`;
      }
    }
    if (left <= 0) {
      disableForm();
      setStatus("You've reached the message limit for this session.", "error");
    }
  };

  const validateEmail = (email) => EMAIL_RE.test(email);

  const fieldErrorEl = (field) => document.getElementById(`contact-${field.name}-error`);

  const fieldErrorMessage = (field) => {
    const value = field.value.trim();
    if (!value) return "";
    if (field === nameField) return "Use 100 characters or fewer.";
    if (field === emailField) return "Enter an email like name@company.com.";
    if (field === messageField) return "Use 2,500 characters or fewer.";
    return "Check this field.";
  };

  const clearFieldError = (field) => {
    field.classList.remove("is-invalid");
    field.removeAttribute("aria-invalid");
    const errorEl = fieldErrorEl(field);
    if (errorEl) errorEl.textContent = "";
  };

  const setFieldError = (field) => {
    const message = fieldErrorMessage(field);
    if (!message) {
      clearFieldError(field);
      return;
    }
    field.classList.add("is-invalid");
    field.setAttribute("aria-invalid", "true");
    const errorEl = fieldErrorEl(field);
    if (errorEl) errorEl.textContent = message;
  };

  const validateName = (value) => {
    const name = value.trim();
    return name.length > 0 && name.length <= MAX_NAME_LENGTH;
  };

  const validateEmailField = (value) => {
    const email = value.trim();
    return email.length > 0 && validateEmail(email);
  };

  const validateMessageField = (value) => {
    const message = value.trim();
    return message.length > 0 && message.length <= MAX_MESSAGE_LENGTH;
  };

  const validateField = (field) => {
    if (field === nameField) return validateName(field.value);
    if (field === emailField) return validateEmailField(field.value);
    if (field === messageField) return validateMessageField(field.value);
    return true;
  };

  const touchField = (field) => {
    if (validateField(field)) {
      clearFieldError(field);
      return true;
    }
    setFieldError(field);
    return false;
  };

  [nameField, emailField, messageField].forEach((field) => {
    field.addEventListener("blur", () => {
      touchField(field);
    });

    field.addEventListener("input", () => {
      if (field.classList.contains("is-invalid")) {
        touchField(field);
      }
    });
  });

  const updateMessageCount = () => {
    if (!countEl || !messageField) return;
    const left = MAX_MESSAGE_LENGTH - messageField.value.length;
    countEl.textContent = `${left.toLocaleString()} characters remaining`;
  };

  messageField?.addEventListener("input", updateMessageCount);
  updateMessageCount();
  updateLimitUI();

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    setStatus("");

    if (remaining() <= 0) {
      updateLimitUI();
      return;
    }

    const nameValid = touchField(nameField);
    const emailValid = touchField(emailField);
    const messageValid = touchField(messageField);

    if (!nameValid) {
      nameField.focus();
      return;
    }

    if (!emailValid) {
      emailField.focus();
      return;
    }

    if (!messageValid) {
      messageField.focus();
      return;
    }

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const message = messageField.value.trim();

    submitBtn.disabled = true;
    if (submitText) submitText.textContent = "Sending…";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: form.dataset.accessKey,
          subject: form.dataset.subject,
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        sessionStorage.setItem(STORAGE_KEY, String(getCount() + 1));
        form.reset();
        [nameField, emailField, messageField].forEach(clearFieldError);
        updateMessageCount();
        setStatus("Message sent. Thanks for reaching out!", "success");

        if (remaining() <= 0) {
          updateLimitUI();
        } else {
          submitBtn.disabled = false;
          if (submitText) submitText.textContent = "Submit";
          updateLimitUI();
        }
        return;
      }

      setStatus(data.message || "Something went wrong. Please try again.", "error");
    } catch {
      setStatus("Unable to send right now. Please try again.", "error");
    }

    if (remaining() > 0) {
      submitBtn.disabled = false;
      if (submitText) submitText.textContent = "Submit";
    }
  });
})();
