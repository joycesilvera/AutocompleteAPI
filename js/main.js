const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

//search addresses.json and filter it
//since it returns a promise so use async
const searchAddresses = async (searchText) => {
  const res = await fetch("../addresses.json");
  const addresses = await res.json();

  //get matches to current inout
  let matches = addresses.filter((address) => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return (
      address.line1.match(regex) ||
      address.city.match(regex) ||
      address.state.match(regex) ||
      address.zip.match(regex)
    );
  });

  if (searchText.length === 0) {
    matches = [];
    matchList.innerHTML = "";
  }
  console.log(matches);

  printHtml(matches);
};

const printHtml = (matches) => {
  if (matches.length > 0) {
    const html = matches
      .map(
        (match) => `
        <div class="card card-body mb-1">
            <h4> <span>${match.line1} ${match.city} ${match.state} ${match.zip}</span>
            </h4>
        </div>
        `
      )
      .join("");

    matchList.innerHTML = html;
  }
};
search.addEventListener("input", () => searchAddresses(search.value));
