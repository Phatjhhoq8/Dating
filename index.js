var dateDating,timeDating;
var listFood= [];
var listDessert=[];
var listActivity=[];
var main = document.querySelector(".container");
main.innerHTML = `<div id="valentineQuestion"><b>Em đi chơi với anh nhé?</b></div>
    <div class="button-container" id="buttonContainer">
      <button class="answerButton" id="yesButton" onclick='ready()'>
        Ok nè
      </button>
      <button class="answerButton" id="noButton">Hong chịu</button>
    </div>
    <br />
    <img src="hangout_no_bg.gif" alt="cat asking question" class="responsive" />`;
let cnt=0;
document
.getElementById("noButton")
.addEventListener("click", function () {
    cnt++;
    var container = document.getElementById("buttonContainer");
    var yesButton = document.getElementById("yesButton");
    var noButton = document.getElementById("noButton");
    container.innerHTML = '';
    if(cnt==3) {
    container.appendChild(yesButton.cloneNode(true));
    container.appendChild(yesButton.cloneNode(true));
    }
    else if(cnt&1) {
    container.appendChild(noButton);
    container.appendChild(yesButton);
    }else {
    container.appendChild(yesButton);
    container.appendChild(noButton);
    } 
});
function ready() {
  main.innerHTML = `<div class="center-container">
  <button class="button talk" onclick="setDay()">Cùng nhau lên lịch nè!!</button>
  <br/>
  <img id="rizz" src="valentine_transparent.gif" width="500" alt="rizzler god" class="responsive" />
</div>`;
}
function setDay() {
    main.innerHTML = `<h1 title="choose a date">Em rảnh vào hôm nào ...</h1>
      <h2>Em chọn 1 ngày nhé ^^</h2>
      <div>
        <input type="date" />
        <input type="time" />
        <button class="button" onclick='choseFood()'>
          Tiếp
        </button>
      </div>`;
}
function choseFood() {
    dateDating=document.querySelector('input[type="date"]').value;
    timeDating=document.querySelector('input[type="time"]').value;
    const dating = new Date(`${dateDating}T${timeDating}`);
    const now = new Date();
    if(dateDating==''&&timeDating=='') {
        alert("Em chưa chọn ngày và giờ kìa!!!");
    }else if(dateDating=='') {
        alert("Em chưa chọn ngày kìa!!!");
    }else if(timeDating=='') {
        alert("Em chưa chọn giờ kìa!!!");
    }else if(dating.getTime()<now.getTime()) {
        alert("Chọn ngày/giờ không hợp lệ rùiii!!!");
    }else {
        main.innerHTML=`<div id="foodquestion">
        <b>Em muốn ăn món gì?</b>
      </div>
      <div class="food-selection">
        <div class="food-item">
          <label><img src="food/an_vat.jpeq" alt="Ăn vặt" />
          <label
            ><input
              type="checkbox"
              name="food"
              value="an_vat"
            />
            Ăn vặt</label
          ></label>
        </div>
        <div class="food-item">
          <label><img src="food/mi_cay.jpeq" alt="Mì cay" />
          <label
            ><input type="checkbox" name="food" value="mi_cay" /> Mì cay</label
          ></label>
        </div>
        <div class="food-item">
          <label><img src="food/bun_dau.jpeg" alt="Bún đậu" />
          <label
            ><input type="checkbox" name="food" value="bun_dau" /> Bún đậu</label
          ></label>
        </div>
        <div class="food-item">
          <label><img src="food/pizza.jpeg" alt="pizza" />
          <label><input type="checkbox" name="food" value="pizza" /> Pizza</label></label>
        </div>
        <div class="food-item">
          <label><img src="food/mi_tron.jpeg" alt="Mì trộn" />
          <label><input type="checkbox" name="food" value="mi_tron" /> Mì trộn</label></label>
        </div>
        <div class="food-item">
          <label><img src="food/y_em.jpg" alt="other" />
          <label><input type="checkbox" name="food" value="other" />Món khác: <input type="text"></label></label>
        </div>
      </div>
      <button class="button" onclick='choseDessert()'>
        Tiếp
      </button>`;
    }
}
function choseDessert() {
    document.querySelectorAll('input[name="food"]:checked').forEach(input => {
        if (input.value === "other") {
          const otherTextInput = input.closest('label').querySelector('input[type="text"]');
          if (otherTextInput && otherTextInput.value.trim() !== "") {
            listFood.push(otherTextInput.value.trim());
          }
        } else {
          listFood.push(input.value);
        }
      });   
    main.innerHTML=`<div id="dessertquestion">Em muốn ăn món tráng miệng nào?</div>

    <div class="dessert-selection">
      <div class="dessert-item">
        <label><img src="food/boba.jpeg" alt="boba" />
        <label
          ><input type="checkbox" name="dessert" value="boba" /> Trà sữa</label
        ></label>
      </div>
      <div class="dessert-item">
        <label><img src="food/che.jpeg" alt="che" />
        <label><input type="checkbox" name="dessert" value="che" /> Chè</label></label>
      </div>
      <div class="dessert-item">
        <label><img src="food/randombun.jpeg" alt="Bánh ngọt" />
        <label
          ><input type="checkbox" name="dessert" value="banh_ngot" /> Bánh ngọt</label
        ></label>
      </div>
      <div class="dessert-item">
        <label><img src="food/taiyaki.jpeg" alt="Kem" />
        <label
          ><input type="checkbox" name="dessert" value="kem" />
          Kem</label
        ></label>
      </div>
      <div class="dessert-item">
        <label><img src="food/y_em.jpg" alt="Món khác" />
        <label
          ><input type="checkbox" name="dessert" value="other" />
          Món khác: <input type="text"></label
        ></label>
      </div>
    </div>
    <button class="button" onclick='choseActivity()'>
      Tiếp
    </button>`;
}
function choseActivity() {
    document.querySelectorAll('input[name="dessert"]:checked').forEach(input => {
        if (input.value === "other") {
          const otherTextInput = input.closest('label').querySelector('input[type="text"]');
          if (otherTextInput && otherTextInput.value.trim() !== "") {
            listDessert.push(otherTextInput.value.trim());
          }
        } else {
            listDessert.push(input.value);
        }
      });   
    main.innerHTML=`<div id="activityquestion"><b>Em muốn làm gì sau đó?</b></div>
    <div class="activities-selection">
      <div class="activity-item">
        <label><img src="activities/arcade.jpeg" alt="khu vui choi" />
        <label
          ><input
            type="checkbox"
            name="activities"
            value="play_game"
          />Khu vui chơi</label
        ></label>
      </div>
      <div class="activity-item">
        <label><img src="activities/cinema.jpeg" alt="Xem phim" />
        <label
          ><input
            type="checkbox"
            name="activities"
            value="xem_phim"
          />Xem phim</label
        ></label>
      </div>
      <div class="activity-item">
        <label><img src="activities/keramika.jpeg" alt="Tô tượng" />
        <label
          ><input
            type="checkbox"
            name="activities"
            value="to_tuong"
          />Tô tượng</label
        ></label>
      </div>
      <div class="activity-item">
        <label><img src="activities/park.jpeg" alt="park.jpeg" />
        <label
          ><input
            type="checkbox"
            name="activities"
            value="park.jpeg"
          />Đi dạo công viên</label
        ></label>
      </div>
      <div class="activity-item">
        <label><img src="food/y_em.jpg" alt="Ý của em" />
        <label
          ><input
            type="checkbox"
            name="activities"
            value="other"
          />Nơi khác: <input type="text"></label
        ></label>
      </div>
    </div>
    <button class="button" onclick='goLastPage()'>
      Tiếp
    </button>`;
}
function goLastPage() {
    document.querySelectorAll('input[name="activities"]:checked').forEach(input => {
        if (input.value === "other") {
          const otherTextInput = input.closest('label').querySelector('input[type="text"]');
          if (otherTextInput && otherTextInput.value.trim() !== "") {
            listActivity.push(otherTextInput.value.trim());
          }
        } else {
            listActivity.push(input.value);
        }
      });  
    //   const formLink = `https://docs.google.com/forms/d/e/1FAIpQLScrQjDOrEmtZdO4y27HFVPAbEiJDSS8YYK6XAmKtWpQLl0jVQ/viewform?usp=pp_url`
    //     + `&entry.319995756=${encodeURIComponent(dateDating)}`
    //     + `&entry.750882655=${encodeURIComponent(timeDating)}`
    //     + `&entry.172197659=${encodeURIComponent(listFood.join(", "))}` 
    //     + `&entry.1195736025=${encodeURIComponent(listDessert.join(", "))}` 
    //     + `&entry.114906287=${encodeURIComponent(listActivity.join(", "))}`; 

        document.getElementById("dateInput").value = dateDating;
        document.getElementById("timeInput").value = timeDating;
        document.getElementById("foodInput").value = listFood.join(", ");
        document.getElementById("dessertInput").value = listDessert.join(", ");
        document.getElementById("activityInput").value = listActivity.join(", ");
        document.getElementById("googleForm").submit();
    setTimeout(() => {
        location.href = "lastpage.html";
      }, 1000); 
}
