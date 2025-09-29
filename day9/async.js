async function fetchData() {
    console.log("Fetching data...");
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Data fetched!");
}

fetchData();
