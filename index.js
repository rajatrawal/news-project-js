let newsAccordian = document.getElementById("newsAccordion");
//Xhr Request
const xhr = new XMLHttpRequest();
xhr.open("GET", "api.txt", true);
xhr.onload = function () {


  if (this.status === 200) {
    let newsHtml = ""
    let num = 0;
    let newes = "";
    let jason = JSON.parse(this.responseText);
    let articles = jason.articles;
    articles.forEach(element => {
      if (element["content"] != null) {
        newes = `
      <div>
          <Strong>${element["title"]}</Strong>
      </div>
      <div>
          ${element["description"]}
      </div>
      <div>
          ${element["content"]}
      </div>
      <hr>
    `
      }

      newsHtml += newes
      num += 1
    });



    newsAccordian.innerHTML = newsHtml;


  }
  else {

  }
}
xhr.send()
