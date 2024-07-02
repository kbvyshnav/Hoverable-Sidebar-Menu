// Selecting the sidebar and buttons
const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");
const sidebarLockBtn = document.querySelector("#lock-icon");

// Toggle the lock state of the sidebar
const toggleLock = () => {
  sidebar.classList.toggle("locked");
  const isLocked = sidebar.classList.contains("locked");
  sidebar.classList.toggle("hoverable", !isLocked);
  sidebarLockBtn.classList.replace(
    isLocked ? "bx-lock-open-alt" : "bx-lock-alt",
    isLocked ? "bx-lock-alt" : "bx-lock-open-alt"
  );
};

// Hide the sidebar when the mouse leaves (if hoverable)
const hideSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
};

// Show the sidebar when the mouse enters (if hoverable)
const showSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
};

// Toggle the sidebar visibility
const toggleSidebar = () => {
  sidebar.classList.toggle("close");
};

// Ensure the sidebar is closed and not hoverable on small screens
const handleResize = () => {
  if (window.innerWidth < 800) {
    sidebar.classList.add("close");
    sidebar.classList.remove("locked", "hoverable");
  }
};

// Add event listeners
sidebarLockBtn.addEventListener("click", toggleLock);
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);
sidebarOpenBtn.addEventListener("click", toggleSidebar);
sidebarCloseBtn.addEventListener("click", toggleSidebar);
window.addEventListener("resize", handleResize);

// Initial call to handle screen size
handleResize();
