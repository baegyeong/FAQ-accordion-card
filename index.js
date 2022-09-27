const faqList = [
  {
    title: "How many team members can I invite?",
    contents:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    title: "What is the maximum file upload size?",
    contents:
      " No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    title: "How do I reset my password?",
    contents: `Click "Forgot password" from the login page or "Change password" from your profile page. A reset link will be emailed to you.`,
  },
  {
    title: "Can I cancel my subscription?",
    contents:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    title: "Do you provide additional support?",
    contents:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];
const faqContainer = document.querySelector(".faq-container");

faqList.forEach((faq, index) => {
  const faqElement = document.createElement("div");
  const headerElement = document.createElement("div");
  const titleElement = document.createElement("span");
  const arrowImg = document.createElement("img");
  const contentElement = document.createElement("div");

  faqElement.className = "faq-element";
  headerElement.className = "header-element";
  titleElement.className = "title-element";
  arrowImg.className = "arrow-img";
  contentElement.className = "content-element";
  contentElement.id = `content-${index}`;

  titleElement.innerText = faq.title;
  arrowImg.src = "./images/icon-arrow-down.svg";
  contentElement.innerText = faq.contents;

  contentElement.style.display = "none";
  headerElement.addEventListener("click", (e) => {
    const headerDOM = e.target.parentNode;
    const contentDOM = headerDOM.nextSibling;
    const imgDOM = headerDOM.querySelector(".arrow-img");
    const titleDOM = headerDOM.querySelector(".title-element");

    if (contentDOM.style.display == "none") {
      // 나머지를 다 none으로 한다.
      const contents = document.querySelectorAll(".content-element");
      const imgs = document.querySelectorAll(".arrow-img");
      const titles = document.querySelectorAll(".title-element");
      for (const content of contents) {
        content.style.display = "none";
      }
      for (const img of imgs) {
        img.classList.remove("rotate");
      }
      for (const title of titles) {
        title.style.fontWeight = "400";
      }
      titleDOM.style.fontWeight = "700";
      contentDOM.style.display = "block";
      imgDOM.classList.add("rotate");
    } else {
      titleDOM.style.fontWeight = "400";
      contentDOM.style.display = "none";
      imgDOM.classList.remove("rotate");
    }
  });

  headerElement.appendChild(titleElement);
  headerElement.appendChild(arrowImg);

  faqElement.appendChild(headerElement);
  faqElement.appendChild(contentElement);

  faqContainer.appendChild(faqElement);
});
