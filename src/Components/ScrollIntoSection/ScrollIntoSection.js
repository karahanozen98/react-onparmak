const scrollIntoSection = (sectionID) => {
  const section = document.getElementById(sectionID);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
export default scrollIntoSection;
