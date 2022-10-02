const faqList = [
  {
    title: "How many team members can I invite?",
    content:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    title: "What is the maximum file upload size?",
    content:
      " No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    title: "How do I reset my password?",
    content: `Click "Forgot password" from the login page or "Change password" from your profile page. A reset link will be emailed to you.`,
  },
  {
    title: "Can I cancel my subscription?",
    content:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    title: "Do you provide additional support?",
    content:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

const isNotSelect = (faqContent) => {
  return faqContent.style.display === "none";
};

const initFaqStatus = () => {
  const contents = document.querySelectorAll(".faq-content");
  const imgs = document.querySelectorAll(".accordion-btn-img");
  const titles = document.querySelectorAll(".faq-title");

  for (const content of contents) {
    content.style.display = "none";
  }
  for (const img of imgs) {
    img.classList.remove("rotate");
  }
  for (const title of titles) {
    title.style.fontWeight = "400";
  }
};

const displayFaqContent = (title, content, img) => {
  title.style.fontWeight = "700";
  content.style.display = "block";
  img.classList.add("rotate");
};

const hideFaqContent = (title, content, img) => {
  title.style.fontWeight = "400";
  content.style.display = "none";
  img.classList.remove("rotate");
};

const clickEventHandler = (e) => {
  const faqHeader = e.target.parentNode;
  const faqContent = faqHeader.nextSibling;
  const accordionBtnImg = faqHeader.querySelector(".accordion-btn-img");
  const faqTitle = faqHeader.querySelector(".faq-title");

  if (isNotSelect(faqContent)) {
    initFaqStatus();
    displayFaqContent(faqTitle, faqContent, accordionBtnImg);
  } else {
    hideFaqContent(faqTitle, faqContent, accordionBtnImg);
  }
};

const faqContainer = document.querySelector(".faq-container");

faqList.forEach((faq, index) => {
  const faqElement = document.createElement("div");
  const faqHeader = document.createElement("div");
  const faqTitle = document.createElement("span");
  const accordionBtnImg = document.createElement("img");
  const faqContent = document.createElement("div");

  faqElement.className = "faq-element";
  faqHeader.className = "faq-header";
  faqTitle.className = "faq-title";
  accordionBtnImg.className = "accordion-btn-img";
  faqContent.className = "faq-content";

  faqTitle.innerText = faq.title;
  accordionBtnImg.src = "./images/icon-arrow-down.svg";
  faqContent.innerText = faq.content;

  faqContent.style.display = "none";
  faqHeader.addEventListener("click", clickEventHandler);

  faqHeader.appendChild(faqTitle);
  faqHeader.appendChild(accordionBtnImg);

  faqElement.appendChild(faqHeader);
  faqElement.appendChild(faqContent);

  faqContainer.appendChild(faqElement);
});
