
$(".eatButton").on("click",function(){
    let id = $(this).data("id");
    console.log(id);

    $.ajax({
        url:`/api/burgers`,
        type:"PUT",
        body:{id:id}
    }).then(response=>{
        console.log("ate the burger");
        location.reload();
    })
});