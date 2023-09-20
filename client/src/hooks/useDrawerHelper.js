export default function useDrawerHelper() {
  const openDrawer = () => {
    const drawer = document.getElementById("drawer");
    drawer.classList.remove("hidden");
    drawer.classList.add("block");
  };

  const closeDrawer = () => {
    const drawer = document.getElementById("drawer");
    drawer.classList.remove("block");
    drawer.classList.add("hidden");
  };

  // Close the drawer if anywhere outside the drawer is clicked
  window.addEventListener("click", (event) => {
    if (event.target.id == "drawer") {
      event.target.classList.add("hidden");
    }

    // This function closes the drawer when its navigation link is clicked
    document.querySelectorAll("#drawer a").forEach((element) => {
      element.addEventListener("click", () => {
        closeDrawer();
      });
    });
  });

  return { openDrawer, closeDrawer };
}
