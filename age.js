function calculateAge() {
  const input = prompt(
    "Please enter your date of birth in the format YYYY-MM-DD"
  );
  console.log(`\nyou have entered ${input}`);
  let dateOfBirth2 = Date.parse(input);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;

  let today2 = Date.parse(today);

  console.log(`\ntoday's date is ${today} and your DOB is ${input}`);

  const ms = today2 - dateOfBirth2;

  const date = new Date(ms);

  console.log(`\nyou are ${Math.abs(date.getUTCFullYear() - 1970)} years old`);
  return Math.abs(date.getUTCFullYear() - 1970);
}

calculateAge();
