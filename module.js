// Portfolio Module Js   

let list = document.querySelectorAll(".hubxpert_filtered_portfolio_list");
      let itemBox = document.querySelectorAll(".hubxpert_filtered_portfolio_itembox");

      for (let i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function () {
          for (let j = 0; j < list.length; j++) {
            list[j].classList.remove("hubxpert_filtered_portfolio_active");
          }
          this.classList.add("hubxpert_filtered_portfolio_active");

          let dataFilter = this.getAttribute("data-filter");

          for (let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.remove("hubxpert_filtered_portfolio_active");
            itemBox[k].classList.add("hubxpert_filtered_portfolio_hide");

            if (
              itemBox[k].getAttribute("data-item") == dataFilter ||
                dataFilter == "All"
            ) {
              itemBox[k].classList.remove("hubxpert_filtered_portfolio_hide");
              itemBox[k].classList.add("hubxpert_filtered_portfolio_active");
            }
          }
        });
      }