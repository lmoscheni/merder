function select(id) {
  console.log(id);
  const option = document.getElementById(id);
  setTimeout(() => {
    const container = document.getElementById("container");
    container.style.display = 'none'
    const feedback = document.getElementById("feedback");
    feedback.style.display = "inline-block";
  }, 5000)
  option.classList.add('animate-selection');
}