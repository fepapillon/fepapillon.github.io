
$(".overlay-content").append(`<div class="dropdown">
<a class="btn btn-secondary dropdown-toggle btn-sm" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="font-size: 13px;">
  Istoric
</a>
<ul class="dropdown-menu">
  <li><a class="history-select" data-lang="cur">Curent</a></li>
  <li><a class="history-select" data-lang="xmas">Craciun</a></li>
  <li><a class="history-select" data-lang="feb">Februarie</a></li>
</ul>
</div>`)



$(".lang-select").on("mouseover",(e) => {
    console.log($(e.target).attr("data-lang"));
    switch ($(e.target).attr("data-lang")) {
      case "it":
        $(e.target).attr("href","https://fepapillon-github-io.translate.goog/index.html?_x_tr_sl=ro&_x_tr_tl=it&_x_tr_hl=en-US&_x_tr_pto=wapp")
        break;

      case "es":
        $(e.target).attr("href","https://fepapillon-github-io.translate.goog/index.html?_x_tr_sl=ro&_x_tr_tl=es&_x_tr_hl=en-US&_x_tr_pto=wapp")
        break;

      case "ro":
      $(e.target).attr("href","https://fepapillon.github.io")
        break;

      case "en":
      $(e.target).attr("href","https://fepapillon-github-io.translate.goog/index.html?_x_tr_sl=ro&_x_tr_tl=en&_x_tr_hl=en-US&_x_tr_pto=wapp")
        break;

      case "jp":
      $(e.target).attr("href","https://fepapillon-github-io.translate.goog/?_x_tr_sl=ro&_x_tr_tl=ja&_x_tr_hl=en-US&_x_tr_pto=wapp")
        break;

      case "de":
      $(e.target).attr("href","https://fepapillon-github-io.translate.goog/?_x_tr_sl=ro&_x_tr_tl=de&_x_tr_hl=en-US&_x_tr_pto=wapp")
        break;

      default:
        break
    }
  })

  $(".history-select").on("mouseover",(e) => {
    console.log($(e.target).attr("data-lang"));
    switch ($(e.target).attr("data-lang")) {
      case "xmas":
        $(e.target).attr("href","/backup/craciun/index.html")
        break;

      case "feb":
        $(e.target).attr("href","/backup/februarie/index.html")
        break;
      case "cur":
        $(e.target).attr("href","../../index.html")
        break;
    }
  })