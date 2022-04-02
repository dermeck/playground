function listenForLinkClicks() {
  console.log("listenForClicks");
  document.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();
    const url = e.target.href;
    console.log(url);

    browser.tabs
      .query({ currentWindow: true, active: true })
      .then((activeTab) => {
        console.log(activeTab);
        browser.tabs.update(activeTab.id, {
          url,
        });
      })
      .catch((e) => console.error(e));
  });
}

listenForLinkClicks();
