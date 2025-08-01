let start_btn = document.querySelector(".start_btn");
let i = 1;
let result = 0;

start_btn.addEventListener("click", function () {
  start_btn.style.display = "none";
  showQuestion();
});

function showQuestion() {
  let number_1 = Math.floor(Math.random() * 10) + 1;
  let number_2 = Math.floor(Math.random() * 10) + 1;
  let multiplication = document.querySelector(".multiplication");
  document.querySelector("h3").className = "title";

  multiplication.innerHTML = `
    <p class="text-center text-success">${i}.soru</p>
    <p class="fs-5 text-capitalize">
      What is <span class="text-danger">${number_1}</span> multiplied by 
      <span class="text-danger">${number_2}</span>?
    </p>
    <form action="" class="sub_form">
      <input type="number" class="form-control cevap " placeholder="" />
      <button type="submit" class="btn btn-success form_button mt-4">Submit</button>
    </form>
  `;

  let cevap = document.querySelector(".cevap");
  let sub_form = document.querySelector(".sub_form");
  cevap.focus();
  sub_form.addEventListener("submit", handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();
    let answer = parseInt(cevap.value);

    if (isNaN(answer)) {
      alert("Please enter a number");
    } else {
      console.log(number_1);
      show_result(number_1, number_2, answer);
      i++;
      console.log(i + "iiiiiiii");

      if (i <= 10) {
        showQuestion();
        sub_form.removeEventListener("submit", handleSubmit);
      } else {
        alert("Test completed! Your result: " + result);
        if (confirm("Test completed! Click OK to restart.")) {
          window.location.href = "./index.html";
        } else {
          document.querySelector(".title").textContent = "Good Luck";
          multiplication.remove();
        }
      }
    }
  }
}

let show_result = (num1, num2, answer) => {
  if (num1 * num2 == answer) {
    result++;
    console.log(num1 + " * " + num2 + " = " + answer);
  }
  console.log("sonuç = " + result);
};
