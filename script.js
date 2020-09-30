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

const textarea =document.querySelector(".textarea");
const copy = document.querySelector('button')
//To show the value in the number input as the slider moves
const updateTopLeft = (input) => {
    tl_text.value = input.target.value;
    topleft.value = input.target.value;
    results.style.borderTopLeftRadius = `${topleft.value}px`
    if(topleft.value > 0){
        textarea.children[0].innerHTML = `border-top-left-radius: ${topleft.value}px;`
    } else {textarea.children[0].innerHTML = ""}
}

const updateTopRight = (input) => {
    tr_text.value = input.target.value;
    topright.value = input.target.value;
    results.style.borderTopRightRadius = `${topright.value}px`
    if(topright.value > 0){
        textarea.children[1].innerHTML = `border-top-right-radius: ${topright.value}px;`
    } else {textarea.children[1].innerHTML = ""}
}

const updateBottomLeft = (input) => {
    bl_text.value = input.target.value;
    bottleft.value = input.target.value;
    results.style.borderBottomLeftRadius = `${bottleft.value}px`
    if(bottleft.value > 0){
        textarea.children[2].innerHTML = `border-bottom-left-radius: ${bottleft.value}px;`
    } else {textarea.children[2].innerHTML = ""}
}

const updateBottomRight = (input) => {
    br_text.value = input.target.value;
    bottright.value = input.target.value;
    results.style.borderBottomRightRadius = `${bottright.value}px`
    if(bottright.value > 0){
        textarea.children[3].innerHTML = `border-bottom-right-radius: ${bottright.value}px;`
    } else {textarea.children[3].innerHTML = ""}
}

const updateAll = (input) => {
    bordrad.value = input.target.value;
    br_all.value = input.target.value;
    results.style.borderRadius = `${bordrad.value}px`;
    updateBottomLeft(input)
    updateBottomRight(input)
    updateTopLeft(input)
    updateTopRight(input)
    //display border-radius as short syntax e.g Border-radius: 5px;
/*    if(topright.value == bordrad.value && topleft.value == bordrad.value && bottright.value == bordrad.value && bottleft.value == bordrad.value){
        textarea.children[4].innerHTML = `<h3> Shorthand syntax:</h3> border-radius: ${bordrad.value}px;`
        if(bordrad.value < 1){textarea.children[4].innerHTML = ""}
    } else{textarea.children[4].innerHTML = ""}*/
}

const copyToClipboard = () => {
    window.getSelection().selectAllChildren(textarea);
    document.execCommand("copy");
    alert('Copied to clipboard!')

}

topleft.addEventListener('input', updateTopLeft)
topright.addEventListener('input', updateTopRight)
bottleft.addEventListener('input', updateBottomLeft)
bottright.addEventListener('input', updateBottomRight)
bordrad.addEventListener('input', updateAll)
copy.addEventListener('click', copyToClipboard)