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