document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const siteNav = document.getElementById("site-nav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const open = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });

    siteNav.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  const CONTACT_EMAIL = "info@gaiahse.com";

  function showFormStatus(message, type) {
    if (!formStatus) return;
    formStatus.hidden = false;
    formStatus.textContent = message;
    formStatus.className = `form-status form-status--${type}`;
    formStatus.focus({ preventScroll: true });
  }

  function buildMailtoBody(data) {
    const lines = [
      `Nome: ${data.name}`,
      `Email: ${data.email}`,
      data.company ? `Azienda: ${data.company}` : null,
      data.role ? `Ruolo: ${data.role}` : null,
      "",
      data.message,
    ].filter(Boolean);
    return lines.join("\n");
  }

  if (form) {
    const contactEmail =
      form.dataset.contactEmail?.trim() || CONTACT_EMAIL;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const privacy = form.querySelector('input[name="privacy"]');
      if (privacy && !privacy.checked) {
        showFormStatus("Accetta l'informativa privacy per inviare la richiesta.", "error");
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      const data = {
        name: form.name?.value?.trim() || "",
        email: form.email?.value?.trim() || "",
        company: form.company?.value?.trim() || "",
        role: form.role?.selectedOptions?.[0]?.text?.trim() || "",
        message: form.message?.value?.trim() || "",
      };

      const formspreeId = form.dataset.formspreeId?.trim();

      try {
        if (formspreeId) {
          const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: data.name,
              email: data.email,
              company: data.company,
              role: data.role,
              message: data.message,
              _subject: "Richiesta demo — Gaia HSE",
            }),
          });

          if (!res.ok) {
            throw new Error("Invio non riuscito");
          }

          form.reset();
          showFormStatus(
            "Richiesta inviata. Ti ricontatteremo entro 1–2 giorni lavorativi all'indirizzo indicato.",
            "success"
          );
        } else {
          const subject = encodeURIComponent("Richiesta demo Gaia HSE");
          const body = encodeURIComponent(buildMailtoBody(data));
          window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
          showFormStatus(
            "Si aprirà il client email con il messaggio precompilato. Invialo per completare la richiesta demo.",
            "success"
          );
        }
      } catch {
        showFormStatus(
          "Non siamo riusciti a inviare il modulo. Scrivi a " + contactEmail + " o riprova tra poco.",
          "error"
        );
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!prefersReducedMotion) {
    document.querySelectorAll(".section .container").forEach((el) => {
      el.classList.add("reveal-on-scroll");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));
  }
});
