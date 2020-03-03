
$(".eatButton").on("click",function(){
    let id = $(this).data("id");
    console.log(id);

    $.ajax(`/api/burgers/${id}`,{
        type:"PUT",
        data:id
    }).then(response=>{
        console.log("ate the burger");
        location.reload();
    })
});


$(".create-form").on("submit",function(event){

    event.preventDefault();
    const name = $("#burger").val().trim();
    console.log(name);
    $.ajax(`/api/burgers/${name}`,{
        type:"POST"
    }).then(response=>{
        location.reload();
    });



});