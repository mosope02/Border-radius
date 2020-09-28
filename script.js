//Some page elements
// All Input of type "Range"
const topleft = document.querySelector("#topleft"); //Range input for Border-top-left-radius
const topright = document.querySelector("#topright");// topright " " ""
const bottleft = document.querySelector("#bottomleft"); // bottomm-left " " " "
const bottright = document.querySelector("#bottomright")// bottom-right 
const bordrad = document.querySelector("#border-radius")

//All Input of Type "Number"
const tl_text = document.querySelector("#tl_text");
const tr_text = document.querySelector("#tr_text");
const bl_text = document.querySelector("#bl_text");
const br_text = document.querySelector("#br_text");
const br_all = document.querySelector("#border-radius_all")

//div to apply the border-radius on
const results = document.querySelector(".results");

//To show the value in the number input as the slider moves
const updateTopLeft = (input) => {
    tl_text.value = input.target.value;
    topleft.value = input.target.value;
    results.style.borderTopLeftRadius = `${topleft.value}px`
}

const updateTopRight = (input) => {
    tr_text.value = input.target.value;
    topright.value = input.target.value;
    results.style.borderTopRightRadius = `${topright.value}px`
}

const updateBottomLeft = (input) => {
    bl_text.value = input.target.value;
    bottleft.value = input.target.value;
    results.style.borderBottomLeftRadius = `${bottleft.value}px`
}

const updateBottomRight = (input) => {
    br_text.value = input.target.value;
    bottright.value = input.target.value;
    results.style.borderBottomRightRadius = `${bottright.value}px`
}

const updateAll = (input) => {
    bordrad.value = input.target.value;
    br_all.value = input.target.value;
    results.style.borderRadius = `${bordrad.value}px`;
    updateBottomLeft(input)
    updateBottomRight(input)
    updateTopLeft(input)
    updateTopRight(input)
}

topleft.addEventListener('input', updateTopLeft)
topright.addEventListener('input', updateTopRight)
bottleft.addEventListener('input', updateBottomLeft)
bottright.addEventListener('input', updateBottomRight)
bordrad.addEventListener('input', updateAll)
